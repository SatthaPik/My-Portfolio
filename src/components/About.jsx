import React from 'react';
import Aos from 'aos';

function About() {
  return (
    <div name='about' className='w-full h-screen bg-gray-900 text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-green-300'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Sattha ,nice to meet you .Please take a look around.</p>
          </div>
          <p>
            ถ้าองค์กรของคุณกำลังมองหาคนที่แอคทีฟในการทำงาน
            และมีความคิดสร้างสรรค์ในการออกแบบเว็บไซต์ โปรดจงมองมาที่ผม
            เพราะผมชอบเรียนรู้สิ่งใหม่ๆอยู่เสมอ ในด้านเทคโนโลยี
            อีกทั้งยังสามารถเรียนรู้ได้อย่างรวดเร็ว มีความรับผิดชอบสูง
            และเข้าสังคมได้ดี ไม่มี ego ชอบการถูกติชม เพื่อไปปรับปรุงตัวเอง
            และงานให้ดียิ่งขึ้น
            ดังนั้นคุณจะมั่นใจได้ว่าผมจะสามารถพัฒนาได้อย่างไม่หยุดยั้ง
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
