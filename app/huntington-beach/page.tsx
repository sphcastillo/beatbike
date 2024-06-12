import ContactUsGalleryBanner from '@/components/ContactUsGalleryBanner';
import { Noto_Sans, Comfortaa, Mulish } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"]  });
const mulish = Mulish({ subsets: ["latin"] });

function HuntingtonBeachPage() {
  return (
    <div className='my-8 '>
      <div className='mx-8 my-4'>
      <ContactUsGalleryBanner />
      </div>
      <div className={notoSans.className}>
        <div className='flex justify-center items-center pt-4'>
          <h1 className='font-extrabold text-4xl'>Huntington Beach</h1>
        </div>
        <div className={mulish.className}>
          <div className='flex justify-center items-center pb-12 pt-3'>
            <h1 className='font-semibold text-2xl'>Studio Schedule</h1>
          </div>
          </div>
      </div>
    </div>
  )
}

export default HuntingtonBeachPage;