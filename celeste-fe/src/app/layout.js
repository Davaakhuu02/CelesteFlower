'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import profileImg from './profile.png'
import { Heart, Cake, Gift, Box, Star, ShoppingCart, User } from 'iconsax-react'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
// https://www.facebook.com/profile.php?id=100095477047479
const inter = Inter({ subsets: ['latin'] })

function RootLayout({ children }) {
  const [selectedCity, setSelectedCity] = useState(null)
  const cities = [
  
    { name: 'Цэцэг', code: 'NY' },
    { name: 'Баглаа боодол', code: 'RM' },
    { name: 'Үнэт эдлэл', code: 'LDN' },
    { name: 'Бэлэг дурсгал', code: 'IST' },
    { name: 'Дарс,Шоколад', code: 'PRS' },
  ]
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='body-star'></div>
        <div className='h-17 bg-[#2C3333] flex justify-between items-center fixed w-screen'>
          <div className='p-2'>
            <Image src={profileImg} width={120} />
          </div>
          <div className='flex gap-2 text-[#F397AF] text-xs'>
            <div className='px-3 py-2 flex items-center gap-1'><Link href='/heart'><Heart size={16} />Хайртай хүндээ</Link></div>
            <div className='px-3 py-2 flex items-center gap-1'><Link href='/birthday'><Cake size={16} />ТӨРСӨН ӨДӨР</Link></div>
            <div className='px-3 py-2 flex items-center gap-1'><Link href='/celebration'><Gift size={16} />ТӨРСӨНТЭМДЭГЛЭЛТ ӨДӨР</Link></div>
            <div className="card flex justify-content-center pt-4 text-sm ">
              <Dropdown  value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                  placeholder="Бүтээгдэхүүнүүд" className="w-full md:w-14rem" />
            </div>
          </div>
          <div className='flex gap-2 text-[#F397AF] text-xs px-4 '>
            <div className='px-1 py-2 flex items-center gap-1' ><Star variant='Bold' size={24} /></div>
            <div className='px-1 py-2 flex items-center gap-1'><Link href='/tolbor'><ShoppingCart variant='Bold' size={24} /></Link></div>
            <div className='px-1 py-2 flex items-center gap-1'><User variant='Bold' size={24} /></div>
          </div>
        </div>
        <div>{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
