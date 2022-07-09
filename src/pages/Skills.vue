<script setup>
import MdiVuejs from "~icons/mdi/vuejs";
import MdiLanguageHtml5 from "~icons/mdi/language-html5";
import MdiLanguageCss3 from "~icons/mdi/language-css3";
import MdiLanguageJavascript from "~icons/mdi/language-javascript";
import MdiLanguageCsharp from "~icons/mdi/language-csharp";
import CarbonSql from "~icons/carbon/sql";
import MdiLanguagePhp from "~icons/mdi/language-php";
import MdiBootstrap from "~icons/mdi/bootstrap";
import MdiLanguagePython from "~icons/mdi/language-python";

const { t } = useI18n({
  inheritLocale: true,
});
</script>

<template>
  <h1 w:m="t-[50px]" w:text="5vw md:3vw">&lt; {{ t("skills") }} /&gt;</h1>
  <div
    w:grid="~ cols-2 sm:cols-3 md:cols-4 lg:cols-6"
    w:m="t-[50px]"
    class="skill-grid"
  >
    <div title="HTML5" class="skill-card" w:grid="col-span-1">
      <MdiLanguageHtml5 w:text="50px" />
    </div>
    <div title="CSS3" class="skill-card" w:grid="col-span-1">
      <MdiLanguageCss3 w:text="50px" />
    </div>
    <div title="Javascript" class="skill-card" w:grid="col-span-1">
      <MdiLanguageJavascript w:text="50px" />
    </div>
    <div title="Vue.js" class="skill-card" w:grid="col-span-1">
      <MdiVuejs w:text="50px" />
    </div>
    <div title="C#" class="skill-card" w:grid="col-span-1">
      <MdiLanguageCsharp w:text="50px" />
    </div>
    <div title="SQL" class="skill-card" w:grid="col-span-1">
      <CarbonSql w:text="50px" />
    </div>
    <div title="PHP" class="skill-card" w:grid="col-span-1">
      <MdiLanguagePhp w:text="50px" />
    </div>
    <div title="Bootstrap" class="skill-card" w:grid="col-span-1">
      <MdiBootstrap w:text="50px" />
    </div>
    <div title="Python" class="skill-card" w:grid="col-span-1">
      <MdiLanguagePython w:text="50px" />
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
  padding: 20px;
  min-width: 100px;
  text-align: center;
  text-align: -webkit-center;
  transition: 0.5s ease;
}
.skill-card:hover {
  transform: translate(-5px, -5px);
}
</style>
