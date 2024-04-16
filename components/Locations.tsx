import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline';
import tarzana from "@/images/studios/tarzanaStudio.jpg";
import hbStudio from "@/images/studios/huntingtonBeachStudio.png";
import Image from 'next/image';

const features = [
  {
    name: 'Tarzana',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
    href: '#',
    studioImage: tarzana
  },
  {
    name: 'Huntington Beach',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
    href: '#',
    studioImage: hbStudio
  },
]

export default function Locations() {
  return (
    <div className="bg-[#333333] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Two locations</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">

                
                  {/* <div className="mb-6 flex h-[80px] w-[120px] items-center justify-center rounded-lg bg-[#DFFF00]"> */}
                  <div className='flex justify-center items-center h-[120px]'>
                    <div className='bg-orange-400 w-[200px]'>
                        <Image 
                            src={feature.studioImage} 
                            alt="" 
                            width={200} 
                            height={100} 
                            className='object-cover'
                        />
                    </div>
                  </div>
                <dt className="text-base font-semibold leading-7 text-white text-center">
                {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">

                  <p className="flex-auto text-center">{feature.description}</p>
                  <p className="mt-6 flex justify-center items-center">
                    <a href={feature.href} className="text-sm font-semibold  text-center leading-6 text-[#DFFF00]">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
