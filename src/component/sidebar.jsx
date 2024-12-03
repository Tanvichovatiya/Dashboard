import React, { useState } from "react";
import logo from '../assets/img/logo.jpeg'
import { FaCarSide, FaChevronRight, FaRegCalendar, FaRegChartBar, FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa";
import { LuLayout } from "react-icons/lu";
import { TbBrandPagekit, TbLayoutKanban } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { CiChat1 } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa6";
import { SiMicrosoftacademic } from "react-icons/si";
import Body from "./body";
import { Provider } from "react-redux";
import { store } from "../feature/store";
import TaskDashboard from "../component2/TaskDashboard";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <>
    <div className="flex h-screen ">

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-700 text-white w-64  transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 overflow-y-auto`}
      >
        
        <div className="flex justify-between mt-[15%] lg:mt-2  items-center">
          <div className="flex items-center gap-2"><img src={logo} alt="" className="w-10 h-10 rounded-full" />
          <h3 className=" font-bold text-[20px] tracking-[2px]">Vuexy</h3>
          </div>
          <FaRegDotCircle className="mr-4 text-gray-400"/>
        </div>

        <div className="flex mt-3 justify-between items-center bg-slate-500 rounded shadow-md ml-2 mr-2">
          <div className="flex items-center gap-2 ml-2">
            <GoHome className="text-gray-400"/>
            
            {/* <span className="text-[20px]" onClick={() =>navigate('/Dashboard')}>Dashboard</span> */}

            {/* {showDashboard && {}} */}
            <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
    
          </div>
          <div className="flex items-center gap-2 ml-2">
            <span className="rounded-full text-[12px] text-center  bg-red-500 w-[20px] h-[20px]">5</span>
            <FaAngleDown className="text-gray-400 mr-3"/>
          </div>
        
        </div>
        <div className="flex  flex-col gap-2 mt-3 ">
        <div className="flex items-center gap-3 p-1 bg-indigo-500 rounded ml-2 mr-2">
        <FaRegCircle className="text-gray-400 text-[12px] ml-2"/>
        <p className="font-semibold" >Analytics</p>
        </div>
        <div className="flex items-center gap-3 p-1  ml-2 mr-2">
        <FaRegCircle className="text-gray-400 text-[12px] ml-2"/>
        <p  >CRM</p>
        </div>
        <div className="flex items-center gap-3 p-1  ml-2 mr-2">
        <FaRegCircle className="text-gray-400 text-[12px] ml-2"/>
        <p >eCommerce</p>
        </div>
        <div className="flex items-center gap-3 p-1  ml-2 mr-2">
        <FaRegCircle className="text-gray-400 text-[12px] ml-2"/>
        <p >Logistic</p>
        </div>
        <div className="flex items-center gap-3 p-1  ml-2 mr-2">
        <FaRegCircle className="text-gray-400 text-[12px] ml-2"/>
        <p  >Academy</p>
        </div>
        <div className="flex items-center justify-between ml-2 mr-2">
          <div className="flex gap-2 items-center">
          <LuLayout className="text-gray-400 ml-2"/>
          <p>Layout</p>
          </div>
          <FaChevronRight className="text-gray-400 mr-2"/>   
       </div> 
       <div className="flex items-center justify-between ml-2 mr-2">
          <div className="flex gap-2 items-center">
          <TbBrandPagekit className="text-gray-400 ml-2"/>
          <p>Front page</p>
          </div>
          <FaChevronRight className="text-gray-400 mr-2"/>   
       </div> 
       <p className="text-gray-500 p-3 mt-2 mb-2 text-left">Apps & pages</p>
       <div className="flex items-center gap-3 p-1  ml-2 mr-2">
        <MdOutlineEmail className="text-gray-400 text-[12px] ml-2"/>
        <p  >Email</p>
        </div>
        <div className="flex items-center gap-3 p-1  ml-2 mr-2">
        <CiChat1 className="text-gray-400 text-[12px] ml-2"/>
        <p  >chat</p>
        </div>
        <div className="flex items-center gap-3 p-1  ml-2 mr-2">
        <FaRegCalendar className="text-gray-400 text-[12px] ml-2"/>
        <p  >calender</p>
        </div>
        <div className="flex items-center gap-3 p-1  ml-2 mr-2">
        <TbLayoutKanban className="text-gray-400 text-[12px] ml-2"/>
        <p  >Kanban</p>
        </div>
        <div className="flex items-center justify-between ml-2 mr-2">
          <div className="flex gap-2 items-center">
          <FaCartPlus className="text-gray-400 ml-2"/>
          <p>eCommerce</p>
          </div>
          <FaChevronRight className="text-gray-400 mr-2"/>   
       </div> 
       <div className="flex items-center justify-between ml-2 mr-2">
          <div className="flex gap-2 items-center">
          <SiMicrosoftacademic
          className="text-gray-400 ml-2"/>
          <p>Academy</p>
          </div>
          <FaChevronRight className="text-gray-400 mr-2"/>   
       </div> 
       <div className="flex items-center justify-between ml-2 mr-2">
          <div className="flex gap-2 items-center">
          <FaCarSide className="text-gray-400 ml-2"/>
          <p>Logistics</p>
          </div>
          <FaChevronRight className="text-gray-400 mr-2"/>   
       </div> 
      </div>

      </div>

     
     <div className="lg:hidden fixed top-[-5px] left-2 "> 
      <button
            className="lg:hidden text-white text-2xl  mt-5 focus:outline-none"
            onClick={toggleSidebar}
          >
            ☰
          </button>
          </div>
          

        {/* Content */}
        <Body/>

  </div>
 


  </>
  );
};

export default Sidebar;
