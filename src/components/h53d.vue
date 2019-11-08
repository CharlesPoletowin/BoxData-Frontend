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
    var unityInstance = UnityLoader.instantiate('unityContainer', 'statics/Build/1109_12.json', { onProgress: UnityProgress })
    this.unity = unityInstance
    this.initDone = true
  },
  methods: {
    XAbnormal () { this.unity.SendMessage('MyUnity', 'XAbnormal', '') },
    YAbnormal () { this.unity.SendMessage('MyUnity', 'YAbnormal', '') },
    XVibration () { this.unity.SendMessage('MyUnity', 'XVibration', '') },
    YVibration () { this.unity.SendMessage('MyUnity', 'YVibration', '') },
    ShakeIt () { this.unity.SendMessage('MyUnity', 'ShakeIt', '') }
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
    },
    yvibrate () {
      return this.$store.state.sendmessage.YVibration
    },
    shakeIt () {
      return this.$store.state.sendmessage.ShakeIt
    }
  },
  watch: {
    xlocation: {
      handler: function (newval, oldval) {
        if (newval === 1) {
          if (this.initDone) {
            this.XAbnormal()
          }
          this.$store.commit('sendmessage/xrecover')
        }
      }
    },
    ylocation: {
      handler: function (newval, oldval) {
        if (newval === 1) {
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
            this.XVibration()
          }
        }
      }
    },
    yvibrate: {
      handler: function (newVal, oldVal) {
        if (newVal === 1) {
          this.$store.commit('sendmessage/yvibraterecover')
          if (this.initDone) {
            this.YVibration()
          }
        }
      }
    },
    shakeIt: {
      handler: function (newVal, oldVal) {
        console.log('shakeit' + newVal)
        if (newVal === 1) {
          if (this.initDone) {
            this.ShakeIt()
          }
          this.$store.commit('sendmessage/shakeRecover')
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
