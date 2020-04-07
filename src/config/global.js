const DB_STORAGE_PATH = 'data';
const SERVER_PORT = 3000;
const DEFAULT_PAGE = 0;
const PAGE_LIMIT = 20;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'nodejs_global_mp';

export {
    DB_STORAGE_PATH,
    SERVER_PORT,
    DEFAULT_PAGE,
    PAGE_LIMIT,
    JWT_SECRET_KEY
};
