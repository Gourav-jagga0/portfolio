export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hi, Gourav Jagga{" "}
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Backend Developer
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Results-driven and highly skilled Software Developer with over 3
              years of hands-on experience in backend development, system
              integration, and performance optimization. Proven expertise in
              designing and implementing complex modules such as Mobile Cred
              integration and advanced Spring Batch job scenarios. Adept at
              enhancing application security through configurable data masking
              solutions and other high-end security features. Demonstrated
              ability to identify and resolve 1000+ bugs using tools like
              JVisualVM, JMeter, Eclipse, MAT, and Postman, ensuring high
              performance, reliability, and user satisfaction. Known for
              delivering robust, scalable solutions in fast-paced environments.
            </p>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Get In Touch
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200">
              <img
                src="/profilepic/profile.jpg"
                alt="Profile Picture"
                className="w-full h-full object-cover"
              />
              {/* <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Your Photo</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
