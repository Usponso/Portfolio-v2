<script setup>
import MdiVuejs from "~icons/mdi/vuejs";
import MdiLanguageHtml5 from "~icons/mdi/language-html5";
import MdiLanguageCss3 from "~icons/mdi/language-css3";
import MdiLanguageJavascript from "~icons/mdi/language-javascript";
import MdiLanguageCsharp from "~icons/mdi/language-csharp";
import CarbonSql from "~icons/carbon/sql";
import MdiLanguagePhp from "~icons/mdi/language-php";
import MdiBootstrap from "~icons/mdi/bootstrap";
</script>

<template>
  <h1 w:m="t-[50px]" w:text="5vw md:3vw">My skills</h1>
  <div w:grid="~ cols-1 md:cols-6" w:m="t-[50px]" class="skill-grid">
    <div class="skill-card" w:grid="col-span-1">
      <MdiVuejs w:text="50px" />
    </div>
    <div class="skill-card" w:grid="col-span-1">
      <MdiLanguageHtml5 w:text="50px" />
    </div>
    <div class="skill-card" w:grid="col-span-1">
      <MdiLanguageCss3 w:text="50px" />
    </div>
    <div class="skill-card" w:grid="col-span-1">
      <MdiLanguageJavascript w:text="50px" />
    </div>
    <div class="skill-card" w:grid="col-span-1">
      <MdiLanguageCsharp w:text="50px" />
    </div>
    <div class="skill-card" w:grid="col-span-1">
      <CarbonSql w:text="50px" />
    </div>
    <div class="skill-card" w:grid="col-span-1">
      <MdiLanguagePhp w:text="50px" />
    </div>
    <div class="skill-card" w:grid="col-span-1">
      <MdiBootstrap w:text="50px" />
    </div>
  </div>
</template>

<style>
.skill-grid {
  gap: 20px;
}
.skill-card {
  border: 1px solid white;
  border-radius: 5px;
  padding: 40px;
  min-width: 100px;
  text-align: center;
  text-align: -webkit-center;
}
</style>
