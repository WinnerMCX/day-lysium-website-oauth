import sequelize from './session.mjs';
import { UserModel, WalletModel, TranscationsModel } from './models.mjs';

export class User {
  static async get(id) {
    return await UserModel.findOne({ where: { user_id: id }, raw: true });
  }

  static async add(data) {
    return await UserModel.create(data);
  }

  static async update(id, data) {
    return await UserModel.update(data, { where: { user_id: id } });
  }

  static async delete(id) {
    return await UserModel.destroy({ where: { user_id: id } });
  }
}

export class Wallet {
  static async balance(user_id) {
    const wallet = await WalletModel.findOne({ where: { user_id } });
    return wallet ? wallet.balance : 0;
  }

  static async makeTransaction(user_id, amount, reason) {
    let wallet = await WalletModel.findOne({ where: { user_id } });

    if (!wallet) {
      wallet = await Wallet._add(user_id);
    }

    let new_balance;

    await sequelize.transaction(async (transaction) => {
      new_balance = wallet.balance + amount;

      await wallet.update({ balance: new_balance }, { transaction });

      await TranscationsModel.create(
        { user_id, amount, balance: new_balance, reason },
        { transaction }
      );
    });

    return new_balance;
  }

  static async makeTransactions(users_id, amount, reason) {
    return await sequelize.transaction(async (transaction) => {
      const results = [];

      for (const user_id of users_id) {
        let wallet = await WalletModel.findOne({
          where: { user_id },
          transaction,
        });

        if (!wallet) {
          wallet = await Wallet._add(user_id, transaction);
        }

        const new_balance = wallet.balance + amount;

        await wallet.update({ balance: new_balance }, { transaction });

        await TranscationsModel.create(
          { user_id, amount, balance: new_balance, reason },
          { transaction }
        );

        results.push({ user_id, new_balance });
      }

      return results; // Return the results
    });
  }

  static async _add(user_id, transaction = null) {
    return await WalletModel.create(
      { user_id, balance: 0 },
      { transaction, returning: true }
    );
  }
}
