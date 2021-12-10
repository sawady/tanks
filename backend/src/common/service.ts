import { NotFoundException } from '@nestjs/common';
import {
  EntityNotFoundError,
  FindConditions,
  FindOneOptions,
  Repository as TRepository,
} from 'typeorm';
import { Page, PageOffset, PageRequest } from './page';

export default class CRUDService<Entity> {
  protected repository: TRepository<Entity>;

  public async findPaginated({
    page = 0,
    pageSize = 10,
    withDeleted = false,
  }: PageRequest): Promise<Page<Entity>> {
    const [items, total] = await this.repository.findAndCount({
      withDeleted,
      skip: page * pageSize,
      take: pageSize,
    });
    return {
      items,
      page,
      pageSize,
      total,
    };
  }

  public async findWithOffset(
    options: FindConditions<Entity>,
  ): Promise<PageOffset<Entity>> {
    const [items, total] = await this.repository.findAndCount(options);
    return {
      items,
      total,
    };
  }

  public async findOneOrFail(id: number, options?: FindOneOptions<Entity>) {
    try {
      return await this.repository.findOneOrFail(id, options);
    } catch (e) {
      if (e instanceof EntityNotFoundError) throw new NotFoundException();
      throw e;
    }
  }
}
