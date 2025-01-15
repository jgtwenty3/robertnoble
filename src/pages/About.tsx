import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <div className='flex flex-col md:flex-row m-10 items-center'>
        <p className='text-md md:text-4xl m-2'>
          Robert Noble is a Filipino-American (and British) writer and attorney living in Brooklyn, New York. 
          He has contributed to works at TASCHEN and Bushwick Daily. 
          He can be found smiling awkwardly in photos on Instagram at{' '}
          <span>
            <Link to="https://www.instagram.com/bobmeetsworld">
              @bobmeetsworld
            </Link>
          </span>.
        </p>
        <img src="/images/bobbywindow.webp" className='md:w-[50%] '/>
        
      </div>
      <div className=' m-10'>
        <h1 className='font-vcr text-5xl md:text-9xl underline mb-5 '>CONTACT</h1>
        <h2 className='text-2xl md:text-6xl '>email: bobbynob9@gmail.com</h2>
        <h2 className='text-2xl md:text-6xl'>instagram: <span><Link to="https://www.instagram.com/bobmeetsworld">
              @bobmeetsworld
            </Link></span></h2>
      </div>
      
    </div>
  );
}

export default About;
