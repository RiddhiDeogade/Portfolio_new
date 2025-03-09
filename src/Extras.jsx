import React from "react";

const Extras = () => {
    return (
      <div className="bg-black text-white py-20" id="extras">
        {/* Extracurricular Activities & Achievements Section */}
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            Extracurricular Activities & Achievements
          </h2>
          <div className="flex flex-col md:flex-row items-start md:space-x-12">
            <ul className="list-disc  text-lg space-y-4 ">
              <li >
                <span className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400">
                  Systems Coordinator | Electrolitz Student Society
                </span>{" "}
                <br />
                - Coordinated software-related events & assisted in the development and maintenance of society-related digital platforms.
              </li>
              <li>
                <span className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400">Awarded a scholarship</span> <br />
                - Recognized for academic excellence in college.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Extras;
  