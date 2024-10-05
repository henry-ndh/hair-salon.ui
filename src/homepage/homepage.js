import Footer from '../based/Footer';
import CarouselBanner from './Carousel';
import CounterServices from './CounterServices';
import HairDetail from './HairDetail';
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
         <HairDetail />
      </>
   );
}
