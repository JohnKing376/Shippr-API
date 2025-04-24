import userModel from '../models/users.js'

export const createUser = (req, res) => {
    try {
        const {firstName, lastName, password} = req.body

        if(!firstName || !lastName || !password) {
            return res.status(400).json({'message': 'All fields are required'})
        }

        const user = userModel.createUser({firstName, lastName, password})

         res.status(201).json({
            message: 'User created successfully.',
            status: 201,
            user: user
        })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            message: `Something went wrong`,
            status: 500,
            error: e
        })
    }
}

export const updateUser = (req, res) => {
    try {
        const {id, firstName, lastName, password} = req.body

        if(!firstName || !lastName || !password) {
            return res.status(400).json({'message': 'All fields are required'})
        }

        const user = userModel.update(id, {firstName, lastName, password})

        res.status(200).json({
            message: 'User updated successfully.',
            status: 200,
            user: user
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({
            message: `Internal Server Error`,
            status: 500,
            error: err
        })
    }
}

export const getUserById = (req, res) => {
    try {
        const { id } = req.params

        const user = userModel.findOne(id)

        if(!user) {
            return res.status(404).json({
                message: `User with this id ${id} does not exist`,
                status: 404,
            })
        }

        res.status(200).json({
            message: 'Fetched User Successfully',
            status: 200,
            user: user
        })
    } catch (err) {
        res.status(500).json({
            message: `Internal Server Error`,
            status: 500,
            error: err
        })
    }
}


export const getAllUsers = (req, res) => {
    try {
        const users = userModel.findAll()

        res.status(200).json({
            message: 'User List Fetched Successfully',
            status: 200,
            users: users,
        })
    } catch(err) {
        res.status(500).json({
            message: `Internal Server Error`,
            status: 500,
            error: err
        })
    }
}

export const deleteOne = (req, res) => {
  try {
      const { id } = req.params

      const user = userModel.findOne(id)

      if(!user) {
          return res.status(404).json({
              message: `User with this id ${id} does not exist`,
              status: 404,
          })
      }
      userModel.delete(user.id)

      res.status(200).json({
          message: 'User deleted successfully.',
          status: 200,
          deletedUser: user
      })
  } catch (err) {
      res.status(500).json({
          message: `Internal Server Error`,
          status: 500,
          error: err
      })
  }
}