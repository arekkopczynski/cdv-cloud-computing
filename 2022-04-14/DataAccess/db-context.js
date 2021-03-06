const sql = require('mssql');
const parser = require('mssql-connection-string');

class PeopleDbContext {
    constructor(connectionString, log) {
        log("PeopleDbContext object has been created.");
        this.log = log;
        this.config = parser(connectionString);
        this.getPeople = this.getPeople.bind(this);
    }

    async getPeople() {
        this.log("getPeople function - run")
        const connection = await new sql.ConnectionPool(this.config).connect();
        const request = new sql.Request(connection);
        const result = await request.query('select * from People');
        this.log("getPeople function - done")
        return result.recordset;
    }

    async getSpecyficPeople(query) {
        this.log("getPeople function - run")
        const connection = await new sql.ConnectionPool(this.config).connect();
        const request = new sql.Request(connection);
        const result = await request.query(`select * from People WHERE PersonId = ${query.id}`);
        this.log("getPeople function - done")
        return result.recordset;
    }

    async setPeople(query){
        this.log("setPeople function - run")
        const connection = await new sql.ConnectionPool(this.config).connect();
        const request = new sql.Request(connection);
        const result = await request.query(`Insert into People values('${query.name}', '${query.surname}', '${query.nip}');`);
        this.log("setPeople function - done")
        this.log(query)
        return result.recordset;
    }
}

module.exports = PeopleDbContext;