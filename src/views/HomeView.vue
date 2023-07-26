<template>
  <div class="home container mx-auto px-10 text-center">
    <p class="text-3xl font-bold text-purple-950">
      With Zosar Quates App You Will Get Amazing Quates
    </p>
    <button
      class="content-center inline-block bg-slate-800 rounded-md py-3 my-5 px-3 text-purple-100"
      @click="$store.commit('GetRandomQuate')"
    >
      Get a Random Quate
    </button>
    <div>
      <p class="text-purple-700 text-2xl">
        Quate : {{ $store.state.quate.text }}
      </p>
      <h2 class="font-bold text-purple-950 text-3xl">
        Authur : {{ $store.state.quate.author }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>
