<script setup>
// library
import { Field, Form } from "vee-validate";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Toast from "@/components/lib/Toast.js";
import Api from "@/axios/axios";
import jwt_decode from "jwt-decode";
// import Toast from '@/components/atoms/Toast.vue';

// declar var library
const store = useStore();
const router = useRouter();

const doLogin = async (username, password) => {
  try {
    const response = await Api.post("login", {
      email: username,
      password,
    });
    // console.log(response);
    if (response.code === 200) {
      const { token } = response;
      localStorage.setItem("token", token);
      localStorage.setItem("isLogin", true);
      // console.log('Login berhasil');
      store.commit("setToken", token);
      store.commit("setIsLogin", true);
      router.push({ name: "Dashboard" });
      Toast.success("Success", "Login Berhasil!");
      let decoded = jwt_decode(token);
      store.commit("setDataAuth", decoded);
      // console.log(decoded);
    } else {
      Toast.danger("Warning", "Login gagal!");
    }
    return response.data;
  } catch (error) {
    // console.error(error);
    Toast.danger("Warning", "Login gagal!");
  }
};
// login
async function onSubmit(values) {
  const res = await doLogin(values.username, values.password);
  // console.log(res.token);
}
// validasi
function validateUsername(value) {
  if (!value) {
    return "This field is required";
  }
  if (value.length < 3) {
    return "Username must be at least 3 characters";
  }
  return true;
}
function ValidatePassword(value) {
  if (!value) {
    return "This field is required";
  }
  if (value.length < 3) {
    return "Password must be at least 3 characters";
  }
  return true;
}
</script>
<template>
  <!-- <Toast ></Toast> -->

  <div class="min-h-screen bg-white flex flex-col justify-center sm:py-12">
    <div class="relative py-0 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-2 sm:skew-y-0 sm:-rotate-2 sm:rounded-3xl"
      ></div>
      <div class="relative px-4 py-10 bg-white shadow-2xl sm:rounded-3xl sm:p-10">
        <div class="max-w-md mx-auto">
          <!-- <div>
                    <img src="../../assets/img/avatar/baemon-ava-1.jpg"
                    class="object-cover h-52 w-full" />
                    </div> -->
          <div class="divide-y divide-gray-200">
            <div class="flex flex-col bg-white shadow-sm px-10 py-4 rounded-3xl w-50">
              <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
                BAEMON TEAM
                <!-- {{dataToken}}
                                {{dataIsLogin}} -->
              </div>
              <div class="mt-4 self-center text-xl sm:text-sm text-gray-800 text-center">
                MongoDB + Express Js + Vue 3 + Node Js
              </div>

              <Form v-slot="{ errors }" @submit="onSubmit">
                <div class="mt-10">
                  <div class="flex flex-col mb-5">
                    <label for="email" class="mb-1 text-xs tracking-wide text-gray-600"
                      >Username or Email:</label
                    >
                    <div class="relative">
                      <div
                        class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
                      >
                        <i class="fas fa-at text-blue-500"></i>
                      </div>

                      <Field
                        name="username"
                        type="email"
                        :rules="validateUsername"
                        class="w-full border-gray-300 border px-4 py-2 rounded focus:border focus:border-blue-500 focus:shadow-outline outline-none"
                      />

                      <div class="text-xs text-red-600 mt-1">{{ errors.username }}</div>
                    </div>
                  </div>
                  <div class="flex flex-col mb-6">
                    <label
                      for="password"
                      class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                      >Password:</label
                    >
                    <div class="relative">
                      <div
                        class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
                      >
                        <span>
                          <i class="fas fa-lock text-blue-500"></i>
                        </span>
                      </div>

                      <Field
                        name="password"
                        type="password"
                        :rules="ValidatePassword"
                        class="w-full border-gray-300 border px-4 py-2 rounded focus:border focus:border-blue-500 focus:shadow-outline outline-none"
                      />

                      <div class="text-xs text-red-600 mt-1">{{ errors.password }}</div>
                    </div>
                  </div>

                  <button class="flex w-full">
                    <span
                      href="#"
                      type="submit"
                      class="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
                    >
                      <span class="mr-2 uppercase">Sign In</span>
                      <span>
                        <svg
                          class="h-6 w-6"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </span>
                  </button>
                </div>
              </Form>
            </div>

            <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
              <div class="flex justify-center items-center mt-6">
                <a
                  href="#"
                  target="_blank"
                  class="inline-flex items-center text-gray-700 font-medium text-xs text-center"
                >
                  <span class="ml-2"
                    >You don't have an account?
                    <a href="#" class="text-xs ml-2 text-blue-500 font-semibold"
                      >Register now</a
                    ></span
                  >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
