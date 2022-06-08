<script setup></script>

<template>
  <header w:pos="absolute">
    <NavBar />
  </header>
  <main class="glass" w:p="60px" w:h="screen">
    <RouterView />
  </main>
</template>

<style>
#app {
  font-family: MonoSpace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: black;
}
header {
  margin: 0 auto;
  left: 0px;
  right: 0px;
}
</style>
