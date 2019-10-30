<template>
<div>
  <div class="webgl-content">
    <div id="unityContainer" style="width: 960px; height: 600px"></div>
    <div class="footer">
      <div class="webgl-logo"></div>
      <button onclick="Add()">Add</button>
      <button onclick="Change()">Change</button>
      <div class="fullscreen" onclick="unityInstance.SetFullscreen(1)"></div>
      <div class="title">demo {{xlocation}}</div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'h53d',
  mounted () {
    var unityInstance = UnityLoader.instantiate('unityContainer', 'statics/Build/h5.json', { onProgress: UnityProgress })
    this.$store.commit('sendmessage/xlocate')
  },
  methods: {
    Add () { unityInstance.SendMessage('MyUnity', 'Add', '') },
    Change () { unityInstance.SendMessage('MyUnity', 'Change', '') }
  },
  computed: {
    xlocation () {
      return this.$store.state.sendmessage.XLocation
    }
  },
  watch: {
    xlocation: {
      handler (newval, oldval) {
        if (newval === 1) {
          this.Add()
          this.$store.commit('sendmessage/xrecover')
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
