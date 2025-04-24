import {createId} from "@paralleldrive/cuid2";

class ParcelDelivery {
    constructor() {
        this.parcelDeliveries = []
    }

    createParcelDelivery(data) {
        const newParcelDelivery = {
            id: createId(),
            senderName: data.senderName,
            receiverName: data.receiverName,
            address: data.address,
            receiversAddress: data.receiversAddress,
            weight: data.weight,
            quotes: data.weight * 20,
            status: data.status,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        this.parcelDeliveries.push(newParcelDelivery)

        return newParcelDelivery
    }

    findOne(id) {
        return this.parcelDeliveries.find((parcel) => parcel.id === id)
    }

    findAll() {
        return this.parcelDeliveries
    }

    updateParcel(id, data) {
        const parcel = this.findOne(id)

        if(!parcel) {
            return new Error(`Parcel Delivery with this id ${id} doesn't exist`)
        }

        const index = this.parcelDeliveries.indexOf(parcel)

        this.parcelDeliveries[index].senderName = data.senderName || parcel.senderName
        this.parcelDeliveries[index].receiverName = data.receiverName || parcel.receiverName
        this.parcelDeliveries[index].address = data.address || parcel.address
        this.parcelDeliveries[index].weight = data.weight || parcel.weight
        this.parcelDeliveries[index].quotes = data.weight * 20 || parcel.weight
        this.parcelDeliveries[index].status = data.status || parcel.status
        this.parcelDeliveries[index].receiversAddress = data.receiversAddress || parcel.receiversAddress
        this.parcelDeliveries[index].updatedAt = new Date()

        return this.parcelDeliveries[index]
    }

    deleteParcel(id) {
        const parcel = this.findOne(id)

        if(!parcel) {
            return new Error(`Parcel Delivery with this id ${id} doesn't exist`)
        }

        const index = this.parcelDeliveries.indexOf(parcel)
        this.parcelDeliveries.splice(index, 1)

        return `Parcel Delivery with this id ${id} has been deleted successfully`
    }
}