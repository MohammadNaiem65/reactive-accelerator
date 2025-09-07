import mongoose, { Schema, Types } from 'mongoose';

const bookingSchema = new Schema({
    hotelId: {
        required: true,
        type: Types.ObjectId,
        ref: 'hotels',
    },
    userId: {
        required: true,
        type: Types.ObjectId,
        ref: 'users',
    },
    checkin: {
        required: true,
        type: String,
    },
    checkout: {
        required: true,
        type: String,
    },
});

export const Booking =
    mongoose.models.bookings ?? mongoose.model('bookings', bookingSchema);
