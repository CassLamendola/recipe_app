
module.exports= [
        {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('Hello, world!');
        }
    }, {
        method: 'GET',
        path: '/user',
        handler: function (request, reply) {
            reply('GET to /user');
        }
    }, {
        method: 'POST',
        path: '/user',
        handler: function (request, reply) {
            reply('POST to /user');
        }
    }, {
        method: 'DELETE',
        path: '/user',
        handler: function (request, reply) {
            reply('DELETE to /user');
        }
    }, {
        method: 'GET',
        path: '/recipe',
        handler: function (request, reply) {
            reply('GET to /recipe');
        }
    }, {
        method: 'POST',
        path: '/recipe',
        handler: function (request, reply) {
            reply('POST to /recipe');
        }
    }, {
        method: 'DELETE',
        path: '/recipe',
        handler: function (request, reply) {
            reply('DELETE to /recipe');
        }
    }, {
        method: 'GET',
        path: '/list',
        handler: function (request, reply) {
            reply('GET to /list');
        }
    }, {
        method: 'POST',
        path: '/list',
        handler: function (request, reply) {
            reply('POST to /list');
        }
    }, {
        method: 'DELETE',
        path: '/list',
        handler: function (request, reply) {
            reply('DELETE to /list');
        }
    },

];
