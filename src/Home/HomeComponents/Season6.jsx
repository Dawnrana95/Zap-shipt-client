import React from 'react';

const Season6 = () => {
  const testimonials = [
    {
      name: "Awlad Hassin",
      title: "Senior Product Designer",
      text: "Enhance posture, mobility, and well-being effortlessly with Prostrate Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!"
    },
    {
      name: "Rosel Ahamed",
      title: "CEO",
      text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day."
    },
    {
      name: "Nasir Uddin",
      title: "CEO",
      text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day."
    }
  ];

  return (
    <>
      {/* Priority Section */}
      <section className="py-16 px-4  from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            We offer the lowest delivery charge with the highest value doing with 100% safety of your product. 
            Pophoo courier delivers your parcel in every corner of Bangladesh right on time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Become a Merchant
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Earn with Profast Courier
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What our customers are saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-6 italic">
                  "{item.text}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-lg">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Season6;