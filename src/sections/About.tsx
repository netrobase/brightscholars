import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="about bg-cover bg-center bg-[url('/img/aboutbg.png')] py-24 grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-16">
      <div className=" relative">
        <Image
          src="/img/about.png"
          alt="About Image"
          width={600}
          height={600}
           
          
        />
      </div>
      <div className="a space-y-6">
        <h2 className="text-3xl font-semibold text-main-color">About Us</h2>
        <p className="text-lg text-main-color">
          We offer a wide range of online courses to enhance your skills and
          career opportunities.
        </p>
        <h4 className="text-xl text-main-color">Our Mission</h4>
        <p className="text-lg text-main-color">
          We aim to provide high-quality education that is accessible to
          everyone, anywhere.
        </p>
        <h5 className="text-xl text-main-color">Join our community today!</h5>
      </div>
    </section>
  );
};

export default AboutSection;
