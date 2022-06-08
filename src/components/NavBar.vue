<script setup>
import { useCycleList } from "@vueuse/core";
import TranslateIcon from "~icons/mdi/translate";

const { t, locale, availableLocales } = useI18n();
const { next: nextLang } = useCycleList(availableLocales, {
  initialValue: locale,
});

const open = ref(false);
</script>

<template>
  <div class="w-full text-white-700 bg-transparent text-white-700">
    <div
      class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
    >
      <div class="p-4 flex flex-row items-center justify-between">
        <RouterLink
          to="#"
          class="text-lg font-semibold tracking-widest uppercase rounded-lg text-white focus:outline-none focus:shadow-outline"
          >&lt;Enzo Averlant/&gt;</RouterLink
        >
        <button
          class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
          @click="open = !open"
        >
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
            <path
              v-if="!open"
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
            <path
              v-if="open"
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <nav
        class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row"
      >
        <RouterLink
          class="active px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          to="/"
          >{{ t("home") }}</RouterLink
        >
        <RouterLink
          class="active px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          to="/about"
          >{{ t("about") }}</RouterLink
        >
        <RouterLink
          class="active px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          to="/skills"
          >{{ t("skills") }}</RouterLink
        >
        <RouterLink
          class="active px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          to="/projects"
          >{{ t("projects") }}</RouterLink
        >
        <RouterLink
          class="active px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          to="/contact"
          >{{ t("contact") }}</RouterLink
        >
        <button
          class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          w:text="uppercase"
          w:flex="~"
          w:align="self-center"
          w:grid="gap-[5px]"
          @click="() => (locale = nextLang())"
        >
          <TranslateIcon /> {{ locale }}
        </button>
      </nav>
      <nav
        v-if="open"
        class="flex-col flex-grow p-4 sm:pb-0 sm:flex sm:justify-end sm:flex-row md:hidden"
        w:flex="~"
        w:border="~ light-50 rounded-md"
      >
        <RouterLink
          class="active px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          to="/"
          >{{ t("home") }}</RouterLink
        >
        <RouterLink
          class="active px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          to="/about"
          >{{ t("about") }}</RouterLink
        >
        <RouterLink
          class="active px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          to="/skills"
          >{{ t("skills") }}</RouterLink
        >
        <RouterLink
          class="active px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          to="/projects"
          >{{ t("projects") }}</RouterLink
        >
        <RouterLink
          class="active px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          to="/contact"
          >{{ t("contact") }}</RouterLink
        >
        <button
          class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          w:text="uppercase"
          w:flex="~"
          w:align="self-center"
          w:grid="gap-[5px]"
          @click="() => (locale = nextLang())"
        >
          <TranslateIcon /> {{ locale }}
        </button>
      </nav>
    </div>
  </div>
</template>

<style>
.router-link-exact-active.active {
  color: #111827;
  background-color: #e5e7eb;
}
</style>
