const Student = require("../model/students")
const resolvers = {
    Query: {
        hello: () => {
            return "Hello World"
        },
        getAll: async () => {
            return await Student.find()
        }
    },
    Mutation: {
        createUser: async (parent, args, context, info) => {
            const { name, email, date, phone, subject } = args.users
            const student = await new Student({ name, email, date, phone, subject }).save()
            return student
        },
        updatedUser: async (parent, args, context, info) => {
            const { id } = args
            const { name, email,date,phone, subject } = args.users
            const student = await Student.findByIdAndUpdate(id, { name, email,date,phone,subject })
            return student
        },
        deleteUser: async (parent, args, context, info) => {
            const { id } = args
            await Student.findByIdAndDelete(id)
            return "Deleted"
        }
    }
}

module.exports = resolvers