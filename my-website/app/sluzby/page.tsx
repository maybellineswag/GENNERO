import SplitServices from '@/sections/SplitServices';
import BookingForm from '@/sections/BookingForm';

export default function ServicesPage() {
  return (
    <div className="w-full overflow-x-hidden max-w-full">
      <SplitServices height="h-[85vh] md:h-[95vh]" clickToExpand={true} />
      <BookingForm />
    </div>
  );
}

