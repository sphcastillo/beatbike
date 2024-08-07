import StudioGalleryBanner from "@/components/StudioGalleryBanner";
import { notoSans, mulish } from "@/app/fonts";

function TarzanaPage() {
  return (
    <div className='my-8 '>
      <div className='mx-8 my-4'>
        <StudioGalleryBanner />
      </div>
      <div className={notoSans.className}>
        <div className='flex justify-center items-center pt-4'>
          <h1 className='font-extrabold text-4xl'>Tarzana</h1>
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

export default TarzanaPage;