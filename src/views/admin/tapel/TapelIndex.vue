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
});
let dataId = null;
// function Form and Validation
const getData = async () => {
  try {
    const response = await Api.get("tapels");
    data.value = response;
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getDataId = async () => {
  try {
    const response = await Api.get(`tapels/${dataId}`);
    dataDetail.value = response;
    // console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const doDeleteData = async (id) => {
  if (confirm("Do you really want to delete?")) {
    try {
      const response = await Api.delete(`tapels/${id}`);

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
    label: "Status",
    field: "status",
    type: "String",
  },
];

// validasi
function validateData(value) {
  if (!value) {
    return "This field is required";
  }
  if (value.length < 2) {
    return "Username must be at least 2 characters";
  }
  return true;
}

function onSubmit() {
  data.value = null;
  const res = doStoreData(dataDetail.value);
  getData();
  // console.log("tes");
}
const doEditData = async (id) => {
  dataId = id;
  getDataId();
};

const doStoreData = async (d) => {
  // console.log(data);
  try {
    if (dataId) {
      const response = await Api.put(`tapels/${dataId}`, {
        name: d.name,
      });

      Toast.success("Success", "Data Berhasil diupdate!");
      getData();
      return response.data;
    }
    const response = await Api.post("tapels", {
      name: d.name,
    });

    getData();
    Toast.success("Success", "Data Berhasil ditambahkan!");
    return response.data;
  } catch (error) {
    Toast.danger("Warning", "Data gagal ditambahkan!");
    console.error(error);
  }
};
</script>
<template>
  <div class="pt-10 px-10">
    <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"
      >Tapel</span
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
                  <span
                    @click="doEditData(props.row.id)"
                    class="border border-yellow-500 text-yellow-500 block rounded-sm font-bold py-3 px-3 mr-2 flex items-center hover:bg-teal-500 hover:text-white"
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
