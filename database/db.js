require('dotenv').config();
const Sequelize = require('sequelize');

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_SCHEMA,
} = process.env

const sequelize = new Sequelize(
    database = DB_SCHEMA,
    username = DB_USER,
    password = DB_PASSWORD,
    options = {
        host: DB_HOST,
        port: DB_PORT,
        dialect: 'postgres'
    }
);

const Student = sequelize.define('Student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    middleName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date_birth: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER
    }
});

module.exports = {
    sequelize: sequelize,
    Student: Student
};


