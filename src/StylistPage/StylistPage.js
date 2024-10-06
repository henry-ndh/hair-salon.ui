import React, { useState } from 'react';
import { Breadcrumbs } from '../based/Breadcrumbs';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Banknote, Building, Building2, MapPin, Receipt } from 'lucide-react';
import Promo from '../homepage/Promo';
import { Rate } from 'antd';
import { Link } from 'react-router-dom';
const items = [
   { title: 'Home', link: '/' },
   { title: 'Stylist', link: '/stylist' },
];

const stylists = [
   {
      name: 'Nguyễn Hoàng',
      location: 'HCM',
      experience: '10 năm kinh nghiệm',
      description:
         'Anh Hoàng là một stylist chuyên nghiệp, có kinh nghiệm lâu năm trong ngành tóc. Anh đã từng làm việc tại các salon nổi tiếng ở HCM. Anh có khả năng tư vấn và thực hiện các kiểu tóc phù hợp với khuôn mặt và phong cách của khách hàng.',
      price: '500,000 VND / 1 dịch vụ',
      avatar: 'https://github.com/shadcn.png',
      rating: 5,
   },
   {
      name: 'Trần Anh Tuấn',
      location: 'Hà Nội',
      experience: '7 năm kinh nghiệm',
      description:
         'Anh Tuấn là một nhà tạo mẫu đầy sáng tạo, có khả năng tư vấn phong cách thời thượng và phù hợp với xu hướng hiện tại.',
      price: '450,000 VND / 1 dịch vụ',
      avatar: 'https://via.placeholder.com/150',
      rating: 4,
   },
   {
      name: 'Phạm Huyền',
      location: 'Đà Nẵng',
      experience: '5 năm kinh nghiệm',
      description:
         'Chị Huyền chuyên tạo kiểu cho khách hàng nữ với phong cách hiện đại và cá tính, rất được khách hàng yêu thích.',
      price: '600,000 VND / 1 dịch vụ',
      avatar: 'https://via.placeholder.com/150',
      rating: 4.8,
   },
   {
      name: 'Nguyễn Thanh Bình',
      location: 'HCM',
      experience: '12 năm kinh nghiệm',
      description: 'Anh Bình là một chuyên gia về tạo kiểu tóc nam, có nhiều kinh nghiệm tại các salon nổi tiếng.',
      price: '550,000 VND / 1 dịch vụ',
      avatar: 'https://via.placeholder.com/150',
      rating: 4.2,
   },
   {
      name: 'Nguyễn Đức Hoản',
      location: 'HCM',
      experience: '12 năm kinh nghiệm',
      description: 'Anh Hoản là một chuyên gia về tạo kiểu tóc nam, có nhiều kinh nghiệm tại các salon nổi tiếng.',
      price: '550,000 VND / 1 dịch vụ',
      avatar: 'https://via.placeholder.com/150',
      rating: 4.3,
   },
   {
      name: 'Nguyễn Thanh Tú',
      location: 'HCM',
      experience: '12 năm kinh nghiệm',
      description: 'Anh Tú là một chuyên gia về tạo kiểu tóc nam, có nhiều kinh nghiệm tại các salon nổi tiếng.',
      price: '550,000 VND / 1 dịch vụ',
      avatar: 'https://via.placeholder.com/150',
      rating: 4.6,
   },
   {
      name: 'Nguyễn Mạnh An',
      location: 'HCM',
      experience: '12 năm kinh nghiệm',
      description: 'Anh An là một chuyên gia về tạo kiểu tóc nam, có nhiều kinh nghiệm tại các salon nổi tiếng.',
      price: '550,000 VND / 1 dịch vụ',
      avatar: 'https://via.placeholder.com/150',
      rating: 4.7,
   },
];

export default function StylistPage() {
   const [selectedLocations, setSelectedLocations] = useState([]);
   const handleLocationChange = (e) => {
      const value = e.target.value;
      setSelectedLocations((prev) => (prev.includes(value) ? prev.filter((loc) => loc !== value) : [...prev, value]));
   };

   // Lọc stylist theo vị trí đã chọn
   const filteredStylists = selectedLocations.length
      ? stylists.filter((stylist) => selectedLocations.includes(stylist.location))
      : stylists;

   return (
      <div>
         <Promo />
         <div className="w-[80%] mb-10 mt-3 mx-auto">
            <Breadcrumbs items={items} />
            <div className="grid grid-cols-[30%,70%] gap-4 mt-2">
               <div className="border-[1px] shadow-lg p-4 font-bold space-y-4">
                  <div className="flex gap-2 items-center">
                     <Building2 className="stroke-blue size-5" />
                     Danh sách cửa hàng
                  </div>
                  <div className="space-y-2">
                     <label className="flex items-center">
                        <input
                           type="checkbox"
                           value="HCM"
                           checked={selectedLocations.includes('HCM')}
                           onChange={handleLocationChange}
                        />
                        <span className="ml-2">Thành Phố Hồ Chí Minh</span>
                     </label>
                     <label className="flex items-center">
                        <input
                           type="checkbox"
                           value="Hà Nội"
                           checked={selectedLocations.includes('Hà Nội')}
                           onChange={handleLocationChange}
                        />
                        <span className="ml-2">Thủ Đô Hà Nội</span>
                     </label>
                     <label className="flex items-center">
                        <input
                           type="checkbox"
                           value="Đà Nẵng"
                           checked={selectedLocations.includes('Đà Nẵng')}
                           onChange={handleLocationChange}
                        />
                        <span className="ml-2">Thành Phố Đà Nẵng</span>
                     </label>
                  </div>
               </div>

               <div className="border-[1px] shadow-lg">
                  {filteredStylists.map((stylist, index) => (
                     <div key={index} className="grid grid-cols-[10%,65%,25%] p-4 border-b-[1px] pb-4 last:border-b-0">
                        <Link to="/stylist/1">
                           <Avatar className="w-16 h-16">
                              <AvatarImage src={stylist.avatar} alt={stylist.name} />
                              <AvatarFallback>{stylist.name.charAt(0)}</AvatarFallback>
                           </Avatar>
                        </Link>
                        <div className="space-y-1 mr-[15%]">
                           <h1 className="text-red font-bold text-xl">{stylist.name}</h1>
                           <p className="font-semibold">Chuyên nghiệp</p>
                           <div className="flex items-center gap-2">
                              <Rate allowHalf disabled value={stylist.rating} />
                              <span>({stylist.rating})</span>
                           </div>
                           <div className="flex gap-4">
                              <p className="flex gap-2 items-center">
                                 <MapPin className="stroke-blue size-5" />
                                 {stylist.location}
                              </p>
                              <p className="items-center flex gap-2">
                                 <Building className="stroke-blue size-5" title="Building" />
                                 {stylist.experience}
                              </p>
                           </div>
                           <p className="line-clamp-2 overflow-hidden text-ellipsis">{stylist.description}</p>
                        </div>
                        <div className="space-y-4">
                           <div className="flex items-center gap-2">
                              <Receipt className="stroke-blue" />
                              <p className="flex flex-col text-sm">
                                 <p>Chỉ từ</p>
                                 <strong>{stylist.price}</strong>
                              </p>
                           </div>
                           <Button className="w-full bg-red hover:bg-red">Đặt lịch</Button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
