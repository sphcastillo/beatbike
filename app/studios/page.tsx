export default function Studios() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Locations</h2>
              <p className="mt-4 leading-7 text-gray-600">
                Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-300 p-10">
                <h3 className="text-md font-semibold leading-7 text-gray-900">Tarzana</h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 ">
                  <p>18700 Ventura Blvd</p>
                  <p>Tarzana, CA 91356</p>
                </address>
                <div className="pt-1">
                    <dt className="sr-only">Phone Number</dt>
                    <dd className="font-semibold text-[#DFFF00]">
                      +1 (818) 342-6030 
                    </dd>
                </div>
              </div>
              
              <div className="rounded-2xl bg-gray-300 p-10">
                <h3 className="text-md font-semibold leading-7 text-gray-900">Huntington Beach</h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6">
                  <p>7454 Edinger Ave</p>
                  <p>Huntington Beach, CA 92647</p>
                </address>
                <div className="pt-1">
                <dt className="sr-only">Phone Number</dt>
                    <dd className="font-semibold text-[#DFFF00]">
                      +1 (714) 375-8777
                    </dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}