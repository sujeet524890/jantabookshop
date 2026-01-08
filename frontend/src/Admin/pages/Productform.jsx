import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const From = () => {
  
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [title, setTitle] = useState("");
  const [oldprice, setOldprice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [section, setSection] = useState("");
  const [brand, setBrand] = useState("");
  const [subject, setSubject] = useState("");

 


  const handelimage = (e) => {
    setImage(e.target.value);
  };
  const handelprice = (e) => {
    setPrice(e.target.value);
  };
  const handelrating = (e) => {
    setRating(e.target.value);
  };
  const handeltitle = (e) => {
    setTitle(e.target.value);
  };
  const handelsubject = (e) => {
    setSubject(e.target.value);
  };
  const handeloldprice = (e) => {
    setOldprice(e.target.value);
  };
  const handelsection = (e) => {
    setSection(e.target.value);
  };
  const handeldescription = (e) => {
    setDescription(e.target.value);
  };
  const handelcategory = (e) => {
    setCategory(e.target.value);
  };
  const handelbrand = (e) => {
    setBrand(e.target.value);
  };

  const hendalsubmit = async (e) => {
    e.preventDefault();
    try{
    const responce = await axios.post("https://jantabookshop.onrender.com/addproduct", {
      image,
      price,
      rating,
      title,
      subject,
      oldprice,
      category,
      description,
      brand,
      section,
    }   
  );
toast.success(responce.data.massage)

}catch{
toast.error("somthing went wrong")
}
  
      
  };
   

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Add Product</h2>

        <form className="space-y-4">
          {/* Image */}
          <input
            type="text"
            placeholder="Image URL"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handelimage}
          />
          <div className="flex gap-2">
            {/* Price */}
            <input
              type="number"
              placeholder="Price"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handelprice}
            />

            {/* Oldprice */}
            <input
              type="number"
              step="0.1"
              placeholder="Oldprice"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handeloldprice}
            />
          </div>
          <div className="flex gap-2">
            {/* Rating */}
            <input
              type="number"
              step="0.1"
              placeholder="Rating"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handelrating}
            />

            {/* Section */}
            <input
              type="number"
              step="0.1"
              placeholder="Section"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handelsection}
            />
          </div>

          {/* Title */}
          <input
            type="text"
            placeholder="Title"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handeltitle}
          />

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handelsubject}
          />

          <div className="flex gap-2">
            {/* Category */}
            <input
              type="text"
              placeholder="Category"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handelcategory}
            />

            {/* Brand */}
            <input
              type="text"
              placeholder="brand"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handelbrand}
            />
          </div>
          {/* Description */}
          <input
            type="text"
            placeholder="Description"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handeldescription}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            onClick={hendalsubmit}
          >
            Submit Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default From;
