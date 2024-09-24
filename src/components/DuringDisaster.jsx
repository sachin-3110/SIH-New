import React from 'react';
import NavBar from './NavBar';

const DuringDisaster = () => {
  return (
    <>
    <NavBar/>
     <div className="bg-gray-100">

<section className="container mx-auto p-6">
  <h1 className="text-3xl font-bold mb-4">During Disaster Guidelines</h1>
  <p className="text-lg mb-4">Stay safe and take appropriate actions during a disaster:</p>

  <h2 className="text-2xl font-semibold mt-6">1. Stay Calm and Follow Your Plan</h2>
  <p>Keep your emergency kit accessible and know where to go.</p>

  <h2 className="text-2xl font-semibold mt-6">2. Listen to Authorities</h2>
  <p>Follow evacuation orders and updates from local emergency services.</p>

  <h2 className="text-2xl font-semibold mt-6">3. Avoid Hazards</h2>
  <p>Stay away from windows, and avoid flooded areas and downed power lines.</p>

  <h2 className="text-2xl font-semibold mt-6">4. Communicate</h2>
  <p>Use text messages or social media to communicate with family and friends, as phone lines may be overloaded.</p>
</section>

<footer className="bg-gray-800 text-white text-center p-4">
  <p>&copy; 2024 Your Company Name. All rights reserved.</p>
</footer>
</div>
    </>
  );
};

export default DuringDisaster;