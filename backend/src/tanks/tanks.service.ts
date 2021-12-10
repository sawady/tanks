import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CRUDService from 'src/common/service';
import { Repository } from 'typeorm';
import { CreateTankDto } from './dto/create-tank.dto';
import { UpdateTankDto } from './dto/update-tank.dto';
import { Tank } from './entities/tank.entity';

@Injectable()
export class TanksService extends CRUDService<Tank> {
  constructor(
    @InjectRepository(Tank)
    protected repository: Repository<Tank>,
  ) {
    super();
  }

  // TODO: validate input
  create(createTankDto: CreateTankDto) {
    return this.repository.save(createTankDto);
  }

  findAll(page: number, pageSize: number) {
    return this.findPaginated(page, pageSize);
  }

  findOne(id: number) {
    return this.findOneOrFail(id);
  }

  // TODO: validate input
  update(id: number, updateTankDto: UpdateTankDto) {
    return this.repository.update(id, updateTankDto);
  }

  // TODO: make soft delete
  remove(id: number) {
    return this.repository.delete(id);
  }
}
