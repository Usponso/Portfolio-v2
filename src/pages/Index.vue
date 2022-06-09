<script setup>
const { t } = useI18n();
</script>

<template>
  <div class="home">
    <h1 w:text="7vw md:6vw">&lt;Enzo Averlant/&gt;</h1>
    <p w:text="gray-400 md:2.2vw 4vw">&lt;!-- {{ t("presentation") }} --&gt;</p>
  </div>
</template>

<style>
.home {
  height: 80vh;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
}
</style>
