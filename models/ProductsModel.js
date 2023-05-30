
import mongoose from "mongoose";
import slug from 'mongoose-slug-generator';
mongoose.plugin(slug);
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
        },
        slug: {
            type: String,
            slug: 'name',
            unique: true
        }
        // user_id: {
        //     type: mongoose.Types.ObjectId,
        //     required: true
        // },
    },
    {
        timestamps: true,
    }

)
ProductSchema.pre("create", function (next) {
    this.slug = this.name.split(" ").join("-");
    next();
});
const Product = mongoose.model('Product', ProductSchema);
export default Product