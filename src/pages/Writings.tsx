import { Link } from "react-router-dom";

const Writings = () => {
  return (
    <div>
      <div className="m-2">
        <h1 className="font-vcr text-4xl md:text-9xl">POST-COLONIAL-POOP</h1>
        <h2 className="text-3xl m-2">by Robert Noble</h2>
        <div className="p-2 mb-10 text-xl">
          <p className="mb-5">
            My mom wiped my ass until I was 7. Look – it wasn’t all the time, but it was…a lot of the times. People wear their hearts on their sleeves, and I wore mine on my stomach – it ached all the time and the outcome was never pretty, so I needed the help.
          </p>
          <p className="mb-5">
            I remember the day that it ended. I get called to the principal’s office, but my mom isn’t there – just my friend’s mom. She looks a little sad like grown-ups sometimes do.
          </p>
          <p className="mb-5">
            “So your mom’s been detained by immigration officers and she can’t pick you up…You’re going to have to come with me…She might get deported back to the Philippines…Do you understand?” I didn’t understand.
          </p>
          <Link to="https://www.heavenmagazine.net/post-colonial-poop-by-robert-noble">
            <h2 className="font-vcr text-xl">READ MORE</h2>
          </Link>
        </div>
      </div>
      <div className="m-2">
        <div className="mb-5">
          <h1 className="font-vcr mt-10 md:mt-0 text-4xl md:text-9xl">ASYMPTOTES:<br />ON CLOSENESS</h1>
          <h2 className="text-3xl m-2">by Robert Noble</h2>
        </div>
        <div className="text-xl mb-5 m-2 flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-10">
            <p className="mb-5">
              Asymptotes: On Closeness is a mixed-genre collection of stories on human (and non-human) relationships. At times goofy, and other times sincere, it wrestles with what it means to long for and feel love.
            </p>
            <p className="mb-5">
              From examinations on romantic love and self-acceptance, forgiveness and transient interactions at a Manhattan hotel, Asymptotes aims to tell stories that reveal how intimacy manifests itself through experience and imagination, and how language ultimately falls short in expressing how we really feel. Even though we all try anyway.
            </p>
            <Link to="https://bottlecap.press/products/asymptotes" className="hidden md:inline-block font-vcr text-center mx-5 md:mx-auto bg-white text-black font-bold text-2xl py-2 px-4 border-2 border-black hover:vibrate-1">
              BUY IT
            </Link>
          </div>
          <div className="relative mb-5 md:w-1/2">
            <img src="/images/asymptotes.webp" className="w-full md:max-w-[50%] md:self-center" />
          </div>
        </div>
        <Link to="https://bottlecap.press/products/asymptotes" className="block md:hidden font-vcr text-center mx-5 md:mx-auto bg-white text-black font-bold text-2xl py-2 px-4 border-2 border-black hover:vibrate-1">
          BUY IT
        </Link>
      </div>
    </div>
  );
};

export default Writings;
