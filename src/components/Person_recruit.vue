<template>
  <div >
    <banner :banners="banners"></banner>

  </div>
</template>
<script>
  import Banner from '@/components/Banner'
export default {
  data() {
    return {
      banners: [
        { src: require("../../static/images/index/index-banner.jpg") },
        { src: require("../../static/images/index/index-banner01.jpg") },
        { src: require("../../static/images/index/index-banner02.jpg") },
        { src: require("../../static/images/index/index-banner03.jpg") },
        { src: require("../../static/images/index/index-banner04.jpg") },
        { src: require("../../static/images/index/index-banner05.jpg") }
      ]
    };
  },
  mounted() {},
  components: {
      Banner
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>
<style scoped>
</style>  
