import { useEffect, useState } from 'react';
import Common from './Common';
import { useLoading } from './context/LoadingContext';
import { Button } from '../components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '../components/ui/sheet';
import { Link } from 'react-router-dom';
import { MenuHeader } from './menuConfig';
import { HeaderIcon } from './icon/configIcon';
import { Color } from './color';
import LogoPNG from '../assets/logo.png';
import { Clock8 } from 'lucide-react';
import { Headset } from 'lucide-react';
import { Mail } from 'lucide-react';
export default function Header() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [name, setName] = useState('');

   useEffect(() => {
      const accessToken = Common.CheckToken();
      const userName = sessionStorage.getItem('name');
      if (accessToken) {
         setIsLoggedIn(true);
         setName(userName);
      } else {
         setIsLoggedIn(false);
         setName('');
      }
   }, [isLoggedIn]);

   const fullScreenHeader = () => {
      return (
         <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {MenuHeader.map((item) => (
               <Link
                  to={item.link}
                  className="group relative flex items-center gap-4 text-black transition-colors duration-300 ease-in-out hover:text-blue"
               >
                  {item.name}
                  <span className="absolute bottom-[-5px] left-1/2 h-[2px] w-0 bg-[#1E90FF] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
               </Link>
            ))}
         </nav>
      );
   };

   return (
      <header
         style={{ zIndex: '999', height: '88px' }}
         className=" w-full z-9999 fixed flex  items-center justify-between bg-background px-4 py-3 shadow-lg  sm:px-6 md:py-4"
      >
         <Link href="#" className="flex items-center gap-2 font-bold">
            <img src={LogoPNG} alt="logo" className="object-contain w-20 h-20" />
         </Link>
         {fullScreenHeader()}
         <div className="flex gap-10">
            <div className="flex items-center gap-2">
               <Clock8 className="size-6" />
               <div className="flex justify-center flex-col items-center">
                  <p className="text-sm font-medium">Opening Hour</p>
                  <p className="text-[13px]">Mon - Fri: 9:00 - 18:00</p>
               </div>
            </div>
            <div className="flex items-center gap-2">
               <Headset className="size-6" />
               <div className="flex justify-center flex-col items-center">
                  <p className="text-sm font-medium">Call Us</p>
                  <p className="text-[13px]">+1 234 567 890</p>
               </div>
            </div>
            <div className="flex items-center gap-2">
               <Mail className="size-6" />
               <div className="flex justify-center flex-col items-center">
                  <p className="text-sm font-medium">Mail Us</p>
                  <p className="text-[13px]">abc@gmail.com</p>
               </div>
            </div>
         </div>
         <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden sm:inline-flex">
               Đăng ký
            </Button>
            <Button style={{ backgroundColor: '#1363DF' }} className="hidden sm:inline-flex">
               Đăng nhập
            </Button>
         </div>
      </header>
   );
}
