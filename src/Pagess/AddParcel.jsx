import React from 'react';
import { useForm } from 'react-hook-form';

const AddParcel = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const parcelType = watch('parcelType', 'document');

 const onSubmit = (data) => {
  console.log(data);

  fetch("http://localhost:5000/applications", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log("After Post on MongoDB:", result);
    })
    .catch((error) => {
      console.error(error);
    });
};

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">Add Parcel</h1>
      <p className="text-center text-gray-500 mb-6 sm:mb-8">Enter your parcel details</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Parcel Type */}
        <div className="mb-6">
          <label className="font-semibold block mb-3">Parcel Type</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="document"
                {...register('parcelType')}
                className="w-4 h-4"
              />
              <span>Document</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="not-document"
                {...register('parcelType')}
                className="w-4 h-4"
              />
              <span>Not-Document</span>
            </label>
          </div>
        </div>

        {/* Parcel Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {/* Email Field - Added before Parcel Name */}
          <div>
            <label className="block font-semibold mb-2">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              {...register('email', { 
                required: 'Email address is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          
          <div>
            <label className="block font-semibold mb-2">Parcel Name</label>
            <input
              type="text"
              placeholder="Parcel Name"
              {...register('parcelName', { required: 'Parcel name is required' })}
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.parcelName ? 'border-red-500' : 'border-gray-300'}`}
            />
            
            {errors.parcelName && <p className="text-red-500 text-sm mt-1">{errors.parcelName.message}</p>}
          </div>
          <div>
            <label className="block font-semibold mb-2">Parcel Weight (KG)</label>
            <input
              type="number"
              step="0.1"
              placeholder="Parcel Weight (KG)"
              {...register('parcelWeight', {
                required: 'Weight is required',
                min: { value: 0.1, message: 'Weight must be at least 0.1 KG' }
              })}
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.parcelWeight ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.parcelWeight && <p className="text-red-500 text-sm mt-1">{errors.parcelWeight.message}</p>}
          </div>
        </div>

        {/* Sender Details */}
        <h2 className="text-lg sm:text-xl font-bold mb-4">Sender Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
          <div>
            <label className="block font-semibold mb-2">Sender Name</label>
            <input
              type="text"
              placeholder="Sender Name"
              {...register('senderName', { required: 'Sender name is required' })}
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.senderName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.senderName && <p className="text-red-500 text-sm mt-1">{errors.senderName.message}</p>}
          </div>
          <div>
            <label className="block font-semibold mb-2">Address</label>
            <input
              type="text"
              placeholder="Address"
              {...register('senderAddress', { required: 'Address is required' })}
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.senderAddress ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.senderAddress && <p className="text-red-500 text-sm mt-1">{errors.senderAddress.message}</p>}
          </div>
          <div>
            <label className="block font-semibold mb-2">Your Region</label>
            <select
              {...register('senderRegion', { required: 'Region is required' })}
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.senderRegion ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select your region</option>
              <option value="dhaka">Dhaka</option>
              <option value="chittagong">Chittagong</option>
              <option value="rajshahi">Rajshahi</option>
              <option value="khulna">Khulna</option>
              <option value="barishal">Barishal</option>
              <option value="sylhet">Sylhet</option>
              <option value="rangpur">Rangpur</option>
              <option value="mymensingh">Mymensingh</option>
            </select>
            {errors.senderRegion && <p className="text-red-500 text-sm mt-1">{errors.senderRegion.message}</p>}
          </div>
          <div>
            <label className="block font-semibold mb-2">Pickup Instruction</label>
            <input
              type="text"
              placeholder="Pickup Instruction"
              {...register('pickupInstruction')}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Receiver Details */}
        <h2 className="text-lg sm:text-xl font-bold mb-4">Receiver Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-2">Receiver Name</label>
            <input
              type="text"
              placeholder="Receiver Name"
              {...register('receiverName', { required: 'Receiver name is required' })}
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.receiverName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.receiverName && <p className="text-red-500 text-sm mt-1">{errors.receiverName.message}</p>}
          </div>
          <div>
            <label className="block font-semibold mb-2">Address</label>
            <input
              type="text"
              placeholder="Address"
              {...register('receiverAddress', { required: 'Address is required' })}
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.receiverAddress ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.receiverAddress && <p className="text-red-500 text-sm mt-1">{errors.receiverAddress.message}</p>}
          </div>
          <div>
            <label className="block font-semibold mb-2">Receiver Region</label>
            <select
              {...register('receiverRegion', { required: 'Region is required' })}
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.receiverRegion ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select your region</option>
              <option value="dhaka">Dhaka</option>
              <option value="chittagong">Chittagong</option>
              <option value="rajshahi">Rajshahi</option>
              <option value="khulna">Khulna</option>
              <option value="barishal">Barishal</option>
              <option value="sylhet">Sylhet</option>
              <option value="rangpur">Rangpur</option>
              <option value="mymensingh">Mymensingh</option>
            </select>
            {errors.receiverRegion && <p className="text-red-500 text-sm mt-1">{errors.receiverRegion.message}</p>}
          </div>
          <div>
            <label className="block font-semibold mb-2">Delivery Instruction</label>
            <input
              type="text"
              placeholder="Delivery Instruction"
              {...register('deliveryInstruction')}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Note */}
        <p className="text-gray-500 text-xs sm:text-sm mb-6">* PickUp Time 4pm-7pm Approx.</p>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
        >
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default AddParcel;