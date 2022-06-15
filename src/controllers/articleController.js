import { Article } from '../models/Article.js'
import { Store } from '../models/Store.js'

export const getArticles = async (req, res) => {
    try {
        const articles = await Article.findAll({ include: Store })
        res.status(200).send({
            message: 'Articles retrieved successfully',
            data: articles
        })
    } catch (error) {
        res.status(500).send({ //500 error con el servidor
            message: 'Error -> servidor'
        })
    }
}
export const getArticleById = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id)
        if (article === null) {
            res.status(400).send({
                message: 'Article not found'
            })
        } else {
            res.status(200).send({
                message: 'Article retrieved successfully',
                data: article
            })
        }
    } catch (error) {
        res.status(500).send({ //500 error con el servidor
            message: 'Error -> servidor'
        })
    }
}
export const relationArticle = async (req, res) => {
    const paramsId = req.params.id
    const { id } = req.body
    const article = await Article.findByPk(paramsId)
    if (article === null) {
        res.status(400).send({
            message: 'Article not found'
        })
    } else {
        await article.addStore(id)

    }

}
export const createArticle = async (req, res) => {
    try {
        const { name, description, image, idStore, reference, stock } = req.body

        const register = await Article.findOne({ where: { name: name } })

        if (register) {
            res.status(400).send({
                message: 'Article already exists'
            })
        } else {
            const article = await Article.create({
                name,
                description,
                image,

            })
            article.addStore(idStore, { through: { reference, stock } })

            res.status(200).send({
                message: 'Article created successfully',
                data: article
            })
        }

    } catch (error) {
        res.status(500).send({ //500 error con el servidor
            message: 'Error -> servidor'
        })
    }
}
export const updateArticle = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id)
        if (article === null) {
            res.status(400).send({
                message: 'Article not found'
            })
        }
        article.update(req.body)
        res.status(200).send({
            message: 'Article updated successfully',
            data: article
        })
    } catch (error) {
        res.status(500).send({ //500 error con el servidor
            message: 'Error -> servidor'
        })
    }
}
export const deleteArticle = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id)
        if (article === null) {
            res.status(400).send({
                message: 'Article not found'
            })
        }
        article.destroy()
        res.status(200).send({
            message: 'Article deleted successfully'
        })
    } catch (error) {
        res.status(500).send({ //500 error con el servidor
            message: 'Error -> servidor'
        })
    }

}