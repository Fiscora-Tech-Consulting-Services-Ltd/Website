import React, { useState } from "react";

import { Element } from "react-scroll";
import Footer from "./Footer";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    topic: "",
    projectIdea: "",
    budget: "",
    email: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your request has been received.");
  };
  return (
    <Element name="MainContact ">
      {/* Contact Us Container */}
      <div className="flex justify-center relative sm:z-auto z-10 md:z-10  sm:pt-0 pt-20 pb-20 font-Kanit  ">
        {" "}
        {/* Main container */}
        <div className="rounded-2xl border-[1px] border-[#eee] flex flex-col sm:px-8 px-5 justify-start lg:h-[650px] md:h-[650px]  w-[400px] sm:w-full lg:w-[900px]  sm:p-16 pb-1  lg:pb-[39px] backdrop-blur-md bg-[rgba(43,43,43,0.26)] ">
          {" "}
          {/* container */}
          <h2 className="text-center text-white font-Kanit font-semibold text-[25px] sm:text-[35px] pb-8">
            Hello, Fiscora Team!
          </h2>
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name & Company */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col w-full">
                <label className="text-white sm:text-2xl text-lg">
                  My Name is
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-b-2 bg-transparent text-white text-sm p-2 focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="text-white sm:text-2xl text-lg">from</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="border-b-2 bg-transparent text-white text-sm p-2 focus:outline-none"
                  placeholder="Your website or company name"
                  required
                />
              </div>
            </div>

            {/* Discussion Topic */}
            <div className="flex flex-col">
              <label className="text-white sm:text-2xl text-lg">
                I'd like to discuss
              </label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="border-b-2 bg-transparent text-white text-sm p-2 focus:outline-none"
                required
              >
                <option value="" className="text-gray-600">
                  Select a Topic
                </option>
                <option value="cloud" className="font-Kanit">
                    Software to Cloud
                  </option>
                  <option value="web" className="font-Kanit">
                    Web Application
                  </option>
                  <option value="saas" className="font-Kanit">
                    SaaS
                  </option>
                  <option value="mobile" className="font-Kanit">
                    Mobile
                  </option>
                  <option value="others" className="font-Kanit">
                    Others
                  </option>
              </select>
            </div>

            {/* Project Idea */}
            <div className="flex flex-col">
              <label className="text-white sm:text-2xl text-lg">
                Project Idea & Design Brief
              </label>
              <textarea
                name="projectIdea"
                value={formData.projectIdea}
                onChange={handleChange}
                rows={3}
                className="border-b-2 bg-transparent text-white text-sm p-2 focus:outline-none"
                placeholder="Describe your project idea (optional)"
              ></textarea>
            </div>

            {/* Budget */}
            <div className="flex flex-col">
              <label className="text-white sm:text-2xl text-lg">
                A Budget for this project is
              </label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="border-b-2 bg-transparent text-white text-sm p-2 focus:outline-none"
                placeholder="Enter your budget"
              />
            </div>

            {/* Contact Email */}
            <div className="flex flex-col">
              <label className="text-white sm:text-2xl text-lg">
                Contact me back at
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-b-2 bg-transparent text-white text-sm p-2 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="w-32 h-32 text-lg font-bold text-white uppercase transition-all duration-700 border-2 border-white rounded-full bg-[#16212E] hover:text-black hover:bg-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </Element>
  );
};

export default Contactus;
