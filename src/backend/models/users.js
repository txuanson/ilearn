'use strict'
import { Model } from 'sequelize'
export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Post }) {
      // define association here
      this.hasMany(Post, { foreignKey: 'userId', as: 'posts' })
    }

    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }
  User.init(
    {
      user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      sequelize,
      tableName: 'users',
      modelName: 'User',
    }
  )
  return User;
}