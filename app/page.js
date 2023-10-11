"use client"
import React, { useState, useEffect } from 'react';

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=db55a77e59ec47c9bb2fb699524fae8b');
      try {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.articles);
        setLoading(false);
      } catch (err) {
        console.error(err, "something went wrong");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-1/2 lg:w-1/3">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((item, index) => (
            <div key={index} className="my-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={item.urlToImage} alt={item.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
