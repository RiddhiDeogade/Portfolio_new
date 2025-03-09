import React from "react";
import AboutImage from "../assets/about_rd_image.png";


const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-6">
  <p className="text-lg mb-8">
    I am a passionate Java developer with a focus on building modern and 
    responsive web applications. With a strong foundation in both frontend 
    and backend technologies, I strive to create seamless and efficient 
    user experiences.
  </p>

  {/* Education Section */}
  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2">
    Education
  </h3>
  <p className="text-lg">
    <span className="font-bold">Ramdeobaba University, Nagpur (2022 - 2026)</span> <br />
    - Electronics and Computer Science Engineering [CGPA: 9.01]<br/>
    -<span className="font-bold">Minors Degree:</span> Information Technology
  </p>

<br/><br/><br/>       
            <div className="space-y-4">
  <div className="flex items-center">
    <label htmlFor="htmlandcss" className="w-2/12">HTML & CSS</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
      transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
    </div>
  </div>

  <div className="flex items-center">
    <label htmlFor="java" className="w-2/12">Java</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
      transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
    </div>
  </div>

  <div className="flex items-center">
    <label htmlFor="javascript" className="w-2/12">JavaScript</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
      transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
    </div>
  </div>

  <div className="flex items-center">
    <label htmlFor="python" className="w-2/12">Python</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
      transform transition-transform duration-300 hover:scale-105 w-5/12"></div>
    </div>
  </div>

  <div className="flex items-center">
    <label htmlFor="hibernate" className="w-2/12">Hibernate</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
      transform transition-transform duration-300 hover:scale-105 w-7/12"></div>
    </div>
  </div>

  <div className="flex items-center">
    <label htmlFor="react" className="w-2/12">React</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
      transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
    </div>
  </div>

    <div className="flex items-center">
    <label htmlFor="mysql" className="w-2/12">MySQL</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
      transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
    </div>
  </div>

  <div className="flex items-center">
    <label htmlFor="springboot" className="w-2/12">Spring Boot</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
      transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
    </div>
  </div>

  <div className="flex items-center">
    <label htmlFor="competitive" className="w-2/12">Competitive Programming</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
      transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
    </div>
  </div>

  <div className="flex items-center">
    <label htmlFor="github" className="w-2/12">GitHub</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
      transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
    </div>
  </div>

  <div className="flex items-center">
    <label htmlFor="timemanagement" className="w-2/12">Time Management</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
      transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
    </div>
  </div>

  <div className="flex items-center">
    <label htmlFor="communication" className="w-2/12">Communication Skills</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
      transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
    </div>
  </div>

  <div className="flex items-center">
    <label htmlFor="fastlearner" className="w-2/12">Fast Learner</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
      transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
    </div>
  </div>
</div>


            {/* <div className="mt-12 flex justify-between text-center">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        3+
                    </h3>
                    <p>Years Experience</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        50+
                    </h3>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        10+
                    </h3>
                    <p>Happy Clients</p>
                </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
