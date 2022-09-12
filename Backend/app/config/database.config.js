// const Pool = require("pg").Pool;

// const pool = new Pool({ connectionString: process.env.DATABASE_URL,
//  ssl:{rejectUnauthorized:false} })

// module.exports = pool;


const {Client} = require("pg");
//const client = new Client(process.env.DB_URL);
const connectionString = 'postgres://ezcptmrbxdsdgz:adf1be95b6c4811dd927c28fe14d610c75a0e2d2c685df8a6cc10c081ac02ff1@ec2-3-224-184-9.compute-1.amazonaws.com:5432/d2t0ra90r2foc5'
 const client = new Client({
     connectionString: connectionString,
     ssl:{
         rejectUnauthorized: false //allows external access to database when using nodejs
     }
 });

module.exports = client;
