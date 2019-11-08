<template>
<div>
  <div class="webgl-content">
    <div id="unityContainer" style="width: 100VW; height: 100VH"></div>
  </div>
</div>
</template>

<script>

export default {
  name: 'h53d',
  data () {
    return {
      unity: {},
      initDone: false
    }
  },
  mounted () {
    var unityInstance = UnityLoader.instantiate('unityContainer', 'statics/Build/1107_2.json', { onProgress: UnityProgress })
    this.unity = unityInstance
    this.initDone = true
  },
  methods: {
    XAbnormal () { this.unity.SendMessage('MyUnity', 'XAbnormal', '') },
    YAbnormal () { this.unity.SendMessage('MyUnity', 'YAbnormal', '') },
    XVibration () { this.unity.SendMessage('MyUnity', 'XVibration', '') },
    YVibration () { this.unity.SendMessage('MyUnity', 'YVibration', '') },
    ShankeIt () { this.unity.SendMessage('MyUnity', 'ShankeIt', '') }
  },
  computed: {
    xlocation () {
      return this.$store.state.sendmessage.XLocation
    },
    ylocation () {
      return this.$store.state.sendmessage.YLocation
    },
    xvibrate () {
      return this.$store.state.sendmessage.XVibration
    }
  },
  watch: {
    xlocation: {
      handler: function (newval, oldval) {
        if (newval === 1 && this.initDone) {
          if (this.initDone) {
            this.XAbnormal()
          }
          this.$store.commit('sendmessage/xrecover')
        }
      }
    },
    ylocation: {
      handler: function (newval, oldval) {
        if (newval === 1 && this.initDone) {
          if (this.initDone) {
            this.YAbnormal()
          }
          this.$store.commit('sendmessage/yrecover')
        }
      }
    },
    xvibrate: {
      handler: function (newval, oldval) {
        if (newval === 1) {
          this.$store.commit('sendmessage/xvibraterecover')
          if (this.initDone) {
            this.ShankeIt()
            this.XVibration()
            this.YVibration()
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
