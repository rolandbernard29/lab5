const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "i5x1cqhq5xbqtv00.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "sb010a3jt4gkuyvm",
    password: "wd3atfozibs4jnca",
    database: "i2uh1thihi27fiw3"
});

module.exports = pool;
