<template>
  <div>
    <!-- banner图 -->
    <banner :banners="banners"></banner>

    <!-- 案例 -->

    <div class="anli">
      <div class="anli_list" v-for="(item,index) in anliList" :key="index">
        <div class="anli_top">
          <img :src="item.src" alt />
          <div>{{item.name}}</div>
        </div>
        <div class="anli_bottom">{{item.num}}</div>
      </div>
    </div>

    <!-- 公司简介 -->
    <div class="company">
      <div class="company_left">
        <p>因特信息技术</p>
        <div style="width:60%">
          是一家独具创新特色的互联网科技公司，
          专注于小程序的开发、推广、运营与服务
          为一体，拥有150多名专业的技术开发服
          务人员，致力于为实体企业搭建线上线下
          相结合的营销平台，轻松转型互联网+，
          全方位提升企业销售及管理能力，引领新
          零售时代。
        </div>
      </div>
      <div class="company_right">
        <div class="img_left">
          <img src="../../static/images/index/tx1.png" alt />
        </div>
        <div class="img_right">
          <img src="../../static/images/index/tx2.png" alt />
          <img src="../../static/images/index/tx3.png" alt />
        </div>
      </div>
    </div>

    <!-- 展示 -->

    <div class="zs">
      <div class="zs_list" v-for="(item,index) in zsList" :key="index">
        <div class="zs_top">
          <img :src="item.src" alt />
          <div>{{item.name}}</div>
        </div>
        <div class="zs_bottom">{{item.num}}</div>
      </div>
    </div>

    <!-- 间隔图片 -->
    <div class="xk">
      <div class="xk_left">
        <img src="../../static/images/index/xuanku.png" alt />
      </div>
      <div class="xk_right">
        <div>尊重客户，理解客户，持续提供超越客户的产品和服务，</div>
        <div>做客户永远的伙伴，这是我们一直坚持和倡导的服务理念。</div>
      </div>
    </div>

    <!-- 我们的客户 -->
    <div class="my_friend">
      <div class="friend_title">服务顾客</div>
      <div class="friend_list">
        <div class="list_wrap" v-for="(item,index) in  12" :key="index">
          <img src="../../static/images/index/code.png" alt />
          <div>共享零食屋</div>
        </div>
      </div>
    </div>
    <div class="more">了解更多</div>
  </div>
</template>
<script>
import Banner from "@/components/Banner";
export default {
  data() {
    return {
      banners: [
        { src: require("../../static/images/index/banner1.png") },
        { src: require("../../static/images/index/index-banner01.jpg") },
        { src: require("../../static/images/index/index-banner02.jpg") },
        { src: require("../../static/images/index/index-banner03.jpg") },
        { src: require("../../static/images/index/index-banner04.jpg") },
        { src: require("../../static/images/index/index-banner05.jpg") }
      ],
      anliList: [
        {
          name: "完成案例",
          num: 30724,
          src: require("../../static/images/index/anli1.png")
        },
        {
          name: "品牌策划",
          num: 2564,
          src: require("../../static/images/index/anli2.png")
        },
        {
          name: "小程序案例",
          num: 26736,
          src: require("../../static/images/index/anli3.png")
        },
        {
          name: "合作伙伴",
          num: 584,
          src: require("../../static/images/index/anli4.png")
        }
      ],
      zsList: [
        {
          name: "我们的软件",
          num:
            "因特公司集小程序开发、制作、 服务、运营为一体，通过资源整 合+网络裂变的联合推广方式为 商家提供各类必需的营销软件系 统，提升企业营销及管理效能。",
          src: require("../../static/images/index/zs1.png")
        },
        {
          name: "多元化开发",
          num:
            "依托公司在产品研发领域的技术优势及经验，专注为中小企业提供集拓客、整合、营销、管理的一站式行业解决方案。",
          src: require("../../static/images/index/zs2.png")
        },
        {
          name: "定制化开发",
          num:
            "协助企业客户正确的掌握品牌方 向，使客户快速对企业形象进行 有效深刻的记忆。",
          src: require("../../static/images/index/zs3.png")
        }
      ],
      list: [
        {
          src: require("../../static/images/index/icon1.png"),
          title: "阿里巴巴"
        }
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
.bor {
  height: 1px;
  background: #bbb;

  width: 88%;
  margin: 0 auto;
  margin-left: 80px;
}

.bor1 {
  height: 1px;
  background: #bbb;
  width: 88%;
  margin: 50px auto;
  margin-left: 80px;
}
.my_friend {

display: flex;
width: 80%;
margin: 100px auto 50px;

}
.friend_title{
  flex:2;
  text-align: center; 
  line-height: 850px;
  font-size: 30px;
  font-weight: 700;
  letter-spacing:8px;
}

.friend_list {
  display: flex;
  flex-wrap: wrap;
  flex: 4;
}
.list_wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20%;
  padding-bottom: 20px;
  /* border: 1px solid #eee; */
    margin-left: 30px;
    margin-top: 40px;
      box-shadow: 0 0 15px #eee;

}

.list_wrap img{
width: 100%
}


.list_wrap div {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
}
.more {
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #1b82d1;
  color: #1b82d1;
  border-radius: 10px;
  margin: 0 auto 30px;
  font-size: 14px;

  cursor: pointer;
}
.company {
  display: flex;
  justify-content: space-around;
  width: 84%;
  margin: 20px auto;
  margin-left: 282px;
}
.company .company_left {
  flex: 2;
}
.company .company_left span {
  font-size: 14px;
  color: #318cd2;
}
.company .company_left p {
  font-size: 30px;
  font-weight: 700;
}
.company .company_left div {
  margin-top: 10px;
  font-size: 15px;
  line-height: 32px;
}
.company .company_right {
  flex: 3;
  display: flex;
  margin-left: 80px;
}
.company .company_right .img_left,
.company .company_right .img_right {
  width: 330px;
  height: 504px;
}
.company .company_right .img_right {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.company .company_right .img_left img {
  width: 100%;
  height: 100%;
}
.company .company_right .img_right img:nth-child(1) {
  width: 278px;
  height: 242px;
}
.company .company_right .img_right img:nth-child(2) {
  width: 278px;
  height: 242px;
  margin-top: 20px;
}
.anli {
  display: flex;
  justify-content: space-around;
  height: 343px;
  align-items: center;
  width: 90%;
  margin: 0 auto;
}

.anli_list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.anli_top {
  text-align: center;
}

.anli_top img {
  width: 58px;
  height: 58px;
}
.anli_top div {
  font-size: 20px;
  margin-top: 5px;
}
.anli_bottom {
  font-size: 40px;
  color: #2684ff;
  margin-top: 10px;
}

.zs {
  display: flex;
  justify-content: space-around;
  height: 343px;
  align-items: center;
  margin-top: 100px;
}

.zs_list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 300px;
  padding: 30px 25px;
  box-shadow: 0 0 15px #eee;
}
.zs_top {
  text-align: center;
}

.zs_top img {
  width: 120px;
  height: 120px;
}
.zs_top div {
  font-size: 20px;
  margin-top: 5px;
}
.zs_bottom {
  font-size: 14px;
  color: #333;
  margin-top: 10px;
  line-height: 30px;
}
.xk {
  height: 300px;
  background: #519bfe;
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.xk img {
  height: 300px;
  position: relative;
  left: 80px;
}

.xk .xk_right div:nth-child(1) {
  font-size: 18px;
  color: #fff;
  position: relative;
  left: -180px;
}

.xk .xk_right div:nth-child(2) {
  font-size: 18px;
  color: #fff;
  position: relative;
  left: -80px;
  margin-top: 20px;
}
</style>  
