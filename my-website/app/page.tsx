import Hero from '@/sections/Hero';
import SplitServices from '@/sections/SplitServices';
import AboutUs from '@/sections/AboutUs';
import OurTeam from '@/sections/OurTeam';
import Testimonials from '@/sections/Testimonials';
import BookingForm from '@/sections/BookingForm';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden max-w-full">
      <Hero />
      <SplitServices />
      <AboutUs />
      <OurTeam />
      <Testimonials />
      <BookingForm />
    </div>
  );
}
