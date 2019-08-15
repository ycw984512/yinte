<template>
  <div>
    <!-- 顶部大图 -->
    <div class="wrap">
      <div class="top_title">智慧宗教</div>
      <!-- <banner :banners="banners"></banner> -->
      <div v-for="(item,index) in list" :key="index" class="image">
        <img :src="item.src" alt />
      </div>
    </div>

    <!-- 智慧宗教介绍 -->
    <div class="introduce">
      <div class="introduce_left">
        <div>智慧宗教介绍</div>
        <div>
          智慧宗教是一个小程序，拥有150多名专业的技术开发服务人员，致力
          于为实体企业搭建线上线下相结合的营销平台，轻松转型互联网+，全
          方位提升企业销售及管理能力，引领新零售时代。
        </div>
        <div>
          <div v-for="(item,index) in 10" :key="index">
            <img src="../../static/images/index/js1.png" alt />
          </div>
        </div>
      </div>
      <div class="introduce_right">
        <img src="../../static/images/index/js.png" alt />
      </div>
    </div>

    <!-- 合作寺庙 -->
    <div class="temple">
      <div class="temple_title">合作寺院</div>
      <div class="temple_list">
        <div class="list_wrap" v-for="(item,index) in  12" :key="index">
          <img src="../../static/images/index/sm.png" alt />
          <div>杭州灵隐寺</div>
        </div>
      </div>
    </div>

    <!-- 宗教资讯 -->
    <div class="consultation">
      <div class="consultation_title">宗教资讯</div>
      <div
        class="consultation_list"
        v-for="(item,index) in zxList.slice((currentPage- 
    1)*pagesize,currentPage*pagesize)"
        :key="index"
      >
        <img src="../../static/images/index/zx.png" alt />
        <div class="consultation_right">
          <div>七月十五中元节报恩孝亲法会缘起</div>
          <div>
            智慧宗教是一个小程序，拥有150多名专业的技术开发服务人员，致力于为实体企业搭建线上线下相
            结合的营销平台，轻松转型互联网+，全方位提升企业销售及管理能力，引领新零售时代。
          </div>
          <div>2019年7月30号 14：32</div>
        </div>
      </div>
    </div>

    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="pagesize"
      @currentchange="currentchange"
      :current-page.sync="currentPage"
      :total="zxList.length"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pagesize: 5,
      currentPage: 1, //默认当前页为第一页
      list: [{ src: require("../../static/images/index/zj.png") }],
      zxList: [
        {
          src: require("../../static/images/index/zj.png"),
          title: "七月十五中元节报恩孝亲法会缘起",
          content:
            "智慧宗教是一个小程序，拥有150多名专业的技术开发服务人员，致力于为实体企业搭建线上线下相结合的营销平台，轻松转型互联网+，全方位提升企业销售及管理能力，引领新零售时代。",
          time: "2019年7月30号     14：32"
        },
        {
          src: require("../../static/images/index/zj.png"),
          title: "七月十五中元节报恩孝亲法会缘起",
          content:
            "智慧宗教是一个小程序，拥有150多名专业的技术开发服务人员，致力于为实体企业搭建线上线下相结合的营销平台，轻松转型互联网+，全方位提升企业销售及管理能力，引领新零售时代。",
          time: "2019年7月30号     14：32"
        },
        {
          src: require("../../static/images/index/zj.png"),
          title: "七月十五中元节报恩孝亲法会缘起",
          content:
            "智慧宗教是一个小程序，拥有150多名专业的技术开发服务人员，致力于为实体企业搭建线上线下相结合的营销平台，轻松转型互联网+，全方位提升企业销售及管理能力，引领新零售时代。",
          time: "2019年7月30号     14：32"
        },
        {
          src: require("../../static/images/index/zj.png"),
          title: "七月十五中元节报恩孝亲法会缘起",
          content:
            "智慧宗教是一个小程序，拥有150多名专业的技术开发服务人员，致力于为实体企业搭建线上线下相结合的营销平台，轻松转型互联网+，全方位提升企业销售及管理能力，引领新零售时代。",
          time: "2019年7月30号     14：32"
        },
        {
          src: require("../../static/images/index/zj.png"),
          title: "七月十五中元节报恩孝亲法会缘起",
          content:
            "智慧宗教是一个小程序，拥有150多名专业的技术开发服务人员，致力于为实体企业搭建线上线下相结合的营销平台，轻松转型互联网+，全方位提升企业销售及管理能力，引领新零售时代。",
          time: "2019年7月30号     14：32"
        },
        {
          src: require("../../static/images/index/zj.png"),
          title: "七月十五中元节报恩孝亲法会缘起",
          content:
            "智慧宗教是一个小程序，拥有150多名专业的技术开发服务人员，致力于为实体企业搭建线上线下相结合的营销平台，轻松转型互联网+，全方位提升企业销售及管理能力，引领新零售时代。",
          time: "2019年7月30号     14：32"
        }
      ]
    };
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
  methods: {
    currentchange() {
      this.currentPage = currentPage;
    }
  }
};
</script>
<style scoped>
.image {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
}
.image img {
  width: 100%;
  height: 600px;
}

.wrap {
  position: relative;
}
.top_title {
  position: absolute;
  top: 180px;
  left: 360px;
  font-size: 30px;
  color: #fff;
  letter-spacing: 3px;
}
.introduce {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-top: 120px;
}


.introduce_left > div:nth-child(1) {
  font-size: 20px;
  font-weight: 700;
}
.introduce_left > div:nth-child(2) {
  margin-top: 20px;
}
.introduce_left > div:nth-child(3) {
  display: flex;
  flex-wrap: wrap;

  margin-top: 20px;
}
.introduce_left div:nth-child(3) div {
  width: 18%;
  margin-left: 18px;
}

.introduce_left div:nth-child(3) > div:nth-child(6n),
.introduce_left div:nth-child(3) > div:nth-child(1) {
  margin-left: 0px;
}

.introduce_left div:nth-child(3) img {
  width: 100%;
}

.introduce_right img {
  height: 100%;
}
.temple {
  width: 90%;
  margin: 120px auto;
}

.temple_title {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
}
.temple_list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
}
.list_wrap {
  width: 15%;
  text-align: center;
  padding-bottom: 20px;
  margin-left: 30px;
  border: 1px solid #eee;
  margin-top: 20px;
}

.list_wrap div {
  margin-top: 20px;
  font-size: 14px;
}
.list_wrap img {
  width: 100%;
}
.consultation {
  width: 80%;
  margin: 120px auto;
}
.consultation_title {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 40px;
}
.consultation_list {
  display: flex;
  margin-top: 30px;
}

.consultation_list img {
  width: 250px;
  height: 200px;
}
.consultation_list .consultation_right {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
}
.consultation_list .consultation_right div {
  color: hsla(0, 0%, 60%, 1);
  font-size: 14px;
}
.consultation_list .consultation_right div:nth-child(1) {
  color: #333;
  font-size: 16px;
  font-weight: 700;
}
.el-pagination {
  text-align: center !important;
}
</style>  
