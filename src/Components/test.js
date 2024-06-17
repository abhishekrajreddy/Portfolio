import React from "react";
import axios from "axios";

function test() {
  const fetch = () => {
    const url =
      "https://s3.eu-west-1.amazonaws.com/hackajob-assets.p.hackajob/challenges/sainsbury";
    const response = axios.get(url);
    console.log(response);
    return response.data.products;
  };
  fetch();

  //   async function run(inputArray) {
  //     // Fetch the product data
  //     const products = await fetchProductData();

  //     // Create a product lookup map
  //     const productMap = {};
  //     products.forEach((product) => {
  //       productMap[product.product_uid] = product;
  //     });

  //     // Calculate the summary information
  //     const summary = {
  //       lines: [],
  //       total_item_count: 0,
  //       total: 0,
  //     };

  //     const productCounts = {};

  //     // Count the occurrences of each product UID in the input array
  //     inputArray.forEach((uid) => {
  //       if (productMap[uid]) {
  //         if (!productCounts[uid]) {
  //           productCounts[uid] = 0;
  //         }
  //         productCounts[uid]++;
  //       }
  //     });

  //     // Construct the lines array and calculate totals
  //     Object.keys(productCounts).forEach((uid) => {
  //       const quantity = productCounts[uid];
  //       const product = productMap[uid];
  //       const price = product.retail_price.price;
  //       const subtotal = quantity * price;

  //       summary.lines.push({
  //         uid,
  //         quantity,
  //         subtotal,
  //       });

  //       summary.total_item_count += quantity;
  //       summary.total += subtotal;
  //     });

  //     // Convert the summary to a JSON string
  //     return JSON.stringify(summary);
  //   }

  return <div>test</div>;
}

export default test;
