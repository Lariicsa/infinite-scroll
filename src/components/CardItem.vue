<template>
  <div class="carditem">
    <!-- <img v-if="character.image" :src="pathBase" /> -->
    <div class="carditem__info">
      <strong>{{ character.name.first }}</strong>
      <span>{{ character.occupation }}</span>
      <span>{{ character.species }}</span>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CardItem",

  props: {
    character: {
      type: Array,
    },
    index: Number,
    showPage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pathBase: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    };
  },

  mounted() {
    this.index;
  },
};
</script>
