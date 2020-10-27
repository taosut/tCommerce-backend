import { arrayProp, getModelForClass, prop } from '@typegoose/typegoose';

export class AdditionalService {
  @prop()
  _id: number;

  set id(id: number) { this._id = id; }
  get id(): number { return this._id; }

  @prop()
  name: string;

  @prop()
  clientName: string;

  @prop()
  isVisibleOnProductPage: boolean;

  @arrayProp({ items: Number })
  productIds: number[];

  static collectionName: string = 'additional-service';
}


export const AdditionalServiceModel = getModelForClass(AdditionalService, {
  schemaOptions: {
    toJSON: {
      virtuals: true
    },
    timestamps: true
  }
});
