module.exports = {

  client: {

  },

  server: {

    database: {
      host: process.env.POSTGRES_PORT_5432_TCP_ADDR,
      user: 'postgres',
      password: 'postgres',
      database: 'postgres',
      charset: 'utf8'
    }

  }

}
