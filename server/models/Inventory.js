import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    scientificName: String,
    category: {
        type: String,
        enum: ['Raw Herb', 'Dried Root', 'Seed', 'Oil Extract', 'Flower', 'Processed', 'Oil', 'Capsule', 'Other'],
        default: 'Raw Herb'
    },
    description: String,
    image: String, // URL or path
    stock: {
        type: Number,
        default: 0
    },
    unit: {
        type: String,
        default: 'kg'
    },
    pricePerUnit: Number,
    expiryDate: Date,
    rating: {
        type: Number,
        default: 4.5 // Default high rating for natural products
    },
    numReviews: {
        type: Number,
        default: 0
    },
    estimatedDelivery: {
        type: String,
        default: '2-4 Business Days'
    },
    salesCount: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

const Inventory = mongoose.model('Inventory', inventorySchema);
export default Inventory;
