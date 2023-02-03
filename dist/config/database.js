"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: 'mysql',
        connection: {
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 3306),
            database: env('DATABASE_NAME', 'strapi-test'),
            user: env('DATABASE_USERNAME', 'root'),
            password: env('DATABASE_PASSWORD', 'Oskar_vitko16'),
            ssl: env.bool('DATABASE_SSL', false),
        },
    },
});
