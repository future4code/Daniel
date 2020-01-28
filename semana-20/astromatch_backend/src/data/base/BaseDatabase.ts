import knex from "knex";

export abstract class BaseDatabase {
    protected static DB_PREFIX_NAME = "astromatch"
    protected connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST_NAME,
            user: process.env.DB_USER_NAME,
            password: process.env.DB_USER_PASSWORD,
            database: process.env.DB_PRODUCTION
        }
    });
}