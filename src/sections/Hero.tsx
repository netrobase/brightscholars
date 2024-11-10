import Image from 'next/image';
import Link from 'next/link';
const Hero = () => {
  return (
    <section className=" bg-cover bg-center bg-[url('/img/background.png')] h-screen grid grid-cols-1 md:grid-cols-2 gap-6 px-16 pt-24">
      <div className="flex flex-col justify-center items-start space-y-6 ">
        <h1 className="md:text-6xl text-4xl font-bold text-main-color">Welcome to Dreams Academy</h1>
        <p className="text-text-color text-lg font-semibold">Your journey to learning begins here.</p>
        <p className="text-sm text-second-color">Explore courses, learn new skills, and grow professionally.</p>
          <Link href="https://www.kralis.app/"> 
          <button 
            type="submit" 
            className="text-white bg-[#f66962] px-6 py-4 rounded-full cursor-pointer"
          >
            School Portal
          </button>
          </Link>
      </div>
      <div>
        <Image 
          src="/img/home.png" 
          alt="Illustration of learning resources" 
          layout="responsive" 
          width={500} 
          height={300} 
        />
      </div>
    </section>
  );
};

export default Hero;
