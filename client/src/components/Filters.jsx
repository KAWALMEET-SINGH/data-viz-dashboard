import React, { useState } from 'react';
import  { fetchUpdateDataFailure, fetchUpdateDataStart, fetchUpdateDataSuccess } from "../redux/slices/dataSlice"
import { useDispatch } from 'react-redux';

const FilterComponent = () => {
    const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    intensity: '',
    sector: '',
    topic: '',
    region: '',
    impact: '',
    country: '',
    relevance: '',
    pestle: '',
    source: '',
    likelihood: '',
    end_year: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchUpdateDataStart());
    try {
      const queryString = Object.keys(formData)
        .filter(key => formData[key] !== '') 
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(formData[key])}`)
        .join('&');

      const response = await fetch(`/api/filterData?${queryString}`);
      const data = await response.json();
      dispatch(fetchUpdateDataSuccess(data))
      console.log(data); 
    } catch (error) {
      console.error('Error fetching data:', error);
      dispatch(fetchUpdateDataFailure(error.message))
    }
  };

  return (
    <div className="mx-auto  p-6 bg-blue-100 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Filter Data</h2>
      <form onSubmit={handleSubmit} className="flex flex-row justify-evenly items-center flex-wrap">
        <div className="mb-4">
          <label htmlFor="topic" className="block text-blue-700">Topic:</label>
          <input type="text" id="topic" name="topic" value={formData.topic} onChange={handleChange} className="mt-1 p-2 border border-blue-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="Country" className="block text-blue-700">Country:</label>
          <input type="text" id="Country" name="country" value={formData.country} onChange={handleChange} className="mt-1 p-2 border border-blue-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="Relevance" className="block text-blue-700">Relevance:</label>
          <input type="number" id="Relevance" name="relevance" value={formData.relevance} onChange={handleChange} className="mt-1 p-2 border border-blue-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="Likelihood" className="block text-blue-700">Likelihood:</label>
          <input type="number" id="Likelihood" name="likelihood" value={formData.likelihood} onChange={handleChange} className="mt-1 p-2 border border-blue-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="Intensity" className="block text-blue-700">Intensity:</label>
          <input type="number" id="Intensity" name="intensity" value={formData.intensity} onChange={handleChange} className="mt-1 p-2 border border-blue-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="end_year" className="block text-blue-700">Year:</label>
          <input type="number" id="end_year" name="end_year" value={formData.end_year} onChange={handleChange} className="mt-1 p-2 border border-blue-300 rounded-md w-full" />
        </div>
        
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FilterComponent;
