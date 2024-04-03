const { httpClientPlugin } = require('../plugins/http-client-plugin');
const { getAge } = require('../plugins/get-age.plugin');
const { uuidv4 } = require('../plugins/get-uuid.plugin');
const buildLogger = require('../plugins/logger.plugin');


module.exports = {
    getAge,
    uuidv4,
    httpClientPlugin,
    buildLogger
}
