<template>
  <div class="vfilters__wrapper">
    <div class="vfilters">
      <div class="row vfilters__topmenu">
        <div class="infscroll__list-out">
          <ul class="infscroll__list">
            <li
              :class="n === pageArea ? 'current' : ''"
              v-for="n in numPages"
              :key="n"
            >
              <a :href="'#pagina' + parseInt(n)">pag {{ n }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="row center">
        <div class="infscroll__container">
          <div id="infinite-list" class="infscroll__items">
            <transition name="fade">
              <div class="infscroll__loader-bg" v-show="loading">
                <div class="infscroll__loader">Cargando...</div>
              </div>
            </transition>
            <div class="row center">
              <CardItem
                v-for="(product, index) in gtrCharacters"
                :items="6"
                :showPage="true"
                :key="product.id"
                :index="parseInt(index + 1)"
              />
              <button v-show="isMobile" @click="loadMore()">
                Load more...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
import CardItem from "@/components/CardItem.vue";

export default {
  name: "Home",
  components: {
    CardItem,
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
    await this.getCharactersList()
  },

  mounted() {
    this.cards;
    this.currPag;

    const listElm = document.querySelector("#infinite-list");
    listElm.addEventListener("scroll", (e) => {
      let calculatedPage =
        parseInt((listElm.scrollTop / listElm.scrollHeight) * this.numPages) +
        1;
      this.pageArea = calculatedPage;

      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
          this.isMobile = true;
        }
      } else {
        if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
          this.loadMore();
        }
      }
    });
  },

  methods: {
    ...mapActions(["getCharactersList","getCharactersDimension"]),

    loadMore() {
      this.loading = true;
      setTimeout((e) => {
        const card = this.cards.map((item) => {
          this.cards.push(item);
        });
        this.upto += this.$options.static.limitItems;
        this.loading = false;
      }, 400);
    },
  },

  computed: {
    ...mapState(["charactersList"]),
    ...mapMutations(["gtrCharacters"]),

    cards() {
      const card = this.gtrCharacters.slice(0, this.upto).map((item) => {
        return item;
      });
      return card;
    },

    numPages() {
      let currentNum = this.cards.length / this.$options.static.limitItems;
      return Math.ceil(currentNum);
    },

    currPag() {
      let page = Math.ceil(this.upto / this.$options.static.limitItems);
      const arr = [];
      let current = arr.push(page);
      return page;
    },
  },
};
</script>