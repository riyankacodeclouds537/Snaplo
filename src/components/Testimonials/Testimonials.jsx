import React from "react";
import Slider from "react-slick";
import Testi from "../../assets/testimonial/testimonial 1.jpg";
import Testi2 from "../../assets/testimonial/testimonial 2.jpg";
import Testi4 from "../../assets/testimonial/testimonial 4.png";
import Testi3 from "../../assets/testimonial/testimonial 3.png";

const TestimonialData = [
  {
    id: 1,
    name: "Sophia Clark, Fashion Enthusiast",
    text: "The clothing brand offers an amazing variety of clothes. I was able to find everything I needed from casual wear to formal attire, plus their electronics section is top-notch!",
    img:Testi,
  },
  {
    id: 2,
    name: "Mark Thompson, Tech Lover",
    text: "I'm so impressed by the variety of clothing available, from trendy streetwear to elegant formal outfits. Also, their selection of electronics is fantastic. A one-stop shop!",
    img: Testi4,
  },
  {
    id: 3,
    name: "Emily Roberts, Shopper Extraordinaire",
    text: "The brand has everything I need! From stylish clothes for every occasion to great electronics. The variety is endless, and the quality is outstanding.",
    img: Testi2,
  },
  {
    id: 4,
    name: "David Bennett, Happy Customer",
    text: "I love how this brand combines fashion with tech. The clothing collection is vast, and they have some really cool electronics to choose from too. Highly recommend!",
    img: Testi3,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="pb-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-lg text-primary font-semibold mb-3">
            What Our Customers Are Saying
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Customer Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our clients share their experience with the brand's variety of clothing and top-quality electronics.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {TestimonialData.map((data) => (
            <div key={data.id} className="px-4">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 h-full flex flex-col justify-between transition-transform hover:scale-105 duration-300">
                <div className="flex flex-col items-center text-center gap-6">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary"
                  />
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {data.text}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {data.name}
                  </h3>
                </div>
                <span className="absolute text-9xl text-primary/10 top-4 right-6 font-serif select-none">
                  “
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
