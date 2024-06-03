import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="bg-transparent shadow-lg rounded-lg p-8 max-w-lg mx-auto text-white">
        <h1 className="text-2xl font-bold mb-6">Get In Touch</h1>
        <form>
          <div className="mb-4 bg-transparent p-2">
           <p className='text-base text-center rounded bg-blue-900 shadow-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tenetur facere doloribus inventore quia et nobis distinctio harum voluptas fugiat?</p>
           <div className='text-end justify-end items-end my-2'>
           <button type='button'>Edit</button>
           </div>
          </div>

          <h1 className="text-xl mb-6">
          <i class="bi bi-geo-alt mr-2"></i>
            OUR OFFICE LOCATION</h1>
          <div className="mb-4 bg-transparent p-1">
           <p className='text-base text-center rounded bg-blue-900 shadow-lg'>108, Soi Pramote , jalgaon road , sambhajinagar - 431001</p>
           <div className='text-end justify-end items-end'>
           <button type='button'>Edit</button>
           </div>
          </div>

          <h1 className="text-xl mb-6">
          <i class="bi bi-telephone mr-2"></i>
            CONTACT NUMBER</h1>
          <div className="mb-4 bg-transparent flex justify-between p-1">
           <p className='text-base rounded bg-blue-900 shadow-lg'>+9422652187</p>
           <button type='button' className='text-end'>Edit</button>
          </div>

          <h1 className="text-xl mb-6">
          <i class="bi bi-envelope mr-2"></i>
            EMAIL</h1>
          <div className="mb-4 bg-transparent flex justify-between p-1">
           <p className='text-base rounded bg-blue-900 shadow-lg'>info@intelasolution.com</p>
           <button type='button' className='text-end'>Edit</button>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              ADD MORE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
