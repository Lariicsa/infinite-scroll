<template>
  <div class="infscroll__container">
    <div id="infinite-list" class="infscroll__items">
      <transition name="fade">
        <div class="infscroll__loader-bg" v-show="showLoading">
          <div class="infscroll__loader">{{ textLoading }}</div>
        </div>
      </transition>
      <slot></slot>
      <ButtonFan
        v-show="isMobile"
        @btnClick="loadMore()"
        text="Cargar más ..."
        ui="secondary infscroll"
      />
    </div>
  </div>
</template>
<script>
import ButtonFan from "@/components/Button";
export default {
  name: "InfiniteScroll",

  components: {
    ButtonFan,
  },

  props: {
    showLoading: {
      type: Boolean,
      default: false,
    },
    textLoading: {
      type: String,
      default: "Loading ...",
    },
  },

  data() {
    return {
      isMobile: false,
    };
  },

  mounted() {
    const listElm = document.querySelector("#infinite-list");
    listElm.addEventListener("scroll", (e) => {
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
    loadMore() {
      this.$emit("loadMore");
    },
  },
};
</script>