import { DataTypes } from 'sequelize';

export default function model(sequelize) {
  const user = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      key: {
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [0, 128],
        },
      },
      value: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [0, 1024],
        },
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['key'],
        },
      ],
      timestamps: true,
    },
  );

  return user;
}
