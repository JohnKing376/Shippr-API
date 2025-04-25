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
            message: 'Parcel Delivery created successfully',
            status: 201,
            parcelDelivery: deliveryParcel
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
          message: 'Parcel Delivery updated successfully',
          status: 200,
          parcelDelivery: parcelDelivery
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

export const findOneParcel = (req,  res) => {
    try {
        const { id } = req.params
        const parcel  = parcelModel.findOne(id)

        if(!parcel) {
            return res.status(404).json({
                message: 'Parcel Delivery not found',
                status: 404,
            })
        }

        res.status(200).json({
            message: 'Fetched Parcel Delivery Successfully',
            status: 200,
            parcelDelivery: parcel
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

export const findAllParcels = (req, res) => {
  try {
      const parcels = parcelModel.findAll()

      res.status(200).json({
          message: 'Parcel Delivery List Fetched Successfully',
          status: 200,
          parcels: parcels
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