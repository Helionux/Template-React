import React from 'react'

function ServiceItems() {
  return (
    <div>
      <div class="relative max-w-80 w-full">
        <div class="absolute inset-x-0 top-1 flex justify-center">
          <span class="rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-3 py-1 text-xs font-semibold text-white">
            Most Popular
          </span>
        </div>

        <div class="mt-4 rounded-lg border-2 border-gray-800 bg-white shadow-lg">
          <div class="border-b p-6">
            <h3 class="text-2xl font-bold">Business</h3>
            <p class="text-gray-500">Perfect for growing businesses</p>
          </div>

          <div class="p-6">
            <div class="mb-4 flex items-baseline">
              <span class="text-3xl font-bold">$79</span>
              <span class="ml-1 text-sm text-gray-500">/month</span>
            </div>

            <ul class="space-y-1 text-gray-500">
              <li class="flex items-center gap-2">
                <svg
                  class="h-4 w-4 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-sm">Unlimited projects & users</span>
              </li>
              <li class="flex items-center gap-2">
                <svg
                  class="h-4 w-4 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-sm">500GB storage</span>
              </li>
              <li class="flex items-center gap-2">
                <svg
                  class="h-4 w-4 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-sm">24/7 premium support</span>
              </li>
              <li class="flex items-center gap-2">
                <svg
                  class="h-4 w-4 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-sm">Custom branding</span>
              </li>
              <li class="flex items-center gap-2">
                <svg
                  class="h-4 w-4 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-sm">Analytics dashboard</span>
              </li>
            </ul>
          </div>

          <div class="border-t p-6">
            <button class="w-full rounded-lg bg-gray-800 px-4 py-2 text-white transition-opacity hover:opacity-90">
              Choose Business
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceItems
