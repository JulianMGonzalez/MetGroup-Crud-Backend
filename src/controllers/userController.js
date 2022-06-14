import { User } from '../models/User.js'
export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).send({ //500 error con el servidor
            message: 'Users retrieved successfully',
            data: users
        })
    } catch (error) {
        res.status(500).send({ //500 error con el servidor
            message: 'Error -> servidor'
        })
        next(error);
    };
}
export const createUser = async (req, res) => {
    try {
        const { name, last_name, email, password, avatar } = req.body

        const register = await User.findOne({ where: { email: email } })
        if (register) {
            res.status(400).send({
                message: 'User already exists'
            })
        } else {
            const newUser = await User.create({
                name,
                last_name,
                email,
                password,
                avatar,

            })
            res.status(200).send({
                message: 'User created successfully',
                data: newUser
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ //500 error con el servidor
            message: 'Error -> servidor'
        })
    }
}
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, last_name, password, avatar } = req.body;
        const userUpdate = await User.findByPk(id)

        userUpdate.update({
            name,
            last_name,
            password,
            avatar
        })
        if (userUpdate) {
            res.status(200).send({
                message: 'User updated successfully',
                data: userUpdate
            })
        } else {
            res.status(400).send({
                message: 'User not found'
            })
        }
    } catch (error) {
        res.status(500).send({ //500 error con el servidor
            message: 'Error -> servidor'
        })
    }

}
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const userDelete = await User.destroy({
            where: {
                id
            }
        })
        if (userDelete) {
            res.status(200).send({
                message: 'User deleted successfully',
            })
        } else {
            res.status(400).send({
                message: 'User not found'
            })
        }
    } catch (error) {
        res.status(500).send({ //500 error con el servidor
            message: 'Error -> servidor'
        })
    }


}
export const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user === null) {
            res.status(400).send({
                message: 'User not found'
            })
        } else {
            res.status(200).send({
                message: 'User retrieved successfully',
                data: user
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ //500 error con el servidor
            message: 'Error -> servidor'
        })
    }

}