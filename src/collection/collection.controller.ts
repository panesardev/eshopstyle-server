import { Controller, Get, Param } from '@nestjs/common';
import { Collection } from './collection.model';
import { CollectionService } from './collection.service';

@Controller('/collection')
export class CollectionController {

	constructor(private readonly collectionService: CollectionService) { }

	@Get('/:name')
	async getCollection(@Param('name') name: string): Promise<Collection> {
		return await this.collectionService.get(name);
	}

}
