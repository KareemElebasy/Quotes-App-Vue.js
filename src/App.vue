<template>
  <div class="bg-purple-100 min-h-screen">
    <nav class="p-3">
      <div class="flex justify-center items-center mx-auto max-w-screen-lg">
        <router-link class="btn mx-2" to="/">Home</router-link> |
        <router-link class="btn mx-2" to="/all">All Quates</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted } from "vue";
export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      store.commit("GetQuates");
    });
    return {
      store,
    };
  },
};
</script>
