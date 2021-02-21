import { Injectable } from '@nestjs/common';
import { ProductService } from 'src/product/product.service';
import { Collection } from './collection.model';
import { shuffle } from '../utility-functions';
import { Product } from 'src/product/product.model';

@Injectable()
export class CollectionService {

	constructor(private readonly productService: ProductService) { }

	async get(name: string): Promise<Collection> {
		if (name === 'featured') {
			return await this.getFeatured();
		}
		if (name === 'all products') {
			return await this.getAll();
		}
		return {
			name, products: await this.productService.findByCollection(name)
		}
	}	

	async getFeatured(): Promise<Collection> {
		const 
			products: Product[] = await this.productService.findAll(),
			numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
			shuffled: number[] = shuffle(numbers),
			featured: Product[] = [];

		featured.push(products[shuffled[0]]);
		featured.push(products[shuffled[1]]);
		featured.push(products[shuffled[2]]);
		featured.push(products[shuffled[3]]);
		featured.push(products[shuffled[4]]);
		
		return { 
			products: featured, name: 'featured' 
		};
	}

	async getAll(): Promise<Collection> {
		return {
			products: await this.productService.findAll(), name: 'all products'
		}
	}

}
