import { DataTypes } from 'sequelize';

export default function model(sequelize) {
  const user = sequelize.define(
    'experience',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      since: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      until: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      position: {
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [0, 128],
        },
      },
      company: {
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [0, 128],
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [0, 2048],
        },
      },
    },
    {
      indexes: [
        {
          fields: ['since'],
        },
        {
          fields: ['until'],
        },
      ],
      timestamps: true,
    },
  );

  return user;
}
