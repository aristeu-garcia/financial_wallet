
import { compare } from "bcryptjs";
import { injectable, inject } from "tsyringe";
import { sign } from "jsonwebtoken";
import authConfig from "@config/auth";
import AppError from "@shared/erros/AppError";
import User from "../infra/typeorm/entities/User";
import IUsersRepository from "../repositories/IUsersRepository";

interface IResponse {
  user: User;
  token: string;
}
interface IRequest {
  email: string;
  password: string;
}
@injectable()
class AuthenticateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    // const usersRepository = getRepository(User);
    console.log(email, password);
    const user = await this.usersRepository.findByEmail(email);
    console.log(user);
    if (!user) {
      throw new AppError("Incorrect email/password combination.", 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("Incorrect email/password combination.", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
