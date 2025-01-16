import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    const contactHeading = document.getElementById('contact-heading');
    const emailElement = document.querySelector('.email-animation');
    const instagramElement = document.querySelector('.instagram-animation');

    const handleScroll = () => {
      const contactBounding = contactHeading!.getBoundingClientRect();
      if (contactBounding.top < window.innerHeight && contactBounding.bottom >= 0) {
        // CONTACT is in view
        contactHeading!.classList.add('tracking-in-contract');

        setTimeout(() => {
          emailElement!.classList.add('bounce-top');
          instagramElement!.classList.add('bounce-top');
        }, 1800);

        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <div className='flex flex-col md:flex-row m-10 items-center'>
        <p className='text-md md:text-4xl m-2 mb-5'>
          Robert Noble is a Filipino-American (and British) writer and attorney living in Brooklyn, New York.
          He has contributed to works at TASCHEN and Bushwick Daily.
          He can be found smiling awkwardly in photos on Instagram at{' '}
          <span>
            <Link to="https://www.instagram.com/bobmeetsworld">
              @bobmeetsworld
            </Link>
          </span>.
        </p>
        <img src="/images/bobbywindow.webp" className='kenburns-top md:w-[50%]'/>
      </div>
      <div className='m-10'>
        <h1 id='contact-heading' className='font-vcr text-5xl md:text-9xl underline mb-5 hidden-until-animated opacity-0'>
          CONTACT
        </h1>
        <h2 className='text-2xl md:text-6xl hover:scale-105 email-animation opacity-0 '>
          email:
          <a href="mailto:bobbynob9@gmail.com" className='ml-2 '>
            bobbynob9@gmail.com
          </a>
        </h2>
        <h2 className='text-2xl md:text-6xl hover:scale-105 instagram-animation opacity-0'>
          instagram:
          <span className='ml-2'>
            <Link to="https://www.instagram.com/bobmeetsworld">
              @bobmeetsworld
            </Link>
          </span>
        </h2>
      </div>
    </div>
  );
}

export default About;
