import Image from 'next/image'
import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './fonts/Lekton-Bold.ttf' })


export default function Home() {
  return (
    <main className="transition min-h-[92vh] lg:min-h-screen flex flex-col justify-between">

      {/* navbar */}
      <nav className='flex justify-between pt-4 lg:px-10 px-4 items-center'>
        <p className='tracking-tighter lg:text-xl hover:opacity-70 cursor-pointer text-green-400 font-bold'>VM<span className='text-white'> Labs</span>.</p>
        <p className='font-semibold opacity-60 hover:opacity-100 cursor-pointer text-xs lg:text-md'>EN</p>
      </nav>

      <div className='flex flex-col gap-4 lg:-mt-[6rem] lg:gap-10'>
        {/* middle text*/}
        <div className={`${myFont.className} opacity-50 text-center text-[1.5rem]  md:text-[3rem] `}>
          <p className=''>Transforming Ideas into</p>
          <p className='-mt-3 md:-mt-6'>Digital Masterpieces</p>
        </div>

        <div className="flex flex-col gap-2">

          <p className='text-center lg:text-[3rem] text-[2rem] font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-500 via-slate-100 to-slate-600'>VIEW</p>

          {/* Image */}
          <div className='relative mx-auto flex justify-center items-center'>
            <img src="vr-headset.webp" className='z-10 md:max-w-[600px] lg:max-w-[800px]' alt="" /> 
            <p className='animate-[master_10s_ease-in-out_infinite] text-[2.5rem] md:text-[6rem] font-black text-white absolute'>MASTERS</p>
          </div>

          <p className={`${myFont.className} text-center lg:text-xl text-base  leading-tight`}>Our Website Is Getting a <span className='text-green-500'>Makeover!!</span><br></br>
            Wait for the Awesomeness</p>
        </div>
      </div>


      {/* footer location & terms & contact */}
      <div className='gap-10 lg:mb-4 lg:gap-0 w-full flex flex-col lg:flex-row justify-between px-10'>

        <div className='flex text-xs gap-2 flex-col items-center text-center lg:flex-row lg:text-start  '>
          <svg className='fill-green-400 w-[30px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path></svg>
          <p>BASED IN UAE (DUBAI)<br></br>
            AND AVAILABLE FOR WORLDWIDE</p>
        </div>

        <div className='text-center text-xs lg:text-end opacity-40'>
          <p>®2024 VMLABS<br></br>
            ALL RIGHTS RESERVED</p>
        </div>
      </div>

    </main>
  )
}
