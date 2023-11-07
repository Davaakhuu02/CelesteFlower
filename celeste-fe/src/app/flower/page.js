"use client";

import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import Image from 'next/image';
import data from './data'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const [value, setValue] = useState(1);
  const [price, setPrice] = useState(38000);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [products, setProducts] = useState([]);
  const searchParams = useSearchParams()
  const search = searchParams.get('type')
  
  useEffect(() => {
    setProducts(data[search ? search : 'flowers'])
  }, [search])

  function addCart(data) {
    console.log(data);

    let cartItem = localStorage.getItem('cart');

    if (cartItem) {
      cartItem = JSON.parse(cartItem);

      let found = false;
      cartItem.map((item) => {
        if (item.name == data.name) {
          item.count ++;
          found = true;
        }
      })

      if (!found)
        cartItem.push({
          ...data,
          count: 1
        });
    } else {
      cartItem = [];
      cartItem.push({
        ...data,
        count: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(cartItem));
  }

  return (
    <main className="pt-20 text-[#F397AF] text-xs px-4 ">
      <div className='flex gap-5 flex-wrap justify-center'>
        {
          products.map((item, index) => {
            return (
              <div key={index} className='relative bg-[#2C3333] rounded-lg overflow-hidden'>
                <div className='flex items-center justify-center h-full w-full opacity-0 hover:opacity-100 absolute hover:bg-black/[.4]'>
                  <div className='bg-[#F397AF] text-[#2C3333] font-semibold px-5 py-2 cursor-pointer' onClick={() => addCart(item)}>Сагслах</div>
                </div>
                <img src={item.image} width={200} height={200} alt={item.name}/>
                <div className='flex justify-between p-2 items-center'>
                  <div className='text-lg font-semibold'>{item.name}</div>
                  <div className='text-lg opacity-50'>{item.price}₮</div>
                </div>
              </div>
            )
          })
        }
      </div>
  
    </main>
  );
}
