const sequelize = require('../config/database');

const getTermsByLang = async (request, reply) => {
  try {
    const { lang } = request.params;
    const { Term } = sequelize.models; // Access model via sequelize
    
    const term = await Term.findOne({ where: { language_code: lang } });

    if (!term) {
      return reply.code(404).send({ error: 'Terms not found' });
    }

    return reply.send(term);
  } catch (error) {
    console.error('Error fetching terms:', error);
    return reply.code(500).send({ error: 'Internal Server Error' });
  }
};

const getUiTranslations = async (request, reply) => {
  try {
    const { lang } = request.params;
    // We'll query the database directly here for simplicity
    const [results] = await sequelize.query(
      'SELECT element_key, element_value FROM ui_translations WHERE language_code = :lang',
      { replacements: { lang } }
    );

    // Convert the array of objects into a single key-value object
    const translations = results.reduce((acc, item) => {
      acc[item.element_key] = item.element_value;
      return acc;
    }, {});

    return reply.send(translations);
  } catch (error) {
    console.error('Error fetching UI translations:', error);
    return reply.code(500).send({ error: 'Internal Server Error' });
  }
};

// Make sure to add it to the exports
module.exports = { getTermsByLang, getUiTranslations };