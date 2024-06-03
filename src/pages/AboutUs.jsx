import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';

const AboutUs = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const heroCollection = collection(db, 'home');
        const snapshot = await getDocs(heroCollection);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setHeroData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-10 mr-10">
        <div className="col-span-1 bg-blue-900 p-5 shadow-2xl flex flex-col">
          <div className='h-10 w-10'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzarh1dYilxuNaWg3IGRWUcKUbWv6BobWEIw&s" alt="" className='rounded-full' />
          </div>
          <div className='flex justify-between bg-blue-800 text-white shadow rounded w-full h-auto my-5'>
            <p className='ml-3'>WHO WE ARE</p>
            <button className='mr-3'>Edit</button>
          </div>
          <div className='text-white my-5'>
            {heroData ? (
              heroData.map(item => (
                <div key={item.id} >
                  <h2 >{item.para}</h2>
                </div>
              ))
            ) : (
              <span>Loading...</span>
            )}
          </div>
          <p className='text-end my-5 text-white'>Edit</p>
        </div>
        <div className="col-span-1 bg-blue-900 p-5 shadow-2xl flex flex-col">
          <div className='h-10 w-10'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzarh1dYilxuNaWg3IGRWUcKUbWv6BobWEIw&s" alt="" className='rounded-full' />
          </div>
          <div className='flex justify-between bg-blue-800 text-white shadow rounded w-full h-auto my-5'>
            <p className='ml-3'>OUR MISSION</p>
            <button className='mr-3'>Edit</button>
          </div>
          <p className='text-white my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut cupiditate, nihil quia, modi, recusandae quos quaerat optio voluptatum a est quod dolor eos totam iusto veniam debitis esse fuga! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, itaque?</p>
          <p className='text-end my-5 text-white'>Edit</p>
        </div>
        <div className="col-span-1 bg-blue-900 p-5 shadow-2xl flex flex-col">
          <div className='h-10 w-10 '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzarh1dYilxuNaWg3IGRWUcKUbWv6BobWEIw&s" alt="" className='rounded-full' />
          </div>
          <div className='flex justify-between bg-blue-800 text-white shadow rounded w-full h-auto my-5'>
            <p className='ml-3'>OUR VISION</p>
            <button className='mr-3'>Edit</button>
          </div>
          <p className='text-white my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut cupiditate, nihil quia, modi, recusandae quos quaerat optio voluptatum a est quod dolor eos totam iusto veniam debitis esse fuga! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, itaque?</p>
          <p className='text-end my-5 text-white'>Edit</p>
        </div>
      </div>
      <div className='text-end mr-10'>
        <button className='bg-yellow-500 text-white w-16 h-8 my-5 rounded'>Save</button>
      </div>
    </div>
  );
};

export default AboutUs;
