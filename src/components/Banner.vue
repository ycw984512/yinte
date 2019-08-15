<template>
  <div class="banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in banners" :key="index">
        <img :src="item.src" alt  style="width:100%;height:678px"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");

export default {
  name: "banner",
  props: ["banners", "banner-image"],
  components: {
    swiper,
    swiperSlide
  }, 
  data() {
    return {
      swiperOption: {
        // swiper options 所有的配置同swiper官方api配置
        pagination: ".swiper-pagination",
        autoHeight: true,
        centeredSlides: true,
        paginationClickable: true,
        autoplay: true,
        speed:1000,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next", //前进按钮的css选择器或HTML元素。
          prevEl: ".swiper-button-prev", //后退按钮的css选择器或HTML元素。
          hideOnClick: true, //点击slide时显示/隐藏按钮
          disabledClass: "my-button-disabled", //前进后退按钮不可用时的类名。
          hiddenClass: "my-button-hidden" //按钮隐藏时的Class
        },
        pagination: {
          el: ".swiper-pagination",
          // type: "bullets",
          // progressbarOpposite: true, //使进度条分页器与Swiper的direction参数相反
          // bulletElement: "li", //设定分页器指示器（小点）的HTML标签。
          // // dynamicBullets: true, //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
          // dynamicMainBullets: 2, //动态分页器的主指示点的数量
          // // hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
            renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
          clickable: true //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        }
      }
    };
  },
  computed: {}
};
</script>
<style >
.swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    /* background: rgba(0,0,0,0.2); */
        background: #fff;
}

.swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
}

.swiper-container-horizontal > .swiper-pagination-bullets {
    /* left: 800px; */
    bottom: 20px
}
</style>
