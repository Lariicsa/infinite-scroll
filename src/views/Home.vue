<template>
  <div class="row center">
    <p>{{cards}}</p>
    <!-- <InfiniteScroll :showLoading="loading" @loadMore="loadMore()">
      <div class="row center">
        <CardItem
          v-for="(product, index) in gtrCharacters"
          :items="6"
          :key="product.id"
          :index="parseInt(index + 1)"
        />
      </div>
    </InfiniteScroll> -->
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
    limitItems: 6,
  },

  async created() {
    await this.getCharactersList();
  },

  mounted() {
    this.cards;
    this.currPag;
  },

  methods: {
    ...mapActions(["getCharactersList", "getCharactersDimension"]),

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