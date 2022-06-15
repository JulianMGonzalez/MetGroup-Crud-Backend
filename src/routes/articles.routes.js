import { Router } from 'express'
import { createArticle, deleteArticle, getArticleById, getArticles, updateArticle } from '../controllers/articleController.js'

const router = Router()

router.get('/article', getArticles)
router.get('/article/:id', getArticleById)
router.post('/article', createArticle)
router.put('/article/:id', updateArticle)
router.delete('/article/:id', deleteArticle)

export default router