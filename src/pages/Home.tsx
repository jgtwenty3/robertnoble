import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className=''>
      <div className='flex justify-end'>
        <h1 className='font-vcr text-5xl md:text-9xl m-6 md:m-0 text-flicker-in-glow mb-80 md:mb-0'>ROBERT NOBLE</h1>
      </div>
      <div className='relative flex flex-col md:flex-row items-center'>
        <img src="/images/bobNoBg.png" className='w-fit'/> 
        <h2 className='absolute right-0 mr-5 mt-96 md:mr-5 md:mt-[-90px] md:text-xl bg-white p-2 text-xs'>I WRITE.</h2> 
      </div>
      <div className='flex flex-col md:flex-row bg-black text-white'>
        <Link to="https://bottlecap.press/products/asymptotes" className='md:hidden'>
          <img src="/images/asymptotes.webp" className='w-[80%] md:w-[60%] m-10 md:m-24 border-2 border-white'/>
        </Link>
        <Link to="https://bottlecap.press/products/asymptotes" className='md:hidden  md:order-2 md:w-1/2'>
            <h2 className='bg-white text-black font-vcr text-5xl text-center m-5'>BUY</h2>
          </Link>
        <div className='flex flex-col md:order-1 md:w-1/2 md:mt-24 md:p-24 m-10 mt-0 items-center justify-center'>
          <Link to="https://bottlecap.press/products/asymptotes" className='hidden md:block md:order-2 md:w-1/2'>
            <h2 className='bg-white text-black font-vcr text-5xl text-center'>BUY</h2>
          </Link>
        
        </div>
        <Link to="https://bottlecap.press/products/asymptotes" className='hidden md:block md:order-2 md:w-1/2'>
          <img src="/images/asymptotes.webp" className='w-[80%] md:w-[60%] m-10 md:m-24 border-2 border-white'/>
        </Link>
      
      </div>
    </div>
  );
}

export default Home;
