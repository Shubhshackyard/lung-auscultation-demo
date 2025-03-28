"use client"

import { useState, useEffect } from 'react'

interface LungRegion {
  id: string;
  name: string;
  x: string;
  y: string;
  audio: string;
  soundId: string;
  tooltip: string;
}

// Define the lung regions with their positions and associated sounds
const lungRegions: LungRegion[] = [
  // Normal sounds
  { id: 'upperRight', name: 'Upper Right Lung', x: "30%", y: "25%", audio: '/audio/bronchial.mp3', soundId: 'bronchial', tooltip: "Bronchial sounds - heard over main bronchi" },
  { id: 'upperLeft', name: 'Upper Left Lung', x: "70%", y: "25%", audio: '/audio/bronchial.mp3', soundId: 'bronchial', tooltip: "Bronchial sounds - heard over main bronchi" },
  
  { id: 'upperRightLateral', name: 'Upper Right Lateral', x: "20%", y: "33%", audio: '/audio/broncho-vesicular.mp3', soundId: 'broncho-vesicular', tooltip: "Broncho-vesicular sounds - transition zone" },
  { id: 'upperLeftLateral', name: 'Upper Left Lateral', x: "80%", y: "33%", audio: '/audio/broncho-vesicular.mp3', soundId: 'broncho-vesicular', tooltip: "Broncho-vesicular sounds - transition zone" },
  
  { id: 'middleRight', name: 'Middle Right Lung', x: "25%", y: "50%", audio: '/audio/normal-breath.mp3', soundId: 'vesicular', tooltip: "Normal vesicular breath sounds" },
  { id: 'middleLeft', name: 'Middle Left Lung', x: "75%", y: "50%", audio: '/audio/normal-breath.mp3', soundId: 'vesicular', tooltip: "Normal vesicular breath sounds" },
  
  { id: 'lowerRight', name: 'Lower Right Lung', x: "30%", y: "70%", audio: '/audio/normal-breath.mp3', soundId: 'vesicular', tooltip: "Normal vesicular breath sounds" },
  { id: 'lowerLeft', name: 'Lower Left Lung', x: "70%", y: "70%", audio: '/audio/normal-breath.mp3', soundId: 'vesicular', tooltip: "Normal vesicular breath sounds" },
  
  // Abnormal sounds - these would be heard in pathological conditions
  { id: 'rightWheeze', name: 'Right Upper (Wheeze)', x: "25%", y: "40%", audio: '/audio/wheezing.mp3', soundId: 'wheeze', tooltip: "Wheezing - common in asthma/bronchospasm" },
  { id: 'leftCrackle', name: 'Left Lower (Crackles)', x: "75%", y: "65%", audio: '/audio/crackles.mp3', soundId: 'crackles', tooltip: "Crackles - often heard in pneumonia/edema" },
  { id: 'rightRhonchi', name: 'Right Lower (Rhonchi)', x: "30%", y: "60%", audio: '/audio/rhonchi.mp3', soundId: 'rhonchi', tooltip: "Rhonchi - indicates secretions in airways" },
  { id: 'upperTrachea', name: 'Upper Airway (Stridor)', x: "50%", y: "15%", audio: '/audio/stridor.mp3', soundId: 'stridor', tooltip: "Stridor - upper airway obstruction" },
  { id: 'leftLateral', name: 'Left Lateral (Pleural Rub)', x: "85%", y: "55%", audio: '/audio/pleural-rub.mp3', soundId: 'pleural-rub', tooltip: "Pleural rub - inflammation of pleural surfaces" },
]

interface LungVisualizerProps {
  onSelectRegion: (region: { id: string, name: string, audio: string }) => void;
}

export default function LungVisualizer({ onSelectRegion }: LungVisualizerProps) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [showTooltip, setShowTooltip] = useState<string | null>(null)
  const [pulseAnimation, setPulseAnimation] = useState<boolean>(false)

  useEffect(() => {
    if (selectedRegion) {
      // Trigger pulse animation when region is selected
      setPulseAnimation(true)
      const timer = setTimeout(() => {
        setPulseAnimation(false)
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [selectedRegion])

  const handleRegionClick = (region: LungRegion) => {
    setSelectedRegion(region.id)
    
    // Pass complete information to parent component
    onSelectRegion({
      id: region.id,
      name: region.name,
      audio: region.audio
    })
    
    // Show tooltip for this region
    setShowTooltip(region.id)
    setTimeout(() => {
      setShowTooltip(null)
    }, 3000)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-[4/5] bg-blue-50 rounded-lg shadow-md p-4">
      {selectedRegion && (
        <div className="absolute top-2 left-2 right-2 bg-teal-50 border border-teal-200 p-2 rounded text-sm text-teal-800 z-20">
          <p className="font-medium">
            Selected: {lungRegions.find(r => r.id === selectedRegion)?.name}
          </p>
          <p className="text-xs mt-1">
            {lungRegions.find(r => r.id === selectedRegion)?.tooltip}
          </p>
        </div>
      )}
      
      {!selectedRegion && (
        <div className="absolute top-2 left-2 right-2 bg-white bg-opacity-80 p-2 rounded text-sm text-gray-700">
          <p className="font-medium text-blue-800 mb-1">Interactive Lung Map</p>
          <p>Color codes: <span className="text-green-600">●</span> Normal sounds, <span className="text-red-600">●</span> Abnormal sounds</p>
          <p>Click on any marker to hear the corresponding sound. Hover for information.</p>
        </div>
      )}

      {/* Lung outline SVG */}
      <div className="mt-20 mx-auto w-full h-4/5 relative">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          {/* Right lung */}
          <path 
            d="M45,25 C35,25 25,35 25,50 C25,65 35,80 40,85 C42,87 44,88 45,88 L45,25 Z" 
            fill="#e2e8f0" 
            stroke="#64748b" 
            strokeWidth="1"
          />
          {/* Left lung */}
          <path 
            d="M55,25 C65,25 75,35 75,50 C75,65 65,80 60,85 C58,87 56,88 55,88 L55,25 Z" 
            fill="#e2e8f0" 
            stroke="#64748b" 
            strokeWidth="1"
          />
          {/* Trachea */}
          <path 
            d="M45,25 L55,25 L55,20 C55,15 52.5,15 50,15 C47.5,15 45,15 45,20 L45,25 Z" 
            fill="#e2e8f0" 
            stroke="#64748b" 
            strokeWidth="1"
          />
          
          {/* Label areas - improved for responsiveness */}
          <g className="labels" fontSize="3" fontFamily="system-ui, sans-serif" fontWeight="500">
            <text x="35" y="50" textAnchor="middle" dominantBaseline="middle" fill="#64748b">
              Right Lung
            </text>
            <text x="65" y="50" textAnchor="middle" dominantBaseline="middle" fill="#64748b">
              Left Lung
            </text>
            <text x="50" y="18" textAnchor="middle" dominantBaseline="middle" fill="#64748b">
              Trachea
            </text>
            {/* Additional anatomical labels */}
            <text x="35" y="30" textAnchor="middle" dominantBaseline="middle" fill="#64748b" fontSize="2.5">
              Upper Lobe
            </text>
            <text x="65" y="30" textAnchor="middle" dominantBaseline="middle" fill="#64748b" fontSize="2.5">
              Upper Lobe
            </text>
            <text x="35" y="70" textAnchor="middle" dominantBaseline="middle" fill="#64748b" fontSize="2.5">
              Lower Lobe
            </text>
            <text x="65" y="70" textAnchor="middle" dominantBaseline="middle" fill="#64748b" fontSize="2.5">
              Lower Lobe
            </text>
          </g>
          
          {/* Annotation lines for better visualization */}
          <g stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="1,1">
            <line x1="25" y1="40" x2="45" y2="40" />
            <line x1="55" y1="40" x2="75" y2="40" />
            <line x1="25" y1="60" x2="45" y2="60" />
            <line x1="55" y1="60" x2="75" y2="60" />
          </g>
        </svg>

        {/* Interactive points */}
        {lungRegions.map((region) => {
          const isNormal = region.audio.includes('normal') || 
                         region.audio.includes('bronchial') || 
                         region.audio.includes('vesicular');
          const isSelected = selectedRegion === region.id;
          
          return (
            <div key={region.id} className="absolute" style={{ left: region.x, top: region.y }}>
              <button
                onClick={() => handleRegionClick(region)}
                onMouseEnter={() => setShowTooltip(region.id)}
                onMouseLeave={() => !isSelected && setShowTooltip(null)}
                className={`w-5 h-5 rounded-full transform -translate-x-1/2 -translate-y-1/2 focus:outline-none z-10
                       ${isSelected ? 'ring-4 ring-blue-300 shadow-lg' : ''}
                       ${isSelected && pulseAnimation ? 'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75' : ''}
                       ${isNormal ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}
                aria-label={`Listen to ${region.name} lung region`}
              />
              
              {isSelected && (
                <span className="absolute inline-flex h-full w-full rounded-full -translate-x-1/2 -translate-y-1/2 bg-blue-400 opacity-50 animate-ping"></span>
              )}
              
              {showTooltip === region.id && (
                <div className="absolute z-20 bg-white p-2 rounded shadow-lg text-xs w-48 -ml-24 mt-2">
                  <p className="font-bold">{region.name}</p>
                  <p>{region.tooltip}</p>
                  <p className="text-xs mt-1 text-blue-600">Click to select this region</p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="absolute bottom-2 left-2 right-2 bg-white bg-opacity-75 p-2 text-xs rounded">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2">
            <p className="font-medium">Key anatomical regions:</p>
            <ul className="text-xs mt-1">
              <li>• Upper lobes - Apex</li>
              <li>• Middle/Lingular</li>
              <li>• Lower lobes - Base</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 mt-2 md:mt-0">
            <p className="font-medium">Auscultation sequence:</p>
            <ul className="text-xs mt-1">
              <li>• Compare left and right sides</li>
              <li>• Listen through full inspiration and expiration</li>
              <li>• Move in systematic pattern</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}