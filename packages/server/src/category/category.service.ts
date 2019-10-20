import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from '../shared/base.service';
import { Category } from './models/category.model';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from 'typegoose';
import { ICategory } from '../../../shared/models/category.interface';
import { PageRegistryService } from '../page-registry/page-registry.service';
import { Types } from 'mongoose';
import { ProductService } from '../product/product.service';

@Injectable()
export class CategoryService extends BaseService<Category> {

  constructor(@InjectModel(Category.modelName) _categoryModel: ModelType<Category>,
              private pageRegistryService: PageRegistryService,
              private productService: ProductService) {
    super();
    this._model = _categoryModel;
  }

  async getCategory(slug: string) {
    const category = await this._model.findOne({ slug });

    if (!category) {
      throw new NotFoundException(`Category with url '${slug}' not found`);
    }

    return category;
  }

  async createCategory(category: ICategory): Promise<Category> {

    const newCategory = Category.createModel();

    Object.keys(category).forEach(key => {
      newCategory[key] = category[key];
    });

    const result = await this.create(newCategory);
    if (!result) {
      return;
    }

    this.createCategoryPageRegistry(result.slug);
    return result.toJSON();
  }

  async updateCategory(objectId: Types.ObjectId, oldCategory: ICategory, newCategory: ICategory): Promise<Category> {
    const oldSlug = oldCategory.slug;

    Object.keys(newCategory).forEach(key => {
      oldCategory[key] = newCategory[key];
    });

    const updated = await this._model.findOneAndUpdate(
      { _id: objectId },
      oldCategory,
      { new: true }
    ).exec();

    if (!updated) {
      return;
    }

    this.updateCategoryPageRegistry(oldSlug, updated.slug);
    return updated.toJSON();
  }

  async deleteCategory(objectId: Types.ObjectId) {
   const deleted = await this._model.findOneAndDelete({ _id: objectId }).exec();

   if (!deleted) {
     return `No such category with id '${objectId}'`;
   }

   this.deleteCategoryPageRegistry(deleted.slug);
   return deleted.toJSON();
  }

  async getCategoryItems(categoryId: Types.ObjectId, query: any) {
    const products = await this.productService.findProductsByCategoryId(categoryId, query);
    return products;
  }

  private createCategoryPageRegistry(slug: string) {
    return this.pageRegistryService.createPageRegistry({
      slug,
      type: 'category'
    });
  }

  private updateCategoryPageRegistry(oldSlug: string, newSlug: string) {
    return this.pageRegistryService.updatePageRegistry(oldSlug, {
      slug: newSlug,
      type: 'category'
    });
  }

  private deleteCategoryPageRegistry(slug: string) {
    return this.pageRegistryService.deletePageRegistry(slug);
  }
}
