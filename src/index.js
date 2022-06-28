import app from './app.js'
import { sequelize } from './database/database.js'


const port = process.env.Port || 5432

async function main() {
  try{
    await sequelize.sync({ force: false })
    app.listen(port)
    console.log(`Server listening on port ${port}`)

  } catch (error) {
    console.error('Unable to connect to the database: ', error)
  }
 
}

main()


