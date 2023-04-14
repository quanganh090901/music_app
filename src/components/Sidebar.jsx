import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiCloseLine} from 'react-icons/ri';
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

import { logo } from "../assets";
// import { links } from "../assets/constants";



const NavLinks = () => (
  <div className="mt-10">
    {/* {links.map((item)=>(
      <NavLink 
      key={item.name}
      to={item.to}
      className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
      onClick={()=>{handleClick && handleClick()}}>
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))} */}

    <NavLink to="/" className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400" onClick={()=>{handleClick && handleClick()}}><HiOutlineHome className="w-6 h-6 mr-2" />Discover</NavLink>
    <NavLink to="/around-you" className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400" onClick={()=>{handleClick && handleClick()}}><HiOutlinePhotograph className="w-6 h-6 mr-2" />Around You</NavLink>
    <NavLink to="/top-artists" className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400" onClick={()=>{handleClick && handleClick()}}><HiOutlineUserGroup className="w-6 h-6 mr-2" />Top Artists</NavLink>
    <NavLink to="/top-charts" className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400" onClick={()=>{handleClick && handleClick()}}><HiOutlineHashtag className="w-6 h-6 mr-2" />Top Charts</NavLink>
  </div>
)

const Sidebar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen,setMobileMenuOpen] = useState(false)  
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
          <img src={logo} alt="logo" className="w-full h-14 object-contain cursor-pointer" onClick={() => (navigate('/'))} />
          <NavLinks />
      </div>
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (<RiCloseLine  className="w-6 h-6 text-white mr-2" onClick={()=> setMobileMenuOpen(false)}/>) 
        : (<HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={()=> setMobileMenuOpen(true)}/>)}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b]
      backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
          <img src={logo} alt="logo" className="w-full h-14 object-contain "/>
          <NavLinks handleClick={()=>setMobileMenuOpen(false)}/>
      </div>
    </>
  )
}

export default Sidebar;
