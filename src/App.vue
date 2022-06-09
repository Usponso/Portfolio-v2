<script setup></script>

<template>
  <header w:pos="absolute">
    <NavBar />
  </header>
  <main w:p="60px" w:min-h="screen">
    <RouterView />
  </main>
  <footer>Copyright 2022</footer>
</template>

<style>
html {
  background-color: #1c1c1e;
}
#app {
  font-family: MonoSpace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #1c1c1e;
}
header {
  margin: 0 auto;
  left: 0px;
  right: 0px;
}
</style>
