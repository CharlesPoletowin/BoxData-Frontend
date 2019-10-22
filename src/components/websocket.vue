<template>
    <div>
    <div v-text="listx"></div>
    {{listy}}
    <div v-text="list"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      list: [1, 2],
      listx: [],
      listy: []
    }
  },
  components: {

  },
  methods: {

  },
  sockets: {
    connect: function () {
    },
    message: function (val) {
      // console.log(JSON.parse(val))
      let tem = JSON.parse(val)
      if (tem.monitor === 'locationx') {
        this.listx = tem.time
        this.listy = tem.value
      }
      this.list.push(tem.monitor)
    }
  },
  mounted () {
    // this.$sockets.emit('connect',1)
  }
}
</script>

<style scoped>

</style>
