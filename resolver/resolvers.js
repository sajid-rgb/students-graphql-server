const Student = require('../model/students');

const resolvers = {
  Query: {
    hello: () => 'Hello World',
    // eslint-disable-next-line consistent-return
    getAll: async () => {
      try {
        const result = await Student.find();
        return result;
      } catch (e) {
        console.log(e);
      }
    },
  },
  Mutation: {
    createUser: async (args) => {
      const {
        name, email, date, phone, subject,
      } = args.users;
      const student = await new Student({
        name, email, date, phone, subject,
      }).save();
      return student;
    },
    updatedUser: async (args) => {
      const { id } = args;
      const {
        name, email, date, phone, subject,
      } = args.users;
      const student = await Student.findByIdAndUpdate(id, {
        name, email, date, phone, subject,
      });
      return student;
    },
    deleteUser: async (args) => {
      const { id } = args;
      await Student.findByIdAndDelete(id);
      return 'Deleted';
    },
  },
};

module.exports = resolvers;
