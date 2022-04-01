<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const isSideBarActive = computed(function () {
  return store.state.isSideBarActive;
});
// console.log(isSideBarActive.value);
</script>
<template>
  <aside
    :class="{ hidden: !isSideBarActive }"
    id="sidebar"
    class="fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
    aria-label="Sidebar"
  >
    <div
      class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0"
    >
      <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div class="flex-1 px-3 bg-white divide-y space-y-1">
          <ul class="space-y-2 pb-2">
            <li>
              <form action="#" method="GET" class="lg:hidden">
                <label for="mobile-search" class="sr-only">Search</label>
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <svg
                      class="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="mobile-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5"
                    placeholder="Search"
                  />
                </div>
              </form>
            </li>
            <li>
              <router-link
                :to="{ name: 'Dashboard' }"
                class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path
                    d="M6 23h-3v-5.486c-1.827-.518-3-2.24-3-3.988 0-.585.129-1.172.407-1.716-.323-1.661.657-3.344 2.356-3.881l.018-.005c.773-1.102 2.057-1.826 3.535-1.898l5.666-5.026 12.018 10.661-1.33 1.493-10.688-9.482-3.274 2.905c.305.162.591.358.849.589l2.415-2.142 9.026 7.989v9.987h-2.998v-7h-5l-.008 7h-5.992v-6.061c.546-.125 1.034-.463 1.317-1.044 2.096.786 3.746-2.273 1.82-3.562 1.073-1.237.188-2.747-1.208-2.525-.673-2.384-4.178-2.384-4.851 0-1.31-.235-2.295 1.094-1.385 2.291-1.654 1.38-.162 4.084 1.872 3.473.214.74.794 1.2 1.435 1.362v6.066zm.451-10.678c1.493-1.023 3.242.768 2.303 2.226.002-1.473-.853-2.282-2.303-2.226m-2.119 1.191c-.668-1.002-.34-2.366.705-2.968.589-.338 1.33-.369 1.953-.07 1.06.507-2.743-.678-2.658 3.038"
                  />
                </svg>
                <span class="ml-3">Home </span>
              </router-link>
            </li>
            <!-- <li>
              <router-link
                :to="{ name: 'AdminProfile' }"
                class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14 18.597v.403h-10v-.417c-.004-1.112.044-1.747 1.324-2.043 1.403-.324 2.787-.613 2.122-1.841-1.973-3.637-.563-5.699 1.554-5.699 2.077 0 3.521 1.985 1.556 5.699-.647 1.22.688 1.51 2.121 1.841 1.284.297 1.328.936 1.323 2.057zm6-9.597h-4v2h4v-2zm0 4h-4v2h4v-2zm0 4h-4v2h4v-2zm-4-12v2h6v14h-20v-14h6v-2h-8v18h24v-18h-8zm-6-4v6h4v-6h-4zm2 4c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z"
                  />
                </svg>

                <span class="ml-3 flex-1 whitespace-nowrap">About</span>
                <span
                  class="bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full"
                  >New</span
                >
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'AdminPortofolio' }"
                class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M2 9l-1-7h5.694c1.265 1.583 1.327 2 3.306 2h13l-1 5h-4.193l-3.9-3-1.464 1.903 1.428 1.097h-1.971l-3.9-3-2.307 3h-3.693zm-2 2l2 11h20l2-11h-24z"
                  />
                </svg>
                <span class="ml-3">Portofolio</span>
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'AdminLabel' }"
                class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12.878 2h-8.877l-.001 9.014 10.973 11.123 9.026-9.027-11.121-11.11zm-5.615 3.263c.684-.684 1.791-.684 2.475 0 .684.683.684 1.791 0 2.474s-1.791.684-2.475 0-.684-1.791 0-2.474zm7.719 14.036l-6.225-6.349 6.121-6.122 6.293 6.283-6.189 6.188zm-3.379 2.265l-1.369 1.436-10.234-10.257.001-7.743h1.999v6.891l9.603 9.673z"
                  />
                </svg>
                <span class="ml-3">Label</span>
              </router-link>
            </li>

            <li>
              <router-link
                :to="{ name: 'AdminSkills' }"
                class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.327 14.859c-.217-.648.031-1.333.595-1.734.284-.202.609-.306.932-.306.317 0 .633.101.902.308-.21-.704-.851-1.127-1.516-1.127-.312 0-.63.093-.911.294-.882.629-.879 1.938-.002 2.565zm2.639 6.434c.7.235 2.868.835 5.38 2.707l4.654-3.319c-1.208-1.692-.875-2.876-2.075-4.558-.464-.652-.885-1.084-1.565-1.084-.179 0-.313.027-.573.075l.422.592c.106.148.071.355-.077.461-.149.106-.355.071-.461-.077l-.377-.528c-.109-.153-.285-.241-.469-.241-.068 0-.06-.007-.978.205l.513.718c.105.148.071.354-.077.461-.148.106-.354.072-.461-.078l-.444-.622c-.109-.153-.285-.241-.467-.241-.083 0-.067-.005-1.01.234l.543.759c.105.148.07.354-.078.461-.147.106-.354.071-.46-.077l-2.198-3.077c-.289-.406-.854-.5-1.26-.211s-.501.854-.211 1.26l3.246 4.55c-.87-.322-2.217-.463-2.467.44-.149.538.282.966.95 1.19zm-4.966-15.293h4v4.089c-.246-.052-.497-.089-.758-.089h-.002c-.745 0-1.462.23-2.073.666-.521.373-.91.881-1.167 1.451v-6.117zm2.562 15.972l-.562.028c-6.075 0-11-4.925-11-11s4.925-11 11-11 11 4.925 11 11c0 .804-.092 1.586-.256 2.342-.395-.179-.849-.303-1.385-.303-.234 0-.428.024-.615.054.161-.673.256-1.371.256-2.093 0-4.962-4.037-9-9-9s-9 4.038-9 9 4.037 9 9 9h.011c-.071.652.093 1.36.551 1.972z"
                  />
                </svg>
                <span class="ml-3">Skills</span>
              </router-link>
            </li>

            <li>
              <router-link
                :to="{ name: 'AdminAchievement' }"
                class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.155 8.64c-.909 1.519-2.327 3.067-4.097 3.004-.413.706-.852 1.677-1.339 2.803l-1.312.553c.936-2.343 2.231-4.961 3.698-6.994-.67.529-1.746 1.637-2.662 2.783-1.098-1.828-.3-3.691.973-5.179.021.641.359 1.196.601 1.475-.087-.53-.114-1.489.195-2.351.718-.732 1.364-1.271 2.113-1.76-.083.478.08 1.026.262 1.361.024-.49.224-1.43.521-1.84.924-.727 2.332-1.373 3.892-1.495-.081.973-.436 2.575-1.024 3.604-.515.404-1.221.68-1.791.833.493.089 1.031.077 1.494-.001-.269.743-.552 1.428-.998 2.276-.679.468-1.578.732-2.203.825.46.187 1.272.245 1.677.103zm-13.841 3.805l.645.781 4.773-2.791-.668-.768-4.75 2.778zm6.96-.238l-.668-.767-4.805 2.808.645.781 4.828-2.822zm4.679.007c-.421.203-.851.341-1.286.398-.12.231-.246.494-.377.773l.298.342c.623.692.459 1.704-.376 2.239-.773.497-5.341 3.376-6.386 4.035-.074-.721-.358-1.391-.826-1.948-.469-.557-6.115-7.376-7.523-9.178-.469-.6-.575-1.245-.295-1.816.268-.549.842-.918 1.43-.918.919 0 1.408.655 1.549 1.215.16.641-.035 1.231-.623 1.685l1.329 1.624 7.796-4.446c1.422-1.051 1.822-2.991.93-4.513-.618-1.053-1.759-1.706-2.978-1.706-1.188 0-.793-.016-9.565 4.475-1.234.591-2.05 1.787-2.05 3.202 0 .87.308 1.756.889 2.487 1.427 1.794 7.561 9.185 7.616 9.257.371.493.427 1.119.15 1.673-.277.555-.812.886-1.429.886-.919 0-1.408-.655-1.549-1.216-.156-.629.012-1.208.604-1.654l-1.277-1.545c-.822.665-1.277 1.496-1.377 2.442-.232 2.205 1.525 3.993 3.613 3.993.596 0 1.311-.177 1.841-.51l9.427-5.946c.957-.664 1.492-1.781 1.492-2.897 0-.745-.24-1.454-.688-2.003l-.359-.43zm-7.933-10.062c.188-.087.398-.134.609-.134.532 0 .997.281 1.243.752.312.596.226 1.469-.548 1.912l-5.097 2.888c-.051-1.089-.579-2.081-1.455-2.732l5.248-2.686zm2.097 13.383l.361-.905.249-.609-3.449 2.017.645.781 2.194-1.284z"
                  />
                </svg>
                <span class="ml-3">Achievement</span>
              </router-link>
            </li>

            <li>
              <router-link
                :to="{ name: 'AdminExperience' }"
                class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path
                    d="M1.999 1v7.269l-2 1.456v13.275h24.001v-13.275l-2.001-1.453v-7.272h-20zm1 11.234v-10.234h18v10.233l-9 5.766-9-5.765zm19 .54v-3.17l1.001.764v11.632h-22.001v-11.641l1-.707.063 3.134 9.937 6.413 10-6.425zm-14.305-6.752l-2.694.496 1.888 1.986-.361 2.716 2.472-1.182 2.473 1.182-.361-2.716 1.888-1.986-2.695-.496-1.305-2.41-1.305 2.41zm.248 2.139l-.945-.994 1.349-.249.653-1.206.654 1.206 1.349.249-.945.994.18 1.36-1.238-.591-1.238.591.181-1.36zm6.058-3.078h4.999v-1h-4.999v1zm0 2h4.999v-1h-4.999v1zm0 2h4.999v-1h-4.999v1zm0 2h3v-1h-3v1z"
                  />
                </svg>
                <span class="ml-3">Experience</span>
              </router-link>
            </li>

            <li>
              <router-link
                :to="{ name: 'AdminLanguage' }"
                class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path
                    d="M1.999 1v7.269l-2 1.456v13.275h24.001v-13.275l-2.001-1.453v-7.272h-20zm1 11.234v-10.234h18v10.233l-9 5.766-9-5.765zm19 .54v-3.17l1.001.764v11.632h-22.001v-11.641l1-.707.063 3.134 9.937 6.413 10-6.425zm-14.305-6.752l-2.694.496 1.888 1.986-.361 2.716 2.472-1.182 2.473 1.182-.361-2.716 1.888-1.986-2.695-.496-1.305-2.41-1.305 2.41zm.248 2.139l-.945-.994 1.349-.249.653-1.206.654 1.206 1.349.249-.945.994.18 1.36-1.238-.591-1.238.591.181-1.36zm6.058-3.078h4.999v-1h-4.999v1zm0 2h4.999v-1h-4.999v1zm0 2h4.999v-1h-4.999v1zm0 2h3v-1h-3v1z"
                  />
                </svg>
                <span class="ml-3">Language</span>
              </router-link>
            </li> -->
          </ul>
          <div class="space-y-2 pt-10">
            <Link
              to="/about"
              class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M1.999 1v7.269l-2 1.456v13.275h24.001v-13.275l-2.001-1.453v-7.272h-20zm1 11.234v-10.234h18v10.233l-9 5.766-9-5.765zm19 .54v-3.17l1.001.764v11.632h-22.001v-11.641l1-.707.063 3.134 9.937 6.413 10-6.425zm-14.305-6.752l-2.694.496 1.888 1.986-.361 2.716 2.472-1.182 2.473 1.182-.361-2.716 1.888-1.986-2.695-.496-1.305-2.41-1.305 2.41zm.248 2.139l-.945-.994 1.349-.249.653-1.206.654 1.206 1.349.249-.945.994.18 1.36-1.238-.591-1.238.591.181-1.36zm6.058-3.078h4.999v-1h-4.999v1zm0 2h4.999v-1h-4.999v1zm0 2h4.999v-1h-4.999v1zm0 2h3v-1h-3v1z"
                />
              </svg>
              <span class="ml-3">Documentation</span>
            </Link>
            <a
              href="#"
              class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
            >
              <svg
                class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                />
              </svg>
              <span class="ml-3">Components</span>
            </a>
            <a
              href="#"
              class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
            >
              <svg
                class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-3">Help</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
