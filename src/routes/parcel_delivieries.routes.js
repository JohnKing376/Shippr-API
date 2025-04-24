import express from "express";
import {
    createParcelDelivery,
    updateParcelDelivery,
    findOneParcel,
    findAllParcels
} from '../controllers/parcel_delivery.controller.js'

const router = express.Router();

/**
 * Import Parcel Delivery Routes
 */

router.post('/create', createParcelDelivery)
router.patch('/update/:id', updateParcelDelivery)
router.get('/:id', findOneParcel)
router.get('/findAll', findAllParcels)