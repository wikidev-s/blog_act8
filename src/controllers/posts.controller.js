const Post = require('../models/posts.model');
const Autor = require('../models/autores.model');

const getAll = async (req, res) => {
    const posts = await Post.selectAll();
    res.json(posts);
};

const getByAuthor = async (req, res) => {
    const { autorId } = req.params;
    if (isNaN(autorId)) {
        return res.status(400).json({ message: 'Autor debe ser un numero' });
    }
    const autor = await Autor.selectById(autorId);
    if (!autor) {
        return res.status(400).json({ message: 'Autor no encontrado' });
    }
    const postsByAuthor = await Post.selectByAuthor(autorId);
    res.json(postsByAuthor);
};


const create = async (req, res) => {
    if (isNaN(req.body.autor_id)) {
        return res.status(400).json({ message: 'Autor debe ser un numero' });
    }
    const autor = await Autor.selectById(req.body.autor_id);
    if (!autor) {
        return res.status(400).json({ message: 'Autor no encontrado' });
    }
    const result = await Post.create(req.body);
    const post = await Post.selectById(result.insertId);
    res.json(post);
};

module.exports = { getAll, create, getByAuthor };