<script setup>
// library
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
// component
const store = useStore();
const router = useRouter();

const dataIsLogin = computed(() => store.state.isLogin);

function isLogin() {
  if (dataIsLogin.value) {
    router.push({ name: 'Dashboard' });
    // console.log('Anda sudah login!');
  } else {
    // console.log('Anda belum login!');
  }
}
isLogin();
</script>
<template>
  <!-- <LandingHeader class="sticky z-10" /> -->
  <main class="container mx-w-6xl mx-auto font-serif">
    <router-view />
  </main>
</template>
