import models from '@/database/models';

let cached;

/**
 * Initializes the connection to the Database
 */
export default async function databaseInit() {
  if (!cached) {
    cached = await models();
  }

  return cached;
}
