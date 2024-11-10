import Image from 'next/image';
import React from 'react';

// Define the interface for props
interface BoxProps {
  image: string;
  title: string;
  description: string;
}

const Box: React.FC<BoxProps> = ({ image, title, description }) => {
  return (
    <div className=" p-8 items-center gap-6 border rounded-lg shadow-lg hover:shadow-2xl transition-all">
      <div className=" w-32 h-32 bg-gray-200 rounded-full">
        <Image src={image} alt={title} width={100}  height={100} className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="">
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Box;
