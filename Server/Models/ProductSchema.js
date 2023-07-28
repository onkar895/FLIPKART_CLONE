import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  desc: String,
  discount: String,
  tagline: String
})

const Product = mongoose.model('product', ProductSchema)

export default Product
