// BEGIN: GrapQL-demo toevoegingen op standaard NestJS-template
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
// EINDE: GrapQL-demo toevoeging op standaard NestJS-template
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// BEGIN: GrapQL-demo toevoegingen op standaard NestJS-template
import { GraphQLModule } from '@nestjs/graphql';
import { DemoResolver } from './demo/demo.resolver';
// EINDE: GrapQL-demo toevoeging op standaard NestJS-template

@Module({
    imports: [
// BEGIN: GrapQL-demo toevoegingen op standaard NestJS-template
    GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        playground: true, // Zet de GraphQL Playground functie aan
        typePaths: ['./**/*.graphql'], // Locatie van de GraphQL configuratie-bestanden
    }),
    DemoResolver, // Importeer de resolver. Resolvers handelen inkomende verzoeken af
// EINDE: GrapQL-demo toevoeging op standaard NestJS-template
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
