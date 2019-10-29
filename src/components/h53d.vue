<template>
<div>
  <div class="webgl-content">
    <div id="unityContainer" style="width: 960px; height: 600px"></div>
    <div class="footer">
      <div class="webgl-logo"></div>
      <button onclick="Add()">Add</button>
      <button onclick="Change()">Change</button>
      <div class="fullscreen" onclick="unityInstance.SetFullscreen(1)"></div>
      <div class="title">demo</div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'h53d',
  mounted () {
    var unityInstance = UnityLoader.instantiate('unityContainer', 'statics/Build/h5.json', { onProgress: UnityProgress })
    function Add () { unityInstance.SendMessage('MyUnity', 'Add', '') }
    function Change () { unityInstance.SendMessage('MyUnity', 'Change', '') }
  }
}
</script>

<style scoped>

</style>
