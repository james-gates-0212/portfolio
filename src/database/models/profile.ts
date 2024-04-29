import { DataTypes } from 'sequelize';

export default function model(sequelize) {
  const profile = sequelize.define(
    'profile',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [0, 128],
        },
      },
      description: {
        type: DataTypes.STRING(256),
        allowNull: true,
        validate: {
          notEmpty: false,
          len: [0, 255],
        },
      },
      activatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    },
  );

  return profile;
}
