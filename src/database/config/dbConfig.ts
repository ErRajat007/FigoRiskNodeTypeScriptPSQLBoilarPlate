import { Sequelize } from "sequelize";

// Connection parameters
export const sequelize = new Sequelize('FIGO_Risk','postgres', 'Qwe@123', {dialect : 'postgres', host : 'localhost', port : 5432})

sequelize.authenticate().then(() => {
    console.log(`Database connected to discover`)
}).catch((err:any) => {
    console.log(err)
})




// with URI
// const sequelize = new Sequelize(process.env.POSTGRESQL_DB_URI)