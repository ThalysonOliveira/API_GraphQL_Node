import { buildSchema } from 'graphql'
import 'reflect-metadata'
import './utils/connection'
import {ApolloServer} from 'apollo-server'

async function boostrap(){
    const schema = await buildSchema({
        resolvers: []
    })

    const server = new ApolloServer({schema})

    server.listen({port: 4100},()=> console.log('Running'))

}

boostrap()