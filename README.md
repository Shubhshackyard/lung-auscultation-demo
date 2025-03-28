# Lung Auscultation Interactive Learning Tool

An educational web application for medical students and healthcare professionals to learn about lung auscultation, breath sounds, and their clinical significance.

![Lung Auscultation Demo](/Users/shubhisatvik/Documents/auscultation/lung-auscultation-demo/public/preview.png)

## Live Demo

Visit the live demo: [Lung Auscultation Demo](https://lung-auscultation-demo.vercel.app/)

## Project Overview

This interactive educational tool was developed by students of State Ghazipur Homoeopathic Medical College & Hospital to help medical students and practitioners learn about normal and abnormal breath sounds. The application provides a virtual environment for exploring different lung regions, listening to authentic breath sounds, and understanding their clinical significance.

## Features

- **Interactive Lung Visualization**: Click on different regions of the lungs to hear corresponding breath sounds
- **Comprehensive Sound Library**: Collection of normal and abnormal breath sounds including:
  - Normal vesicular breath sounds
  - Bronchial and broncho-vesicular sounds
  - Abnormal sounds: wheezes, crackles, rhonchi, stridor, pleural rubs
- **Educational Content**: In-depth explanations about auscultation technique, respiratory anatomy, and clinical significance
- **Sound Comparison Tool**: Compare normal vs. abnormal sounds to better understand differences
- **Mobile Responsive Design**: Learn on any device

## Technologies Used

- **Next.js 15**: React framework for server-rendered applications
- **React**: Frontend UI library
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Web Audio API**: For high-quality sound processing and playback
- **TypeScript**: Type-safe JavaScript for better code quality

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Shubhshackyard/lung-auscultation-demo.git
   cd lung-auscultation-demo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add audio files:
Create a /public/audio/ directory
Add the required sound files:
- **normal-breath.mp3**
- **bronchial.mp3**
- **broncho-vesicular.mp3**
- **wheezing.mp3**
- **crackles.mp3**
- **rhonchi.mp3**
- **stridor.mp3**
- **pleural-rub.mp3**

4. Start the development server:
npm run dev

5. Open http://localhost:3000 in your browser

## Project Structure
lung-auscultation-demo/
├── public/
│   ├── audio/            # Breath sound recordings
│   └── images/           # Static images
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # Reusable components
│   │   ├── AudioPlayer.tsx
│   │   ├── Hero.tsx
│   │   └── LungVisualizer.tsx
│   └── data/             # Data files for the application
└── ...config files

## Usage
1. Home Page: Explore the interactive lung visualization or browse the sound library
2. Interactive Map: Click on different parts of the lungs to hear corresponding sounds
3. Sound Library: Listen to categorized breath sounds with descriptions
4. Education Page: Access in-depth information about auscultation techniques and clinical significance

## Credits and Acknowledgments
# Faculty Advisors:
**Dr. Sunrita Das (Assistant Professor)**
**Dr. Dharmesh Gujarati (Assistant Professor)**
**Dr. R.R. Mishra (Guest Lecturer)**

# Project Team:
**Mr. Imran Qamar Khan**
**Ms. Kritika Dwivedi**
**Mr. Mahendra Pratap Singh**
**Ms. Sadhana Kushwaha**
**Ms. Satakshi Srivastava**
**Ms. Shreya Sonker**

## License
This project is licensed under the MIT License - see the LICENSE file for details.