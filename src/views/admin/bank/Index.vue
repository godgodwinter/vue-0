<script setup>
import { ref } from "vue";
import { Field, Form } from "vee-validate";
import { useRouter, useRoute } from "vue-router";
import Api from "@/axios/axios.js";
import Toast from "@/components/lib/Toast.js";

const router = useRouter();
const route = useRoute();
// variable
const data = ref("");
const dataDetail = ref({
  name: "",
  kkm: "",
  mapel: [],
});
let dataId = null;
// function Form and Validation
const getData = async () => {
  try {
    const response = await Api.get("banksoal");
    data.value = response;
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getDataId = async () => {
  try {
    const response = await Api.get(`banksoal/${dataId}`);
    dataDetail.value.mapel = [];
    dataDetail.value.name = response.name;
    dataDetail.value.kkm = response.kkm;
    response.mapel.map((val) => {
      dataDetail.value.mapel.push({
        title: val.name,
        id: val._id,
      });
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

const doDeleteData = async (id) => {
  if (confirm("Do you really want to delete?")) {
    try {
      const response = await Api.delete(`banksoal/${id}`);

      Toast.success("Success", "Data Berhasil dihapus!");
      getData();
      return response.data;
    } catch (error) {
      console.error(error);
    }
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
    label: "Name",
    field: "name",
    type: "String",
  },
  {
    label: "KKM",
    field: "kkm",
    type: "String",
  },
  {
    label: "Mapel",
    field: "mapel",
    type: "String",
  },
];

// validasi
function validateData(value) {
  if (!value) {
    return "This field is required";
  }
  if (value.length < 2) {
    return "Name must be at least 2 characters";
  }
  return true;
}
let mapelPush = [];

function onSubmit() {
  // console.log(dataDetail.value.mapel);
  mapelPush = [];
  dataDetail.value.mapel.map((val) => {
    mapelPush.push(val.id);
  });
  // console.log(dataDetail.value);
  data.value = null;
  // console.log(mapelPush);
  const res = doStoreData(dataDetail.value, mapelPush);
  getData();
  // // console.log("tes");
}
const doEditData = async (id) => {
  dataId = id;
  getDataId();
};

const doStoreData = async (d, mapel) => {
  // console.log(data);
  try {
    if (dataId) {
      const response = await Api.put(`banksoal/${dataId}`, {
        name: d.name,
        kkm: d.kkm,
        mapel: mapel,
      });

      Toast.success("Success", "Data Berhasil diupdate!");
      getData();
      return response.data;
    }
    const response = await Api.post("banksoal", {
      name: d.name,
      kkm: d.kkm,
      mapel: mapel,
    });

    getData();
    Toast.success("Success", "Data Berhasil ditambahkan!");
    return response.data;
  } catch (error) {
    Toast.danger("Warning", "Data gagal ditambahkan!");
    console.error(error);
  }
};

let mapels = ref([]);

const getDataMapel = async (d) => {
  try {
    const response = await Api.get("mapel");
    response.map((val) => {
      mapels.value.push({
        title: val.name,
        id: val.id,
      });
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
getDataMapel();
</script>
<template>
  <div class="pt-10 px-10">
    <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"
      >Bank Soal</span
    >
  </div>

  <div class="pt-6 px-4 lg:flex">
    <div class="w-full lg:w-7/12 mx-4">
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

    <div class="wfull lg:w-5/12 mx-4">
      <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
        <Form v-slot="{ errors }" @submit="onSubmit" v-if="data">
          <div class="pt-6 px-4">
            <div class="w-full mx-4">
              <div class="bg-white rounded-lg p-4 sm:p-6 xl:p-8">
                <div class="grid grid-cols-1 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="name" class="text-sm font-medium text-gray-900 block mb-2"
                      >Name</label
                    >
                    <Field
                      v-model="dataDetail.name"
                      :rules="validateData"
                      type="text"
                      name="name"
                      ref="name"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      required
                    />
                    <div class="text-xs text-red-600 mt-1">{{ errors.name }}</div>
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-6 mt-4">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="name" class="text-sm font-medium text-gray-900 block mb-2"
                      >KKM</label
                    >
                    <Field
                      v-model="dataDetail.kkm"
                      type="text"
                      name="kkm"
                      ref="kkm"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      required
                    />
                    <div class="text-xs text-red-600 mt-1">{{ errors.kkm }}</div>
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-6 mt-4">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="name" class="text-sm font-medium text-gray-900 block mb-2"
                      >Mapel</label
                    >
                    <v-select
                      v-model="dataDetail.mapel"
                      multiple
                      :options="mapels"
                      label="title"
                    ></v-select>
                  </div>
                </div>

                <div class="w-full flex justify-end mt-4">
                  <button
                    class="text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-success-darker font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
