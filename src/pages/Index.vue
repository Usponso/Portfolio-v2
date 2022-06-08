<script setup>
const { t } = useI18n();
</script>

<template>
  <div class="home">
    <h1 w:text="6vw">&lt;Enzo Averlant/&gt;</h1>
    <p w:text="gray-400 2.2vw">&lt;!-- {{ t("presentation") }} --&gt;</p>
  </div>
</template>

<style>
.home {
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
}
</style>
