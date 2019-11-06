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
      unity: {}
    }
  },
  mounted () {
    var unityInstance = UnityLoader.instantiate('unityContainer', 'statics/Build/1106.json', { onProgress: UnityProgress })
    this.unity = unityInstance
  },
  methods: {
    XAbnormal () { this.unity.SendMessage('MyUnity', 'XAbnormal', '') },
    YAbnormal () { this.unity.SendMessage('MyUnity', 'YAbnormal', '') },
    XVibration () { this.unity.SendMessage('MyUnity', 'XVibration', '') },
    YVibration () { this.unity.SendMessage('MyUnity', 'YVibration', '') }
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
    }
  },
  watch: {
    xlocation: {
      handler (newval, oldval) {
        if (newval === 1) {
          this.XAbnormal()
          this.$store.commit('sendmessage/xrecover')
        }
      }
    },
    ylocation: {
      handler (newval, oldval) {
        if (newval === 1) {
          this.YAbnormal()
          this.$store.commit('sendmessage/yrecover')
        }
      }
    },
    xvibrate: {
      handler (newval, oldval) {
        if (newval === 1) {
          this.XVibration()
          this.$store.commit('sendmessage/xvibraterecover')
        }
      }
    },
    yvibrate: {
      handler (newval, oldval) {
        if (newval === 1) {
          this.YVibration()
          this.$store.commit('sendmessage/yvibraterecover')
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
