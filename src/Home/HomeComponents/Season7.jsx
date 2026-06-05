import React, { useState } from 'react';

const Season7 = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "How does this posture corrector work?",
      a: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day."
    },
    {
      q: "Is it suitable for all ages and body types?",
      a: "Yes, it's adjustable and suitable for most ages and body types."
    },
    {
      q: "Does it really help with back pain and posture improvement?",
      a: "Yes, most users see improvement within 2-4 weeks of consistent use."
    },
    {
      q: "Does it have smart features like vibration alerts?",
      a: "Yes, the Pro version includes vibration alerts for posture reminders."
    }
  ];

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Question (FAQ)</h2>
      <p className="text-center text-gray-600 mb-10">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
      </p>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border rounded-lg">
            <button
              className="w-full text-left p-4 font-semibold flex justify-between"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              <span>{open === i ? "−" : "+"}</span>
            </button>
            {open === i && <div className="p-4 pt-0 text-gray-600">{faq.a}</div>}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
          See More FAQ's
        </button>
      </div>
    </section>
  );
};

export default Season7;