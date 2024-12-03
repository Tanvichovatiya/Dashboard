import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaAsymmetrik, FaCalendarAlt, FaCartPlus, FaLocationArrow, FaUserCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { LuMoon } from "react-icons/lu";
import circle from "../assets/img/circle.jpeg"
import DualColorProgressBar from "./progressbar";
import line from "../assets/img/line2.jpeg"
import { BsThreeDotsVertical } from "react-icons/bs";

const Body=()=>{

return (
<>
<div className="bg-slate-800 w-[100vw] h-[1520px] lg:h-[650px] mt-[-30px]   lg:relative lg:w-[78vw]  lg:left-[20%]  lg:ml-0">
<div className="bg-slate-700 ml-[10%]  lg:ml-3 mr-3 p-3 mt-3  h-auto  rounded ">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
    <CiSearch className="text-gray-400  font-semibold text-[20px]"/>
    <p className="text-gray-400 hidden lg:block">Search some ..</p>
    </div>
  <div className="flex items-center gap-4">
    <FaAsymmetrik className="text-gray-400 font-semibold text-[20px]"/>
    <LuMoon className="text-gray-400 font-semibold text-[20px]"/>
    <FaCalendarAlt className="text-gray-400 font-semibold text-[20px]"/>
    <IoIosNotifications className="text-gray-400 font-semibold text-[20px]"/>
    <FaUserCircle className="text-gray-400 font-semibold text-[20px]"/>
  </div>
  </div>
</div>

<div className="flex items-center mt-4 flex-col lg:flex-row justify-center gap-2">
<div className="bg-violet-500 lg:w-[48%] w-[95vw] ml-3 mr-3 h-[280px] lg:h-[250px] rounded shadow-lg ">
 <div className="mt-4 text-left ml-3">
  <p className="text-[15px] text-gray-400">website Analyst</p>
  <p className="text-[15px] text-gray-400">Total 28.5% conversion Rate</p>
 </div>
 <img src={circle} className=" ml-[45%] lg:ml-[320px] mt-[20px]  w-[150px] h-[150px] rounded-full shadow-md" alt="" />
  <div className="lg:mr-[200px] lg:ml-[20px] ml-[-200px] mt-[-50%] lg:mt-[-25%] ">
    <p>Spending</p>
  </div>

  <div className="flex items-center lg:gap-2 lg:w-[280px] flex-wrap flex-col lg:flex-row">
  <div className="flex gap-2  mt-3 items-centre ml-[-200px] lg:ml-[10px] justify-center">
    <button className="bg-slate-400 px-1 rounded lg:text-[17px]">12h</button>
    <p className="text-[20px] text-slate-800">Spend</p>
  </div>
  <div className="flex gap-2  mt-3 items-centre ml-[-170px] lg:ml-[10px] justify-center">
    <button className="bg-slate-400 text-center px-2 rounded lg:text-[17px]">18</button>
    <p className="text-[20px] text-slate-800">order size</p>
  </div>
  <div className="flex gap-2  mt-3 items-centre ml-[-210px] lg:ml-[10px] justify-center">
    <button className="bg-slate-400 text-center px-1  rounded lg:text-[17px]">127</button>
    <p className="text-[20px] text-slate-800">order </p>
  </div>
  <div className="flex gap-2  mt-3 items-centre ml-[-210px] lg:ml-[17px] justify-center">
    <button className="bg-slate-400 text-center px-1  rounded lg:text-[17px]">2.3k</button>
    <p className="text-[20px] text-slate-800">items</p>
  </div>
  </div>
</div>


<div className="flex items-center flex-col lg:flex-row gap-3 lg:gap-0  w-[48%] ">
<div className="lg:w-[49%] w-[300px] mx-3 bg-slate-700 shadow-md rounded lg:h-[250px] h-[250px] ">
  <div className="mt-5  flex flex-col gap-2  text-left">
  <h1 className="font-semibold text-[15px] ml-5 text-gray-300">Average Daily sales</h1>
  <p className="text-gray-400 ml-5 font-no">Total Sales this month</p>
  <p className="font-semibold ml-5 text-[20px] text-gray-300">$28.450</p>
  <img src={line} alt=""  className="w-[full] h-[40px]  mt-[30%]"/>
  </div>
  

  

</div>
<div className="lg:w-[49%] w-[300px] mx-3 bg-slate-700 shadow-md rounded lg:h-[250px] h-[250px] ">

  <div className="flex flex-row mt-5 justify-between">
    <div className="flex flex-col ml-2  gap-2">
    <p className="text-gray-400">Sales Overview</p>
    <p className="font-semibold  text-white text-[20px]">$42.5k</p>
    </div>
    <div>
      <p className="text-green-700 ftext-[20px] mr-4">+18.2%</p>
    </div>
  </div>
  <div className="flex items-center mt-[40px]  justify-between">

  <div className="flex flex-col gap-2 ml-[20px]  items-center">
    <div className="flex gap-2 ml-3 items-center">
    <FaCartPlus className="bg-green-300  text-green-700"/>
    <p className="text-gray-400 text-[15px] ">Order</p>
    </div>
    <p className="mt-[5px] text-[20px] text-left ml-3 font-semibold text-white">62.2%</p>
    <p className="text-gray-400  text-left ml-3">6.30</p>
  </div>
    <p className="text-center w-[30px] h-[30px] rounded-full bg-slate-500">vs</p>
  <div className="flex flex-col gap-2 mr-[20px]  items-center">
    <div className="flex gap-2 ml-3 items-center">
    <p className="text-gray-400 text-[15px] ">Visits</p>
    <FaLocationArrow />
    </div>
    <p className="mt-[5px] text-[20px] text-left ml-3 font-semibold text-white">25.5%</p>
    <p className="text-gray-400  text-left ml-3">12.749</p>
  </div>
  </div>
  <div className="w-[250px] lg:w-[150px] mx-auto h-3 bg-indigo-500 rounded-lg overflow-hidden">
    
      <div
        className="h-full bg-cyan-400 rounded"
        style={{ width: '70%' }}
      ></div>

    
      <div
        className="h-full bg-green-500"
        style={{ width: `30%`, marginLeft: `70%` }}
      ></div>
    </div>
</div> 
  </div>


</div>

<div className="flex mt-[20px] flex-col mb-5 lg:flex-row gap-6 ml-3 mr-3 lg:ml-5 lg:mr-5">

  <div className="lg:w-[49%] w-[full] h-[300px]  bg-slate-700 rounded">

    <div className="flex justify-between items-center ml-3 mr-3">
      <div className="flex flex-col mt-2 gap-2 ">
        <p className="font-semibold text-gray-200">Earing Reports</p>
        <p className="text-gray-400">Weekly Earing Overview</p>
      </div>
      <BsThreeDotsVertical className="text-gray-400"/>
    </div>

    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center w-[40%] lg:w-[50%] flex-col ml-3 mt-[20px] lg:mt-[35px] gap-2">
        <p className="text-white text-[30px] font-semibold ml-[-120px] ">$468          <span className="px-2 bg-green-300 text-green-700 rounded text-[10px] text-center">+4.2%</span>
        </p>
        <p className="text-gray-400 ">You informed of this week compared to last week</p>
      </div>
      <div className="flex gap-2 items-center ">
        <div className="flex flex-col items-center justify-center">
          <p className="w-[10px] h-[70px] bg-indigo-400 mb-50px"></p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="w-[10px] h-[120px] bg-indigo-400 "></p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="w-[10px] h-[120px] bg-indigo-400 "></p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="w-[10px] h-[120px] bg-indigo-400 "></p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="w-[10px] h-[100px] bg-indigo-400 "></p>
        </div>
        <div className="flex flex-col items-cente justify-centerr">
          <p className="w-[10px] h-[100px] bg-indigo-400 "></p>
        </div>
        <div className="flex flex-col items-center  justify-center">
          <p className="w-[10px] h-[80px] bg-indigo-400 "></p>
        </div>
      </div>
    </div>
  </div>


  <div className="lg:w-[49%] w0[full] h-[300px] bg-slate-700 rounded"></div>
</div>
</div>
</>
)
}
export default Body;