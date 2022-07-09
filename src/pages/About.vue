<script setup>
const { t } = useI18n();
</script>

<template>
  <h1 w:m="t-[50px]" w:text="5vw md:3vw">&lt; {{ t("aboutTitle") }} /&gt;</h1>
  <div w:grid="~ cols-1" w:m="t-[50px]">
    <div class="illustration">
      <img src="../assets/presentation3.svg" />
    </div>
    <div
      w:text="md:2vw 4vw justify"
      w:font="md:leading-12 leading-10"
      w:m="x-4 t-10 lg:x-[200px]"
    >
      {{ t("aboutPresentation") }}
    </div>
  </div>
</template>

<style>
.illustration {
  text-align: -webkit-center;
}
.illustration img {
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 50%;
}
</style>
