/**
 * @typedef {import('@prisma/client').PrismaClient} Prisma
 */

/**
 * Context for the resolvers
 * @typedef {Object} context
 * @property {Prisma} prisma
 */

const hello = () => "Hello";
/**
 * 
 * @param {any} parent Parent rosolver
 * @param {*} args Args from req
 * @param {context} context 
 * @returns 
 */
const users = async (parent, args, context: { prisma }) => {
    return prisma.user.findMany();
};

module.exports = {
    hello,
    users
};