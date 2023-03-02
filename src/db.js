import { createPool } from "mysql2/promise";
export const pool =  createPool({
    host: 'localhost',
    user: 'root',
    password: '1007524913',
    port: 3306,
    database: 'companydb'
})