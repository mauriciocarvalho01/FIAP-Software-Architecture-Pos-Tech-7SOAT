import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { OrderEntity } from './order';


@Entity({ name: 'items-pedido' })
export class OrderItemEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id?: number;
  
  @Column({ name: 'item_pedido_id', unique: true,  default: uuidv4() })
  orderItemsId!: string;

  @ManyToOne(() => OrderEntity, (order) => order.orderItems, { onDelete: 'CASCADE' })
  order!: OrderEntity;

  @CreateDateColumn({ name: 'data_cadastro', type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'data_atualizacao', type: 'timestamp' })
  updatedAt!: Date;

  @ManyToOne(() => TestCategoryEntity, (category) => category.tests, { onDelete: 'CASCADE' })
  category?: TestCategoryEntity;
}