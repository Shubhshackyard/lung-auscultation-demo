import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About This Project
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            Learn about our mission to improve auscultation education and the team behind this interactive learning tool.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About the Project */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="bg-teal-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Project Overview</h2>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-6 md:p-8">
              <p className="mb-6 text-gray-700 leading-relaxed">
                The Lung Auscultation Interactive Demo is an educational project developed by students of State Ghazipur Homoeopathic Medical College & Hospital under the guidance of faculty from the Department of Practice of Medicine. This web-based application aims to provide an accessible, interactive platform for medical students to learn about normal and abnormal breath sounds.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium text-teal-700 mb-4">Our Mission</h3>
                  <p className="text-gray-700 mb-6">
                    Our mission is to create an intuitive, comprehensive educational resource that helps medical students and healthcare professionals master the skill of lung auscultation through interactive learning and audio demonstrations.
                  </p>
                  
                  <h4 className="font-medium text-gray-900 mb-2">Project Goals:</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li>Provide high-quality audio examples of various breath sounds</li>
                    <li>Create an interactive interface for exploring lung anatomy and auscultation points</li>
                    <li>Deliver comprehensive educational content on auscultation techniques</li>
                    <li>Enable direct comparison between normal and abnormal breath sounds</li>
                    <li>Make respiratory assessment education more accessible and engaging</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-medium text-teal-700 mb-4">Project Timeline</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Research Phase</h4>
                      <p className="text-sm text-gray-700">Collection and curation of breath sound samples, literature review, and consultation with faculty experts.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Development Phase</h4>
                      <p className="text-sm text-gray-700">Design and implementation of the interactive web application with focus on educational value and user experience.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Validation Phase</h4>
                      <p className="text-sm text-gray-700">Testing with students and faculty to ensure accuracy of content and effectiveness of the learning tools.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Deployment Phase</h4>
                      <p className="text-sm text-gray-700">Public release of the application as an educational resource for medical students and healthcare professionals.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Meet the Team */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Meet the Team</h2>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium text-blue-700 mb-4">Faculty Advisors</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                        <span className="text-blue-700 font-medium text-lg">SD</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Dr. Sunrita Das</h4>
                        <p className="text-gray-600">Assistant Professor, Department of Practice of Medicine</p>
                        <p className="text-sm text-gray-500 mt-1">State Ghazipur Homoeopathic Medical College & Hospital</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                        <span className="text-blue-700 font-medium text-lg">DG</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Dr. Dharmesh Gujarati</h4>
                        <p className="text-gray-600">Assistant Professor, Department of Practice of Medicine</p>
                        <p className="text-sm text-gray-500 mt-1">State Ghazipur Homoeopathic Medical College & Hospital</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                        <span className="text-blue-700 font-medium text-lg">RM</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Dr. R.R. Mishra</h4>
                        <p className="text-gray-600">Guest Lecturer, Department of Practice of Medicine</p>
                        <p className="text-sm text-gray-500 mt-1">State Ghazipur Homoeopathic Medical College & Hospital</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-blue-700 mb-4">Student Project Team</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                      <div className="bg-teal-100 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                        <span className="text-teal-700 font-medium">SS</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Ms. Shreya Sonker</h4>
                        <p className="text-sm text-gray-500">Project Lead</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-teal-100 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                        <span className="text-teal-700 font-medium">IQ</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Mr. Imran Qamar Khan</h4>
                        <p className="text-sm text-gray-500">Project Coordinator</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-teal-100 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                        <span className="text-teal-700 font-medium">KD</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Ms. Kritika Dwivedi</h4>
                        <p className="text-sm text-gray-500">Educational Design</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-teal-100 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                        <span className="text-teal-700 font-medium">MS</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Mr. Mahendra Pratap Singh</h4>
                        <p className="text-sm text-gray-500">Content Developer</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-teal-100 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                        <span className="text-teal-700 font-medium">SK</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Ms. Sadhana Kushwaha</h4>
                        <p className="text-sm text-gray-500">Academic Research</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-teal-100 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                        <span className="text-teal-700 font-medium">SS</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Ms. Satakshi Srivastava</h4>
                        <p className="text-sm text-gray-500">Sound Curator</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technology & Implementation */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Technology & Implementation</h2>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium text-purple-700 mb-4">Technical Approach</h3>
                  <p className="text-gray-700 mb-4">
                    This interactive learning application was developed using modern web technologies to ensure accessibility across multiple devices and platforms.
                  </p>
                  
                  <h4 className="font-medium text-gray-900 mb-2">Key Technologies:</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li>Next.js framework for optimized rendering and navigation</li>
                    <li>React.js for interactive user interface components</li>
                    <li>TailwindCSS for responsive design and styling</li>
                    <li>Web Audio API for high-quality sound processing</li>
                    <li>SVG graphics for interactive anatomical visualizations</li>
                  </ul>
                  
                  <h4 className="font-medium text-gray-900 mb-2">Audio Processing:</h4>
                  <p className="text-gray-700">
                    Breath sound recordings were digitally processed to remove ambient noise while preserving the characteristic acoustic features essential for clinical education. All sounds were validated by experienced clinicians for accuracy.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-purple-700 mb-4">Methodology</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Sound Collection</h4>
                      <p className="text-sm text-gray-700">Breath sounds were recorded using high-fidelity stethoscopes in clinical settings with patient consent. Additional reference recordings were sourced from verified medical education libraries.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Educational Design</h4>
                      <p className="text-sm text-gray-700">The application follows evidence-based educational principles, focusing on comparison learning, interactive exploration, and immediate feedback to enhance retention.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">User Testing</h4>
                      <p className="text-sm text-gray-700">Multiple iterations of user testing with medical students and faculty guided refinements to ensure intuitive navigation and educational effectiveness.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-800 mb-2">Accessibility Considerations</h4>
                      <ul className="list-disc pl-6 text-sm text-gray-700">
                        <li>Visual cues complement audio examples for multi-sensory learning</li>
                        <li>Text descriptions provide context for all audio content</li>
                        <li>Responsive design ensures usability across devices and screen sizes</li>
                        <li>Keyboard navigation supported for all interactive elements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Acknowledgments & Contact */}
        <section>
          <div className="flex items-center mb-6">
            <div className="bg-yellow-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Acknowledgments & Contact</h2>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium text-yellow-700 mb-4">Acknowledgments</h3>
                  <p className="text-gray-700 mb-4">
                    We extend our sincere gratitude to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li>The administration of State Ghazipur Homoeopathic Medical College & Hospital for their support</li>
                    <li>The Department of Practice of Medicine for technical guidance</li>
                    <li>Volunteer patients who consented to breath sound recordings</li>
                    <li>Medical education experts who reviewed our content</li>
                    <li>Beta testers who provided valuable feedback</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                  Special thanks to <a href="https://linksta.cc/@hackyard" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:underline">Mr. Shubhi Satvik</a> for their collaboration and expertise in Technology.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-yellow-700 mb-4">Contact Information</h3>
                  <p className="text-gray-700 mb-6">
                    For questions, feedback, or collaboration opportunities regarding this project, please contact us:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="mt-1 mr-3 text-yellow-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Email</h4>
                        <p className="text-gray-600">help@shmcgz.ac.in</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-3 text-yellow-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Phone</h4>
                        <p className="text-gray-600">(+91) 982 700 4022</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-3 text-yellow-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Address</h4>
                        <p className="text-gray-600">State Ghazipur Homoeopathic Medical College & Hospital</p>
                        <p className="text-gray-600">Department of Practice of Medicine</p>
                        <p className="text-gray-600">Ghazipur, Uttar Pradesh</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <Link 
                      href="/" 
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
                    >
                      Return to Interactive Demo
                      <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}