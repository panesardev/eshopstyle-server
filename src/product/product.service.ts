import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDoc } from './product.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductService {

	constructor(@InjectModel(Product.name) private ProductDoc: Model<ProductDoc>) { }

	save(product: Product): Promise<Product> {
		product.id = uuid();
		return new this.ProductDoc(product).save();
	}

	find(id: string): Promise<Product> {
		return this.ProductDoc.findOne({ id }).exec();
	}

	findByCollection(collectionName: string): Promise<Product[]> {
		return this.ProductDoc.find({ collectionName }).exec();
	}

	findAll(): Promise<Product[]> {
		return this.ProductDoc.find().exec();
	}

	update(product: Product): Promise<Product> {
		return this.ProductDoc.updateOne({ id: product.id }, { ...product }).exec();
	}

	delete(id: string): Promise<boolean> {
		return this.ProductDoc.deleteOne({ id }).exec();		
	}

}
