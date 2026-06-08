import React from "react";
import hero from "../../../assets/Hero/Home_BG.png";
import tag from "../../../assets/tag.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Small Badge */}
        {/* <div className="inline-flex items-center gap-2 border border-[#FFC107]/40 bg-[#FFC107]/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 bg-[#FFC107] rounded-full"></span>
          <span className="text-[#FFC107] text-sm font-semibold uppercase tracking-wider">
            Premium Food Experience
          </span>
        </div> */}

        {/* Heading */}
        <div className="relative inline-block">
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
            A Symphony Of
            <br />
            <span className="text-[#FFC107]">Flavours</span>
          </h1>

          <img
            src={tag}
            alt="Tag"
            className="absolute -top-6 -right-6 w-16 hidden lg:block"
          />
        </div>

        {/* Description */}
        <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed">
          Experience exceptional taste crafted with passion. Discover premium
          meals, unforgettable flavours, and a dining journey like no other.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <a
            href="#shop"
            className="px-8 py-4 rounded-full bg-[#FFC107] text-black font-bold hover:scale-105 transition-all duration-300"
          >
            Shop Now
          </a>

          <a
            href="#menu"
            className="px-8 py-4 rounded-full border border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107] hover:text-black transition-all duration-300"
          >
            View Menu
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto mt-16">
          <div>
            <h3 className="text-[#FFC107] text-3xl font-bold">500+</h3>
            <p className="text-neutral-400 text-sm">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-[#FFC107] text-3xl font-bold">50+</h3>
            <p className="text-neutral-400 text-sm">Unique Dishes</p>
          </div>

          <div>
            <h3 className="text-[#FFC107] text-3xl font-bold">4.9★</h3>
            <p className="text-neutral-400 text-sm">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
