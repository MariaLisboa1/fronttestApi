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

    const { email, password } = users.create(req.body);

    return res.json({
      email
    });
  }
}

export default new UsersController();
