import AboutUs from '@/sections/AboutUs';
import OurTeam from '@/sections/OurTeam';
import OurSpaces from '@/sections/OurSpaces';

export default function AboutPage() {
  return (
    <div className="w-full overflow-x-hidden max-w-full bg-white pt-20">
      <AboutUs />
      <OurTeam />
      <OurSpaces />
    </div>
  );
}

