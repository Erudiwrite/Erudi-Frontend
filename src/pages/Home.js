import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css'
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

// Sample papers data
const samplePapers = [
  {
    title: "Sample Paper Title 1",
    description: "Brief description or excerpt of the paper.",
  },
  {
    title: "Sample Paper Title 2",
    description: "Brief description or excerpt of the paper.",
  },
  {
    title: "Sample Paper Title 3",
    description: "Brief description or excerpt of the paper.",
  },
  {
    title: "Sample Paper Title 4",
    description: "Brief description or excerpt of the paper.",
  },
  {
    title: "Sample Paper Title 5",
    description: "Brief description or excerpt of the paper.",
  },
];

const SamplePaperCard = ({ title, description, onClick }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-80 bg-white p-4 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={onClick}
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold text-darkbrown mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Home = () => {
  const [selectedPaper, setSelectedPaper] = useState(null);

  const handlePaperClick = (paper) => {
    setSelectedPaper(paper);
  };

  return (
    <div className="p-4 bg-beige min-h-screen">
      {/* Hero Section */}
      <section className="bg-lightbrown text-center p-10 md:p-20 lg:p-44 rounded-lg shadow-lg relative overflow-hidden">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-lightbrown opacity-30 animate-fadeIn" />

  {/* Decorative Floating Elements */}
  <div className="absolute -top-10 -left-10 w-16 h-16 md:w-32 md:h-32 bg-darkbrown rounded-full opacity-20 animate-float" />
  <div className="absolute -bottom-10 -right-10 w-16 h-16 md:w-32 md:h-32 bg-darkbrown rounded-full opacity-20 animate-float" />

  {/* Inspirational Quote */}
  <div className="absolute top-2 md:top-4 left-0 right-0 text-center text-gray-600 text-lg md:text-xl italic opacity-50 animate-fadeIn animate-delay-300">
    <p>
      "The art of writing is the art of discovering what you believe." -
      Gustave Flaubert
    </p>
  </div>

  {/* Main Heading */}
  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-darkbrown relative z-10 mb-4 md:mb-4 animate-slideIn">
    Welcome to Erudi Write
  </h1>

  {/* Subheading */}
  <p className="text-base md:text-lg text-darkbrown relative z-10 mb-4 md:mb-6 animate-slideIn animate-delay-200">
    Professional Writing Services to Meet Your Needs
  </p>

  {/* Call to Action */}
  <div className="mb-6 md:mb-8 animate-fadeIn animate-delay-400">
    <h2 className="text-2xl md:text-4xl font-semibold text-darkbrown mb-2">
      Hire Expert Writers for Your Projects
    </h2>
    <p className="text-sm md:text-md text-gray-700 mb-4 md:mb-6">
      Discover a wide range of expertly written papers ready for immediate
      use or hire our skilled writers to craft personalized content
      tailored to your needs.
    </p>
    <button className="bg-darkbrown text-white py-2 px-4 rounded-full shadow-md hover:bg-brown transition duration-300 transform hover:scale-105">
      Contact Us Now
    </button>
  </div>

  {/* Portfolio */}
  <div className="mb-6 md:mb-8 animate-fadeIn animate-delay-600">
    <h2 className="text-2xl md:text-3xl font-semibold text-darkbrown mb-4">
      Our Portfolio
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {/* Paper 1 */}
      <div className="bg-white rounded-lg p-4 md:p-6 shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-slideUp">
        <h3 className="text-lg md:text-2xl font-bold text-darkbrown mb-2">
          Business Analysis Report
        </h3>
        <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-4">
          An in-depth analysis of market trends and consumer behavior to
          guide strategic decision-making.
        </p>
        <a href="#" className="text-brown font-semibold hover:underline">
          View Details
        </a>
      </div>

      {/* Paper 2 */}
      <div className="bg-white rounded-lg p-4 md:p-6 shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-slideUp animate-delay-200">
        <h3 className="text-lg md:text-2xl font-bold text-darkbrown mb-2">
          Research Paper on Artificial Intelligence
        </h3>
        <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-4">
          A comprehensive research paper exploring the latest advancements
          in AI and their implications.
        </p>
        <a href="#" className="text-brown font-semibold hover:underline">
          View Details
        </a>
      </div>

      {/* Paper 3 */}
      <div className="bg-white rounded-lg p-4 md:p-6 shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-slideUp animate-delay-400">
        <h3 className="text-lg md:text-2xl font-bold text-darkbrown mb-2">
          Marketing Strategy for Startups
        </h3>
        <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-4">
          A detailed marketing plan designed specifically for startups
          looking to establish a strong market presence.
        </p>
        <a href="#" className="text-brown font-semibold hover:underline">
          View Details
        </a>
      </div>
    </div>
  </div>

  {/* Services Offered */}
  <div className="mb-6 md:mb-8 animate-fadeIn animate-delay-800">
    <h2 className="text-2xl md:text-3xl font-semibold text-darkbrown mb-4 md:mb-6">
      Services We Offer
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {/* Service Card 1 */}
      <div className="bg-white rounded-lg p-4 md:p-6 shadow-md hover:shadow-xl transition-shadow duration-300 animate-fadeIn animate-delay-1000">
        <h3 className="text-lg md:text-xl font-bold text-darkbrown mb-2">
          Custom Writing
        </h3>
        <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-4">
          Get tailored content crafted to your specifications.
        </p>
        <a href="#" className="text-brown font-semibold hover:underline">
          Learn More
        </a>
      </div>

      {/* Service Card 2 */}
      <div className="bg-white rounded-lg p-4 md:p-6 shadow-md hover:shadow-xl transition-shadow duration-300 animate-fadeIn animate-delay-1200">
        <h3 className="text-lg md:text-xl font-bold text-darkbrown mb-2">
          Editing and Proofreading
        </h3>
        <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-4">
          Perfect your documents with our expert editing services.
        </p>
        <a href="#" className="text-brown font-semibold hover:underline">
          Learn More
        </a>
      </div>

      {/* Service Card 3 */}
      <div className="bg-white rounded-lg p-4 md:p-6 shadow-md hover:shadow-xl transition-shadow duration-300 animate-fadeIn animate-delay-1400">
        <h3 className="text-lg md:text-xl font-bold text-darkbrown mb-2">
          Research Assistance
        </h3>
        <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-4">
          Comprehensive research support for academic and business
          projects.
        </p>
        <a href="#" className="text-brown font-semibold hover:underline">
          Learn More
        </a>
      </div>
    </div>
  </div>

  {/* Testimonials */}
  <div className="my-6 md:my-8 animate-fadeIn animate-delay-1600">
    <h2 className="text-2xl md:text-3xl font-semibold text-darkbrown mb-4 md:mb-6">
      What Our Clients Say
    </h2>
    <p className="text-sm md:text-base text-gray-700">
      "The quality of work provided by Erudi Write exceeded my
      expectations. I highly recommend their services!"
    </p>
  </div>

  {/* Floating Elements */}
  <div className="absolute -bottom-16 right-0 w-16 h-16 md:w-32 md:h-32 bg-darkbrown rounded-full opacity-20 animate-float animate-delay-1800" />
</section>





      <section className="my-12 text-center">
        {/* Sample Writing Papers */}
        <motion.div
          className="mt-12 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-darkbrown mb-4">
            Sample Writing Papers
          </h2>
          <div className="relative flex space-x-6 overflow-x-auto pb-4">
            {/* Custom Scroll Bar */}
            <style>
              {`
                ::-webkit-scrollbar {
                  height: 8px;
                }
                ::-webkit-scrollbar-thumb {
                  background-color: #d1d5db;
                  border-radius: 10px;
                }
                ::-webkit-scrollbar-track {
                  background: transparent;
                }
              `}
            </style>
            {samplePapers.map((paper, index) => (
              <SamplePaperCard
                key={index}
                title={paper.title}
                description={paper.description}
                onClick={() => handlePaperClick(paper)}
              />
            ))}
          </div>
        </motion.div>

        {/* Modal for displaying the selected paper */}
        {selectedPaper && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                onClick={() => setSelectedPaper(null)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <h3 className="text-xl font-semibold text-darkbrown mb-4">
                {selectedPaper.title}
              </h3>
              <p className="text-gray-600 mb-4">{selectedPaper.description}</p>
              <p className="text-gray-800">
                The history of AI can be traced back to the 1950s when computer
                scientists began to explore the idea of creating machines that
                could think and learn like humans. Alan Turing, a British
                mathematician, is often considered the father of AI for his
                development of the Turing Test, a method for determining whether
                a machine can exhibit human-like intelligence. Early AI research
                focused on symbolic reasoning and problem-solving, leading to
                the development of programs that could perform simple tasks like
                playing chess or solving mathematical problems. However,
                progress was slow due to limited computing power and the lack of
                large datasets.
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};



export default Home;

