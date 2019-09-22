import Sequelize, { Model } from "sequelize";

class users extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        password: Sequelize.STRING
      },
      {
        sequelize
      }
    );
  }
}

export default users;
