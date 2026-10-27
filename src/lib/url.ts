/** Prefix a site path with the configured `base` (e.g. /portfolio on GitHub Pages). */
export const url = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
