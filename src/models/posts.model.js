const db = require('../config/db');

const selectAll = async () => {
    const [rows] = await db.query(`
    SELECT
      p.id,
      p.titulo,
      p.descripcion,
      p.fecha_creacion,
      p.categoria,
      p.autor_id,
      a.nombre   AS autor_nombre,
      a.email    AS autor_email,
      a.imagen   AS autor_imagen
    FROM posts p
    JOIN autores a
      ON p.autor_id = a.id
  `);

    return rows.map(r => ({
        id: r.id,
        titulo: r.titulo,
        descripcion: r.descripcion,
        fecha_creacion: r.fecha_creacion,
        categoria: r.categoria,
        autor: {
            id: r.autor_id,
            nombre: r.autor_nombre,
            email: r.autor_email,
            imagen: r.autor_imagen
        }
    }));
};

const selectByAuthor = async (autorId) => {
    const [rows] = await db.query(
        `SELECT
       p.id,
       p.titulo,
       p.descripcion,
       p.fecha_creacion,
       p.categoria,
       a.id        AS autor_id,
       a.nombre    AS autor_nombre,
       a.email     AS autor_email,
       a.imagen    AS autor_imagen
     FROM posts p
     JOIN autores a ON p.autor_id = a.id
     WHERE p.autor_id = ?`,
        [autorId]
    );

    return rows.map(r => ({
        id: r.id,
        titulo: r.titulo,
        descripcion: r.descripcion,
        fecha_creacion: r.fecha_creacion,
        categoria: r.categoria,
        autor: {
            id: r.autor_id,
            nombre: r.autor_nombre,
            email: r.autor_email,
            imagen: r.autor_imagen
        }
    }));
};

const selectById = async (postId) => {
    const [result] = await db.query('select * from posts where id = ?', [postId]);
    if (result.length === 0) {
        return null;
    }
    return result[0];
};

const create = async ({ titulo, descripcion, categoria, autor_id }) => {
    const [result] = await db.query(
        'INSERT INTO posts (titulo, descripcion, categoria, autor_id) VALUES (?, ?, ?, ?)',
        [titulo, descripcion, categoria, autor_id]
    );
    return result;
};

module.exports = { selectAll, create, selectById, selectByAuthor };


