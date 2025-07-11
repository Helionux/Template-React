import React from 'react'

function ServiceItems() {
  return (
    <div>
      <div className="py-20 max-w-5xl mx-auto px-4">
        <h1 className="text-center text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          Nos Services
        </h1>
        <p className="text-center text-gray-400 md:text-lg mt-2">
          Use it for free for yourself, upgrade when your team needs advanced
          control.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mt-10">
          {/* Card 1  */}
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6">
            <div className="flex flex-col items-center border-b border-gray-300 pb-6">
              <span className="mb-3 text-3xl font-medium">
                Cabinet D'études
              </span>
              <span className="text-gray-500"></span>
            </div>
            <div className="space-y-4 py-9 flex items-center justify-center">
              <div className="">
                <p className="text-black text-sm my-3 ml-2">
                  Nous disposons d'un cabinet d'études pour vous accompagner
                  dans vos projects.
                </p>
                <div className="">
                  <span>
                    Nous proposons des études personnalisées et des conseils
                    adaptés à vos besoins, allant des études topographiques aux
                    études de faisabilité.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2  */}
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6">
            <div className="flex flex-col items-center border-b border-gray-300 pb-6">
              <span className="mb-3 text-3xl font-medium">Conceptions</span>
            </div>
            <div className="space-y-4 py-9">
              <div className="flex items-center gap-3">
                <p class="text-black text-sm my-3 ml-2">
                  Nous proposons des conceptions personnalisées pour vos
                  projects de constructions de bâtiments, routes, et autres
                  infrastructures. Nous disposons d'une équipe d'experts pour
                  vous aider à réaliser vos projects de constructions.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3  */}
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6">
            <div className="flex flex-col items-center border-b border-gray-300 pb-6">
              <span className="mb-3 text-3xl font-medium">Réalisations</span>
            </div>
            <div className="space-y-4 py-9">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400">--------</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceItems
