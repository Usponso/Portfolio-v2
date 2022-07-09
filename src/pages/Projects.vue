<script setup>
import { getRepos } from "../apis/getGithubRepos";

const { t } = useI18n({
  inheritLocale: true,
});

const repos = ref();

onMounted(async () => {
  repos.value = await getRepos();
  console.log(repos);
});
</script>

<template>
  <h1 w:m="t-[50px]" w:text="5vw md:3vw">&lt; {{ t("projects") }} /&gt;</h1>
  <div w:grid="~ cols-1 md:cols-2 lg:cols-3 gap-6" w:m="t-[50px]">
    <RepoCard
      v-for="repo in repos"
      :title="repo.name"
      :description="repo.description"
      :link="repo.html_url"
      :language="repo.language"
      :visibility="repo.visibility"
    />
  </div>
</template>
