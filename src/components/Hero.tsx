import Link from 'next/link'

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
          {/* Respiratory System PNG Image */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            <img 
              src="/images/lungs.png" 
              alt="Respiratory system showing lungs, bronchi, and trachea" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}