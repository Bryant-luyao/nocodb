import { dbConfig, dbName, sakilaDbName } from '../dbConfig';
import { Noco } from '../../../../lib';
import express from 'express';
import cleanupMeta from './cleanupMeta';
import cleanUpSakila from './cleanupSakila';
import { createUser } from '../tests/helpers/user';
import knex from 'knex';

const knexClient = knex(dbConfig);

const sakilaKnexClient = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: sakilaDbName,
  },
  pool: { min: 0, max: 2 },
});

const serverInit = async () => {
  const server = express();
  server.enable('trust proxy');
  server.use(await Noco.init());
  return server;
};

const resetDatabase = async () => {
  try {
    if (!Noco.initialized) {
      try {
        await knexClient.raw(`DROP DATABASE ${dbName}`);
      } catch (e) {}
      await knexClient.raw(`CREATE DATABASE ${dbName}`);
    }
  } catch (e) {
    console.error('resetDatabase', e);
  }
};

const cleanupAllTables = async () => {
  try {
    await cleanUpSakila(sakilaKnexClient);

    await cleanupMeta(knexClient);
  } catch (e) {
    console.error('cleanupAllTables', e);
  }
};

export default async function () {
  await knexClient.raw(`USE ${dbName}`);
  await sakilaKnexClient.raw(`USE ${sakilaDbName}`);

  await resetDatabase();

  const server = await serverInit();

  await cleanupAllTables();

  const { token } = await createUser({ app: server }, { roles: 'editor' });

  return { app: server, token };
}
