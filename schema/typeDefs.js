const {gql} = require("apollo-server-express")

const typeDefs = gql `
type Users{
    id:ID,
    name:String,
    email:String,
    date:String,
    phone:String,
    subject:[String]
}

type Query{
    hello:String,
    getAll:[Users]
}

input userInput{
    name:String,
    email:String,
    date:String,
    phone:String,
    subject:[String]
}

type Mutation{
    createUser(users:userInput):Users
    updatedUser(id:String,users:userInput):Users
    deleteUser(id:String):String
}

`

module.exports = typeDefs