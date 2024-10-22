import { FaEye, FaBullseye, FaUsers } from "react-icons/fa"; // Example icons

const MissionVisionCulture = () => {
  return (
    <div className="text-center py-16" id="vision">
      <h2 className="text-4xl font-bold text-primary mb-8">
        Our Mission, Vision, and Culture
      </h2>
      <div className="flex flex-wrap justify-center cursor-pointer">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-xl m-4 w-full sm:w-1/3 max-w-xs transition-transform transform hover:scale-105 duration-300">
          <FaEye size={40} className="mb-4 text-primary" />
          <h3 className="text-2xl font-semibold">Vision</h3>
          <p className="text-gray-700">
            To become a reliable partner in pharmaceutical materials and medical
            devices.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-xl m-4 w-full sm:w-1/3 max-w-xs transition-transform transform hover:scale-105 duration-300">
          <FaBullseye size={40} className="mb-4 text-primary" />
          <h3 className="text-2xl font-semibold">Mission</h3>
          <p className="text-gray-700">
            We are a family that collaborates to provide and improve the quality
            of medical devices, ensuring fast delivery and quality service.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-xl m-4 w-full sm:w-1/3 max-w-xs transition-transform transform hover:scale-105 duration-300">
          <FaUsers size={40} className="mb-4 text-primary" />
          <h3 className="text-2xl font-semibold">Culture</h3>
          <p className="text-gray-700">
            We prioritize honest and transparent collaboration, fair treatment,
            a positive mindset, and continuous learning to be the best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionCulture;
