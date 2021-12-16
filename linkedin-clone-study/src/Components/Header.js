import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { AiFillHome, AiFillCaretDown } from 'react-icons/ai'
import { MdPeopleOutline } from 'react-icons/md';
import { IoBagAddOutline } from 'react-icons/io5';
import { AiOutlineMessage } from 'react-icons/ai';
import { BiBell, BiUserCircle } from 'react-icons/bi';
import { BsGrid3X3Gap } from 'react-icons/bs';


export const Header = () => {
  
  const imgSrc = "https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw";

  return (
    <div className="flex border-b-2 shadow-lg sticky top-0 bg-white max-h-14 w-full justify-between items-center align-middle py-10">
      
      <section className="flex">
        <img className="img-fluid w-12 ml-10 mr-4" src={imgSrc} alt="LinkedIn logo" />
        <form className="flex rounded-lg py-2 px-3 bg-gray-300">
          <BiSearchAlt size="30" className="mr-3 text-gray-600" />
          <input className="outline-none text-xl font-medium text-black-900 bg-gray-300" type="search"/>
        </form>
      </section>
      
      <section className="flex mr-20">
      
      <section className="flex border-r-2 justify-center items-center align-middle mr-10">
        
        <section className="mr-10 text-center">
          <AiFillHome size="40" className="hover:text-black hover:scale-110 transition transform duration-500 ease-in-out mx-auto text-gray-700"/>
          <p className="font-medium">Home</p>
        </section>
        
        <section className="mr-10 text-center">
          <MdPeopleOutline size="40" className="hover:text-black hover:scale-110 transition transform duration-500 ease-in-out mx-auto text-gray-700"/>
          <p className="font-medium">My Network</p>
        </section>
        
        <section className="mr-10 text-center">
          <IoBagAddOutline size="40" className="hover:text-black hover:scale-110 transition transform duration-500 ease-in-out mx-auto text-gray-700"/>
          <p className="font-medium">Jobs</p>
        </section>
        
        <section className="mr-10 text-center">
          <AiOutlineMessage size="40" className="hover:text-black hover:scale-110 transition transform duration-500 ease-in-out mx-auto text-gray-700"/>
          <p className="font-medium">Messaging</p>
        </section>
        
        <section className="mr-10 text-center">
          <BiBell size="40" className="hover:text-black hover:scale-110 transition transform duration-500 ease-in-out mx-auto text-gray-700"/>
          <p className="font-medium">Notifications</p>
        </section>
        
        <section className="mr-10 text-center">
          <BiUserCircle size="40" className="hover:text-black hover:scale-110 transition transform duration-500 ease-in-out mx-auto text-gray-700"/>
          
          <section className="flex items-center">
            <p className="font-medium" className="mr-1">Me</p>
            <AiFillCaretDown className="text-gray-700" size="22"/>
          </section>
        
        </section>
        
        </section>
        
        <section className="mr-10 pt-1 text-center">
          <BsGrid3X3Gap size="40" className="hover:text-black hover:scale-110 transition transform duration-500 ease-in-out mx-auto text-gray-700"/>
          <section className="flex align-middle items-center">
            <p className="font-medium mr-1">Work</p>
            <AiFillCaretDown />
          </section>
        
        </section>
      </section>
    </div>
  )
}
