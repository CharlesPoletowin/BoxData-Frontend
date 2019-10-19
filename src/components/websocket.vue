<template>
    <div>
    <div v-text="list"></div>
    {{list}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[1,2]
        }
    },
    components:{

    },
    methods:{
        
    },
    sockets:{
        connect:function(){
            console.log('socket connected')
            this.list.push("success!")
        },
        message:function(val){
            console.log(JSON.parse(val))
            this.list.push(JSON.parse(val).monitor)
        }
    },
    mounted(){
        // this.$sockets.emit('connect',1)
    }
}
</script>

<style scoped>

</style>