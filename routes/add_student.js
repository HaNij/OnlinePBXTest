'use strict'
const db = require('../database/db')

async function add_student(fastify, opts) {
  fastify.route({
    method: 'PUT',
    url: '/add_student',
    handler: onAddStudent,
    schema: {
      description: 'Добавить студента в БД'
    }
  });

}

async function onAddStudent(request, reply) {
  db.Student.create({
    firstName: request.body.firstName,
    middleName: request.body.middleName,
    lastName: request.body.lastName,
    date_birth: request.body.date_birth,
    rating: request.body.rating
  });

  return {status: 'ok'};

}

module.exports = add_student