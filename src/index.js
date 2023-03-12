
import app from './app.js';
// import {pool} from './db.js'
import {PORT} from './config.js'
app.listen(PORT)
console.log("serve corriendo",PORT);
// console.log(pool.DB_PORT);