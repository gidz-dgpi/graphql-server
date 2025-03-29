import { Module } from '@nestjs/common';
import { DemoResolver } from './demo.resolver';

@Module({
    imports: [],
    controllers: [],
    providers: [DemoResolver],
})
export class DemoModule {}