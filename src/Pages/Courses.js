import React from "react";

import { product } from "./../List/List";

const Courses = ({onAddToCart}) => {
  console.log(product, "product");

  return (
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      {product.map((ele) => (
        <div class="col" key={ele.id}>
          <div class="card">
            <img
              src={ele.images[0]}
              class="card-img-top w-100 p-2 "
              alt="Hollywood Sign on The Hill"
            />
            <div class="card-body">
              <h5 class="card-title d-inline-block text-truncate w-100 p-3">
                {ele.title}
              </h5>
              <p class="card-text ">{ele.description}</p>
            </div>
            <button
              type="button"
              class="btn btn-default btn-sm btn btn-dark"
              onClick={() => onAddToCart(ele)}
            >
              <span
                class="glyphicon
                    glyphicon-shopping-cart"
              ></span>
              <b> Add to Cart </b>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
