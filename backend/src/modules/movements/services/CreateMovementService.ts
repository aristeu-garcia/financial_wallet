import Movement from '../infra/typeorm/entities/Movement';
import MovementsRepository from '../infra/typeorm/repositories/MovementsRepository';
import { getCustomRepository } from 'typeorm';
import IMovementsRepository from '../repositories/IMovementsRepository';
import { injectable, inject } from 'tsyringe';
interface IRequest {
    id_category: String,
    value: Number,
    description: String
}

@injectable()
class CreateMovimentService {
    constructor(
        @inject('MovementsRepository')
        private MovementsRepository: IMovementsRepository
    ) {

    }

    public async execute({ id_category, value, description }: IRequest): Promise<Movement> {
        // const movementsRepository = getCustomRepository(MovementsRepository);
        
        const movement = await this.MovementsRepository.create({
            id_category,
            value,
            description
        });

        return movement;
    }

}

export default CreateMovimentService;