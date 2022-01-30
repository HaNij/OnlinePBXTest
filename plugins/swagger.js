const fp = require('fastify-plugin')

module.exports = fp (async function (fastify, opts) {
    fastify.register(require('fastify-swagger'), {
        exposeRoute: true,
        routePrefix: '/documentation',
        swagger: {
            info: {
                title: 'Тестовое задание OnlinePBX',
                description: 'Реализовать REST АПИ для клиентского приложения, которое должно отображать страницу со списком студентов с возможностями:\n' +
                    '1. добавить нового студента в этот список;\n' +
                    '2. удалить существующего студента;\n' +
                    '3. отредактировать существующего студента;\n' +
                    'У студента есть поля:\n' +
                    '- ФИО\n' +
                    '- дата рождения\n' +
                    '- успеваемость (опционально из справочника)\n' +
                    'требования:\n' +
                    '1. typescript;\n' +
                    '2. node.js\n' +
                    '3. автогенерируемое swagger-описание API;\n' +
                    '4. typeORM;\n' +
                    '5. возможные значения успеваемости (неуд/уд/хор/отл) должны быть доступны клиентскому приложению через endpoint API;',
                version: '0.0.1'
            },
            externalDocs: {
                url: 'https://github.com/HaNij/',
                description: 'Ссылка на GitHub'
            }
        }
    })
})
