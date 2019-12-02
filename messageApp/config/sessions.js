module.exports.session = {

  adapter: 'redis',
  host: process.env.REDIS_HOST || 'localhost',

};
