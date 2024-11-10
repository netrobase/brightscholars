
import React from 'react';
import FeatureBox from '../components/FeatureBox'; 

const Features: React.FC = () => {
  const features = [
    {
      key: 1,
      image: '/img/con1.svg',
      title: 'Feature 1',
      description: 'Description of feature 1.',
    },
    {
      key: 2,
      image: '/img/con2.svg',
      title: 'Feature 2',
      description: 'Description of feature 2.',
    },
    {
      key: 3,
      image: '/img/con3.svg',
      title: 'Feature 3',
      description: 'Description of feature 3.',
    },
    {
      key: 4,
      image: '/img/con4.svg',
      title: 'Feature 4',
      description: 'Description of feature 4.',
    },
  ];

  return (
    <section className='grid md:grid-cols-4 grid-cols-1 gap-4'>
      {features.map((feature) => (
        <FeatureBox
          key={feature.key}
          image={feature.image}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
};

export default Features;
