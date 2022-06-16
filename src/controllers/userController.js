import { User } from '../models/User.js'
import { Store } from '../models/Store.js'
import bcrypt from 'bcryptjs'

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
                password : bcrypt.hashSync(password, 10),
                avatar,

            })
            res.status(200).send({
                message: 'User created successfully',
                data: newUser
            })
        }
    } catch (error) {
        res.status(500).send({ //500 error con el servidor
            message: error.message
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
        const user = await User.findByPk(req.params.id, { include: [Store] });
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
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email: email } });
        if (user === null) {
            res.status(400).send({
                message: 'User not found'
            })
        } else {
            const passwordIsValid = bcrypt.compareSync(
                password,
                user.password
              );
            if (passwordIsValid) {
                res.status(200).send({
                    message: 'User logged successfully',
                    data: user
                })
            } else {
                res.status(401).send({
                    message: 'Wrong password'
                })
            }
        }
    } catch (error) {
        res.status(500).send({ //500 error con el servidor
            message: 'Error -> servidor'
        })
    }
}