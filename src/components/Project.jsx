import React from 'react';
import netfliximg from '../assets/netflix-clone.jpg';
import cowayimg from '../assets/coway.jpg';
import darkmood from '../assets/Darkmode.jpg';
import todolist from '../assets/Todo list.jpg';
function Project() {
  return (
    <div
      name='project'
      className='w-full md:h-screen text-gray-300 bg-gray-900'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-300'>
            Projects
          </p>
          <p className='py-6'>ผลงานของฉัน</p>
          <div>
            {/* Hover Effect */}
            <div className='group justify-center items-center text-center'>
              <a href='https://netflix-clone-3d2d2.web.app/' target='-blank'>
                <img
                  className='px-2 py-2 rounded-xl opacity-70 hover:opacity-100 duration-500'
                  src={netfliximg}
                />
              </a>
              <div className='opacity-0 group-hover:opacity-100 duration-300 space-x-10 text-white font-bold mb-5'>
                <a href='https://netflix-clone-3d2d2.web.app/' target='-blank'>
                  <button
                    className='bg-gradient-to-tr  from-green-400 to-blue-500 w-16 h-10 rounded-lg'
                    type='button'
                  >
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/SatthaPik/Netflix-Clone'
                  target='-blank'
                >
                  <button
                    className='bg-gradient-to-tr  from-green-400 to-blue-500 w-16 h-10 rounded-lg'
                    type='button'
                  >
                    Code
                  </button>
                </a>
              </div>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <a href='https://coway01-2e54e.web.app/' target='-blank'>
                  <img
                    src={cowayimg}
                    className=' rounded-md opacity-80 hover:opacity-100 hover:scale-105 duration-500 '
                  />
                </a>
                <a
                  href='https://papaya-cannoli-c9d879.netlify.app/'
                  target='-blank'
                >
                  <img
                    src={darkmood}
                    className=' rounded-md opacity-80 hover:opacity-100 hover:scale-105 duration-500 '
                  />
                </a>
                <a
                  href='https://635116678de90705941afce3--splendorous-salmiakki-78df30.netlify.app/'
                  target='-blank'
                >
                  <img
                    src={todolist}
                    className=' rounded-md opacity-80 hover:opacity-100 hover:scale-105 duration-500 '
                  />
                </a>
                <a href=''>
                  <img
                    src={cowayimg}
                    className=' rounded-md opacity-80 hover:opacity-100 hover:scale-105 duration-500 '
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
