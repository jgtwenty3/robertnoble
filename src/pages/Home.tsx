import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className=''>
      <div className='flex justify-end'>
        <h1 className='font-vcr text-5xl md:text-9xl m-6 md:m-0 text-flicker-in-glow'>ROBERT NOBLE</h1>
      </div>
      <div className='flex flex-col md:flex-row items-center'>
        <img src="/images/bobNoBg.png" className=''/>
        <p className='text-md md:text-lg md:mt-36 p-10 m:p-2 md:mr-24 md:block'>
          Robert Noble is a Filipino-American (and British) writer and attorney living in Brooklyn, New York. 
          He has contributed to works at TASCHEN and Bushwick Daily. 
          He can be found smiling awkwardly in photos on Instagram at{' '}
          <span>
            <Link to="https://www.instagram.com/bobmeetsworld">
              @bobmeetsworld
            </Link>
          </span>.
        </p>
      </div>
      <div className='flex flex-col md:flex-row bg-black text-white'>
        <Link to="https://bottlecap.press/products/asymptotes" className='md:hidden'> {/* Display image first on small screens */}
          <img src="/images/asymptotes.webp" className='w-[80%] md:w-[60%] m-10 md:m-24 border-2 border-white'/>
        </Link>
        <div className='flex flex-col md:order-1 md:w-1/2 md:mt-24 md:p-24 m-10'> {/* Ensure it maintains layout on larger screens */}
          <p className='m-2 md:text-2xl text-lg'>
            Asymptotes: On Closeness is a mixed-genre collection of stories on human (and non-human) relationships. 
            At times goofy, and other times sincere, it wrestles with what it means to long for and feel love.
          </p>
          <p className='m-2 md:text-2xl text-lg md:mb-10'> 
            From examinations on romantic love and self-acceptance, forgiveness and transient interactions at a Manhattan hotel, 
            Asymptotes aims to tell stories that reveal how intimacy manifests itself through experience and imagination, 
            and how language ultimately falls short in expressing how we really feel. 
            Even though we all try anyway.
          </p>
          <Link to="https://bottlecap.press/products/asymptotes">
            <h1 className='text-2xl bg-white text-black text-center font-vcr'>BUY IT</h1>
          </Link>
        </div>
        <Link to="https://bottlecap.press/products/asymptotes" className='hidden md:block md:order-2 md:w-1/2'> {/* Maintain image placement on larger screens */}
          <img src="/images/asymptotes.webp" className='w-[80%] md:w-[60%] m-10 md:m-24 border-2 border-white'/>
        </Link>
      </div>
    </div>
  );
}

export default Home;
