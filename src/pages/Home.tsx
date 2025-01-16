const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <div className='flex justify-end'>
        <h1 className='font-vcr text-5xl md:text-9xl m-4 md:m-0 text-flicker-in-glow mb-80 md:mb-0'>ROBERT NOBLE</h1>
      </div>
      <div className='relative flex flex-col md:flex-row items-center'>
        <img src="/images/bobNoBg.png" className='w-fit mb-0 md:mb-0'/>
        <h2 className='line-1 anim-typewriter absolute right-0 mr-8 mt-60 md:mr-5 md:mt-[-90px] md:text-xl bg-white p-2 text-xs'>I WRITE.</h2>
      </div>
    </div>
  );
}

export default Home;
