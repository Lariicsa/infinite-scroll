<template>
  <div :id="id" class="carditem">
    <div
      v-show="showPage"
      :id="'pagina' + parseInt(index / items + 1)"
      class="carditem__page"
      v-if="index % items === 0 || index === 1"
    >
      Page {{ parseInt(index / items + 1) }}
    </div>
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
      type: Object,
      required: true,
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
