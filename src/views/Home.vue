<template>
  <div class="row center">
    <ul>
      <li v-for="n in gtrCharacters" :key="n.id">{{n.name.first}} {{n.id}} </li>
    </ul>
    <InfiniteScroll :showLoading="loading" @loadMore="loadMore()">
      <div class="row center">
        <CardItem
          v-for="(character, index) in cards"
          :character="character"
          :key="index"
          :index="parseInt(index + 1)"
        />
      </div>
    </InfiniteScroll>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
import CardItem from "@/components/CardItem";
import InfiniteScroll from "@/components/InfiniteScroll"

export default {
  name: "Home",
  components: {
    CardItem,
    InfiniteScroll
  },

  data() {
    return {
      loading: false,
      items: [],
      upto: 6,
      pages: [],
      pageArea: "",
      isMobile: false,
    };
  },

  static: {
    limitScrollItems: 6,
  },

  async created() {
    await this.getCharactersList();
  },

  mounted() {
    this.cards;
  },

  methods: {
    ...mapActions(["getCharactersList"]),

    loadMore() {
      const listItems = document.querySelector("#infinite-list");
      let heightToTop = listItems.scrollTop;
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        setTimeout((e) => {
          listItems.scrollTo(0, heightToTop);
        }, 1000);
      }

      this.loading = true;
      setTimeout((e) => {
        const card = this.cards.map((item) => {
          this.cards.push(item);
        });
        this.upto += this.$options.static.limitScrollItems;
        this.loading = false;
      }, 800);
    },
  },

  computed: {
    ...mapState(["charactersList"]),
    ...mapGetters(["gtrCharacters"]),

    cards() {
      const card = this.gtrCharacters.slice(0, this.upto).map((item) => {
        return item;
      });
      return card;
    },
  },
};
</script>