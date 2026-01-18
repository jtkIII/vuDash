<template>
  <article>
    <div v-if="pageRoute == 'main'">
      <MainBlog />
    </div>
    <div v-if="pageRoute == 'sample'">
      <SampleBlog />
    </div>
  </article>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import MainBlog from '../components/blog/MainBlog.vue';
import SampleBlog from '../components/blog/SampleBlog.vue';
const route = useRoute();
const pageRoute = ref(route.params.name);

watch(route, (newRoute) => {
  pageRoute.value = newRoute.params.name;
});
</script>