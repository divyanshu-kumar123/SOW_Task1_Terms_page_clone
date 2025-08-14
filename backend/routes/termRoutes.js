const termsController = require('../controllers/termsController');

async function routes(fastify, options) {
  fastify.get('/api/terms/:lang', termsController.getTermsByLang);
  fastify.get('/api/translations/:lang', termsController.getUiTranslations);
}

module.exports = routes;