import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) { }

	@Post()
	async saveProduct(@Body() product: Product): Promise<Product> {
		return this.productService.save(product);
	}

	@Get('/:id')
	async findProduct(@Param('id') id: string): Promise<Product> {
		return this.productService.find(id);
	}

	@Get()
	async findProducts(): Promise<Product[]> {
		return this.productService.findAll();
	}

	@Put()
	async updateProduct(@Body() product: Product): Promise<Product> {
		return this.productService.update(product);
	}

	@Delete('/:id')
	async deleteProduct(@Param('id') id: string): Promise<any> {
		return this.productService.delete(id);
	}
	
}