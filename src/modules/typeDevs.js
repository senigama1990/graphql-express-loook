import { gql } from 'apollo-server-express';


const typeDefs = gql`
  type Query {
    user: String!
  }
`

export {
  typeDefs
}