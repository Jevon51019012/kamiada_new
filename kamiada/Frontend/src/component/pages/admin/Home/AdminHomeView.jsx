import React from 'react'

export const AdminHomeView = () => {
  return (
    <div>
    <div class="w-full px-6 py-6 mx-auto">
      <StatsCardDashboard />
      <div className="flex flex-wrap mt-6 -mx-3">
        <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
          <div className="border-black/12.5  shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            {/* Maps */}
            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
              <h6 className="font-bold text-md text-gray-500">
                Maps overview
              </h6>
              <p className="mb-0 text-sm leading-normal ">
                <i className="fa fa-arrow-up text-emerald-500"></i>
              </p>
            </div>

            <div className="flex-auto p-4 rounded-2xl border-0">
              <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                className="h-96 rounded-2xl shadow-md"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
              </MapContainer>
            </div>
          </div>
          {/* End Maps */}
        </div>

        <div class="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
          <div
            slider
            class="relative w-full h-full overflow-hidden rounded-2xl"
          >
            <div
              slide
              class="absolute w-full h-full transition-all duration-500"
            >
              <img
                class="object-cover h-full"
                src="../assets/img/carousel-1.jpg"
                alt="carousel image"
              />
              <div class="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white">
                <div class="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
                  <i class="top-0.75 text-xxs relative text-slate-700 ni ni-camera-compact"></i>
                </div>
                <h5 class="mb-1 text-white">Ur report will help Us</h5>
                <p class="">
                  There’s nothing I really wanted to do in life that I wasn’t
                  able to get good at.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="flex flex-wrap mt-6 -mx-3">
        <div class="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
          <TableParkirBeranda Tittle="PL Table's " />
        </div>
        <div class="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
          <TablePetugasBeranda Tittle="PTL Table's " />
        </div>
      </div> */}
    </div>
  </div>
  )
}
