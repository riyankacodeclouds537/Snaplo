import React from "react";
import BannerImg from "../../assets/women/women8.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const features = [
  {
    icon: <GrSecure />,
    label: "Quality Products",
    bg: "bg-violet-100",
  },
  {
    icon: <IoFastFood />,
    label: "Fast Delivery",
    bg: "bg-orange-100",
  },
  {
    icon: <GiFoodTruck />,
    label: "Easy Payment Method",
    bg: "bg-green-100",
  },
  {
    icon: <GiFoodTruck />,
    label: "Exclusive Offers",
    bg: "bg-yellow-100",
  },
];

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-16 px-4 sm:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div data-aos="zoom-out" className="flex justify-center">
            <img
              src={BannerImg}
              alt="Winter Collection"
              className="w-full max-w-[420px] h-[350px] object-cover rounded-xl shadow-xl"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center gap-6">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight"
            >
              Winter Sale up to <span className="text-primary">50% Off</span>
            </h1>

            <p
              data-aos="fade-up"
              className="text-sm sm:text-base text-gray-600 leading-relaxed"
            >
              Discover the latest trends and cozy styles this winter. Shop now and enjoy up to 50% off on select items across fashion, accessories, and more.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="flex items-center gap-4"
                >
                  <div
                    className={`text-2xl sm:text-3xl h-12 w-12 flex items-center justify-center rounded-full shadow-md ${feature.bg}`}
                  >
                    {feature.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {feature.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
