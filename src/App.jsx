import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-50 border-b border-blue-900/30 bg-gray-900/90 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <div className="w-14 h-6 rounded-full flex items-center justify-center mr-3 animate-float shadow-lg shadow-blue-500/20">
                <img src="/logo.webp" alt="" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">eduansha</h1>
                <p className="text-sm text-blue-300">Coaching Center</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'courses', 'features', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="relative overflow-hidden py-2 px-1 font-medium capitalize text-white hover:text-blue-400 transition duration-300 group"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden bg-blue-900/50 p-2 rounded-lg hover:bg-blue-800/70 transition duration-300 shadow-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="bg-gray-900/95 backdrop-blur-md rounded-xl mb-4 overflow-hidden border border-blue-900/30 shadow-lg shadow-blue-500/20">
                {['home', 'about', 'courses', 'features', 'contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-5 py-3 hover:bg-blue-900/60 hover:text-blue-400 transition duration-300 border-b border-blue-900/30 last:border-0 capitalize text-white"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMTEyMjQ0Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMTQwODAiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block animate-float">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                eduansha Coaching Center
              </h1>
            </div>
            <p className="text-2xl md:text-3xl mb-8 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 italic">
              Education for All ... 
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Empowering students from 1st to 12th standard with quality education in multiple languages.
              Your success is our commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#courses" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30">
                Explore Courses
              </a>
              <a href="#contact" className="glass-effect text-blue-400 px-8 py-3 rounded-lg font-semibold transition duration-300 hover:text-blue-300 border border-blue-500/30 shadow-lg shadow-blue-500/10">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="wave absolute bottom-0 left-0 w-full"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-800 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxwYXRoIGQ9Ik0zMCAzMCBMMCAwIEwwIDYwIFoiIGZpbGw9IiMxMTIyNDQiIGZpbGwtb3BhY2l0eT0iMC4xIj48L3BhdGg+CjxwYXRoIGQ9Ik0zMCAzMCBMNjAgMCBMNjAgNjAgWiIgZmlsbD0iIzExMjI0NCIgZmlsbC1vcGFjaXR5PSIwLjEiPjwvcGF0aD4KPC9zdmc+')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-lg uppercase tracking-wider">Get to know us</span>
            <h2 className="text-5xl font-bold mt-2 mb-4 gradient-text">About Us</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="hover-card">
              <h3 className="text-2xl font-bold mb-6 text-white">Welcome to <span className="gradient-text">eduansha</span> Coaching Center</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Located in the heart of Bhusawal, eduansha Coaching Center has been a beacon of quality education,
                providing comprehensive academic support to students from 1st to 12th standard. We believe in making
                education accessible to all students, regardless of their linguistic background.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass-effect p-6 rounded-xl text-center border border-blue-500/20 shadow-lg shadow-blue-500/5">
                  <h4 className="font-bold text-blue-400">Languages</h4>
                  <p className="text-sm text-gray-300">Urdu, English, Hindi, Marathi</p>
                </div>
                <div className="glass-effect p-6 rounded-xl text-center border border-blue-500/20 shadow-lg shadow-blue-500/5">
                  <h4 className="font-bold text-blue-400">Standards</h4>
                  <p className="text-sm text-gray-300">1st to 12th</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-xl border border-blue-500/20 shadow-lg shadow-blue-500/5 hover-card">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-600/30 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-400">Our Mission</h3>
                  </div>
                  <p className="text-gray-300 ml-13 pl-0">
                    To provide quality education that nurtures academic excellence while building strong moral character
                    and critical thinking skills.
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-purple-600/30 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-purple-400">Our Vision</h3>
                  </div>
                  <p className="text-gray-300 ml-13 pl-0">
                    To be the leading educational institution in Bhusawal, known for our commitment to student success
                    and innovative teaching methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-gray-900 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMTEyMjQ0Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMTQwODAiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-lg uppercase tracking-wider">What we teach</span>
            <h2 className="text-5xl font-bold mt-2 mb-4 gradient-text">Our Courses</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive curriculum designed to excel in academics with subject-specific expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Classes 1-7 */}
            <div className="glass-effect rounded-xl hover-card border border-green-500/20 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30 animate-float">
                    <span className="text-2xl font-bold">1-7</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Classes 1st to 7th</h3>
                </div>
                <div className="space-y-4">
                  {['All Subjects', 'Foundation Building', 'Interactive Learning'].map((item, index) => (
                    <div key={index} className="flex items-center bg-green-900/20 p-3 rounded-lg">
                      <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Classes 8-10 */}
            <div className="glass-effect rounded-xl hover-card border border-blue-500/20 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30 animate-float">
                    <span className="text-2xl font-bold">8-10</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Classes 8th to 10th</h3>
                </div>
                <div className="space-y-4">
                  {['Mathematics', 'Science', 'English', 'Board Preparation'].map((item, index) => (
                    <div key={index} className="flex items-center bg-blue-900/20 p-3 rounded-lg">
                      <svg className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Classes 11-12 */}
            <div className="glass-effect rounded-xl hover-card border border-purple-500/20 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30 animate-float">
                    <span className="text-2xl font-bold">11-12</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Classes 11th & 12th</h3>
                </div>
                <div className="space-y-4">
                  {['Mathematics', 'Physics', 'Chemistry', 'Biology'].map((item, index) => (
                    <div key={index} className="flex items-center bg-purple-900/20 p-3 rounded-lg">
                      <svg className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-800 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxwYXRoIGQ9Ik0zMCAzMCBMMCAwIEwwIDYwIFoiIGZpbGw9IiMxMTIyNDQiIGZpbGwtb3BhY2l0eT0iMC4xIj48L3BhdGg+CjxwYXRoIGQ9Ik0zMCAzMCBMNjAgMCBMNjAgNjAgWiIgZmlsbD0iIzExMjI0NCIgZmlsbC1vcGFjaXR5PSIwLjEiPjwvcGF0aD4KPC9zdmc+')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-lg uppercase tracking-wider">Our advantages</span>
            <h2 className="text-5xl font-bold mt-2 mb-4 gradient-text">Why Choose Us</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover what makes eduansha Coaching Center the preferred choice for students and parents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                title: "Experienced Tutors",
                desc: "Certified and experienced faculty with proven track record",
                color: "blue"
              },
              {
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                title: "Conceptual Teaching",
                desc: "Focus on understanding concepts rather than rote learning",
                color: "green"
              },
              {
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                title: "Weekly Tests",
                desc: "Regular assessment with printed study material",
                color: "purple"
              },
              {
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                title: "Individual Attention",
                desc: "Small batch sizes ensuring personalized attention",
                color: "yellow"
              },
              {
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
                title: "Separate Girls Batch",
                desc: "Dedicated batches for girls ensuring comfortable learning",
                color: "pink"
              },
              {
                icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                title: "CCTV Security",
                desc: "Complete safety with CCTV surveillance system",
                color: "red"
              }
            ].map((feature, index) => (
              <div key={index} className="glass-effect rounded-xl hover-card border border-gray-700/80 overflow-hidden">
                <div className={`h-1 bg-gradient-to-r from-${feature.color}-400 to-${feature.color}-600`}></div>
                <div className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-500/30 to-${feature.color}-700/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-${feature.color}-500/10`}>
                    <svg className={`w-8 h-8 text-${feature.color}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className={`text-lg font-bold mb-3 text-${feature.color}-300`}>{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="glass-effect p-10 rounded-xl max-w-3xl mx-auto border border-blue-600/30 bg-gradient-to-r from-blue-900/30 to-purple-900/30 shadow-lg shadow-blue-600/10">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl shadow-blue-500/20">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">100% Result Assurance</h3>
              <p className="text-gray-300 text-lg">We guarantee your success with our proven teaching methodology and dedicated support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Faculty Section */}
      <section className="py-24 bg-gray-900 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMTEyMjQ0Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMTQwODAiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-lg uppercase tracking-wider">Timings & Faculty</span>
            <h2 className="text-5xl font-bold mt-2 mb-4 gradient-text">Meet Our Team</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Schedule */}
            <div className="glass-effect rounded-xl hover-card p-6 sm:p-8 lg:p-10 border border-blue-500/20 shadow-lg shadow-blue-500/5">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 gradient-text text-center">Batch Timings</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-blue-900/30 pb-4 space-y-3 sm:space-y-0">
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-900/30 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-gray-300 font-semibold text-base sm:text-lg">Days:</span>
                  </div>
                  <span className="text-white font-bold bg-blue-900/30 py-2 px-3 sm:px-4 rounded-lg text-sm sm:text-base ml-11 sm:ml-0">Monday to Saturday</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-blue-900/30 pb-4 space-y-3 sm:space-y-0">
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-900/30 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-300 font-semibold text-base sm:text-lg">Timings:</span>
                  </div>
                  <span className="text-white font-bold bg-blue-900/30 py-2 px-3 sm:px-4 rounded-lg text-sm sm:text-base ml-11 sm:ml-0">7:00 AM to 9:00 PM</span>
                </div>
                <div className="mt-6 sm:mt-8">
                  <div className="bg-gradient-to-r from-blue-600/50 to-purple-600/50 p-4 sm:p-6 rounded-xl border border-blue-500/30">
                    <p className="text-white text-center font-semibold text-sm sm:text-base">
                      Flexible timing options available to suit your schedule
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Faculty */}
            <div className="glass-effect rounded-xl hover-card p-6 sm:p-8 lg:p-10 border border-blue-500/20 shadow-lg shadow-blue-500/5">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 gradient-text text-center">Faculty Information</h3>

              {/* Faculty Members Grid */}
              <div className="space-y-8 lg:space-y-12">
                {/* Principal - Imran Khan */}
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-xl shadow-blue-500/20 animate-float">
                    <span className="text-lg sm:text-xl font-bold text-white">IK</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Imran Khan</h4>
                  <div className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">
                    Principal & Senior Faculty
                  </div>
                  <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">
                        <span className="text-blue-300">Qualification:</span> M.Sc. Mathematics, B.Ed.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <p className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">
                        <span className="text-blue-300">Contact:</span>
                        <a href="tel:9975298134" className="text-blue-400 hover:text-blue-300 ml-1 hover:underline">
                          9975298134
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto"></div>

                {/* Assistant Teacher - Wasim Khan */}
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-xl shadow-green-500/20 animate-float">
                    <span className="text-lg sm:text-xl font-bold text-white">WK</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Wasim Khan Sir</h4>
                  <div className="inline-block bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">
                    Assistant Teacher & NEET Tutor
                  </div>
                  <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">
                        <span className="text-green-300">Qualification:</span> M.Sc., B.Ed.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <p className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">
                        <span className="text-green-300">School:</span> Alfalah Urdu High School & Jr. College, Muktainagar
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <p className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">
                        <span className="text-green-300">Contact:</span>
                        <a href="tel:9665656570" className="text-green-400 hover:text-green-300 ml-1 hover:underline">
                          9665656570
                        </a>
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">
                        <span className="text-green-300">Email:</span>
                        <a href="mailto:eduansha@gmail.com" className="text-green-400 hover:text-green-300 ml-1 hover:underline">
                          eduansha@gmail.com
                        </a>
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 p-3 rounded-lg border border-green-500/20 mt-3">
                      <p className="text-green-300 text-xs sm:text-sm font-medium">
                        🎯 Specialized NEET Preparation Tutor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-800 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxwYXRoIGQ9Ik0zMCAzMCBMMCAwIEwwIDYwIFoiIGZpbGw9IiMxMTIyNDQiIGZpbGwtb3BhY2l0eT0iMC4xIj48L3BhdGg+CjxwYXRoIGQ9Ik0zMCAzMCBMNjAgMCBMNjAgNjAgWiIgZmlsbD0iIzExMjI0NCIgZmlsbC1vcGFjaXR5PSIwLjEiPjwvcGF0aD4KPC9zdmc+')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-lg uppercase tracking-wider">Get in touch</span>
            <h2 className="text-5xl font-bold mt-2 mb-4 gradient-text">Contact Us</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Get in touch with us to start your educational journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="glass-effect rounded-xl p-8 border border-blue-500/20 hover-card shadow-lg shadow-blue-500/5">
              <h3 className="text-2xl font-bold mb-8 gradient-text">Get In Touch</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 border border-blue-500/20">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Address</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Azad Nagar, near Maniyar Hall,<br />
                      opp. Bohra Kabristan, Khadka Road,<br />
                      Bhusawal
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 border border-blue-500/20">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Phone</h4>
                    <a href="tel:9975298134" className="text-blue-400 hover:text-blue-300 text-lg hover:underline">
                      9975298134
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 border border-blue-500/20">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Website</h4>
                    <a href="https://www.eduansha.com" className="text-blue-400 hover:text-blue-300 text-lg hover:underline" target="_blank" rel="noopener noreferrer">
                      www.eduansha.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-effect rounded-xl p-8 border border-blue-500/20 hover-card shadow-lg shadow-blue-500/5">
              <h3 className="text-2xl font-bold mb-8 gradient-text">Send us a Message</h3>
              <form className="space-y-5">
                <div>
                  <label className="text-blue-300 block mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full p-3 bg-gray-900/50 text-white rounded-lg border border-blue-500/30 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="text-blue-300 block mb-2 font-medium">Your Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full p-3 bg-gray-900/50 text-white rounded-lg border border-blue-500/30 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="text-blue-300 block mb-2 font-medium">Your Phone</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full p-3 bg-gray-900/50 text-white rounded-lg border border-blue-500/30 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="text-blue-300 block mb-2 font-medium">Class Interested In</label>
                  <select className="w-full p-3 bg-gray-900/50 text-white rounded-lg border border-blue-500/30 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400">
                    <option value="">Select Class</option>
                    <option value="1-7">Classes 1st to 7th</option>
                    <option value="8-10">Classes 8th to 10th</option>
                    <option value="11-12">Classes 11th to 12th</option>
                  </select>
                </div>
                <div>
                  <label className="text-blue-300 block mb-2 font-medium">Your Message</label>
                  <textarea
                    placeholder="Type your message here..."
                    rows="4"
                    className="w-full p-3 bg-gray-900/50 text-white rounded-lg border border-blue-500/30 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-lg font-semibold transition duration-300 shadow-lg shadow-blue-500/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 pt-16 pb-10 border-t border-blue-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-blue-500/20 animate-float">
                <span className="text-2xl font-bold">EA</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">eduansha</h3>
                <p className="text-blue-300">Coaching Center</p>
              </div>
            </div>

            <p className="text-xl text-blue-300 mb-8 font-semibold">Education for All</p>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full mx-auto mb-8"></div>

            <div className="flex space-x-6 mb-10">
              <a href="#" className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center hover:bg-blue-800/50 transition duration-300">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center hover:bg-blue-800/50 transition duration-300">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center hover:bg-blue-800/50 transition duration-300">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>

            <p className="text-gray-400 text-center mb-6">
              © {new Date().getFullYear()} eduansha Coaching Center.<br />All rights reserved.
            </p>

            <p className="text-blue-800 text-xs">
              Designed with ❤️ for quality education
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
