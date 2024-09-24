import React from 'react';

const AfterDisaster = () => {
  return (
    <div>

      <section className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Post-Disaster Guidelines</h1>
        <p className="text-lg mb-4">
          Recovery is a crucial part of disaster management. Here’s how to proceed after a disaster:
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Assess Your Safety</h2>
        <p>Ensure that you and your family are safe before entering damaged areas.</p>

        <h2 className="text-2xl font-semibold mt-6">2. Document Damage</h2>
        <p>Take photos of any damage to property for insurance purposes.</p>

        <h2 className="text-2xl font-semibold mt-6">3. Contact Local Authorities</h2>
        <p>Report any emergencies, such as gas leaks or downed power lines.</p>

        <h2 className="text-2xl font-semibold mt-6">4. Seek Assistance</h2>
        <p>Look for local relief services and resources to help with recovery efforts.</p>
      </section>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 ResQore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AfterDisaster;