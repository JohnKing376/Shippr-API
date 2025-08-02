import userModel from '../models/users.js'
import {validationResult} from "express-validator";

export const createUser = (req, res) => {
    try {
        /*
        Validation
         */
            const result = validationResult(req)

            if(!result.isEmpty())  {
                return  res.status(400).send({
                    status_code: 400,
                    status: 'VALIDATION_ERROR',
                    message: result,
                })

            }

        const {firstName, lastName, password} = req.body

        const user = userModel.createUser({firstName, lastName, password})

         res.status(201).json({
            status_code: 201,
            status: 'CREATED',
            message: 'User created successfully.',
            user: user
        })
    } catch (error) {
        res.status(500).json({
            status_code: 500,
            status: 'ERROR',
            message: `Something went wrong`,
            error: error
        })
    }
}

export const updateUser = (req, res) => {
    try {

        const result = validationResult(req)

        if(!result.isEmpty())  {
            return  res.status(400).send({
                status_code: 400,
                status: 'VALIDATION_ERROR',
                message: result,
            })

        }

        const { id } = req.params

        const {firstName, lastName, password} = req.body

        const user = userModel.update(id, {firstName, lastName, password})

        res.status(200).json({
            status_code: 200,
            status: 'SUCCESS',
            message: 'User updated successfully.',
            user: user
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            status_code: 500,
            status: 'ERROR',
            message: `Internal Server Error`,
            error: error
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
            status_code: 200,
            status: 'OK',
            message: 'Fetched User Successfully',
            user: user
        })
    } catch (error) {
        res.status(500).json({
            status_code: 500,
            status: 'ERROR',
            message: `Internal Server Error`,
            error: error
        })
    }
}


export const getAllUsers = (req, res) => {
    try {
        const users = userModel.findAll()

        res.status(200).json({
            status_code: 200,
            status: 'SUCCESS',
            message: 'User List Fetched Successfully',
            users: users,
        })
    } catch(error) {
        res.status(500).json({
            status_code: 500,
            status: 'ERROR',
            message: `Internal Server Error`,
            error: error
        })
    }
}

export const deleteOne = (req, res) => {
  try {

      const { id } = req.params

      const user = userModel.findOne(id)

      if(!user) {
          return res.status(404).json({
              status_code: 404,
              status: 'NOT_FOUND',
              message: `User with this id ${id} does not exist`,
          })
      }
      userModel.delete(user.id)

      res.status(200).json({
          status_code: 200,
          status: 'OK',
          message: 'User deleted successfully.',
          deletedUser: user
      })
  } catch (error) {
      res.status(500).json({
          status_code: 500,
          status: 'ERROR',
          message: `Internal Server Error`,
          error: error
      })
  }
}