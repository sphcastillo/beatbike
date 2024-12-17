import ContactUsGalleryBanner from '@/components/ContactUsGalleryBanner';
import { notoSans, mulish } from "@/app/fonts";

function HuntingtonBeachPage() {
  return (
    <div className='py-8 bg-white'>
      <div className='px-8'>
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