import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    const contactHeading = document.getElementById('contact-heading');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contactHeading.classList.add('tracking-in-contract');
          observer.unobserve(contactHeading);
        }
      });
    }, { threshold: 1.0 }); // Adjusted threshold value

    if (contactHeading) {
      observer.observe(contactHeading);
    }

    return () => {
      if (contactHeading) {
        observer.unobserve(contactHeading);
      }
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
        <h1 id='contact-heading' className='font-vcr text-5xl md:text-9xl underline mb-5'>
          CONTACT
        </h1>
        <h2 className='bounce-top text-2xl md:text-6xl hover:scale-105'>
          email:
          <a href="mailto:bobbynob9@gmail.com" className='ml-2 underline'>
            bobbynob9@gmail.com
          </a>
        </h2>
        <h2 className='bounce-top text-2xl md:text-6xl hover:scale-105'>
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
