import users from "../models/Users";

class UsersController {
  async store(req, res) {
    const userExists = await users.findOne({
      where: {
        email: req.body.email
      }
    });

    if (userExists) {
      return res.status(400).json({
        error: "User already exists."
      });
    }

    const {
      email,
      password,
      nameSocialReason,
      cpf,
      phone,
      cep,
      publicplace,
      num,
      neighborhood
    } = users.create(req.body);

    return res.json({
      email,
      nameSocialReason,
      cpf,
      phone,
      cep,
      publicplace,
      num,
      neighborhood
    });
  }

  async update(req, res) {
    const {
      email,
      password,
      confirmPassword
    } = req.body;

    const userExists = await users.findOne({
      where: {
        email
      }
    });

    if (!userExists && confirmPassword !== password) {
      return res.status(401).json({
        error: 'User not exists or password does not match',
      });
    }

    const envia = await users.update({
        password: password
      }, {
        where: {
          email
        }
      }

    )

    return res.json({
      message: "Password changed successfully"
    })
  }
}

export default new UsersController();