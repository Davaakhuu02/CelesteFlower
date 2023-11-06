"use client";
import Image4 from '../images/image4.jpg';
import Image from 'next/image';
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';

export default function Home() {
  const [value, setValue] = useState(1);
  const [price, setPrice] = useState(38000);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleIncrement = () => {
    setValue(value + 1);
    setPrice(price * value);
  };

  const handleDecrement = () => {
    if (value > 1) {
      setValue(value - 1);
      setPrice(price / (value - 1));
    }
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <main className="pt-20 text-[#F397AF] text-xs px-4 ">
      {!isButtonClicked && (
        <div className="grid grid-cols-3 gap-4">
          <div className='col-span-2'>
            <h1 className='text-lg float-left mb-3'>Миний сагс</h1>
            <h6 className='float-right mt-2'>
              <i className={'pi pi-trash ml-2 mr-1'}></i>сагс хоослох
            </h6>
            <div className="w-full h-40 bg-white rounded-lg p-3 grid grid-cols-8">
              <div className="col-span-1 bg-black">
                <Image src={Image4} height={135} className="rounded-lg" />
              </div>

              <div className="col-span-4 pl-4 text-xl">
                Улаан башир
                <p className="text-sm">Улаан башир Улаан башир Улаан башир Улаан башир</p>
              </div>

              <div className="col-span-3 pl-4 pt-5">
                <div className="float-left mt-1 mr-2 font-bold text-sm">38000 ₮</div>
                <Button label="-" onClick={handleDecrement} className="border border-black p-1 w-6 float-left" />
                <span className="p-float-label float-left border border-black w-1/5">
                  <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} className="p-1 text-right w-full" />
                </span>
                <Button label="+" onClick={handleIncrement} className="border border-black p-1 w-6 float-left mr-2" />
                <div className="float-left mt-1 font-bold text-sm">{price * value} ₮</div>

                <div className="float-right mt-5">
                  <i className={'pi pi-trash ml-2 mr-1'}></i>Устгах | 
                  <i className="pi pi-heart mr-1 ml-2"></i>Хадгалах
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-1'>
            <h1 className='text-lg mb-3'>Захиалгын мэдээлэл</h1>
            <div className="w-full h-40 bg-white rounded-lg p-3">
              <div className='grid grid-cols-6 p-2'>
                <div className='col-span-3 text-sm'>Улаан башир</div>
                <div className='col-span-1 text-sm'>x{value}</div>
                <div className='col-span-2 text-sm'>{price * value} ₮</div>
              </div>
              <div className='grid grid-cols-6 p-2 border-t-2 border-b-2 bg-slate-200'>
                <div className='col-span-4 text-sm'>Нийт</div>
                <div className='col-span-2 font-bold text-sm'>{price * value} ₮</div>
              </div>
              <Button className='border text-white p-3 mt-4 w-full' style={{ backgroundColor: '#F397AF'}} onClick={handleButtonClick}>
                Худалдах авах
              </Button>
            </div>
          </div>
        </div>
      )}
      {isButtonClicked && (
        <div className='bg-white w-full h-80 p-6'>
          <div className='grid grid-cols-2 gap-6'>
          <div className='col-span-1'>
            <h1 className='text-xl mb-4'>Төлбөрийн хаяг</h1>

            <div className='float-left w-full'><i className="pi pi-user mr-2"></i>Овог Нэр</div>
            <span className="p-float-label float-left border border-black w-full mt-2 mb-2">
                  <InputText id="username" placeholder='Нэрээ бичнэ үү?' className="p-1 text-right w-full" />
            </span>   

            <div className='float-left w-full'><i className="pi pi-inbox mr-2"></i>Цахим хаяг</div>
            <span className="p-float-label float-left border border-black w-full mt-2 mb-2">
                  <InputText id="username" placeholder='Цахим хаягаа бичнэ үү?' className="p-1 text-right w-full" />
            </span> 

            <div className='float-left w-full'><i className="pi pi-id-card mr-2"></i>Гэрийн хаяг</div>
            <span className="p-float-label float-left border border-black w-full mt-2 mb-2">
                  <InputText id="username" placeholder='Хаягаа бичнэ үү?' className="p-1 text-right w-full" />
            </span> 

            </div>
          <div className='col-span-1'>
            <h1 className='text-xl mb-4'>Төлбөр</h1>
            <div className='float-left w-full'><i className="pi pi-user mr-2"></i>Зөвшөөрөгдсөн картууд</div>
            <span className="p-float-label float-left border border-black w-full mt-2 mb-2">
                  <InputText id="username" placeholder='Нэрээ бичнэ үү?' className="p-1 text-right w-full" />
            </span>   

            <div className='float-left w-full'><i className="pi pi-inbox mr-2"></i>Цахим хаяг</div>
            <span className="p-float-label float-left border border-black w-full mt-2 mb-2">
                  <InputText id="username" placeholder='Цахим хаягаа бичнэ үү?' className="p-1 text-right w-full" />
            </span> 

            <div className='float-left w-full'><i className="pi pi-id-card mr-2"></i>Гэрийн хаяг</div>
            <span className="p-float-label float-left border border-black w-full mt-2 mb-2">
                  <InputText id="username" placeholder='Хаягаа бичнэ үү?' className="p-1 text-right w-full" />
            </span> 
          </div>
        </div>
        <Button className="w-full text-white p-3 mt-4 rounded-lg text-center" style={{backgroundColor:'#F397AF'}}>Төлбөр төлөх</Button>
        </div>
      )}
    </main>
  );
}
