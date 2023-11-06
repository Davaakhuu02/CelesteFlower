'use client'
import Cover3 from '../images/cover3.jpg'
import Cover2 from '../images/cover2.jpg'
import Image4 from '../images/image4.jpg'
import Image5 from '../images/image5.jpg'
import Image7 from '../images/image7.jpg'
import Image from 'next/image'
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    window.addEventListener('mousemove', function(e){
      let body = document.querySelector('.body-star');
      let div = document.createElement('div');
      div.setAttribute("class", "star-div");
      let star = document.createElement('img');
      star.setAttribute("class", "star");
      star.setAttribute("src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2421eab-141b-4cde-9c6d-1990bc6294fa/d6mdd4s-c3ef397d-3a69-4032-ab56-1e1b39733ee6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UyNDIxZWFiLTE0MWItNGNkZS05YzZkLTE5OTBiYzYyOTRmYVwvZDZtZGQ0cy1jM2VmMzk3ZC0zYTY5LTQwMzItYWI1Ni0xZTFiMzk3MzNlZTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cULIDtHhoo1oiY0areR5ASvQEtl2PwT8BZLzG1rj3CU");
      let x = e.offsetX - 40;
      let y = e.offsetY - 40;
      div.style.left = x + 'px';
      div.style.top = y + 'px';
  
      let size = Math.random() * 80;
      star.style.width = 20 + size + 'px';
      star.style.height = 20 + size + 'px';

      console.log(star.style.width, star.style.height)
  
  
      let transformValue = Math.random() * 360;
      // div.style.transform = 'rotate('+transformValue+'deg)';
  
      let colorR = Math.random() * 255;
      let colorG = Math.random() * 255;
      let colorB = Math.random() * 255;
      star.style.color = 'rgb('+colorR+','+colorG+','+colorB+')'
  
      div.appendChild(star);
      body.appendChild(div);
  
      setTimeout(function () {
          div.remove();
          star.remove();
      },500)
    })
  }, []);


  
  return (
    <main className='pt-20 text-[#F397AF] text-xs px-4 '>
      <div className='grid grid-cols-3 gap-4'>
        <div className=' col-span-2 w-full h-40 bg-white rounded-lg p-3 grid grid-cols-8'>

          <div className='col-span-1 bg-black'>
            <Image src={Image4} height={135} className='rounded-lg'/>
          </div>
        
        <div className='col-span-4 pl-4 text-xl'>Улаан башир
        <p className='text-sm'>Улаан башир Улаан башир Улаан башир Улаан башир</p>
        </div>

        <div className='col-span-3 pl-4 bg-black'>38,000 ₮</div>
        </div>
        <div className=' col-span-1 w-full h-40 bg-white rounded-lg p-3'>
          herjhnrtdjndr
        </div>
  </div>
    </main>
  );
};
