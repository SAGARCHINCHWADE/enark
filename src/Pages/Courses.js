import React from "react";

const Courses = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$19.99",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$29.99",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      <div class="col">
        <div class="card">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
            class="card-img-top"
            alt="Hollywood Sign on The Hill"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
            class="card-img-top"
            alt="Palm Springs Road"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
            class="card-img-top"
            alt="Los Angeles Skyscrapers"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
            class="card-img-top"
            alt="Skyscrapers"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/046.webp"
            class="card-img-top"
            alt="Skyscrapers"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/050.webp"
            class="card-img-top"
            alt="Skyscrapers"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
