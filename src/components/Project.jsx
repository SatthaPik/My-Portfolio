import React from 'react';

function Project() {
  return (
    <div
      name='project'
      className='w-full md:h-screen text-gray-300 bg-gray-900 '
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-300'>
            Projects
          </p>
          <p className='py-6'>ผลงานของฉัน</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
