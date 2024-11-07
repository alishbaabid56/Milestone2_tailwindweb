import React from "react";

const About = () => {
  return (
    <div
      className="p-8 md:p-12 lg:p-16 max-w-3xl mx-auto bg-gray-950 text-white mt-8 "
      id="About"
    >
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-orange-500">
        About Us
      </h1>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300">
        Welcome to Our Restaurant, where culinary passion meets a warm, welcoming atmosphere. At our restaurant, we believe that every meal is a celebration of flavors, culture, and connection. Our journey began with a simple yet ambitious vision: to create a dining experience that goes beyond just serving food.
      </p>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 mt-4">
        Our chefs pour their heart and soul into every dish, blending fresh ingredients with creativity and a deep respect for traditional cooking techniques. We source only the finest and freshest produce, ensuring that every bite is a harmonious blend of taste and texture.
      </p>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 mt-4">
        Beyond the food, we believe in creating a space where people feel at home. Our cozy and elegant dining area is designed to offer a relaxed and inviting ambiance, perfect for conversations, laughter, and lasting memories.
      </p>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 mt-4">
        Thank you for being a part of our story. We invite you to explore our menu, savor our specialties, and immerse yourself in the spirit of [Restaurant Name]. Together, let’s make every meal an occasion to remember.
      </p>
    </div>
  );
};

export default About;