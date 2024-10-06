import React from 'react';
import { Breadcrumbs } from '../based/Breadcrumbs';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Building2, UserRoundCheck, MapPin, Receipt, Zap } from 'lucide-react';
import Promo from '../homepage/Promo';
import { Badge } from '../components/ui/badge';

const items = [
   { title: 'Home', link: '/' },
   { title: 'Stylist', link: '/stylist' },
   { title: 'Profile', link: '/profile' },
];

const workSchedule = [
   { day: 'Thứ 2', hours: '8:00 - 17:00' },
   { day: 'Thứ 3', hours: '8:00 - 17:00' },
   { day: 'Thứ 4', hours: '8:00 - 17:00' },
   { day: 'Thứ 5', hours: '8:00 - 17:00' },
   { day: 'Thứ 6', hours: '8:00 - 17:00' },
   { day: 'Thứ 7', hours: '9:00 - 15:00' },
   { day: 'Chủ nhật', hours: '9:00 - 17:00' },
];

const listMenu = [
   {
      id: 1,
      title: 'Giới thiệu',
   },
   {
      id: 2,
      title: 'Kinh nghiệm làm việc',
   },
];

export default function StylistProfile() {
   const [activeMenu, setActiveMenu] = React.useState(1);

   const renderDetailMenu = () => {
      switch (activeMenu) {
         case 1:
            return (
               <div className="w-full ">
                  <h1 className="font-bold text-2xl">Giới thiệu chuyên gia</h1>
                  <p className="text-muted-foreground text-[18px] mt-4">
                     Anh Hoàng là một stylist chuyên nghiệp, có kinh nghiệm lâu năm trong ngành tóc. Anh đã từng làm
                     việc tại các salon nổi tiếng ở HCM. Anh có khả năng tư vấn và thực hiện các kiểu tóc phù hợp với
                     khuôn mặt và phong cách của khách hàng.
                  </p>
                  <p className="text-muted-foreground text-[18px] mt-4">
                     Hiện tại, anh đang làm việc tại salon Hair Harmony, HCM. Ngoài ra, anh còn nhận dạy học viên tại
                     trung tâm đào tạo tóc Hair Harmony.
                  </p>
               </div>
            );
         case 2:
            return (
               <div className="w-full">
                  <h1 className="font-bold text-2xl">Kinh nghiệm làm việc</h1>
                  <p className="text-muted-foreground text-[18px] mt-4">
                     Anh Hoàng có kinh nghiệm làm việc trong ngành tóc là 10 năm. Anh đã từng làm việc tại các salon nổi
                     tiếng ở HCM. Anh có khả năng tư vấn và thực hiện các kiểu tóc phù hợp với khuôn mặt và phong cách
                     của khách hàng.
                  </p>
               </div>
            );
         default:
            return;
      }
   };

   return (
      <div>
         <Promo />
         <div className="w-[70%] mb-10 mt-3 mx-auto">
            <Breadcrumbs items={items} />
            <div className="grid pt-10 grid-cols-1 lg:grid-cols-[70%,30%] gap-6">
               <div className="mr-20">
                  <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-start">
                     <Avatar className="w-20 h-20">
                        <AvatarImage src="https://github.com/shadcn.png" alt="Hoàng Nguyễn" />
                        <AvatarFallback>H</AvatarFallback>
                     </Avatar>
                     <div>
                        <h1 className="font-bold text-[34px]">Hoàng Nguyễn</h1>
                        <Badge className="bg-red2 text-[18px] text-center flex justify-center w-[90px] mt-2 text-black border border-red">
                           Stylist
                        </Badge>
                        <div className="w-[70%] mt-5">
                           <div className="grid grid-cols-2 gap-2">
                              <div className="flex text-[20px] items-center gap-2 text-muted-foreground">
                                 <Building2 className="size-5 stroke-gray-400" />
                                 <span>Chức vụ:</span>
                              </div>
                              <p className="text-muted-foreground text-[20px]">Chuyên gia</p>
                           </div>
                           <div className="grid grid-cols-2 gap-2">
                              <div className="text-[20px] flex items-center gap-2 text-muted-foreground">
                                 <UserRoundCheck className="size-5 stroke-gray-400" />
                                 <span>Kinh nghiệm:</span>
                              </div>
                              <p className="text-muted-foreground text-[20px]">10 Năm</p>
                           </div>
                           <div className="grid grid-cols-2 gap-2">
                              <div className="flex items-center text-[20px] gap-2 text-muted-foreground">
                                 <MapPin className="size-5 stroke-gray-400" />
                                 <span>Địa điểm làm việc:</span>
                              </div>
                              <p className="text-muted-foreground text-[20px]">HCM</p>
                           </div>
                        </div>
                     </div>
                     <div className="flex flex-col items-end">
                        <Badge
                           variant="default"
                           className="bg-red2 py-2 text-lg font-bold text-black border border-red hover:bg-red2"
                        >
                           Chuyên viên kinh nghiệm
                        </Badge>
                     </div>
                  </div>
                  <div className="mt-[5%]">
                     <div className="flex gap-6 w-full border-b-2">
                        {listMenu.map((menu, index) => (
                           <p
                              key={index}
                              className={`font-semibold text-[20px] cursor-pointer hover:text-red ${
                                 activeMenu === menu.id ? 'border-b-4 text-red border-red pb-2' : ''
                              }`}
                              onClick={() => setActiveMenu(menu.id)}
                           >
                              {menu.title}
                           </p>
                        ))}
                     </div>
                     <div className="mt-4">{renderDetailMenu()}</div>
                  </div>
               </div>
               <div className="flex flex-col gap-6">
                  <div className="border border-gray-200 rounded-lg p-4 shadow-lg flex flex-col items-center">
                     <div className="space-y-4 w-full flex flex-col items-center">
                        <div className="flex items-center gap-2">
                           <Receipt className="stroke-blue" />
                           <div className="flex flex-col text-sm">
                              <span>Giá tiền:</span>
                              <strong>Chỉ từ 500.000 VNĐ</strong>
                           </div>
                        </div>
                        <Button className="w-full flex items-center justify-center gap-2 bg-red hover:bg-red">
                           <Zap className="stroke-white fill-white" />
                           <span>Đặt lịch</span>
                        </Button>
                     </div>
                  </div>

                  {/* Lịch làm việc */}
                  <div className="border border-gray-200 rounded-lg p-4 shadow-lg">
                     <div className="flex justify-between items-center w-full mb-4">
                        <h1 className="font-bold text-2xl">Lịch làm việc</h1>
                        <Badge className="bg-red2 h-[28px] text-black border border-red">Full-time</Badge>
                     </div>
                     <div className="w-full">
                        {workSchedule.map((schedule, index) => (
                           <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                              <h2 className="font-semibold text-[16px]">{schedule.day}</h2>
                              <p className="text-muted-foreground">{schedule.hours}</p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
