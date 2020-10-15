<template>
  <div class="carditem">
    <div class="carditem__image">
      <img :src="pathBase+'futurama'+character.id+'.jpg'" />
    </div>
    <div class="carditem__info">
      <strong class="carditem__title">{{ character.name.first }} {{ character.name.last }}</strong>
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
      type: Object,
    },
    index: Number,
    showPage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pathBase: "https://res.cloudinary.com/lariicsa/image/upload/v1602727260/futurama/",
      charImages: [
        { name: "Philip", url: "" },
        { name: "Turanga", url: "" },
        { name: "Bender", url: "futurama4_pxj04y.jpg" },
        { name: "Hubert", url: "" },
        { name: "Amy", url: "" },
        { name: "Hermes", url: "" },
        { name: "Carol", url: "" },
        { name: "John", url: "" },
        { name: "Zapp", url: "" },
        { name: "Scruffy", url: "" },
        { name: "Cubert", url: "" },
        { name: "Kif", url: "" },
        { name: "Dwight", url: "" },
        { name: "LaBarbara", url: "" },
      ],
    };
  },

  mounted() {
    this.index;
  },
};
</script>
