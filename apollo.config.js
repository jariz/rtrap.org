const config = require('./graphql.config.json');

module.exports = {
    client: {
        service: {
            name: 'artrap',
            url: config.schema.request.url
        }
    }
};
  