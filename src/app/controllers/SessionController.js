import jwt from "jsonwebtoken";
import users from "../models/Users";
import authConfig from "../../config/auth";

class SessionController {
  async store(req, res) {
    const {
      email,
      password
    } = req.body;

    const user = await users.findOne({
      where: {
        email
      }
    });

    if (!user) {
      res.status(401).json({
        error: "User not found"
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        error: "Password does not match"
      });
    }

    const {
      id,
      nameSocialReason
    } = user;

    return res.json({
      user: {
        id,
        email,
        nameSocialReason
      },
      token: jwt.sign({
          id
        },
        authConfig.secret, {
          expiresIn: authConfig.expiresIn
        }
      )
    });
  }
}

export default new SessionController();