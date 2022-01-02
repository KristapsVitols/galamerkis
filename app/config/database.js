module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('POSTGRES_HOST', 'postgres'),
        port: env('POSTGRES_PORT', 5432),
        database: env('POSTGRES_DB', 'galamerkis'),
        username: env('POSTGRES_USER', 'postgres'),
        password: env('POSTGRES_PASSWORD', 'password'),
        schema: env('POSTGRES_SCHEMA', 'public'),
      },
      options: {},
    }
  },
});
