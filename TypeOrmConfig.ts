const config = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'db_devtraining',
  synchronize: false,
  migrationsRun: true,
  migrationsTableName: 'MigrationHistory',
  extra: {
    trustServerCertificate: true,
  },
  entities: ['src/**/entities/*.entity{.ts,.js}'],
  migrations: ['src/migrations/**'],
  cli: {
    entitiesDir: 'src/**/entities',
    migrationsDir: 'src/migrations',
  },
};

export = config;
