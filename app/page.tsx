import Image from 'next/image'
import { Lekton } from 'next/font/google'
 
// const lekton = Lekton;

export default function Home() {
  return (
    <main className="min-h-screen p-8 ">

      <nav className='flex justify-between '>
        <p>VMLabs</p>
        <p>EN</p>
      </nav>

      <div className='flex flex-col items-center'>
        <div className={`text-center  md:text-[3rem]`}>
          <p>Transforming Ideas into</p>
          <p>Digital Masterpieces</p>
        </div>

        <div>
          <p >VIEW</p>
          <div className='relative bg-yellow-50 overflow-hidden lg:w-[35vw] md:w-[70vw] w-[90vw] h-[50vh] mx-auto flex justify-center items-center'>
            <img src="vr-headset.webp" className='absolute z-10 ' alt="" />
            <p className='text-[10rem]  font-black text-green-500 absolute'>MASTERS</p>
          </div>
          <p className='text-center'>Our Website Is Getting a <span className='text-green-500'>Makeover!!</span><br></br>
            Wait for the Awesomeness</p>
        </div>
      </div>



    </main>
  )
}
