import React from 'react';

const DraftPost = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="bg-blue-800 shadow-lg rounded-lg p-8 max-w-lg mx-auto text-white">
        <h1 className="text-2xl font-bold mb-6">Draft Posts</h1>
        <form>
			<div className=' flex gap-5 '>
			<p className="text-white bg-blue-900 w-14 h-14 text-center p-3 text-xl rounded-full">A</p> 
			<div>
			<p className='text-xl'>Aryan</p>
			<p>Drafted 11,jan 2024</p>
			</div>
			</div>
          <div className="mb-4 my-5">
            <label htmlFor="title" className="block text-base rounded bg-blue-900 shadow-lg p-2">Title</label>
          </div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, accusamus necessitatibus vero quidem voluptates perspiciatis praesentium soluta consequuntur saepe vel!</p>
<img className='my-5 rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgij4TF5D42Fz6dWdEbr3nofgAbfTRx_EUg&s" alt="" />
        </form>
      </div>
    </div>
  );
}

export default DraftPost;
