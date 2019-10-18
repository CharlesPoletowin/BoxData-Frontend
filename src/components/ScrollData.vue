<template>
  <div
    class=""
    style="height:100%;"
  >
    <q-carousel
      swipeable
      animated
      v-model="slide"
      :autoplay="autoplay"
      ref="carousel"
      infinite
      keep-alive
      style="height:100%;border-radius: 10px;"
    >
      <q-carousel-slide
        :name="1"
        style="padding:0 0;"
      >
        <PlainData bgColor='bg-white' />
      </q-carousel-slide>
      <q-carousel-slide
        :name="2"
        style="padding:0 0;"
      >
        <PlainData bgColor='bg-grey' />
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
          class="text-white"
          style="background: rgba(0, 0, 0, .3); padding: 4px 8px 4px 0; border-radius: 4px"
        >
          <q-toggle
            dense
            dark
            color="grey"
            v-model="autoplay"
            label="Auto Play"
          />
        </q-carousel-control>

        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <q-btn
            push
            round
            dense
            flat
            color="orange"
            text-color="black"
            icon="arrow_left"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            push
            round
            dense
            flat
            color="orange"
            text-color="black"
            icon="arrow_right"
            @click="$refs.carousel.next()"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script>
import PlainData from './PlainData.vue'
export default {
  data () {
    return {
      slide: 1
    }
  },
  components: {
    PlainData
  },
  props: ['autoplay']
}
</script>
