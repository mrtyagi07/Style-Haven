import connectDb from "../../middleware/mongoose";

import Product from "../../models/Product";
console.log(Product);

const handler = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export default connectDb(handler);
