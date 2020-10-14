<template>
  <div :id="character.id" class="carditem">
    <img v-if="character.image" :src="pathBase" />
    <div class="carditem__info">
      <strong>{{ character.namechar }}</strong>
      <span>{{ character.status }}</span>
      <span>{{ character.specie }}</span>
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
