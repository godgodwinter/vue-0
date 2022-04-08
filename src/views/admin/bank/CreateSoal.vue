<script setup>
import { ref } from "vue";
import { Field, Form } from "vee-validate";
import { useRouter, useRoute } from "vue-router";
import Api from "@/axios/axios.js";
import Toast from "@/components/lib/Toast.js";
import Popper from "@/components/atoms/Popper.vue";

const router = useRouter();
const route = useRoute();
// variable
const data = ref();
let dataStore = {
  tipesoal: "Pilihan Ganda",
  pertanyaan: "",
  pilihanJawaban: [
    {
      jawaban: "",
      statusJawaban: false,
    },
  ],
};
</script>
<template>
  <div class="pt-10 px-10">
    <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"
      >Create Soal</span
    >
  </div>

  <div class="pt-6 px-4 lg:flex">
    <div class="w-2/4 lg:w-2/4 xl:w-2/6 mx-4">
      <div
        class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 flex gap-10 justify-center border-b-2 border-sky-300"
      >
        <div>
          <h3 class="text-lg font-semibold text-gray-600">Jumlah Soal</h3>
          <h3 class="text-xl font-semibold text-gray-800 text-center">40</h3>
        </div>
        <div>
          <svg
            class="h-12 w-12 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M22 0h-20v24h14l6-6v-18zm-7 23h-12v-22h18v16h-6v6zm1-5h4.586l-4.586 4.586v-4.586zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm0-4h-4v1h4v-1zm-6.006 1h-7.991l-.003-.789c-.003-.72-.006-1.615 1.314-1.92 1.483-.341 1.236-.418 1.158-.563-1.078-1.988-.71-3.173-.395-3.703.388-.651 1.089-1.025 1.923-1.025.827 0 1.523.368 1.91 1.011.545.904.409 2.222-.379 3.713-.105.196-.195.255 1.119.559 1.355.312 1.352 1.212 1.35 1.936l-.006.781zm-6.994-1h6c-.007-.547-.07-.626-.54-.734-.855-.198-1.629-.376-1.901-.972-.142-.311-.113-.66.087-1.039.61-1.151.758-2.146.407-2.729-.276-.458-.778-.526-1.053-.526-.48 0-.857.19-1.063.537-.352.59-.201 1.58.414 2.714.204.377.236.727.095 1.039-.269.598-1.036.774-1.847.962-.525.121-.593.202-.599.748zm13-2v-1h-4v1h4zm0-4h-4v1h4v-1z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="w-2/4 lg:w-2/4 xl:w-2/6 mx-4">
      <div
        class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 flex gap-10 justify-center border-b-2 border-sky-300"
      >
        <div>
          <h3 class="text-lg font-semibold text-gray-600">Jumlah Jawaban</h3>
          <h3 class="text-xl font-semibold text-gray-800 text-center">160</h3>
        </div>
        <div>
          <svg
            class="h-12 w-12 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M22 0h-20v24h14l6-6v-18zm-7 23h-12v-22h18v16h-6v6zm1-5h4.586l-4.586 4.586v-4.586zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm0-4h-4v1h4v-1zm-6.006 1h-7.991l-.003-.789c-.003-.72-.006-1.615 1.314-1.92 1.483-.341 1.236-.418 1.158-.563-1.078-1.988-.71-3.173-.395-3.703.388-.651 1.089-1.025 1.923-1.025.827 0 1.523.368 1.91 1.011.545.904.409 2.222-.379 3.713-.105.196-.195.255 1.119.559 1.355.312 1.352 1.212 1.35 1.936l-.006.781zm-6.994-1h6c-.007-.547-.07-.626-.54-.734-.855-.198-1.629-.376-1.901-.972-.142-.311-.113-.66.087-1.039.61-1.151.758-2.146.407-2.729-.276-.458-.778-.526-1.053-.526-.48 0-.857.19-1.063.537-.352.59-.201 1.58.414 2.714.204.377.236.727.095 1.039-.269.598-1.036.774-1.847.962-.525.121-.593.202-.599.748zm13-2v-1h-4v1h4zm0-4h-4v1h4v-1z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="w-2/4 lg:w-2/4 xl:w-2/6 mx-4">
      <div
        class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 flex gap-10 justify-center border-b-2 border-sky-300"
      >
        <div>
          <router-link
            :to="{ name: 'BankSoalDetail', params: { id: route.params.id } }"
            class="py-2 px-4 bg-gray-500 text-white rounded-lg flex gap-4"
          >
            <svg
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z"
              />
            </svg>
            <p class="py-1">Tambah Soal</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <div class="pt-6 px-4 lg:flex">
    <div class="w-full lg:w-4/6 xl:w-4/6 mx-4">
      <div
        class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 flex gap-10 justify-center border-b-2 border-sky-300"
      >
        <h3 class="text-lg font-semibold text-gray-600">Soal</h3>
      </div>
    </div>
  </div>
</template>
