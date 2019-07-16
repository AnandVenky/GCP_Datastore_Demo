const mysql = require('mysql');

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});


if (process.env.NODE_ENV === 'production') {
    mysqlConfig.socketPath = `/cloudsql/${connectionName}`;
}

let mysqlPool;

// creates a database while this app initializes
exports.populateDatabase = (req, res) => {
    if (!mysqlPool) {
        mysqlPool = mysql.createPool(mysqlConfig);
    }

    mysqlPool.query('CREATE TABLE customers (Id int NOT NULL AUTO_INCREMENT,Name VARCHAR(255), email VARCHAR(255), age INT(100)' +
        'entryID INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(entryID));' +
        'INSERT INTO customers (Name, email, age) values (`Jhon`, `jhon@doe.com`, 31);' +
        'INSERT INTO customers (Name, email, age) values (`Anand`, `anandvenkatarama@gmail.com`, 24);' +
        'INSERT INTO customers (Name, email, age) values (`Peter`, `peter@top.com`, 65);' +
        'INSERT INTO customers (Name, email, age) values (`Eva`, `eva@design.com`, 24);' +
        'INSERT INTO customers (Name, email, age) values (`Nabhya`, `Nabhya@hammer.com`, 40);', (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send(err);
            } else {
                res.send(JSON.stringify(results));
            }
        });

};



connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as thread id: ' + connection.threadId);
});

module.exports = connection;