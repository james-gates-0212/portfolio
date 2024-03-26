/**
 * This method returns the server config.
 * By default, it returns the Environment Variables.
 */

type TConfig = {
  common: {
    host: string;
    basePath: string;
  };
  database?: {
    dialect: string;
    host: string;
    port: number;
    db: string;
    user: string;
    password: string;
    ssl?: boolean;
    ssl_cert?: string;
    logging: boolean;
  };
  node: {
    env: string;
  };
};

const parseBoolean = (value) => ['true', '1'].includes((value || '').toLowerCase());

export function getConfig(): TConfig {
  const env = process.env || {};
  const config: TConfig = {
    common: {
      host: env.HOST_URL || 'http://localhost:3000',
      basePath: env.BASE_PATH || '',
    },
    node: {
      env: env.NODE_ENV || 'production',
    },
  };

  if (env.DATABASE_HOST && env.DATABASE_DIALECT) {
    // database environment variables
    config.database = {
      dialect: env.DATABASE_DIALECT || 'postgres',
      host: env.DATABASE_HOST || '',
      port: parseInt(env.DATABASE_PORT || '0'),
      db: env.DATABASE_DATABASE || '',
      user: env.DATABASE_USERNAME || '',
      password: env.DATABASE_PASSWORD || '',
      ssl: parseBoolean(env.DATABASE_SSL),
      ssl_cert: env.DATABASE_SSL_CERT,
      logging: parseBoolean(env.DATABASE_LOGGING),
    };
  }

  return config;
}
