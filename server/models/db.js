const dotenv = require('dotenv')
const pg = require('pg')
const logger = require('pino')()

dotenv.config()

const pool = new pg.Pool({
    user: process.env.PG_User,
    password: process.env.PG_Password,
    host: process.env.PG_Host,
    port: process.env.PG_Port,
    database: process.env.PG_DatabaseName
})

async function initializeDatabase() {
    try {
        const client = await pool.connect()
        logger.info("Postgres database connecting...")
        return client
    }
    catch (err) {
        logger.error(`An error has occured with error output: ${err}`)
    }
}

exports.initializeDatabase = initializeDatabase