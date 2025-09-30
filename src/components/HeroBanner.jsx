import { useEffect, useState } from 'react';
import BuildingImg from '../assets/build1.png';

export default function HeroBanner() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
      
      {/* Background Image with parallax */}
      <img
        src={BuildingImg}
        alt="Horizon Dental Building"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/70 via-orange-500/70 to-red-500/70"></div>

      <div className="relative z-10">
        <h1 className="text-5xl font-bold">Welcome to Horizon Dental</h1>
        <p className="mt-4 text-xl">Professional dental care with a smile</p>
      </div>
    </div>
  );
}
