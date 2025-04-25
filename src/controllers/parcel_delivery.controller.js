import parcelModel from '../models/parcel-delivery.js'
import parcelDelivery from "../models/parcel-delivery.js";
import {validationResult} from "express-validator";

export const createParcelDelivery =  (req, res) => {
    try {
        const result = validationResult(req)

        if(!result.isEmpty())  {
            return  res.status(400).send({
                status_code: 400,
                status: 'VALIDATION_ERROR',
                message: result,
            })

        }

        const {senderName, receiverName, address, receiversAddress, weight, status} = req.body

        const deliveryParcel = parcelModel.createParcelDelivery({senderName, receiverName, address, receiversAddress, weight, status})
        res.status(201).json({
            status_code: 201,
            status: 'SUCCESS',
            message: 'Parcel Delivery created successfully',
            parcelDelivery: deliveryParcel
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

export const updateParcelDelivery = (req, res) => {
  try {
      const result = validationResult(req)

      if(!result.isEmpty())  {
          return  res.status(400).send({
              status_code: 400,
              status: 'VALIDATION_ERROR',
              message: result,
          })

      }

      const {id, senderName, receiverName, address, receiversAddress, weight, status} = req.body

      const parcel = parcelModel.findOne(id)

      if(!parcel) {
          return res.status(404).json({
              message: 'Parcel Delivery not found',
              status: 404,
          })
      }

      parcelDelivery.updateParcel(parcel.id, {senderName, receiverName, address, receiversAddress, weight, status})

      res.status(200).json({
          status_code: 200,
          status: 'SUCCESS',
          message: 'Parcel Delivery updated successfully',
          parcelDelivery: parcelDelivery
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

export const findOneParcel = (req,  res) => {
    try {
        const { id } = req.params
        const parcel  = parcelModel.findOne(id)

        if(!parcel) {
            return res.status(404).json({
                status_code: 404,
                status: 'NOT_FOUND',
                message: 'Parcel Delivery not found',
            })
        }

        res.status(200).json({
            status_code: 200,
            status: 'SUCCESS',
            message: 'Fetched Parcel Delivery Successfully',
            parcelDelivery: parcel
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

export const findAllParcels = (req, res) => {
  try {
      const parcels = parcelModel.findAll()

      res.status(200).json({
          message: 'Parcel Delivery List Fetched Successfully',
          status: 200,
          parcels: parcels
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