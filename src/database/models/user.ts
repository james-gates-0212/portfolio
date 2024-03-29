import { DataTypes } from 'sequelize';

export default function model(sequelize) {
  const user = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      fullName: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [0, 255],
        },
      },
      firstName: {
        type: DataTypes.STRING(80),
        allowNull: true,
        validate: {
          len: [0, 80],
        },
      },
      lastName: {
        type: DataTypes.STRING(175),
        allowNull: true,
        validate: {
          len: [0, 175],
        },
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [0, 255],
        },
        get() {
          return undefined;
        },
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true,
          len: [0, 255],
        },
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['email'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
    },
  );

  user.associate = (models) => {
    models.user.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.user.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  user.beforeCreate((user, options) => {
    user = trimStringFields(user);
    user.fullName = buildFullName(user.firstName, user.lastName);
  });

  user.beforeUpdate((user, options) => {
    user = trimStringFields(user);
    user.fullName = buildFullName(user.firstName, user.lastName);
  });

  return user;
}

function buildFullName(firstName, lastName) {
  if (!firstName && !lastName) {
    return null;
  }

  return [firstName, lastName].filter(Boolean).join(' ').trim();
}

function trimStringFields(user) {
  user.email = user.email.trim();

  user.firstName = user.firstName ? user.firstName.trim() : null;

  user.lastName = user.lastName ? user.lastName.trim() : null;

  return user;
}
