<template>
  <button
    v-if="ui !== 'submit'"
    @click="btnClick"
    :type="type"
    :class="ui ? 'btn__' + ui : 'btn__primary'"
  >
    {{ text }}
  </button>
  <button
    v-else
    @click="btnClick"
    formData.action="/submit"
    :type="type"
    :class="ui ? 'btn__' + ui : 'btn__primary'"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "btn-fc",
  props: ["text", "type", "disabled", "ui"],
  methods: {
    btnClick() {
      this.$emit("btnClick");
    },
  },
};
</script>
