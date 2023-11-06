'use client'
import Cover from './images/cover.jpg'
import Cover2 from './images/cover2.jpg'
import Image1 from './images/image1.jpg'
import Image2 from './images/image2.jpg'
import Image3 from './images/image3.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
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

const handleNavigation = () => {
  router.push('/bagts');
};
  return (
    <main>
      <div className='flex h-screen bg-fixed bg-cover bg-center items-center justify-center' style={{ backgroundImage: `url('${Cover.src}')` }}>
        <div className='bg-neutral-900/75 rounded-lg px-10 py-5 text-4xl text-[#F397AF]'>Pinky’s bouquet</div>
      </div>
      <div className='flex flex-col gap-5 items-center justify-center bg-neutral-800 pt-10'>
        <div className='text-2xl p-5 text-[#F397AF]'>Онцлох багцууд</div>
        <div className='flex items-start justify-center gap-10 pb-20'>
          <div>
            <Image src={Image1} height={250} className='rounded-lg' />
            <div className='pt-3'>Blue hydrangea bouquet</div>
            <div className='pb-3 text-neutral-500'>65.000₮</div>
          </div>
          <div>
            <Image src={Image2} height={250} className='rounded-lg' />
            <div className='pt-3'>Mini rose bouquet</div>
            <div className='pb-3 text-neutral-500'>65.000₮</div>
          </div>
          <div>
            <Image src={Image3} height={250} className='rounded-lg' />
            <div className='pt-3'>Ramashka bouquet</div>
            <div className='pb-3 text-neutral-500'>65.000₮</div>
          </div>
        </div>
      </div>
      <div className='flex h-screen bg-fixed bg-cover bg-center items-center justify-center' style={{ backgroundImage: `url('${Cover2.src}')` }}>
        <div className='bg-neutral-900/75 rounded-lg px-10 py-5 text-4xl text-[#F397AF]'>Colorful bouquet</div>
      </div>
      <div className='flex flex-col gap-5 items-center justify-center bg-neutral-800 pt-5 pb-10'>
        <div className='text-2xl p-5 text-[#F397AF]'>Хүссэн багцаа захиалаарай</div>
      
  <div className="text-sm font-semibold py-5 px-10 bg-[#F397AF] text-neutral-900 rounded-lg" onClick={handleNavigation}>Багц үүсгэх</div>


      </div>
    </main>
  )
}
