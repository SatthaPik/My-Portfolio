import React from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div name='home' className='w-100 h-screen bg-gray-900'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full space-y-5'>
        <p className='text-blue-400 text-xl'>Hi, my name is</p>
        <h1 className='md:text-8xl text-5xl  font-bold text-green-100'>
          Sattha Pikhunthod
        </h1>
        <span className='md:text-5xl text-5xl  font-bold text-gray-400'>
          <Typewriter
            options={{
              strings: ['I am fron-end developer.', 'I am beginner.'],
              autoStart: true,
              loop: true,
            }}
          />
        </span>

        <p className='text-white'>
          I'm a fron-end developer can learn quickly. I'm focused on building
          responsive web application. I'm more skills.
        </p>
        <button
          type='button'
          className='flex group px-4 justify-between items-center text-white border border-blue-500  rounded-md hover:bg-gradient-to-tr  from-green-400 to-blue-500 w-[180px] h-[50px]'
        >
          <Link
            className='font-bold text-green-300 hover:text-white duration-500'
            to='skills'
            smooth={true}
            duration={500}
          >
            Viwe my skills
          </Link>
          <span className='-rotate-90 group-hover:animate-bounce '>
            <FaArrowAltCircleDown />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Home;
