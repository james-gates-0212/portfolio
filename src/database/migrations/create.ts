/**
 * This script is responsible for create the SQL tables.
 * Run it via `npm run db:create`.
 */

require('dotenv').config();
import models from '@/database/models';

const database = models();

if (!database) {
  process.exit(1);
}

database.sequelize
  .sync()
  .then(() => {
    console.log('OK');
    process.exit();
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
