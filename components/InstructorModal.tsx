import { Instructor } from "@/typings";
import Image from "next/image";
import { Noto_Sans, Comfortaa, Mulish } from "next/font/google";

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

        <div className="inline-block align-bottom bg-gray-50 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div>
            <div className="flex flex-row items-center bg-gray-50 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="flex justify-center items-center mx-4 w-1/3">
                <Image
                  className="object-cover w-24 h-96 md:h-auto md:w-24 md:rounded-none "
                  src={instructor.imageUrl}
                  alt=""
                />
              </div>

              <div className="flex flex-col justify-between p-4 leading-normal w-2/3">
                <div className={notoSans.className}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {instructor.name}
                  </h5>
                </div>
                <div className={mulish.className}>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {instructor.musicStyle}
                  </p>
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#DFFF00] text-base font-medium text-gray-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onClose}
              >
                Close
              </button>
              </div>
            </div>

            </div>
          </div>
          {/* <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  {instructor.name}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Music Style: {instructor.musicStyle}
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default InstructorModal;
