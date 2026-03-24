import { useEffect } from "react";
import About1 from "../assets/About1.png";
import About2 from "../assets/About2.png";
import About3 from "../assets/About3.png";
import About4 from "../assets/About4.png";
import About5 from "../assets/about5.png";

import Review1 from "../assets/RE2.png";
import Review2 from "../assets/RE5.png";
import Review3 from "../assets/RE6.png";
import Review4 from "../assets/RE8.png";
import ReviewImage from "../assets/ReviewImage2.png";

import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

function About() {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); 
    }, []);
  return (
    <div className="min-h-screen text-white px-4 sm:px-8 lg:px-20 py-30">

      
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-black">
          Hot hotel <span className="text-red-600">Offers</span> Right now
        </h1>
        <p className="text-blue-800 font-bold">See more deals →</p>
      </div>

      
      <div className="flex gap-5 overflow-x-auto scroll-smooth pb-4 mt-8">

        {[About1, About2, About3, About4, About5].map((img, index) => (
          <div
            key={index}
            className="bg-gray-200 min-w-[240px] sm:min-w-[260px] rounded-xl shrink-0"
          >
            <img
              src={img}
              className="h-40 w-full object-cover rounded-t-xl transition hover:scale-105 duration-300"
              alt="hotel"
            />
            <div className="p-3 text-black mt-2 hover:scale-95 transition duration-300 hover:bg-blue-200 rounded-xl">
              <p className="font-bold text-lg">The Hotel O</p>
              <p className="text-gray-500 text-sm">Delhi, India</p>
              <div className="flex gap-1 items-center">
                <button className="h-5 w-12 bg-lime-600 text-white text-sm rounded-2xl">
                  9.0
                </button>
                <p>Excellent</p>
              </div>
              <p className="text-gray-400 text-sm">Hotel site</p>
              <p className="font-bold text-xl">
                ₹899 <span className="text-sm text-gray-500">per night</span>
              </p>
              <button className="bg-red-400 text-white px-2 text-sm rounded-md">
                29% OFF
              </button>
              <p className="text-sm">Feb 10 - Feb 12</p>
            </div>
          </div>
        ))}

      </div>

      
      <div className="mt-16">
        <h1 className="text-center text-black text-2xl sm:text-3xl font-serif font-bold">
          What our customer says
        </h1>

        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[Review1, Review2, Review3, Review4, Review1, Review2, Review3, Review4].map((img, index) => (
            <div
              key={index}
              className="bg-gray-200 text-black rounded-2xl p-4 min-h-[240px]"
            >
              <div className="flex gap-3">
                <img src={img} className="h-10 w-10 rounded-full" alt="review" />
                <div>
                  <p className="font-bold">Customer {index + 1}</p>
                  <div className="flex text-amber-500 items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    {index % 2 === 0 ? <FaStarHalfStroke /> : <FaRegStar />}
                    <p className="text-gray-400 text-sm ml-2">3 days Ago</p>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm">
                Booking was fast and hassle-free, with detailed room descriptions provided.
              </p>
              <p className="mt-2 text-sm text-gray-400">Posted on</p>
              <h1 className="text-xl text-blue-600 font-bold">Facebook</h1>
            </div>
          ))}

        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-200 px-6 py-2 text-black rounded-xl">
            Learn more
          </button>
        </div>
      </div>

      
      <div className="flex flex-col lg:flex-row items-center justify-between mt-20 gap-10">

        <div>
          <h1 className="text-purple-700 text-3xl sm:text-4xl lg:text-6xl font-serif font-bold">
            Customer Reviews
          </h1>
          <p className="text-gray-500 mt-6 max-w-xl">
            The hotel provides comfortable rooms with modern amenities,
            including Wi-Fi, air conditioning, and flat-screen TVs.
            Guests can enjoy on-site dining, fitness center, and spa services.
          </p>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full mt-5">
            Learn More
          </button>
        </div>

        <img
          src={ReviewImage}
          className="w-full max-w-[600px] h-auto rounded-xl"
          alt="review"
        />
      </div>

    </div>
  );
}

export default About;
