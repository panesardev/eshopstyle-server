import { Collection } from './collection.model';
import { CollectionService } from './collection.service';
export declare class CollectionController {
    private readonly collectionService;
    constructor(collectionService: CollectionService);
    getCollection(name: string): Promise<Collection>;
}
