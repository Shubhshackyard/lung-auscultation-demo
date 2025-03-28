'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import AudioPlayer from '@/components/AudioPlayer'
import LungVisualizer from '@/components/LungVisualizer'
import { useAudio } from '@/context/AudioContext'

// Define the Sound type that matches AudioPlayer's requirements
type Sound = {
  id: string;
  title: string;
  description: string;
  audioSrc: string;
  category: "normal" | "abnormal";
  location: string;
}

// Define our lung sound data
const lungSounds: Sound[] = [
  {
    id: 'vesicular',
    title: 'Vesicular',
    description: 'Soft, low-pitched sound heard when listening over most lung fields. Inspiratory phase is longer than expiratory phase.',
    audioSrc: '/audio/normal-breath.mp3',
    category: 'normal',
    location: 'Most peripheral lung regions during normal breathing'
  },
  {
    id: 'bronchial',
    title: 'Bronchial',
    description: 'Loud, high-pitched, hollow sounds with a gap between inspiratory and expiratory phases. Expiratory phase is longer than inspiratory phase.',
    audioSrc: '/audio/bronchial.mp3',
    category: 'normal',
    location: 'Heard over the trachea and main bronchi (2nd-4th intercostal spaces)'
  },
  {
    id: 'broncho-vesicular',
    title: 'Broncho-vesicular',
    description: 'Medium-pitched sounds with equal inspiratory and expiratory phases. Intermediate between bronchial and vesicular sounds.',
    audioSrc: '/audio/broncho-vesicular.mp3',
    category: 'normal',
    location: 'Upper anterior chest and posterior interscapular areas'
  },
  {
    id: 'wheeze',
    title: 'Wheezes',
    description: 'Continuous, high-pitched musical sounds caused by air moving through narrowed airways.',
    audioSrc: '/audio/wheezing.mp3',
    category: 'abnormal',
    location: 'Common in asthma and COPD patients'
  },
  {
    id: 'crackles',
    title: 'Crackles (Rales)',
    description: 'Discontinuous, non-musical sounds like small bubbles bursting or paper rustling.',
    audioSrc: '/audio/crackles.mp3',
    category: 'abnormal',
    location: 'Often heard in pulmonary edema and pneumonia'
  },
  {
    id: 'rhonchi',
    title: 'Rhonchi',
    description: 'Continuous, low-pitched gurgling sounds that indicate airway secretions.',
    audioSrc: '/audio/rhonchi.mp3',
    category: 'abnormal',
    location: 'Typically heard in bronchitis and COPD'
  },
  {
    id: 'stridor',
    title: 'Stridor',
    description: 'Harsh, high-pitched sound heard primarily during inspiration.',
    audioSrc: '/audio/stridor.mp3',
    category: 'abnormal',
    location: 'Upper airway obstruction'
  },
  {
    id: 'pleural-rub',
    title: 'Pleural Rub',
    description: 'Grating or creaking sound caused by inflamed pleural surfaces rubbing together.',
    audioSrc: '/audio/pleural-rub.mp3',
    category: 'abnormal',
    location: 'Heard with pleurisy or pleural inflammation'
  }
]

export default function Home() {
  const [activeSound, setActiveSound] = useState(lungSounds[0])
  const [comparisonSound, setComparisonSound] = useState<typeof lungSounds[0] | null>(null)
  const [isComparisonMode, setIsComparisonMode] = useState(false)
  const { play } = useAudio();
  
  const handleRegionSelect = (region: { id: string, name: string, audio: string }) => {
    const sound = lungSounds.find(s => s.audioSrc === region.audio) || lungSounds[0]
    setActiveSound(sound)
    
    // Autoplay the sound when a region is selected
    play(sound.id)
  }

  const toggleComparisonMode = () => {
    setIsComparisonMode(!isComparisonMode)
    if (!isComparisonMode) {
      // Set normal breath sound as comparison by default
      setComparisonSound(lungSounds[0])
    } else {
      setComparisonSound(null)
    }
  }

  const handleSoundSelection = (sound: typeof lungSounds[0]) => {
    if (isComparisonMode) {
      setComparisonSound(sound)
      play(sound.id)
    } else {
      setActiveSound(sound)
      play(sound.id)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
      <Hero />
      
      {/* Interactive Lung Visualizer */}
      <section id="lung-visualizer" className="py-16 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Interactive Lung Visualization</h2>
          <p className="mb-8 text-lg text-gray-600">Click on different regions of the lungs to hear corresponding sounds.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <LungVisualizer onSelectRegion={handleRegionSelect} />
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Selected Sound</h3>
              <div className="mb-4">
                <h4 className="text-lg font-medium text-blue-800">{activeSound.title}</h4>
                <p className="text-gray-700 mb-2">{activeSound.description}</p>
                <p className="text-sm text-gray-600 italic">Location: {activeSound.location}</p>
              </div>
              <AudioPlayer sound={activeSound} />
            </div>
          </div>
        </div>
      </section>

      {/* Lung Sound Categories */}
      <section id="lung-sounds" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Breath Sound Library</h2>
          
          {/* Normal Sounds */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Normal Breath Sounds</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lungSounds.filter(sound => sound.category === 'normal').map(sound => (
                <div 
                  key={sound.id}
                  id={`sound-${sound.id}`}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleSoundSelection(sound)}
                >
                  <h4 className="text-lg font-medium text-gray-800 mb-2">{sound.title}</h4>
                  <p className="text-gray-600 mb-3">{sound.description}</p>
                  <AudioPlayer sound={sound} compact />
                </div>
              ))}
            </div>
          </div>
          
          {/* Abnormal Sounds */}
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">Abnormal Breath Sounds</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lungSounds.filter(sound => sound.category === 'abnormal').map(sound => (
                <div 
                  key={sound.id}
                  id={`sound-${sound.id}`}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleSoundSelection(sound)}
                >
                  <h4 className="text-lg font-medium text-gray-800 mb-2">{sound.title}</h4>
                  <p className="text-gray-600 mb-3">{sound.description}</p>
                  <p className="text-sm text-gray-500 italic mb-3">Location: {sound.location}</p>
                  <AudioPlayer sound={sound} compact />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Mode */}
      <section id="comparison" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Sound Comparison Tool</h2>
            <button
              onClick={toggleComparisonMode}
              className={`px-6 py-3 rounded-md text-white font-medium transition-colors ${
                isComparisonMode ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isComparisonMode ? 'Exit Comparison Mode' : 'Enter Comparison Mode'}
            </button>
          </div>

          {isComparisonMode ? (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-600 mb-6">
                Compare any two breath sounds side by side to understand their distinctions. 
                Select sounds from the library above to populate either the left or right panel.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className={`p-6 rounded-lg ${activeSound.category === 'normal' ? 'bg-green-50' : 'bg-red-50'} relative`}>
                  <div className="absolute top-3 right-3">
                    <button 
                      className="text-xs px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700"
                      onClick={() => setActiveSound(lungSounds[0])}
                    >
                      Reset to Vesicular
                    </button>
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${activeSound.category === 'normal' ? 'text-green-800' : 'text-red-800'}`}>
                    Sound A: {activeSound.title}
                  </h3>
                  <div className="mt-2 mb-3 inline-block rounded px-2 py-1 text-xs font-medium capitalize" 
                       style={{
                         backgroundColor: activeSound.category === 'normal' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                         color: activeSound.category === 'normal' ? '#065f46' : '#991b1b'
                       }}>
                    {activeSound.category}
                  </div>
                  <p className="text-gray-700 mb-2">{activeSound.description}</p>
                  <p className="text-sm text-gray-600 italic mb-4">Location: {activeSound.location}</p>
                  <AudioPlayer sound={activeSound} />
                </div>
                
                <div className={`p-6 rounded-lg ${comparisonSound?.category === 'normal' ? 'bg-green-50' : 'bg-red-50'} relative`}>
                  <div className="absolute top-3 right-3">
                    {comparisonSound && (
                      <button 
                        className="text-xs px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700"
                        onClick={() => {
                          // Find a default abnormal sound
                          const defaultAbnormal = lungSounds.find(s => s.category === 'abnormal') || lungSounds[3];
                          setComparisonSound(defaultAbnormal);
                        }}
                      >
                        Reset to Abnormal
                      </button>
                    )}
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${comparisonSound?.category === 'normal' ? 'text-green-800' : 'text-red-800'}`}>
                    Sound B: {comparisonSound?.title || 'Select a Sound'}
                  </h3>
                  {comparisonSound ? (
                    <>
                      <div className="mt-2 mb-3 inline-block rounded px-2 py-1 text-xs font-medium capitalize"
                        style={{
                          backgroundColor: comparisonSound.category === 'normal' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                          color: comparisonSound.category === 'normal' ? '#065f46' : '#991b1b'
                        }}>
                        {comparisonSound.category}
                      </div>
                      <p className="text-gray-700 mb-2">{comparisonSound.description}</p>
                      <p className="text-sm text-gray-600 italic mb-4">Location: {comparisonSound.location}</p>
                      <AudioPlayer sound={comparisonSound} />
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-40 bg-gray-100 rounded-lg">
                      <p className="text-gray-600">Select any sound from the library above to compare</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <h4 className="font-medium text-yellow-800">How to use the comparison tool:</h4>
                <ol className="list-decimal list-inside text-gray-700 mt-2">
                  <li>Click any sound card in the sound library above</li>
                  <li>The selected sound will update either Sound A (if comparison mode was just enabled) or Sound B (once in comparison mode)</li>
                  <li>To swap which panel gets updated, click on either panel header</li>
                  <li>Use the reset buttons to quickly return to default normal or abnormal sounds</li>
                  <li>Compare characteristics like pitch, duration, timing in inspiratory/expiratory phases</li>
                </ol>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                <h4 className="font-medium text-blue-800">Suggested comparisons:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  <button 
                    className="text-left px-3 py-2 bg-white hover:bg-gray-50 text-sm border rounded" 
                    onClick={() => {
                      const vesicular = lungSounds.find(s => s.id === 'vesicular') || lungSounds[0];
                      const bronchial = lungSounds.find(s => s.id === 'bronchial') || lungSounds[1];
                      setActiveSound(vesicular);
                      setComparisonSound(bronchial);
                    }}
                  >
                    <span className="font-medium">Vesicular vs Bronchial</span> - Compare normal peripheral vs central sounds
                  </button>
                  <button 
                    className="text-left px-3 py-2 bg-white hover:bg-gray-50 text-sm border rounded" 
                    onClick={() => {
                      const vesicular = lungSounds.find(s => s.id === 'vesicular') || lungSounds[0];
                      const crackles = lungSounds.find(s => s.id === 'crackles') || lungSounds[4];
                      setActiveSound(vesicular);
                      setComparisonSound(crackles);
                    }}
                  >
                    <span className="font-medium">Vesicular vs Crackles</span> - Normal vs abnormal discontinuous sounds
                  </button>
                  <button 
                    className="text-left px-3 py-2 bg-white hover:bg-gray-50 text-sm border rounded" 
                    onClick={() => {
                      const wheeze = lungSounds.find(s => s.id === 'wheeze') || lungSounds[3];
                      const rhonchi = lungSounds.find(s => s.id === 'rhonchi') || lungSounds[5];
                      setActiveSound(wheeze);
                      setComparisonSound(rhonchi);
                    }}
                  >
                    <span className="font-medium">Wheezes vs Rhonchi</span> - Compare high vs low-pitched continuous sounds
                  </button>
                  <button 
                    className="text-left px-3 py-2 bg-white hover:bg-gray-50 text-sm border rounded" 
                    onClick={() => {
                      const bronchial = lungSounds.find(s => s.id === 'bronchial') || lungSounds[1];
                      const bronchovesicular = lungSounds.find(s => s.id === 'broncho-vesicular') || lungSounds[2];
                      setActiveSound(bronchial);
                      setComparisonSound(bronchovesicular);
                    }}
                  >
                    <span className="font-medium">Bronchial vs Broncho-vesicular</span> - Compare normal central sounds
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-blue-50 p-6 rounded-lg shadow border border-blue-100">
              <p className="text-center text-gray-600">
                Enable comparison mode to compare any two breath sounds side by side for educational purposes.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Educational Resources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Educational Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Auscultation Technique</h3>
              <p className="text-gray-600 mb-4">Learn proper positioning and technique for effective lung auscultation.</p>
              <a href="/education" className="text-blue-600 font-medium hover:text-blue-800">Read more →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clinical Significance</h3>
              <p className="text-gray-600 mb-4">Understand how different breath sounds correlate with clinical conditions.</p>
              <a href="/education" className="text-blue-600 font-medium hover:text-blue-800">Read more →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Practice Cases</h3>
              <p className="text-gray-600 mb-4">Test your knowledge with real patient scenarios and breath sound identification.</p>
              <a href="/education" className="text-blue-600 font-medium hover:text-blue-800">Read more →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
