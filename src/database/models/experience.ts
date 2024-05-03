import { DataTypes } from 'sequelize';

export default function model(sequelize) {
  const experience = sequelize.define(
    'experience',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      profile: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      link: {
        type: DataTypes.STRING(256),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [0, 256],
        },
      },
      linkedin: {
        type: DataTypes.STRING(256),
        allowNull: true,
        validate: {
          len: [0, 256],
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
      explanation: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [0, 2048],
        },
      },
    },
    {
      indexes: [
        {
          fields: ['profile'],
        },
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

  experience.associate = (models) => {
    models.experience.belongsTo(models.profile, {
      as: 'profile_fk',
      constraints: true,
      foreignKey: 'profile',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
  };

  return experience;
}
