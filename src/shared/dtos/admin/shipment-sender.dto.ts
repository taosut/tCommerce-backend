import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { AddressTypeEnum } from '../../enums/address-type.enum';

export class ShipmentSenderDto {

  @Expose()
  @IsOptional()
  id?: number;

  @Expose()
  @IsEnum(AddressTypeEnum)
  @IsOptional()
  addressType?: AddressTypeEnum;

  @Expose()
  @IsString()
  @IsOptional()
  city?: string;

  @Expose()
  @IsString()
  @IsOptional()
  cityId?: string;

  @Expose()
  @IsString()
  @IsOptional()
  senderId?: string;

  @Expose()
  @IsString()
  @IsOptional()
  contactId?: string;

  @Expose()
  @IsString()
  @IsOptional()
  counterpartyRef?: string;

  @Expose()
  @IsString()
  @IsOptional()
  addressId?: string;

  @Expose()
  @IsString()
  @IsOptional()
  phone?: string;

  @Expose()
  @IsString()
  @IsOptional()
  firstName?: string;

  @Expose()
  @IsString()
  @IsOptional()
  lastName?: string;

  @Expose()
  @IsString()
  @IsOptional()
  address?: string;

  @Expose()
  @IsString()
  @IsOptional()
  buildingNumber?: string;

  @Expose()
  @IsString()
  @IsOptional()
  flat?: string;

  @Expose()
  @IsOptional()
  isDefault?: boolean;

}