'use strict'
const { Student } = require('../database/db')

async function add_student(fastify, opts) {
  fastify.route({
    method: 'PUT',
    url: '/add_student',
    handler: onAddStudent,
    schema: {
      description: 'Добавить студента в БД',
      body: {
        properties: {
          firstName : { type: 'string' },
          middleName : { type: 'string' },
          lastName : { type: 'string' },
          date_birth : { type: 'string' },
          rating : { type: 'integer' }
        }
      },
      response: {
        200: {
          description: 'Успешный запрос',
          type: 'object',
          properties: {
            status: { type: 'string' },
            result: { type: 'object' }
          }
        }
      }
    }
  });

}

async function onAddStudent(request, reply) {

  const { firstName, middleName, lastName, date_birth, rating } = request.body

  const result = await Student.create({
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    date_birth: date_birth,
    rating: rating
  });

  return {status: 'ok', result};

}

module.exports = add_student