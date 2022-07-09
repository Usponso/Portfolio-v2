<script setup>
import RepoIcon from "~icons/ri/git-repository-fill";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  visibility: {
    type: String,
    required: false,
  },
  language: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div
    class="shadow"
    w:bg="neutral-900"
    w:border="~ rounded white"
    w:p="20px"
    w:grid="~ cols-1 gap-2"
    w:align="items-center"
  >
    <div w:flex="inline" w:grid="gap-4">
      <RepoIcon />
      <a w:font="bold" w:text="underline" :href="link">{{ title }}</a>
    </div>
    <div w:grid="row-start-2" w:text="left">
      <p>{{ description }}</p>
    </div>
    <!-- <div w:grid="row-start-3">
      
    </div> -->
    <div w:flex="~ inline" w:place="between">
      <p>{{ language }}</p>
      <p>{{ visibility }}</p>
    </div>
  </div>
</template>

<style>
.shadow {
  box-shadow: rgba(58, 60, 63, 0.2) 0px 8px 24px;
}
</style>
