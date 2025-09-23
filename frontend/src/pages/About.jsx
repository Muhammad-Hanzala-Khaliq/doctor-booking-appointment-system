import React from 'react'
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500 ">
        <p>
          About <span className="text-gray-700 font-medium">Us</span>
        </p>
      </div>

      <div className="my-10 flex flex-col  md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            iste quo explicabo enim aut culpa, commodi vero sed saepe voluptas?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            cupiditate veniam pariatur neque, a possimus temporibus voluptatum
            saepe obcaecati, deleniti molestiae. Illo quibusdam magnam numquam
            alias rerum cum maxime magni?
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
            doloremque! Quibusdam porro deserunt voluptate accusamus.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          Why <span className="text-gray-700 font-semibold">Chose</span> Us
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 border-gray-300 cursor-pointer">
          <b>Efficency:</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
            itaque!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 border-gray-300 cursor-pointer">
          <b>Convenince:</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
            aperiam!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 border-gray-300 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            eius.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About