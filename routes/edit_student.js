'use strict'
const { Student } = require('../database/db')

async function edit_student(fastify, opts) {
    fastify.route({
        method: 'POST',
        url: '/edit_student/:id',
        handler: onEditStudent,
        schema: {
            description: 'Редактировать студента в БД по id'
        }
    });

}

async function onEditStudent(request, reply) {

    const { id } = request.params;

    const result = await Student.findOne({
        where: {
            id: id
        }
    });

    if (!result) {
        return {status: 'not found', result};
    }

    await result.update(request.body);

    return {status: 'ok', result};

}

module.exports = edit_student