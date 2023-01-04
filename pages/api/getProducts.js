import connectDb from "../../middleware/mongoose";

import Product from "../../models/Product";

const handler = async (req, res) => {
  try {
    const products = await Product.find();
    let tshirts = {};
    for (let item of products) {
      if (item.title in tshirts) {
        if (
          !tshirts[item.title].color.includes(item.color) &&
          tshirts[item.title].availableQty > 0
        ) {
          tshirts[item.title].color.push(item.color);
        }
        if (
          !tshirts[item.title].size.includes(item.size) &&
          item.availableQty > 0
        ) {
          tshirts[item.title].size.push(item.size);
        }
      } else {
        tshirts[item.title] = JSON.parse(JSON.stringify(item));
        if (item.availableQty > 0) {
          tshirts[item.title].color = [item.color];
          tshirts[item.title].size = [item.size];
        }
      }
    }

    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        tshirts,
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
