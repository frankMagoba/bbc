<template>
  <div class="help">
    <img :src="image" class="help-img" />
    <span class="tooltiptext">{{ titleText }}</span>
  </div>
</template>
<script>
import image from "../../assets/icons/clarity_help-line.svg";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Help",
  props: {
    titleText: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      image,
    };
  },
};
</script>

<style scoped>
@import "./index.css";
</style>
