import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2130-03-02T09:24:00');
    setAge(((birthTime - Date.now()) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Approximate time remaining 🙃',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 3,
    link: '',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Kumasi, KSI',
  },
];

export default data;
