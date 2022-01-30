'use strict'

const { test } = require('tap')
const { build } = require('../helper')
const db = require('../../database/db')

test('add_student has added values to DB', async (t) => {
  const app = await build(t);

  const res = await app.inject({
    method: 'PUT',
    url: '/add_student',
    payload: {
      firstName: "testname",
      middleName: "testmiddlename",
      lastName: "testlastname",
      date_birth: "30.01.2021",
      rating: "10"
    }
  });

  const { status, result } = JSON.parse(res.payload);
  const { id, firstName, middleName, lastName, date_birth, rating } = result;

  t.equal(status, 'ok');

  db.Student.destroy({
    where: {
      id: id
    }
  });

})

