import Image from 'next/image'
import Link from 'next/link'

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Learn About Lung Auscultation
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            Educational resources for understanding breath sounds, their clinical significance, and proper auscultation techniques.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-10 p-4 bg-white rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <a href="#introduction" className="px-4 py-2 bg-teal-50 hover:bg-teal-100 rounded-md text-teal-700 transition-colors">
              Introduction to Auscultation
            </a>
            <a href="#anatomy" className="px-4 py-2 bg-teal-50 hover:bg-teal-100 rounded-md text-teal-700 transition-colors">
              Respiratory Anatomy
            </a>
            <a href="#normal" className="px-4 py-2 bg-green-50 hover:bg-green-100 rounded-md text-green-700 transition-colors">
              Normal Breath Sounds
            </a>
            <a href="#abnormal" className="px-4 py-2 bg-red-50 hover:bg-red-100 rounded-md text-red-700 transition-colors">
              Abnormal Breath Sounds
            </a>
            <a href="#technique" className="px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-md text-blue-700 transition-colors">
              Auscultation Technique
            </a>
            <a href="#clinical" className="px-4 py-2 bg-purple-50 hover:bg-purple-100 rounded-md text-purple-700 transition-colors">
              Clinical Significance
            </a>
          </div>
        </nav>

        {/* Introduction Section */}
        <section id="introduction" className="mb-16">
          <div className="flex items-center mb-4">
            <div className="bg-teal-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Introduction to Lung Auscultation</h2>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <p className="mb-4 text-gray-700">
                <span className="font-medium text-teal-700">Auscultation</span> is the act of listening to sounds within the body, typically using a stethoscope. In respiratory assessment, auscultation provides critical information about airflow through the tracheobronchial tree and the condition of surrounding lung tissue.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Historical Background</h4>
                  <p className="text-sm text-gray-700">
                    Lung auscultation was pioneered by René Laennec in 1816 when he invented the first stethoscope. Prior to this innovation, physicians would place their ear directly on the patient's chest to hear internal sounds, a practice known as immediate auscultation.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Modern Applications</h4>
                  <p className="text-sm text-gray-700">
                    Today, auscultation remains a fundamental skill in clinical practice, despite advances in imaging technology. It provides immediate information at the bedside, guides further testing, and helps monitor treatment response.
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">The Importance of Breath Sounds</h3>
              <p className="text-gray-700 mb-4">
                Breath sounds are important clinical indicators that can reveal:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Airflow patterns through the respiratory tract</li>
                <li>Presence of obstructions or narrowing in airways</li>
                <li>Accumulation of fluid or secretions in lung tissue</li>
                <li>Changes in lung density due to consolidation or collapse</li>
                <li>Inflammation of pleural membranes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Respiratory Anatomy Section */}
        <section id="anatomy" className="mb-16">
          <div className="flex items-center mb-4">
            <div className="bg-teal-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Respiratory System Anatomy</h2>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Key Anatomical Structures</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-medium text-teal-700">Upper Airway</h4>
                      <p className="text-gray-700">The upper airway consists of the nose, pharynx, and larynx. These structures warm, filter, and humidify inspired air before it enters the lower airway.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-teal-700">Trachea</h4>
                      <p className="text-gray-700">A cartilaginous tube extending from the larynx to the main bronchi, approximately 10-12 cm long in adults.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-teal-700">Bronchi and Bronchioles</h4>
                      <p className="text-gray-700">The trachea divides into right and left main bronchi, which further branch into lobar bronchi, segmental bronchi, and eventually bronchioles. This branching creates a tree-like structure known as the bronchial tree.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-teal-700">Alveoli</h4>
                      <p className="text-gray-700">Tiny air sacs (approximately 300 million per lung) where gas exchange occurs. The alveolar-capillary membrane allows oxygen to enter the bloodstream and carbon dioxide to be eliminated.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-teal-700">Lung Lobes</h4>
                      <p className="text-gray-700">The right lung has three lobes (upper, middle, lower), while the left lung has two lobes (upper and lower). The left lung also contains the cardiac notch to accommodate the heart.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-teal-700">Pleura</h4>
                      <p className="text-gray-700">A thin membrane that covers the lungs (visceral pleura) and lines the thoracic cavity (parietal pleura). The pleural cavity between these layers contains a small amount of lubricating fluid.</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-teal-50 rounded-lg p-4 flex flex-col items-center">
                    <div className="text-teal-800 mb-2 text-sm font-medium">Respiratory System</div>
                    <svg className="w-full max-w-xs text-teal-700" viewBox="0 0 512 512" fill="currentColor">
                      <path d="M256 60c-10 0-18 8-18 18v140c0 10 8 18 18 18s18-8 18-18V78c0-10-8-18-18-18z" opacity="0.9" />
                      <path d="M256 200c-6 0-10 1-10 4 0 3-25 25-40 40s-35 40-35 70 15 55 30 70 35 25 55 25 40-10 55-25 30-40 30-70-20-55-35-70-40-37-40-40c0-3-4-4-10-4z" opacity="0.7" />
                      <path d="M246 204c-3 3-25 25-40 40s-35 40-35 70 15 55 30 70 35 25 55 25" fill="none" stroke="currentColor" strokeWidth="10" />
                      <path d="M266 204c3 3 25 25 40 40s35 40 35 70-15 55-30 70-35 25-55 25" fill="none" stroke="currentColor" strokeWidth="10" />
                      <path d="M180 220c-40 0-70 30-80 60s-10 70 0 100 30 60 70 70 80 0 100-30c-20-25-30-60-30-100s10-75 30-100c-20-30-50-30-90 0z" opacity="0.85" />
                      <path d="M332 220c40 0 70 30 80 60s10 70 0 100-30 60-70 70-80 0-100-30c20-25 30-60 30-100s-10-75-30-100c20-30 50-30 90 0z" opacity="0.85" />
                    </svg>
                    <div className="text-xs text-gray-600 mt-2 text-center">Simplified representation of the respiratory system showing trachea, bronchi, and lungs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Normal Breath Sounds */}
        <section id="normal" className="mb-16">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Normal Breath Sounds</h2>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <p className="mb-6 text-gray-700">
                Normal breath sounds are categorized into three main types based on their acoustic characteristics and the location where they are best heard:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-medium text-green-800 text-lg mb-3">Vesicular Breath Sounds</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-green-700">Characteristics:</span>
                      <p className="text-sm text-gray-700">Soft, low-pitched, gentle "swooshing" sounds</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-green-700">Duration Ratio:</span>
                      <p className="text-sm text-gray-700">Inspiration is 3 times longer than expiration (3:1)</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-green-700">Best Heard:</span>
                      <p className="text-sm text-gray-700">Over most of the peripheral lung fields</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-green-700">Produced By:</span>
                      <p className="text-sm text-gray-700">Air moving through smaller airways and into alveoli</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-medium text-green-800 text-lg mb-3">Bronchial Breath Sounds</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-green-700">Characteristics:</span>
                      <p className="text-sm text-gray-700">Loud, high-pitched, hollow tubular sounds</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-green-700">Duration Ratio:</span>
                      <p className="text-sm text-gray-700">Expiration is longer than inspiration (1:2)</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-green-700">Best Heard:</span>
                      <p className="text-sm text-gray-700">Over the trachea and main bronchi (2nd-4th intercostal spaces)</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-green-700">Produced By:</span>
                      <p className="text-sm text-gray-700">Air moving through the large central airways</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-medium text-green-800 text-lg mb-3">Broncho-vesicular Sounds</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-green-700">Characteristics:</span>
                      <p className="text-sm text-gray-700">Medium-pitched sounds with intermediate qualities</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-green-700">Duration Ratio:</span>
                      <p className="text-sm text-gray-700">Equal inspiratory and expiratory phases (1:1)</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-green-700">Best Heard:</span>
                      <p className="text-sm text-gray-700">Upper anterior chest and posterior interscapular areas</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-green-700">Produced By:</span>
                      <p className="text-sm text-gray-700">Air moving through medium-sized airways</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-blue-800 mb-2">Auscultation Locations for Normal Breath Sounds</h4>
                <p className="text-gray-700 text-sm mb-3">
                  The type of breath sound you hear depends on where you place your stethoscope:
                </p>
                <ul className="list-disc pl-6 text-sm text-gray-700">
                  <li><span className="font-medium">Trachea and main bronchi:</span> Bronchial sounds</li>
                  <li><span className="font-medium">Upper anterior chest and between scapulae:</span> Broncho-vesicular sounds</li>
                  <li><span className="font-medium">Remainder of chest:</span> Vesicular sounds</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Important Notes</h4>
                <ul className="list-disc pl-6 text-sm text-gray-700">
                  <li>Normal breath sounds can vary somewhat between individuals</li>
                  <li>Intensity decreases with thick chest walls, obesity, or shallow breathing</li>
                  <li>Elderly patients typically have diminished vesicular sounds due to decreased lung elasticity</li>
                  <li>Finding bronchial sounds in peripheral lung fields indicates pathology</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Abnormal Breath Sounds */}
        <section id="abnormal" className="mb-16">
          <div className="flex items-center mb-4">
            <div className="bg-red-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Abnormal Breath Sounds</h2>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <p className="mb-6 text-gray-700">
                Abnormal breath sounds, also called adventitious sounds, are additional sounds superimposed on normal breath sounds. They indicate various respiratory pathologies:
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-red-50 p-5 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-red-800 text-lg mb-2">Wheezes</h3>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><span className="font-medium">Description:</span> Continuous, high-pitched, musical sounds resembling a whistle</p>
                        <p><span className="font-medium">Timing:</span> Primarily heard during expiration, but can occur during inspiration in severe cases</p>
                        <p><span className="font-medium">Cause:</span> Narrowed airways due to bronchoconstriction, mucosal edema, or external compression</p>
                        <p><span className="font-medium">Associated Conditions:</span> Asthma, COPD, bronchitis, allergic reactions</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 p-5 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM5.996 6.276a1 1 0 011.414-1.414l5.714 5.714-1.414 1.414L5.996 6.276z M7.41 14.138a1 1 0 001.414-1.414L7.41 11.31l1.414-1.414 2.414 2.414a1 1 0 01-1.414 1.414l-.707-.707-1.414 1.414-.293-.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-red-800 text-lg mb-2">Crackles (Rales)</h3>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><span className="font-medium">Description:</span> Discontinuous, non-musical, brief popping sounds</p>
                        <p><span className="font-medium">Timing:</span> Usually heard during inspiration</p>
                        <p><span className="font-medium">Types:</span> Fine crackles (high-pitched, brief) and coarse crackles (lower-pitched, longer)</p>
                        <p><span className="font-medium">Cause:</span> Sudden opening of previously closed small airways or air bubbling through fluid</p>
                        <p><span className="font-medium">Associated Conditions:</span> Pneumonia, pulmonary edema, pulmonary fibrosis, bronchiectasis</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 p-5 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-red-800 text-lg mb-2">Rhonchi</h3>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><span className="font-medium">Description:</span> Continuous, low-pitched, rumbling or snoring-like sounds</p>
                        <p><span className="font-medium">Timing:</span> Typically more prominent during expiration</p>
                        <p><span className="font-medium">Cause:</span> Secretions or obstruction in larger airways</p>
                        <p><span className="font-medium">Associated Conditions:</span> Chronic bronchitis, bronchiectasis, pneumonia with secretions</p>
                        <p><span className="font-medium">Note:</span> Often clear or change after coughing</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 p-5 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L12.586 9H7a1 1 0 110-2h5.586l-.293-.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-red-800 text-lg mb-2">Stridor</h3>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><span className="font-medium">Description:</span> Loud, harsh, high-pitched monophonic sound</p>
                        <p><span className="font-medium">Timing:</span> Primarily heard during inspiration</p>
                        <p><span className="font-medium">Cause:</span> Partial obstruction of the upper airway (larynx or trachea)</p>
                        <p><span className="font-medium">Associated Conditions:</span> Croup, epiglottitis, foreign body aspiration, vocal cord paralysis, laryngeal edema</p>
                        <p><span className="font-medium">Note:</span> Often audible without a stethoscope; represents a medical emergency if acute</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 p-5 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-red-800 text-lg mb-2">Pleural Rub</h3>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><span className="font-medium">Description:</span> Coarse, grating, creaking sound like leather rubbing together</p>
                        <p><span className="font-medium">Timing:</span> Heard during both inspiration and expiration</p>
                        <p><span className="font-medium">Cause:</span> Inflammation of pleural surfaces causing reduced lubrication between visceral and parietal pleura</p>
                        <p><span className="font-medium">Associated Conditions:</span> Pleurisy, pleural inflammation due to pneumonia, pulmonary infarction, or rheumatologic conditions</p>
                        <p><span className="font-medium">Note:</span> Not affected by coughing; may be painful for the patient</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2">Absent or Diminished Breath Sounds</h4>
                <p className="text-gray-700 text-sm mb-3">
                  The absence or significant reduction of breath sounds in an area where they should be heard is also abnormal and may indicate:
                </p>
                <ul className="list-disc pl-6 text-sm text-gray-700">
                  <li>Pleural effusion</li>
                  <li>Pneumothorax</li>
                  <li>Severe emphysema</li>
                  <li>Complete airway obstruction</li>
                  <li>Atelectasis (lung collapse)</li>
                  <li>Diaphragmatic paralysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Auscultation Technique */}
        <section id="technique" className="mb-16">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Proper Auscultation Technique</h2>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Preparation and Equipment</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">Stethoscope Selection</h4>
                      <ul className="list-disc pl-6 text-sm text-gray-700">
                        <li><span className="font-medium">Diaphragm:</span> Use for high-pitched sounds (normal breath sounds, wheezes, fine crackles)</li>
                        <li><span className="font-medium">Bell:</span> Use for low-pitched sounds (some rhonchi, cardiac sounds)</li>
                        <li>Ensure proper fit of earpieces (angled toward nose)</li>
                        <li>Check that tubing is not too long (ideally less than 30cm)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">Patient Preparation</h4>
                      <ul className="list-disc pl-6 text-sm text-gray-700">
                        <li>Ensure adequate exposure of chest (respect privacy)</li>
                        <li>Position patient appropriately (usually sitting upright)</li>
                        <li>Room should be quiet</li>
                        <li>Warm the stethoscope diaphragm if cold</li>
                        <li>Explain procedure to the patient</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Auscultation Process</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">Breathing Instructions</h4>
                      <ul className="list-disc pl-6 text-sm text-gray-700">
                        <li>Ask patient to breathe slightly deeper than normal</li>
                        <li>Instruct to breathe through the mouth</li>
                        <li>Do not force hyperventilation which can cause light-headedness or altered breath sounds</li>
                        <li>Listen through at least one complete respiratory cycle at each position</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">Systematic Approach</h4>
                      <ul className="list-disc pl-6 text-sm text-gray-700">
                        <li>Compare symmetrical points on both sides of the chest</li>
                        <li>Start at the apices (tops) and work downward</li>
                        <li>Follow a consistent pattern to avoid missing areas</li>
                        <li>For posterior chest: examine from apex to base, side to side</li>
                        <li>For anterior chest: examine from apex to base, side to side</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Auscultation Landmarks</h3>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 className="font-medium text-blue-800 mb-2">Anterior Chest</h4>
                    <ul className="list-disc pl-6 text-sm text-gray-700">
                      <li>Supraclavicular area: above clavicles</li>
                      <li>Infraclavicular area: below clavicles</li>
                      <li>Right middle lobe: right 4th-5th intercostal space</li>
                      <li>Left lingular area: left 4th-5th intercostal space</li>
                      <li>Lower lobes: 6th-7th intercostal spaces</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 className="font-medium text-blue-800 mb-2">Posterior Chest</h4>
                    <ul className="list-disc pl-6 text-sm text-gray-700">
                      <li>Upper lobes: above the scapular spines</li>
                      <li>Interscapular area: between scapulae</li>
                      <li>Lower lobes: below scapulae to 10th rib</li>
                      <li>Bases: lowest accessible intercostal spaces</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Lateral Chest</h4>
                    <ul className="list-disc pl-6 text-sm text-gray-700">
                      <li>Axillary region: upper portion</li>
                      <li>Mid-axillary line: 4th-6th intercostal spaces</li>
                      <li>Lower axillary region: down to 8th intercostal space</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Common Pitfalls to Avoid</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Pressing too hard with the stethoscope, which can create artifacts</li>
                    <li>Not comparing symmetrical points on both sides of the chest</li>
                    <li>Auscultating through clothing, which muffles sounds</li>
                    <li>Not allowing enough time at each location</li>
                  </ul>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Confusing transmitted sounds (e.g., voice, heart) for lung sounds</li>
                    <li>Not properly identifying anatomical landmarks</li>
                    <li>Failing to ask the patient to breathe appropriately</li>
                    <li>Rushing through the examination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Significance Section */}
        <section id="clinical" className="mb-16">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Clinical Significance</h2>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <p className="mb-6 text-gray-700">
                Breath sounds are important clinical findings that help in the diagnosis and management of various respiratory conditions. Here are some key clinical correlations:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-50 rounded-lg p-5">
                  <h3 className="font-medium text-purple-800 text-lg mb-3">Common Conditions and Their Auscultation Findings</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-purple-700">Asthma</h4>
                      <ul className="list-disc pl-6 text-sm text-gray-700">
                        <li>Expiratory wheezes throughout the lung fields</li>
                        <li>Prolonged expiratory phase</li>
                        <li>Wheezes that may clear with coughing or bronchodilator therapy</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-purple-700">Pneumonia</h4>
                      <ul className="list-disc pl-6 text-sm text-gray-700">
                        <li>Bronchial breath sounds over affected area (consolidation)</li>
                        <li>Fine crackles that do not clear with coughing</li>
                        <li>Increased vocal resonance (whispered pectoriloquy, bronchophony)</li>
                        <li>Possible pleural rub if pleural inflammation present</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-purple-700">COPD</h4>
                      <ul className="list-disc pl-6 text-sm text-gray-700">
                        <li>Generally diminished breath sounds</li>
                        <li>Prolonged expiratory phase</li>
                        <li>Wheezes and rhonchi, especially during exacerbations</li>
                        <li>Barrel chest and hyperresonance to percussion</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-purple-700">Pleural Effusion</h4>
                      <ul className="list-disc pl-6 text-sm text-gray-700">
                        <li>Diminished or absent breath sounds over fluid</li>
                        <li>Dull percussion note</li>
                        <li>Compressed lung above effusion may have bronchial breathing</li>
                        <li>Egophony ("E" to "A" change) at upper fluid level</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-purple-50 rounded-lg p-5 mb-6">
                    <h3 className="font-medium text-purple-800 text-lg mb-3">Integration with Other Clinical Data</h3>
                    
                    <p className="text-gray-700 mb-4">Auscultation findings should always be interpreted in the context of:</p>
                    
                    <ul className="list-disc pl-6 text-sm text-gray-700">
                      <li>Patient history (smoking, occupational exposures, recent illness)</li>
                      <li>Symptoms (cough, sputum production, dyspnea, fever)</li>
                      <li>Other physical exam findings (respiratory rate, work of breathing)</li>
                      <li>Vital signs (oxygen saturation, temperature)</li>
                      <li>Laboratory and imaging results when available</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-5">
                    <h3 className="font-medium text-purple-800 text-lg mb-3">Clinical Applications</h3>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-purple-700">Diagnosis</h4>
                        <p className="text-sm text-gray-700">Breath sounds help differentiate between conditions such as pneumonia, bronchitis, asthma, and COPD.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-purple-700">Monitoring</h4>
                        <p className="text-sm text-gray-700">Serial auscultation can track improvement or deterioration of respiratory conditions.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-purple-700">Response to Treatment</h4>
                        <p className="text-sm text-gray-700">Changes in breath sounds may reflect effectiveness of interventions like bronchodilators, steroids, or diuretics.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-purple-700">Patient Education</h4>
                        <p className="text-sm text-gray-700">Explaining auscultation findings helps patients understand their condition and adhere to treatment plans.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-5 rounded-lg">
                <h3 className="font-medium text-green-800 text-lg mb-3">Case Examples</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-green-700">Case 1: Asthma Exacerbation</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      A 25-year-old female presents with acute shortness of breath and wheezing. Auscultation reveals diffuse expiratory wheezes throughout all lung fields with a prolonged expiratory phase. After bronchodilator therapy, breath sounds improve with minimal wheezing.
                    </p>
                    <p className="text-sm italic text-gray-600">
                      Clinical correlation: Reversible bronchospasm consistent with asthma exacerbation.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-green-700">Case 2: Community-Acquired Pneumonia</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      A 60-year-old male presents with fever, productive cough, and right-sided chest pain. Auscultation reveals bronchial breath sounds and fine crackles in the right lower lobe with increased tactile fremitus.
                    </p>
                    <p className="text-sm italic text-gray-600">
                      Clinical correlation: Findings suggest consolidation consistent with pneumonia, later confirmed on chest X-ray.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-green-700">Case 3: Pleural Effusion</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      A 70-year-old male with heart failure presents with increasing dyspnea. Auscultation reveals absent breath sounds at the right base with dullness to percussion. Above this area, there is egophony and bronchial breathing.
                    </p>
                    <p className="text-sm italic text-gray-600">
                      Clinical correlation: Findings suggest right-sided pleural effusion with compressed lung above it, confirmed by ultrasound.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary and Resources Section */}
        <section className="mb-16">
          <div className="flex items-center mb-4">
            <div className="bg-gray-100 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Summary and Further Learning</h2>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Key Takeaways</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Lung auscultation is a fundamental clinical skill that provides valuable diagnostic information</li>
                  <li>Normal breath sounds include vesicular, bronchial, and broncho-vesicular sounds, each with distinctive characteristics</li>
                  <li>Abnormal breath sounds (wheezes, crackles, rhonchi, stridor, pleural rub) indicate specific pathological processes</li>
                  <li>A systematic approach to auscultation ensures thorough examination</li>
                  <li>Breath sounds should be interpreted in the context of the patient's clinical presentation</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Further Learning Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Recommended Reading</h4>
                    <ul className="list-disc pl-6 text-sm text-gray-700">
                      <li>Bates' Guide to Physical Examination and History Taking</li>
                      <li>Respiratory Physiology: The Essentials by John B. West</li>
                      <li>Clinical Methods: The History, Physical, and Laboratory Examinations</li>
                      <li>Auscultation Skills: Breath & Heart Sounds by Jessica Shank Coviello</li>
                      <li>Sapira's Art and Science of Bedside Diagnosis</li>
                      <li>The Principles and Practice of Medicine by William Osler</li>
                      <li>Evidence-Based Physical Diagnosis by Steven McGee</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Link href="/" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors">
                  Return to Interactive Demo
                  <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}