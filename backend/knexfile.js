// Update with your config settings.
// npx knex migrate:latest --env production

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'controletarefa',
      user: 'root',
      password: 'mm1234mm1234',
    },

    migrations: {
      directory: './src/database/migrations'
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      host: 'controletarefa.cb8wpsrs2beg.us-east-2.rds.amazonaws.com',
      database: 'controletarefa',
      user:     'marquissantos',
      password: 'mm1234mm1234',
      timeout: 100000
    },

    migrations: {
      directory: './src/database/migrations'
    },
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'controletarefa.cb8wpsrs2beg.us-east-2.rds.amazonaws.com',
      database: 'controletarefa',
      user:     'marquissantos',
      password: 'mm1234mm1234',
      timeout: 100000
    },

    migrations: {
      directory: './src/database/migrations'
    },
  }

};