<script setup>
import { ref } from "vue";
import { Field, Form } from "vee-validate";
import { useRouter, useRoute } from "vue-router";
import Api from "@/axios/axios.js";
import Toast from "@/components/lib/Toast.js";
import Popper from "@/components/atoms/Popper.vue";

const router = useRouter();
const route = useRoute();
// console.log(route.params.id);
// variable
const countData = ref(0);
const data = ref("");
// function Form and Validation
const getData = async () => {
  try {
    const response = await Api.get(`banksoal/${route.params.id}/soal`);
    data.value = response;
    countData.value = data.value.length;
    console.log(data.value);
    return response;
  } catch (error) {
    console.error(error);
  }
};
getData();

const columns = [
  {
    label: "No",
    field: "no",
    width: "50px",
    tdClass: "text-center",
    thClass: "text-center",
  },
  {
    label: "Actions",
    field: "actions",
    sortable: false,
    width: "50px",
    tdClass: "text-center",
    thClass: "text-center",
  },
  {
    label: "Pertanyaan",
    field: "pertanyaan",
    type: "String",
  },
  {
    label: "Tipe Soal",
    field: "tipesoal",
    type: "String",
  },
  {
    label: "Jumlah Jawaban",
    field: "countJawaban",
    type: "Number",
    tdClass: "text-center",
    thClass: "text-center",
  },
];
</script>
<template>
  <div class="pt-10 px-10">
    <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"
      >Lihat Soal</span
    >
  </div>

  <div class="pt-6 px-4 lg:flex">
    <div class="w-2/4 lg:w-2/4 xl:w-2/6 mx-4">
      <div
        class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 flex gap-10 justify-center border-b-2 border-sky-300"
      >
        <div>
          <h3 class="text-lg font-semibold text-gray-600">Jumlah Soal</h3>
          <h3 class="text-xl font-semibold text-gray-800 text-center">{{ countData }}</h3>
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
            :to="{ name: 'BankSoalCreateSoal', params: { id: route.params.id } }"
            class="py-2 px-4 bg-sky-500 text-white rounded-lg flex gap-4"
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
                d="M5 21h-5v-2h5v2zm3.424-5.718l4.402 4.399-5.826 1.319 1.424-5.718zm15.576-6.748l-9.689 9.804-4.536-4.536 9.689-9.802 4.536 4.534z"
              />
            </svg>
            <p class="py-1">Tambah Soal</p>
          </router-link>
        </div>

        <div>
          <router-link
            :to="{ name: 'BankSoal' }"
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
            <p class="py-1">Kembali</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <div class="pt-6 px-4 lg:flex">
    <div class="w-full lg:w-12/12 mx-4">
      <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
        <div v-if="data">
          <vue-good-table
            :columns="columns"
            :rows="data"
            :search-options="{
              enabled: true,
            }"
            :pagination-options="{
              enabled: true,
              perPageDropdown: [10, 20, 50],
            }"
            styleClass="vgt-table striped bordered condensed"
            class="py-10"
          >
            <template #table-row="props">
              <span v-if="props.column.field == 'actions'">
                <div class="text-sm font-medium text-center flex justify-center">
                  <router-link
                    :to="{ name: 'BankSoalDetail', params: { id: props.row.id } }"
                    class="border border-sky-500 text-sky-500 block rounded-sm font-bold py-3 px-3 mr-2 flex items-center hover:bg-sky-500 hover:text-white"
                  >
                    <svg
                      class="fill-current h-5 w-5"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        d="M13.927 23.84c-.638.105-1.292.16-1.959.16-6.606 0-11.968-5.377-11.968-12s5.362-12 11.968-12c6.605 0 11.967 5.377 11.967 12 0 .671-.055 1.329-.161 1.971l-1.917-.675c.055-.424.084-.857.084-1.296 0-5.519-4.469-10-9.973-10-5.505 0-9.973 4.481-9.973 10s4.468 10 9.973 10c.45 0 .894-.03 1.328-.088l.631 1.928zm-1.173-10.001c-.242.103-.507.161-.786.161-1.101 0-1.995-.896-1.995-2s.894-2 1.995-2c1.1 0 1.994.896 1.994 2 0 .211-.032.414-.093.604l9.733 3.426-3.662 1.926 4.06 4.173-1.874 1.827-4.089-4.215-2.167 3.621-3.116-9.523zm-.093 6.131c-.229.02-.46.03-.693.03-4.404 0-7.979-3.585-7.979-8s3.575-8 7.979-8c4.403 0 7.978 3.585 7.978 8 0 .207-.008.412-.023.615l-.979-.344.005-.271c0-3.863-3.128-7-6.981-7-3.853 0-6.982 3.137-6.982 7s3.129 7 6.982 7l.372-.01.321.98zm-.975-2.978c-2.621-.146-4.705-2.327-4.705-4.992 0-2.76 2.234-5 4.987-5 2.605 0 4.747 2.008 4.967 4.564l-1.06-.373c-.374-1.821-1.982-3.191-3.907-3.191-2.202 0-3.99 1.792-3.99 4 0 1.996 1.461 3.652 3.368 3.952l.34 1.04z"
                      />
                    </svg>
                  </router-link>
                  <span
                    @click="doEditData(props.row.id)"
                    class="border border-yellow-500 text-yellow-500 block rounded-sm font-bold py-3 px-3 mr-2 flex items-center hover:bg-yellow-500 hover:text-white"
                  >
                    <svg
                      class="fill-current h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 14.45v6.55h-16v-12h6.743l1.978-2h-10.721v16h20v-10.573l-2 2.023zm1.473-10.615l1.707 1.707-9.281 9.378-2.23.472.512-2.169 9.292-9.388zm-.008-2.835l-11.104 11.216-1.361 5.784 5.898-1.248 11.103-11.218-4.536-4.534z"
                      />
                    </svg>
                  </span>

                  <button
                    @click="doDeleteData(props.row.id)"
                    class="border border-red-500 text-red-500 block rounded-sm font-bold py-3 px-3 mr-2 flex items-center hover:bg-red-500 hover:text-white"
                  >
                    <svg
                      class="fill-current h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"
                      />
                    </svg>
                  </button>
                </div>
              </span>

              <span v-if="props.column.field == 'mapel'">
                <span
                  class="ml-1 mr-1 px-1 py-1 bg-sky-500 text-white text-sm rounded-lg"
                  v-for="item in props.row.mapel"
                  :key="item.id"
                >
                  {{ item.name }}
                </span>
              </span>

              <span v-else-if="props.column.field == 'no'">
                <div class="text-center">{{ props.index + 1 }}</div>
              </span>

              <span v-else>
                {{ props.formattedRow[props.column.field] }}
              </span>
            </template>
          </vue-good-table>
        </div>
      </div>
    </div>
  </div>
</template>
