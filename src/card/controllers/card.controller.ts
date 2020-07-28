import { Controller, Patch, Param, Body, ParseIntPipe } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Card } from '../entities/card.entity';
import { CardService } from '../services/card.service';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { CreateCardDto } from '../dto/create.card.dto';

@Crud({
  model: {
    type: Card,
  },
  routes: {
    only: ['getManyBase', 'getOneBase', 'createOneBase', 'deleteOneBase'],
  },
  query: {
    join: {
      card: {
        eager: true,
      },
    },
  },
  dto: {
    create: CreateCardDto,
  }
})
@ApiTags('cards')
@Controller('/api/cards')
export class CardController implements CrudController<Card> {
  public constructor(public service: CardService) {}

  @Patch('/increase/:id')
  @ApiBody({
    description: 'amount',
    type: Number,
  })
  public async increase(
    @Param('id', ParseIntPipe) id: number,
    @Body('amount', ParseIntPipe) amount: number,
  ): Promise<void> {
    await this.service.increase(id, amount);
  }

  @Patch('/decrease/:id')
  @ApiBody({
    description: 'amount',
    type: Number,
  })
  public async decrease(
    @Param('id', ParseIntPipe) id: number,
    @Body('amount', ParseIntPipe) amount: number,
  ): Promise<void> {
    await this.service.decrease(id, amount);
  }

  @Patch('/setLimit/:id')
  @ApiBody({
    description: 'amount',
    type: Number,
  })
  public async setLimit(
    @Param('id', ParseIntPipe) id: number,
    @Body('amount', ParseIntPipe) amount: number,
  ): Promise<void> {
    await this.service.setLimit(id, amount);
  }
}
