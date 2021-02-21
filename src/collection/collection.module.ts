import { Module } from '@nestjs/common';
import { ProductModule } from 'src/product/product.module';
import { CollectionController } from './collection.controller';
import { CollectionService } from './collection.service';

@Module({
	imports: [ProductModule],
	controllers: [CollectionController],
	providers: [CollectionService],
	exports: [CollectionService]
})
export class CollectionModule {}
