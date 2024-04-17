import { Mulish } from "next/font/google";

const  mulish = Mulish({ subsets: ["latin"] });

function Announcement() {
  return (
    <div className={mulish.className}>
      <div className='bg-[#333333] py-3'>
        <div className='flex items-center justify-center'>
            <h1 className='text-sm px-4 text-white tracking-wider text-center text-pretty'>NEW CLASSES SCHEDULES EVERY SUNDAY AT 4:30 PM</h1>
        </div>
    </div>
  </div>
  )
}

export default Announcement