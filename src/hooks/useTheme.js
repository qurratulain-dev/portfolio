import { useCallback, useEffect, useSyncExternalStore } from "react";

export const THEME_STORAGE_KEY = "portfolio-theme";
export const DARK = "dark";
export const LIGHT = "light";
export const DEFAULT_THEME = DARK;

const isTheme = (value) => value === DARK || value === LIGHT;

const getStorage = () => {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
};

const readStoredTheme = () => {
  const storage = getStorage();
  if (!storage) return null;
  try {
    const stored = storage.getItem(THEME_STORAGE_KEY);
    return isTheme(stored) ? stored : null;
  } catch {
    return null;
  }
};

const writeStoredTheme = (theme) => {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* storage unavailable — the theme still applies, it just won't persist */
  }
};

const getSystemTheme = () => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return DEFAULT_THEME;
  }
  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? DARK : LIGHT;
  } catch {
    return DEFAULT_THEME;
  }
};

const getDocumentTheme = () => {
  if (typeof document === "undefined") return null;
  const attribute = document.documentElement?.getAttribute("data-theme");
  return isTheme(attribute) ? attribute : null;
};

/* The inline bootstrap in index.html has normally already resolved and stamped
   the theme onto <html> before React mounts, so reading the attribute keeps the
   first client render in lockstep with the DOM instead of re-deciding and
   re-painting. The fallbacks only matter for SSR/prerendered output. */
const resolveTheme = () => readStoredTheme() ?? getDocumentTheme() ?? getSystemTheme();

const applyTheme = (theme) => {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (!root || root.getAttribute("data-theme") === theme) return;
  root.setAttribute("data-theme", theme);
};

/* A tiny external store so every useTheme() caller shares one source of truth
   and can never drift from what is actually painted on <html>. */
let currentTheme = null;
const listeners = new Set();

let mediaQuery = null;
let mediaRefs = 0;

const notify = () => listeners.forEach((listener) => listener());

const commitTheme = (theme) => {
  if (!isTheme(theme)) return;
  currentTheme = theme;
  applyTheme(theme);
  notify();
};

const handleSystemChange = (event) => {
  /* Only follow the OS while the user has no saved choice, so a manual pick is
     never overridden by a later system change. */
  if (readStoredTheme()) return;
  commitTheme(event.matches ? DARK : LIGHT);
};

const trackSystemPreference = () => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return () => {};
  }

  let query;
  try {
    query = window.matchMedia("(prefers-color-scheme: dark)");
  } catch {
    return () => {};
  }

  mediaQuery = query;
  mediaRefs += 1;
  if (mediaRefs === 1) {
    if (typeof query.addEventListener === "function") {
      query.addEventListener("change", handleSystemChange);
    } else if (typeof query.addListener === "function") {
      query.addListener(handleSystemChange);
    }
  }

  return () => {
    mediaRefs -= 1;
    if (mediaRefs > 0 || !mediaQuery) return;
    if (typeof mediaQuery.removeEventListener === "function") {
      mediaQuery.removeEventListener("change", handleSystemChange);
    } else if (typeof mediaQuery.removeListener === "function") {
      mediaQuery.removeListener(handleSystemChange);
    }
    mediaQuery = null;
  };
};

const subscribe = (listener) => {
  listeners.add(listener);
  const stopTracking = trackSystemPreference();
  return () => {
    listeners.delete(listener);
    stopTracking();
  };
};

const getSnapshot = () => {
  if (currentTheme === null) currentTheme = resolveTheme();
  return currentTheme;
};

const getServerSnapshot = () => DEFAULT_THEME;

export const useTheme = () => {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = useCallback((next) => {
    writeStoredTheme(next);
    commitTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    writeStoredTheme(theme === DARK ? LIGHT : DARK);
    commitTheme(theme === DARK ? LIGHT : DARK);
  }, [theme]);

  return { theme, isDarkMode: theme === DARK, setTheme, toggleTheme };
};

export default useTheme;
