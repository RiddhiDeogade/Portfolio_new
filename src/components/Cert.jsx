import React from "react";

const Certs = [
  {
    id: 1,
    title: "Mentorship at Persistent Systems Ltd. (28 November’24 to 28 January’25)",
    description: "https://drive.google.com/file/d/1UxYR61PZHm43cR1cW8MDqWDBV1t27sjg/view?usp=sharing",
  },
  {
    id: 2,
    title: "Cisco Computer Network Certification",
    description: "https://drive.google.com/file/d/1gzb45-o4_3-0qyELIrrLYoZ6u78eWZgW/view?usp=sharing",
  },
  {
    id: 3,
    title: "NPTEL Online Certification in Software Testing",
    description: "https://drive.google.com/file/d/1t39768ltt8tuhriJp4Yr1P80Qr2XS3eg/view?usp=sharing",
  },
  {
    id: 4,
    title: "Databases for Developers: Foundations by Oracle Corporation",
    description: "https://drive.google.com/file/d/17k6LbeFVtILZYiP9qgoVJb4WIKzcy6M6/view",
  },
  {
    id: 5,
    title: "Introduction to Web Development with HTML, CSS & JS",
    description: "https://drive.google.com/file/d/18WYHSLZ6APT7Jp5syNS-SXJGPqH4JLJX/view?usp=sharing",
  },
];

const Cert = () => {
  return (
    <div className="bg-black text-white py-20" id="cert">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Certs.map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {cert.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {cert.title}
              </h3>
              <a
                href={cert.description}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-green-000 hover:text-blue-500"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cert; 
