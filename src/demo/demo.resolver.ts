import { Query, Resolver } from '@nestjs/graphql';
@Resolver('Demo')
export class DemoResolver {
    @Query('demos')
    getAllDemos() {
        return [
            {
                id: 1,
                title: 'Demo 1',
                author: 'Author 1',
                price: 10,
            },
            {
                id: 2,
                title: 'Demo 2',
                author: 'Author 2',
                price: 10,
            },
            {
                id: 1,
                title: 'Demo 3',
                author: 'Author 1',
                price: 10,
            }
        ];
    }
}