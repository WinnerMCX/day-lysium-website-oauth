import sequelize from './session.mjs';
import { Sequelize as seq } from 'sequelize';

export const UserModel = sequelize.define(
  'user',
  {
    user_id: {
      type: seq.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: seq.STRING,
      allowNull: false,
    },
    global_name: {
      type: seq.STRING,
      allowNull: true,
    },
    avatar: {
      type: seq.STRING,
      allowNull: true,
    },
    email: {
      type: seq.STRING,
      allowNull: true,
    },
    data: {
      type: seq.JSON,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    timestamps: false, // Disable automatic createdAt and updatedAt fields
  }
);

export const WalletModel = sequelize.define(
  'wallet',
  {
    id: {
      type: seq.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: seq.STRING,
      allowNull: false,
    },
    balance: {
      type: seq.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Disable automatic createdAt and updatedAt fields
  }
);

export const TranscationsModel = sequelize.define(
  'transcations',
  {
    id: {
      type: seq.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: seq.STRING,
      allowNull: false,
    },
    amount: {
      type: seq.INTEGER,
      allowNull: false,
    },
    balance: {
      type: seq.INTEGER,
      allowNull: false,
    },
    reason: {
      type: seq.STRING,
      allowNull: true,
    },
    datetime_: {
      type: seq.DATE,
      allowNull: false,
      defaultValue: seq.fn('NOW'),
    },
  },
  {
    timestamps: false, // Disable automatic createdAt and updatedAt fields
  }
);
