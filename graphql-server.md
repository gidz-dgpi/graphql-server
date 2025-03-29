# GraphQL Server

Voor de GraphQL demo-server wordt het [NestJS-raamwerk](https://docs.nestjs.com) gebruikt. Hieronder meer informatie hoe de demo-omgeving daarvoor is samengesteld.

## Installatie

**Pre-conditie**: [NodeJS]() is inclusief [NPM]() op de te gebruiken demo-omgeving geinstalleerd.

De NestJS-CLI is vereist om het NestJS-raamwerk te gebruiken.
> Hieronder het *shell-commando* waarmee de NestJS-CLI op een demo-omgeving kan worden geinstalleerd

```
npm i -g @nestjs/cli
```

Er moet een NestJs-project met behulp van de NestJS-CLI worden gegenereerd.
> Hieronder een voorbeeld *demoregister* voor deze repository is gegenereerd.

```
nest new demoregister
```

Om een GraphQL-serverfunctionaliteit te gebruiken moeten de volgende NestJs-Packages aan het project worden toegevoegd:

- *@nestjs/graphql* is de NestJS module voor de ondersteuning van GraphQL-functies
- *@nestjs/apollo* is de NestJS module voor de ondersteuning van het [Apollo-raamwerk](https://www.apollographql.com/docs/apollo-server/getting-started) als GraphQL-server
- *graphql* is de JavaScript referentie-implementatie voor GraphQL

```
npm install --save @nestjs/graphql @nestjs/apollo @apollo/server graphql
```

## Configuratie

1. **Importeer GraphQLModule**

- Pas de code in `app.module.ts` als volgt aan
```ts
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
```

2. **Voeg Demo-module toe**
- Voeg een bestand `demo/demo.module.ts` met de volgende inhoud toe
```ts
import { Module } from '@nestjs/common';
import { DemoResolver } from './demo.resolver';

@Module({
    imports: [],
    controllers: [],
    providers: [DemoResolver],
})
export class DemoModule {}
```

3. **Voeg Demo-resolver toe**
- Voeg een bestand `demo/demo.resolver.ts` met de volgende inhoud toe
```ts
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
}}
```

> Een **resolver** is bedoeld om opvragingen en mutatie's via GraphQL-verzoeken te verwerken. In deze simpele demo gebruiken we daarvoor een Javascript-object (alleen opvraging mogelijk).

3. **Voeg een GraphQL-Schema toe**
- Voeg een bestand `demo/demo.schema.graphql` met de volgende inhoud toe
```graphql
type Demo {
    id: ID!
    title: String!
    price: Int!
}

type Query {
    demos: [Demo]
}

type Mutation {
    addDemo(title: String!, price: Int!): Demo
}
```

## Testen

1. **Start NestJS-server**
```shell
npm start
```
- Open Playground http://localhost:3000/graphql
2. **Voer Test-Querie uit**
```
{
  demos {
    price
    title
  }
}
```
3. Beoordeel resultaat dat er als volgt uit zou moeten zien
```
{
  "data": {
    "demos": [
      {
        "price": 10,
        "title": "Demo 1"
      },
      {
        "price": 10,
        "title": "Demo 2"
      },
      {
        "price": 10,
        "title": "Demo 3"
      }
    ]
  }
}
```

---

Bronnen:

- https://docs.nestjs.com/first-steps
- https://dev.to/codexam/graphql-in-nestjs-a-concise-5-minute-guide-4ima
