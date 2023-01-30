import React from 'react'
import Navbar from './Navbar'
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Wallet from './wallet';


const RandomBtn = () => {
  const [itemList, setItemList] = useState("");
  return (
    <>
    <Navbar />
    <div className='container mx-auto px-6 w-ful '>
    <button className=' w-full lg:w-fit mt-6 bg-blue-600 p-4 lg-p-6 text-white rounded-xl' onClick={()=>setItemList(uuidv4())}>Generate strings</button>
    <h4 className='mt-4'>{itemList}</h4>
    </div>
    <Wallet />
    </>
  )
}

export default RandomBtn