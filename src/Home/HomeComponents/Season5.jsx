import React from 'react';

const Season5 = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-3">Live Parcel Tracking</h3>
            <p className="text-gray-600">
              Stay updated in real-time with our live parcel tracking feature. 
              From pick-up to delivery, monitor your shipment's journey and 
              get instant status updates for complete peace of mind.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-3">100% Safe Delivery</h3>
            <p className="text-gray-600">
              We ensure your parcels are handled with the utmost care and 
              delivered securely to their destination. Our reliable process 
              guarantees safe and damage-free delivery every time.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold mb-3">24/7 Call Center Support</h3>
            <p className="text-gray-600">
              Our dedicated support team is available around the clock to 
              assist you with any questions, updates, or delivery concerns—
              anytime you need us.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Season5;