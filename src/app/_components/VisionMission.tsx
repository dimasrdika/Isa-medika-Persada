import { FaEye, FaBullseye, FaUsers } from "react-icons/fa"; // Example icons
import Image from "next/image";

const MissionVisionCulture = () => {
  return (
    <div className="text-center py-24" id="vision">
      <h2 className="text-4xl font-bold text-primary mb-8">
        Our Mission, Vision, and Culture
      </h2>
      <div className="flex flex-wrap justify-center cursor-pointer mb-10">
        {[
          {
            icon: <FaEye size={40} className="mb-4 text-primary" />,
            title: "Vision",
            description:
              "To become a reliable partner in pharmaceutical materials and medical devices.",
          },
          {
            icon: <FaBullseye size={40} className="mb-4 text-primary" />,
            title: "Mission",
            description:
              "We are a family that collaborates to provide and improve the quality of medical devices, ensuring fast delivery and quality service.",
          },
          {
            icon: <FaUsers size={40} className="mb-4 text-primary" />,
            title: "Culture",
            description:
              "We prioritize honest and transparent collaboration, fair treatment, a positive mindset, and continuous learning to be the best.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-xl m-4 w-full sm:w-1/3 max-w-xs transition-transform transform hover:scale-105 duration-300"
          >
            {item.icon}
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVisionCulture;
