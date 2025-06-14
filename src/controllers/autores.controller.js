const Autor = require('../models/autores.model');

const getAll = async (req, res) => {
    const [autores] = await Autor.selectAll();
    res.json(autores);
};

const create = async (req, res) => {
    const result = await Autor.insert(req.body);
    const autor = await Autor.selectById(result.insertId);
    res.json(autor);
}

module.exports = { getAll, create };