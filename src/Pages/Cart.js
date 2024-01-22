import React, { useState } from "react";

const Cart = ({ cartItems }) => {
  const [cartList, setCartItem] = useState(cartItems);
  let totelCartPrise = 0;

  const handleRemove = (removeId) => {
    const newList = cartList.filter((item) => item.id !== removeId);
    setCartItem(newList);
  };
  cartList.map((ele) => {
    totelCartPrise += ele.price;
  });
 
    return (
      <section className="h-100 h-custom p-3 mb-2 bg-secondary text-white">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-20">
              <div className="card card-registration card-registration-2 border-radius: 15px">
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </h1>
                          <h6 className="mb-0 text-muted">
                            cart items {cartList.length}
                          </h6>
                        </div>
                        <hr className="my-4" />
                        {cartList.map((ele) => (
                          <div
                            key={ele.id}
                            className="row mb-2 d-flex justify-content-between align-items-center"
                          >
                            <div className="col-md-4 col-lg-4 col-xl-4">
                              <img
                                src={ele.images[0]}
                                className="img-fluid rounded-2"
                                alt="Cotton T-shirt"
                              />
                            </div>
                            <div className="col-md-4 col-lg-4 col-xl-3">
                              <h6 className="text-muted col-15 text-truncate">
                                {ele.title}
                              </h6>
                            </div>
                            <div className="col-md-4 col-lg-2 col-xl-3">
                              <h6 className="text-muted">${ele.price}</h6>
                            </div>

                            <div>
                              <button
                                type="button"
                                class="btn btn-dark"
                                onClick={() => handleRemove(ele.id)}
                              >
                                Remove
                              </button>
                            </div>
                            <hr className="my-4" />
                          </div>
                        ))}

                        <div className="pt-5">
                          <h6 className="mb-0">
                            <a href="#!" className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2"></i>
                              Back to shop
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-light text-black">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />
                        {cartList.map((ele) => (
                          <div className="d-flex justify-content-between mb-5">
                            <h5 className="text-uppercase col-8 text-truncate">
                              {ele.title}
                            </h5>
                            <h5>${ele.price}</h5>
                          </div>
                        ))}

                        <hr className="my-4" />

                        <h5 className="text-uppercase mb-3">Give code</h5>

                        <div className="mb-5">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Examplea2"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="form3Examplea2">
                              Enter your code
                            </label>
                          </div>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>{totelCartPrise}</h5>
                        </div>

                        <button
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  
};

export default Cart;
