'use strict'
const { Student } = require('../database/db')

async function get_student(fastify, opts) {
    fastify.route({
        method: 'GET',
        url: '/student/:id',
        handler: onGetStudent,
        schema: {
            description: 'Получить студента в БД по id'
        }
    });

}

async function onGetStudent(request, reply) {

    const { id } = request.params;

    const result = await Student.findOne({
        where: {
            id: id
        }
    });

    if (!result) {
        return {status: 'not found', result};
    }

    return {status: 'ok', result};
}

module.exports = get_student