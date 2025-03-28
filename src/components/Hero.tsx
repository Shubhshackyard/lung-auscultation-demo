import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
          <main className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl md:text-5xl">
                <span className="block">STATE GHAZIPUR HOMOEOPATHIC</span>
                <span className="block">MEDICAL COLLEGE & HOSPITAL</span>
                <span className="block text-teal-700 mt-2 text-2xl sm:text-3xl">Department of Practice of Medicine</span>
              </h1>
              
              <div className="mt-6 bg-white bg-opacity-70 rounded-lg py-4 px-6 inline-block shadow-sm">
                <h2 className="text-2xl font-semibold text-teal-800">
                  Topic - Breath Sound : <span className="font-medium">Normal & Abnormal</span>
                </h2>
              </div>
              
              <div className="mt-8 max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6 text-left">
                    <h3 className="text-lg font-medium text-teal-700 mb-3">Faculty Advisors:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Dr. Sunrita Das <span className="text-gray-500 text-sm">(Assistant Professor)</span></li>
                      <li>• Dr. Dharmesh Gujarati <span className="text-gray-500 text-sm">(Assistant Professor)</span></li>
                      <li>• Dr. R.R. Mishra <span className="text-gray-500 text-sm">(Guest Lecturer)</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 text-left">
                    <h3 className="text-lg font-medium text-teal-700 mb-3">Project Team:</h3>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-gray-700">
                      <div>• Mr. Imran Qamar Khan</div>
                      <div>• Ms. Kritika Dwivedi</div>
                      <div>• Mr. Mahendra Pratap Singh</div>
                      <div>• Ms. Sadhana Kushwaha</div>
                      <div>• Ms. Satakshi Srivastava</div>
                      <div>• Ms. Shreya Sonker</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    href="#lung-sounds" 
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-3 md:text-lg md:px-10 shadow-md transition duration-300"
                  >
                    Explore Breath Sounds
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/3">
        <div className="h-full w-full bg-teal-100 flex items-center justify-center">
          {/* Respiratory System SVG */}
          <svg className="w-64 h-64 text-teal-700" viewBox="0 0 512 512" fill="currentColor">
            {/* Trachea */}
            <path d="M256 60c-10 0-18 8-18 18v140c0 10 8 18 18 18s18-8 18-18V78c0-10-8-18-18-18z" 
                  opacity="0.9" />
            
            {/* Bronchial branches */}
            <path d="M256 200c-6 0-10 1-10 4 0 3-25 25-40 40s-35 40-35 70 15 55 30 70 35 25 55 25 40-10 55-25 30-40 30-70-20-55-35-70-40-37-40-40c0-3-4-4-10-4z" 
                  opacity="0.7" />
            <path d="M246 204c-3 3-25 25-40 40s-35 40-35 70 15 55 30 70 35 25 55 25" 
                  fill="none" stroke="currentColor" strokeWidth="10" />
            <path d="M266 204c3 3 25 25 40 40s35 40 35 70-15 55-30 70-35 25-55 25" 
                  fill="none" stroke="currentColor" strokeWidth="10" />
                  
            {/* Left lung */}
            <path d="M180 220c-40 0-70 30-80 60s-10 70 0 100 30 60 70 70 80 0 100-30c-20-25-30-60-30-100s10-75 30-100c-20-30-50-30-90 0z" 
                  opacity="0.85" />
                  
            {/* Right lung */}
            <path d="M332 220c40 0 70 30 80 60s10 70 0 100-30 60-70 70-80 0-100-30c20-25 30-60 30-100s-10-75-30-100c20-30 50-30 90 0z" 
                  opacity="0.85" />
                  
            {/* Alveoli details - small circles */}
            <circle cx="160" cy="280" r="8" />
            <circle cx="140" cy="310" r="8" />
            <circle cx="150" cy="340" r="8" />
            <circle cx="170" cy="370" r="8" />
            <circle cx="200" cy="390" r="8" />
            
            <circle cx="352" cy="280" r="8" />
            <circle cx="372" cy="310" r="8" />
            <circle cx="362" cy="340" r="8" />
            <circle cx="342" cy="370" r="8" />
            <circle cx="312" cy="390" r="8" />
            
            {/* Sound wave indicators */}
            <path d="M120 260c10 10 10 30 0 40" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.6" />
            <path d="M110 250c15 15 15 40 0 55" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.6" />
            <path d="M100 240c20 20 20 50 0 70" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.6" />
            
            <path d="M392 260c-10 10-10 30 0 40" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.6" />
            <path d="M402 250c-15 15-15 40 0 55" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.6" />
            <path d="M412 240c-20 20-20 50 0 70" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.6" />
          </svg>
        </div>
      </div>
    </div>
  )
}