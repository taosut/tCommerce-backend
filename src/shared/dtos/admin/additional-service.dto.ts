import { AdditionalService } from '../../../additional-service/models/additional-service.model';
import { Expose } from 'class-transformer';
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { TrimString } from '../../decorators/trim-string.decorator';

export class AdminAdditionalServiceDto implements Pick<AdditionalService, 'id' | 'isVisibleOnProductPage' | 'productIds'> {
  @Expose()
  id: number;

  @Expose()
  @IsString()
  @TrimString()
  name: string;

  @Expose()
  @IsString()
  @TrimString()
  clientName: string;

  @Expose()
  @IsBoolean()
  isVisibleOnProductPage: boolean;

  @Expose()
  @IsNumber(undefined, { each: true })
  productIds: number[];
}
