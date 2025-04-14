import React from "react";
import Img1 from "../../assets/women/women5.jpg";
import Img2 from "../../assets/women/women.png";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const productData = [
  {
    id: 1,
    img: Img1,
    title: "Ethnic Wear for Women",
    rating: 5.0,
    color: "White",
  },
  {
    id: 2,
    img: Img2,
    title: "Western Apparel for Women",
    rating: 4.5,
    color: "Red",
  },
  {
    id: 3,
    img: Img3,
    title: "Premium Goggles",
    rating: 4.7,
    color: "Brown",
  },
  {
    id: 4,
    img: Img4,
    title: "Graphic Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashionable T-Shirt",
    rating: 4.5,
    color: "Pink",
  },
];

const Products = () => {
  return (
    <section className="py-14 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-sm text-primary font-medium mb-2">
            Featured Collections
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Our Curated Selection Just for You
          </h2>
          <p className="text-sm text-gray-500">
            Carefully selected pieces – from timeless elegance to contemporary fashion.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
          {productData.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 w-full max-w-[180px] text-center p-3"
            >
              <img
                src={product.img}
                alt={product.title}
                className="h-44 w-full object-cover rounded-md mb-3"
              />
              <h3 className="text-md font-semibold text-gray-800">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.color}</p>
              <div className="flex items-center justify-center gap-1 text-sm mt-1 text-gray-700">
                <FaStar className="text-yellow-400" />
                <span>{product.rating}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-medium transition duration-200 shadow">
            Explore All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
