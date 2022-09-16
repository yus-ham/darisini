import { Database } from 'bun:sqlite';
// import knex from 'knex'; 

export default function({connection, client}) {
    if (client !== 'sqlite3') {
        return knex({connection, client})
    }

    const db = new Database(connection.filename);

    db.raw = function(sql, values=[]) {
        console.info(`sql:\n`, values.length ? values.reduce((sql, v) => sql.replace('?', typeof v === 'string' ? `'${v.replace(/\'/g,"\\'")}'` : v), sql) : sql, `\nvalues:`, values)
        const stmt = db.query(sql)
        return Promise.resolve(stmt.all.apply(stmt, values))
    }

    return db;
}
