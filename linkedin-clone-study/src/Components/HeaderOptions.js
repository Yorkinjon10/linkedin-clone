import React from 'react'
import { SidebarLeft } from './SidebarLeft'
import { SidebarRight } from './SidebarRight'
import { MainContent } from './MainContent'
import { BiUserCircle } from 'react-icons/bi'
import { BsFillPencilFill, BsCalendar2Event } from 'react-icons/bs';
import { FcStackOfPhotos } from 'react-icons/fc';
import { FaYoutube } from 'react-icons/fa';
import { ImBlog } from 'react-icons/im';

export const HeaderOptions = () => {
  const imgg = <BiUserCircle className="transform -z-10 relative -top-3 text-gray-500 bg-gray-300 rounded-full text-4xl scale-125"/>;
  const srcIcon = <BsFillPencilFill className="transform mr-4 inline-block text-2xl scale-125" />
  return (
    <section className="grid grid-cols-10">
      <section className="col-span-2">
        <SidebarLeft userIcon={imgg} />
      </section>
      <section className="col-span-5">
        <MainContent blogTypesSender={blogTypes} searchIcon={srcIcon} />
      </section>
      <section className="col-span-3">
        <SidebarRight />
     </section>
      </section>
  )
}
const blogTypes = [
  {
    icon: <FcStackOfPhotos className="transform mr-4 inline-block text-2xl scale-125"/>,
    text: "Photo"
  },
  {
    icon: <FaYoutube className="transform mr-4 inline-block text-2xl scale-125"/>,
    text: "Video"
},
  {
    icon: <BsCalendar2Event className="transform mr-4 inline-block text-2xl scale-125"/>,
    text: "Event"
},
  {
    icon: <ImBlog className="transform mr-4 inline-block text-2xl scale-125"/>,
    text: "Photo"
}
];