/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * 로그인 시 redirect path
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/dashboard";

/**
 * Authentication Routes
 * @type {string[]}
 */
export const authRoutes: string[] = ["/login"];

/**
 * Public Routes
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/", ...authRoutes];
