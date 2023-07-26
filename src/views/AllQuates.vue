<template>
  <div class="p-3">
    <div class="mx-auto max-w-screen-lg text-center">
      <h2 class="text-6xl font-bold text-purple-950">All Quates</h2>
      <div class="py-4">
        <div
          v-for="quate in $store.state.quates"
          :key="quate.text"
          :to="`/quate/${quate.text}`"
        >
          <div class="bg-slate-300 my-2 py-3 rounded-md">
            <p class="text-purple-700 text-2xl">{{ quate.text }}</p>
            <h3 class="font-bold text-purple-950 text-3xl">
              {{ quate.author }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
