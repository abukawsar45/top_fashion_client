import React from 'react';
import { BsSearch, BsPeopleFill } from 'react-icons/bs';
import { GiArchiveResearch, GiGraduateCap } from 'react-icons/gi';
import student from './../../assets/student.png';
import teacher from './../../assets/teacher.png';
import studentBg from './../../assets/studentBg.png';
import teacherBg from './../../assets/teacherBg.png';

const AllinOne = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${studentBg})`,
    backgroundRepeat: 'no-repeat',
  };
  const backgroundImageStyle2 = {
    backgroundImage: `url(${teacherBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div className='my-4 md:my-6 lg:my-8 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 lg:gap-8 '>
      <div className='flex flex-col justify-center w-full  '>
        <h3 className='text-xl md:text-3xl lg:text-6xl headLine-font'>
          Here will you{' '}
          <span className='font-semibold  text-transparent bg-clip-text bg-gradient-to-br from-[#0076CE] to-[#9400D3] '>
            Find
          </span>{' '}
          everythings
        </h3>
        <p className='mt-2 md:mt-3 lg:mt-4 text-black text-2xl '>
          We are more than a platform; We are your success partner, Discover out
          services to achieve your business and educational goals
        </p>
        <div className='my-4 md:mt-6 lg:mt-14'>
          <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='flex gap-2 md:gap-4 lg:gap-8'>
                <p className='p-2 '>
                  <BsSearch className='text-6xl' />
                </p>
                <p className='mt-2 md:mt-3 lg:mt-4 text-[#616161] '>
                  <span className='uppercase font-semibold'>search</span> for
                  vital company information
                </p>
              </div>
              <div className='flex gap-2 md:gap-4 lg:gap-8'>
                <p className='p-2 '>
                  <BsPeopleFill className='text-6xl' />
                </p>
                <p className='mt-2 md:mt-3 lg:mt-4 text-[#616161] '>
                  <span className='uppercase font-semibold'>connect</span> with
                  me resources to meet your business needs.
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 '>
              <div className='flex gap-2 md:gap-4 lg:gap-8'>
                <p className='p-2 '>
                  <GiArchiveResearch className='text-6xl' />
                </p>
                <p className='mt-2 md:mt-3 lg:mt-4 text-[#616161] '>
                  <span className='uppercase font-semibold'>research</span> and
                  generate reports that drive growth
                </p>
              </div>
              <div className='flex gap-2 md:gap-4 lg:gap-8'>
                <p className='p-2 '>
                  <GiGraduateCap className='text-6xl' />
                </p>
                <p className='mt-2 md:mt-3 lg:mt-4 text-[#616161] '>
                  <span className='uppercase font-semibold'>academy</span> to
                  give you the skills for success un your career
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:gap-2 lg:gap-4 md:justify-center w-full '>
        <div className='flex '>
          <div className='flex flex-col mt-[5%]  md:items-end gap-2 '>
            <p className='bg-purple-300 px-4 py-2 rounded-full rounded-br-none text-end'>
              hey, check out loreumipsum services.
            </p>
            <p className='bg-purple-300 px-4 py-2 rounded-full rounded-br-none text-end'>
              i learned from their videos, got my first job.
            </p>
            <p className='bg-purple-300 px-4 py-2 rounded-full rounded-br-none text-end'>
              you won&apos;t be disappointed with their services.
            </p>
          </div>
          <div>
            <img
              style={backgroundImageStyle}
              src={student}
              alt='student-photo'
              className='w-9/12 rounded-full'
            />
          </div>
        </div>
        <div className='flex mt-2 md:mt-4 lg:mt-12'>
          <div>
            <img
              style={backgroundImageStyle2}
              src={teacher}
              alt='teacher-photo'
              className='w-11/12 rounded-full'
            />
          </div>
          <div className='flex flex-col md:items-end gap-2 lg:-ml-64  lg:-mt-12'>
            <p className='bg-green-200 px-4 py-2 rounded-full rounded-es-none text-end'>
              I got a perfect analysis report from them too
            </p>
            <p className='bg-green-200 px-4 py-2 rounded-full rounded-es-none text-end'>
              Oh, that&apos;s great.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllinOne;
