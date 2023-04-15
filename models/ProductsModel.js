import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please Enter Product Name']
        },
        quantity: {
            type: Number,
            required: false,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: false
        }
        // ,
        // user_id: {
        //     type: mongoose.Types.ObjectId,
        //     required: true
        // },
    },
    {
        timestamps: true,
    }

)
const Product = mongoose.model('Product', ProductSchema);
export default Product