import { Expose, Transform, Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator';
import { OrderItemDto } from '../shared-dtos/order-item.dto';
import { ShipmentDto } from './shipment.dto';
import { OrderStatusEnum } from '../../enums/order-status.enum';
import { __ } from '../../helpers/translate/translate.function';
import { PaymentTypeEnum } from '../../enums/payment-type.enum';
import { Log } from '../../models/log.model';
import { OrderPricesDto } from '../shared-dtos/order-prices.dto';
import { Order } from '../../../order/models/order.model';
import { TrimString } from '../../decorators/trim-string.decorator';

export class AdminAddOrUpdateOrderDto implements Pick<Order, 'customerId' | 'customerFirstName' | 'customerLastName' | 'customerPhoneNumber' | 'customerNote' | 'shouldSaveAddress' | 'createdAt' | 'paymentMethodId' | 'paymentType' | 'isCallbackNeeded' | 'shipment' | 'items' | 'state' | 'status' | 'clientNote' | 'adminNote' | 'logs' | 'prices' | 'isOrderPaid'>{
  @Expose()
  @IsOptional()
  @IsNumber()
  customerId: number;

  @Expose()
  @IsOptional()
  @IsString()
  @TrimString()
  customerFirstName: string;

  @Expose()
  @IsOptional()
  @IsString()
  @TrimString()
  customerLastName: string;

  @Expose()
  @IsOptional()
  @IsString()
  @TrimString()
  customerEmail: string;

  @Expose()
  @IsOptional()
  @IsString()
  @TrimString()
  customerPhoneNumber: string;

  @Expose()
  customerNote: string;

  @Expose()
  @IsBoolean()
  @IsOptional()
  shouldSaveAddress: boolean;

  @Expose()
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  @Expose()
  @IsString()
  @TrimString()
  paymentMethodId: string;

  @Expose()
  paymentType: PaymentTypeEnum;

  @Expose()
  @IsBoolean()
  @IsOptional()
  isCallbackNeeded: boolean;

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => ShipmentDto)
  shipment: ShipmentDto;

  @Expose()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @Expose()
  state: any;

  @Expose()
  status: OrderStatusEnum;

  @Expose()
  @IsString()
  @TrimString()
  @IsOptional()
  clientNote: string;

  @Expose()
  @IsString()
  @TrimString()
  @IsOptional()
  adminNote: string;

  @Expose()
  @IsOptional()
  logs: Log[];

  @Expose()
  @Type(() => OrderPricesDto)
  prices: OrderPricesDto;

  @Expose()
  @IsOptional()
  @IsBoolean()
  isOrderPaid: boolean;
}

export class AdminOrderDto extends AdminAddOrUpdateOrderDto implements Pick<Order, 'id' | 'idForCustomer' | 'statusDescription' | 'paymentMethodClientName' | 'paymentMethodAdminName' | 'shippingMethodName'> {
  @Expose()
  @Transform(((value, obj) => obj._id || value))
  id: number;

  @Expose()
  @IsOptional()
  @IsString()
  @TrimString()
  idForCustomer: string;

  @Expose()
  @Transform(((value, order: AdminOrderDto) => value || __(order.status, 'ru')))
  statusDescription: string;

  @Expose()
  @IsString()
  @TrimString()
  @IsOptional()
  paymentMethodClientName: string;

  @Expose()
  @IsString()
  @TrimString()
  @IsOptional()
  paymentMethodAdminName: string;

  @Expose()
  @IsString()
  @TrimString()
  @IsOptional()
  shippingMethodName: string;
}

export class UpdateOrderAdminNote implements Pick<Order, 'adminNote'>{
  @IsString()
  adminNote: string;
}
