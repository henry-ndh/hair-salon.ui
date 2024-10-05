import CarouselBanner from './Carousel';
import CounterServices from './CounterServices';
import Location from './Location';
import Promo from './Promo';
import Services from './Services';

export default function HomePage() {
   return (
      <>
         <Promo />
         <CarouselBanner />
         <Location />
         <CounterServices />
         <Services />
      </>
   );
}
