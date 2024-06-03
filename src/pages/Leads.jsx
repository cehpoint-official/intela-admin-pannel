import React from 'react';

const Leads = () => {
  return (
    <div class="grid lg:grid-cols-2 gap-10 p-10 sm:grid-cols-1">
        <div class="flex flex-col p-4 bg-blue-900 shadow-2xl rounded-lg">
            <div class="pl-2 flex justify-between items-center text-white bg-blue-800 h-10 sm:h-auto w-full rounded">
                <h2 class="text-lg sm:text-base">Call Back Request</h2>
                <button class="text-lg mr-4">10</button>
            </div>
            <div className='flex'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHo9OIWFSxAiylc3Km3drPlkcEXDGwQtBLA&s" alt="Placeholder Image" class="my-6 sm:w-40 max-w-60 rounded-2xl"/>
            <p className='my-10 text-white m-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi harum, qui repudiandae minus accusantium recusandae eligendi nulla officiis aliquam incidunt.</p>
            </div>
            <p className='text-white text-end'>View Lead</p>
			
        </div>
        <div class="flex flex-col p-4 bg-blue-900 shadow-2xl rounded-lg">
            <div class="pl-2 flex justify-between items-center text-white bg-blue-800 h-16 sm:h-auto w-full rounded">
                <h2 class="text-lg sm:text-base">Book Consultation</h2>
                <button class="text-lg mr-4">04</button>
            </div>
            <div className='flex'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4IiszW38TxukPDM1wUq9Uqljd8M9liTkR1g&s" alt="Placeholder Image" class="my-6 sm:w-40 max-w-60 rounded-2xl"/>
            <p className='my-10 text-white m-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi harum, qui repudiandae minus accusantium recusandae eligendi nulla officiis aliquam incidunt.</p>
            </div>
            <p className='text-white text-end'>View Lead</p>
			
        </div>
        <div class="flex flex-col p-4 bg-blue-900 shadow-2xl rounded-lg">
            <div class="pl-2 flex justify-between items-center text-white bg-blue-800 h-10 sm:h-auto w-full rounded">
                <h2 class="text-lg sm:text-base">Demo Request</h2>
                <button class="text-lg mr-4">08</button>
            </div>
            <div className='flex'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UkMqRCCB39CMUjG3yVFS3C0tlSmSVl_XWg&s" alt="Placeholder Image" class="my-6 sm:w-40 max-w-60 rounded-2xl"/>
            <p className='my-10 text-white m-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi harum, qui repudiandae minus accusantium recusandae eligendi nulla officiis aliquam incidunt.</p>
            </div>
            <p className='text-white text-end'>View Lead</p>
			
        </div>
        <div class="flex flex-col p-4 bg-blue-900 shadow-2xl rounded-lg">
            <div class="pl-2 flex justify-between items-center text-white bg-blue-800 h-16 sm:h-auto w-full rounded">
                <h2 class="text-lg sm:text-base">Quotation Request</h2>
                <button class="text-lg mr-4">06</button>
            </div>
            <div className='flex'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFQaS_JSuTUvuvkjcVnaIfAAIzI9o1lMLFw&s" alt="Placeholder Image" class="my-6 sm:w-40 max-w-60 rounded-2xl"/>
            <p className='my-10 text-white m-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi harum, qui repudiandae minus accusantium recusandae eligendi nulla officiis aliquam incidunt.</p>
            </div>
            <p className='text-white text-end'>View Lead</p>
			
        </div>
        
        
    </div>
  );
};

export default Leads;
