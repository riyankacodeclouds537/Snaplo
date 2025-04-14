import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Designed for comfort and everyday elegance, our casual wear collection blends style and function effortlessly.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description:
      "Elevate your wardrobe with vibrant prints and breathable fabric—ideal for both office and weekend outings.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women's Shirt",
    description:
      "Tailored to perfection, this women's shirt delivers a flattering fit with premium fabric that lasts.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="py-12 px-4 md:px-0">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary font-medium">
            Top Rated Products for You
          </p>
          <h2 data-aos="fade-up" className="text-4xl font-bold mt-2">
            Best Products
          </h2>
          <p
            data-aos="fade-up"
            className="text-sm text-gray-500 mt-3 leading-relaxed"
          >
            Discover our handpicked selection of best-selling items—crafted with
            care, designed for comfort, and loved by customers.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="group relative rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 max-w-xs w-full"
            >
              {/* Image */}
              <div className="flex justify-center transform -translate-y-10">
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
                />
              </div>

              {/* Content */}
              <div className="px-6 pb-6 text-center -mt-8">
                {/* Rating */}
                <div className="flex justify-center mb-2 gap-1 text-yellow-500">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
                  {data.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 line-clamp-2">
                  {data.description}
                </p>

                <button
                  onClick={handleOrderPopup}
                  className="mt-4 inline-block bg-primary text-white px-5 py-1.5 rounded-full text-sm font-medium hover:bg-white hover:text-primary border border-primary transition duration-300"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
