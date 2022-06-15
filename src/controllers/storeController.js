import { Store } from '../models/Store.js'
import { User } from '../models/User.js'

export const getStores = async (req, res) => {
    try {
        const stores = await Store.findAll({ include: User })
        res.status(200).send({ 
            message: 'Stores retrieved successfully',
            data: stores
        })
    } catch (error) {
        res.status(500).send({ //500 error con el servidor
            message: 'Error -> servidor'
        })
    }
} 
export const getStoreById = async (req, res) => {
    try {
        const store = await Store.findByPk(req.params.id)
        if (store === null) {
            res.status(400).send({
                message: 'Store not found'
            })
        } else {
            res.status(200).send({
                message: 'Store retrieved successfully',
                data: store
            })
        }
    } catch (error) {
        res.status(500).send({ //500 error con el servidor
            message: 'Error -> servidor'
        })
    }
}
export const createStore = async (req, res) => {
    try {
        const store = await Store.create(req.body)
        res.status(200).send({
            message: 'Store created successfully',
            data: store
        })
    } catch (error) {
        res.status(500).send({ //500 error con el servidor
            message: 'Error -> servidor'
        })
    }
}
export const updateStore = async (req, res) => {
    try {
        const store = await Store.findByPk(req.params.id)
        if (store === null) {
            res.status(400).send({
                message: 'Store not found'
            })
        }
        store.update(req.body)
        res.status(200).send({
            message: 'Store updated successfully',
            data: store
        })
    } catch (error) {
        res.status(500).send({ //500 error con el servidor
            message: 'Error -> servidor'
        })
    }
}
export const deleteStore = async (req, res) => {
    try {
        const store = await Store.findByPk(req.params.id)
        if (store === null) {
            res.status(400).send({
                message: 'Store not found'
            })
        }
        store.destroy()
        res.status(200).send({
            message: 'Store deleted successfully'
        })
    } catch (error) {
        res.status(500).send({ //500 error con el servidor
            message: 'Error -> servidor'
        })
    }
}