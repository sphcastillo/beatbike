import { Instructor } from "@/typings";
import Image from "next/image";
import { Noto_Sans, Comfortaa, Mulish } from "next/font/google";
import { IoClose } from "react-icons/io5";
import { FaSpotify } from "react-icons/fa";
const notoSans = Noto_Sans({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

interface InstructorModalProps {
  instructor: Instructor | null;
  onClose: () => void;
}

const InstructorModal: React.FC<InstructorModalProps> = ({
  instructor,
  onClose,
}) => {
  if (!instructor) {
    return null;
  }

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="z-80 mt-[100px] overflow-y-auto inline-block align-bottom bg-gray-50 rounded-lg text-left overflow-hidden shadow-xl transform transition-all mb-8 sm:mb-16 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-gray-50 px-4 pt-3 sm:px-6 flex justify-end">
            <button
              type="button"
              className="cursor-pointer rounded-md bg-[#DFFF00] px-3.5 py-2.5 text-sm z-100 font-semibold shadow-sm hover:bg-[#B0DB00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={onClose}
            >
              <IoClose className="h-4 w-4" />
            </button>
          </div>
          <div>
            <div className="flex flex-col items-center bg-gray-50  md:max-w-xl ">
              <div className="order-1 md:order-none flex justify-center items-center mx-4 w-full">
                <Image
                  className="object-cover px-[16px] py-5 sm:h-94 w-full md:py-5 sm:px-[54px] "
                  src={instructor.imageUrl}
                  priority
                  alt="Instructor Profile Image"
                />
              </div>

              <div className="order-2 md:order-none flex flex-col justify-between p-4 leading-normal w-full">
                <div className={notoSans.className}>
                  <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {instructor.name}
                  </h5>
                </div>
                <ul role="list" className="my-3 flex justify-center gap-x-6">
                  <li className="">
                    <a
                      href={instructor.instagramUrl}
                      className="text-[#DFFF00] hover:text-[#B0DB00]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={instructor.instagramUrl}
                      className="text-[#DFFF00] hover:text-[#B0DB00]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">Spotify</span>
                      <FaSpotify className="h-6 w-6 text-[#DFFF00] hover:text-[#B0DB00]" />
                    </a>
                  </li>
                </ul>
                <div className={mulish.className}>
                  <p className="mb-3 text-sm text-center text-gray-700 dark:text-gray-400">
                    {instructor.quote}
                  </p>
                </div>

                <div className={mulish.className}>
                  <h3
                    className="text-md leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Teaches at:
                  </h3>
                  <div className="my-2">
                    <p className="text-sm text-gray-500">
                      {instructor.location1}

                      {instructor.location2 !== null && (
                        <>
                          <svg
                            viewBox="0 0 2 2"
                            className="mx-2 inline h-0.5 w-0.5 fill-current"
                            aria-hidden="true"
                          >
                            <circle cx={1} cy={1} r={1} />
                          </svg>
                          {instructor.location2}
                        </>
                      )}
                    </p>
                  </div>
                </div>
                <div className={mulish.className}>
                  <h3
                    className="text-md leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Favorite Artist:
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {instructor.favoriteArtist}
                    </p>
                  </div>
                </div>
                <div className={mulish.className}>
                  <h3 className="text-sm text-gray-900 leading-relaxed my-4">
                    {instructor.bio}
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-2 mb-4">
              <div className={notoSans.className}>
                <button className="cursor-pointer rounded-md bg-[#DFFF00] px-3.5 py-2.5 text-sm z-100 font-semibold shadow-sm hover:bg-[#B0DB00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  View Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorModal;
