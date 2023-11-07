"use client";
import Image4 from '../images/image4.jpg';
import Empty from '../images/empty.png';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';

export default function Home() {
  const [value, setValue] = useState(1);
  const [price, setPrice] = useState(38000);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [items, setItems] = useState([]);

  const handleIncrement = (i) => {
    setItems((prev) => {
      items[i].count++

      return items;
    });
  };

  const handleDecrement = (i) => {
    setItems((prev) => {
      prev[i].count--

      return prev;
    });
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  const handleDeleteClick = () => {
    localStorage.setItem('cart', '[]');
    setItems([]);
  };

  useEffect(() => {
    let cartItems = localStorage.getItem('cart');

    if (cartItems) {
      setItems(JSON.parse(cartItems));
    }
  },[])

  return (
    <main className="pt-20 text-[#F397AF] text-xs px-4 ">
      {!isButtonClicked && !isDeleteClicked && (
        <div className="flex gap-5">
          <div className='w-2/3 flex flex-col gap-5'>
            <div>
              <h1 className='text-lg float-left'>Миний сагс</h1>
              <h6 className='float-right mt-2'>
                <Button onClick={handleDeleteClick}><i className={'pi pi-trash ml-2 mr-1'}></i>сагс хоослох</Button>
              </h6>
            </div>
            {
              items.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="w-full h-40 bg-white rounded-lg p-3 grid grid-cols-8">
                      <div className="col-span-1 bg-black">
                        <img src={item.image} height={135} className="rounded-lg" />
                      </div>

                      <div className="col-span-4 pl-4 text-xl">
                        {item.name}
                      </div>

                      <div className="col-span-3 pl-4 pt-5">
                        <div className="float-left mt-1 mr-2 font-bold text-sm">{item.price}₮</div>
                        <Button label="-" onClick={() => handleDecrement(index)} className="border border-black p-1 w-6 float-left" />
                        <span className="p-float-label float-left border border-black w-1/5">
                          <InputText id="username" value={item.count} onChange={(e) => item.count = e.value} className="p-1 text-right w-full" />
                        </span>
                        <Button label="+" onClick={() => handleIncrement(index)} className="border border-black p-1 w-6 float-left mr-2" />
                        <div className="float-left mt-1 font-bold text-sm">{item.price * item.count} ₮</div>

                        <div className="float-right mt-5">
                          <i className={'pi pi-trash ml-2 mr-1'}></i>Устгах | 
                          <i className="pi pi-heart mr-1 ml-2"></i>Хадгалах
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='w-1/3'>
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
      {isDeleteClicked && (
        <div className='grid grid-cols-2 place-items-center'>
          <div className='col-span-2 text-center'>
            <Image src={Empty} height={135} className="rounded-lg width-full bg-white" />
            Багц хоосон байна.
            </div>
          </div>
      )}
    </main>
  );
}
