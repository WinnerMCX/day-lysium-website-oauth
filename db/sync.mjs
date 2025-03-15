import sequelize from './session.js'; // Import your sequelize instance
import { UserModel, WalletModel, TranscationsModel } from './models.js'; // Import your models

// Sync all models with the database
sequelize
  .sync({ force: true }) // Use { force: false } in production to avoid dropping data
  .then(() => {
    console.log('Database & tables have been created!');
  })
  .catch((err) => {
    console.error('Unable to create tables:', err);
  });
