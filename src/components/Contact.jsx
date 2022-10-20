import React from 'react';

function Contact() {
  return (
    <div
      name='contact'
      className='w-full h-screen bg-gray-900 flex justify-center items-center p-4'
    >
      <form
        method='POST'
        action='https://getform.io/f/c13bd3e0-eaca-4a61-b931-29838ff77243'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8 space-y-5'>
          <p className='text-4xl font-bold inline border-b-4 border-green-300 text-white'>
            Contact
          </p>
          <p className='text-white'>
            Sumit the form below or shoot me an email - satthagolf36@gmail.com
          </p>
          <input
            type='text'
            placeholder='Name'
            className='rounded-md w-full p-2'
          />
          <input
            type='email'
            placeholder='E-mail'
            className='rounded-md w-full p-2'
          />
          <textarea
            name='message'
            cols='30'
            rows='10'
            placeholder='Message'
            className='w-full rounded-md p-2'
          ></textarea>
          <div className='text-center items-center justify-center text-white space-x-5'>
            <button className='p-1 border border-blue-400 rounded-md hover:bg-gradient-to-tr from-green-400 to to-blue-600 duration-700'>
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
