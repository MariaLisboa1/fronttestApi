import Sequelize, {
  Model
} from "sequelize";

class users extends Model {
  static init(sequelize) {
    super.init({
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      nameSocialReason: Sequelize.STRING,
      cpf: Sequelize.STRING,
      phone: Sequelize.STRING,
      cep: Sequelize.STRING,
      publicplace: Sequelize.STRING,
      num: Sequelize.STRING,
      neighborhood: Sequelize.STRING,
    }, {
      sequelize
    });
  }
}

export default users;