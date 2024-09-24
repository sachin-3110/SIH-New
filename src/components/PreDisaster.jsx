import React from 'react';
import NavBar from './NavBar';
const PreDisaster = () => {
  return (
    <>
    <NavBar/>
    <div className="bg-gray-100">
     

     <section className="container mx-auto p-6">
       <h1 className="text-3xl font-bold mb-4">Pre-Disaster Guidelines</h1>
       <p className="text-lg mb-4">
         Preparation is key to minimizing the impact of disasters. Here are some essential steps to take before a disaster strikes:
       </p>

       <h2 className="text-2xl font-semibold mt-6">1. Create a Disaster Plan</h2>
       <p>Ensure that all family members know the plan, including evacuation routes and communication strategies.</p>

       <h2 className="text-2xl font-semibold mt-6">2. Build an Emergency Kit</h2>
       <p>Include essential items such as water, non-perishable food, first-aid supplies, flashlight, and batteries.</p>

       <h2 className="text-2xl font-semibold mt-6">3. Stay Informed</h2>
       <p>Monitor weather reports and alerts from local authorities.</p>

       <h2 className="text-2xl font-semibold mt-6">4. Secure Your Home</h2>
       <p>Reinforce windows and doors, and ensure that heavy furniture is secured.</p>
     </section>

     <footer className="bg-gray-800 text-white text-center p-4">
       <p>&copy; 2024 Your Company Name. All rights reserved.</p>
     </footer>
   </div>
    </>
  );
};

export default PreDisaster;