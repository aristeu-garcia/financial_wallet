import { hash } from "bcryptjs";
import User from "../infra/typeorm/entities/User";
import AppError from "@shared/erros/AppError";
import IUsersRepository from "../repositories/IUsersRepository";
import { injectable, inject } from "tsyringe";
interface IRequest {
  name: string;
  email: string;
  password: string;
}
@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private UsersRepository: IUsersRepository
  ) {}
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const checkUserExists = await this.UsersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError("Email address already used.");
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.UsersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
