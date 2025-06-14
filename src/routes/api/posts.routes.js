const { getAll, create, getByAuthor } = require('../../controllers/posts.controller');

const router = require('express').Router();

router.get('/', getAll);
router.get('/autor/:autorId', getByAuthor);

router.post('/', create);

module.exports = router;