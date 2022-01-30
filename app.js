'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
const sensible = require('fastify-sensible')
const db = require('./database/db')

module.exports = async function (fastify, opts) {

  await db.sequelize.sync();

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
