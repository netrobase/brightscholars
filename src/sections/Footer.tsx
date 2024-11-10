import Image from 'next/image';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="contact py-24 bg-white px-8 md:px-16">
      <div >
        {/* Logo Section */}
        <div  data-aos="zoom-in">
          <Image
            src="/img/logo.svg"
            alt="Logo"
            className="mx-auto mb-6"
            width={400}
            height={400}
          />
        </div>

        {/* Links Section */}
        <div className="flex justify-center items-center py-6">
          <ul className="font-bold text-lg flex justify-between gap-8 ">
            <li>
              <a href="#" className="text-gray-800 hover:text-main-color ">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-main-color ">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-main-color ">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-center text-center py-6 ">
        <p className="text-sm text-gray-600">
          &copy; {currentYear} Made with ❤️{' '}
          <a href="https://www.netrobase.com">NetrobaseLimited</a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
