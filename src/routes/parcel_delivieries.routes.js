import express from "express";
import {
    createParcelDelivery,
    updateParcelDelivery,
    findOneParcel,
    findAllParcels
} from '../controllers/parcel_delivery.controller.js'
import {
    createParcelDeliveryValidator,
    updateParcelDeliveryValidator
} from "../utils/validator/parcel_validator_schema.js";
import {checkSchema} from "express-validator";

const router = express.Router();

/**
 * Import Parcel Delivery Routes
 */

router.post('/create', checkSchema(createParcelDeliveryValidator), createParcelDelivery)
router.patch('/update/:id', checkSchema(updateParcelDeliveryValidator), updateParcelDelivery)
router.get('/:id', findOneParcel)
router.get('/findAll', findAllParcels)