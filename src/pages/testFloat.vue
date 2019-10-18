<template>
  <div>
    <div class='back'></div>
    <div class='a \'></div>
    <div class='a'>I'm the second</div>
    <div class='a '></div>
  </div>
</template>

<style lang="stylus" scoped>
.a {
  position: fixed;
  background-color: rgba(0, 0, 0, 1);
  width: 300px;
  height: 300px;
  border: 1px solid white;
  z-index: 300;
}

.back {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
}
</style>
