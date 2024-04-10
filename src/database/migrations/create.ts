/**
 * This script is responsible for create the SQL tables.
 * Run it via `npm run db:create`.
 */

require('dotenv').config();
import models from '../models';
import 'colors';

const database = models();

if (!database) {
  console.log('Failed to connect your database'.yellow.underline.bold);
  process.exit(1);
}

export const seed = async () => {
  try {
    await database.sequelize.sync({ force: false });
    console.log('Database seeded'.bgGreen.underline.bold);
    process.exit(0);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Seed database failed: ${error.message}`.red.underline.bold);
    }
    console.error(error);
  }
};

export const flush = async () => {
  console.log('Delete all database tables'.red.underline.bold);
  try {
    await database.user.drop({ cascade: true });
    await database.experience.drop({ cascade: true });
    process.exit(0);
  } catch (error) {
    let msg;

    if (error instanceof Error) msg = error.message;
    else msg = error;

    console.log(`flushing database failed: ${msg}`.red.underline.bold);
    console.error(error);
  }
};

let arg = process.argv[2];
if (arg === 'seed') {
  seed();
} else if (arg === 'flush') {
  flush();
}
