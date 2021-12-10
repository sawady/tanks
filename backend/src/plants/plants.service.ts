import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageRequest } from 'src/common/page';
import CRUDService from 'src/common/service';
import { Repository } from 'typeorm';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { Plant } from './entities/plant.entity';

@Injectable()
export class PlantsService extends CRUDService<Plant> {
  constructor(
    @InjectRepository(Plant)
    protected repository: Repository<Plant>,
  ) {
    super();
  }

  // TODO: validate input
  create(createPlantDto: CreatePlantDto) {
    return this.repository.save(createPlantDto);
  }

  findAll(pageRequest: PageRequest) {
    return this.findPaginated(pageRequest);
  }

  findOne(id: number) {
    return this.findOneOrFail(id);
  }

  // TODO: validate input
  update(id: number, updatePlantDto: UpdatePlantDto) {
    return this.repository.update(id, updatePlantDto);
  }

  // TODO: make soft delete
  remove(id: number) {
    return this.repository.softDelete(id);
  }
}
