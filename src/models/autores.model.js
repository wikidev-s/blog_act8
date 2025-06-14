const db = require('../config/db');

const selectAll = async () => {
    const autores = await db.query('select * from autores');
    return autores
};

const selectById = async (autorId) => {
    const [result] = await db.query('select * from autores where id = ?', [autorId]);
    if (result.length === 0) {
        return null;
    }
    return result[0];
};

const insert = async ({ nombre, email, imagen }) => {
    const [resultado] = await db.query(`insert into autores (nombre, email, imagen) values (?, ?, ?)`, [nombre, email, imagen]);
    return resultado;
};

module.exports = { selectAll, insert, selectById };