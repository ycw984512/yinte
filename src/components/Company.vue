<template>
  <div>
    <!-- 顶部大图 -->
    <div class="wrap">
      <div class="image">
        <img src="../../static/images/index/bg.png" alt />
      </div>
    </div>

    <!-- 公司简介 -->
    <div class="introduct">
      深圳市因特信息技术有限公司是一家专注于小程序开发、推广、运营与服务为一体的互联网公司，
      拥有150多名专业的技术开发服务人员，致力于为实体企业搭建线上线下相结合的营销平台，轻松转型
      互联网+。因特公司是集小程序开发、制作、服务、运营为一体，已开发出各行业功能小程序系统100余
      款，行业模块800多款。通过资源整合+网络裂变的联合推广方式，为商家提供各类的必须的营销软件系
      统，提升营销及管理效能。
    </div>

    <div class="gsname">因特信息</div>
    <div class="suxian"></div>

    <div class="xiwang">
      <div class="yj">
        <img src="../../static/images/index/xw1.png" alt class="image1" />
        <div class="title">
          <div>愿景</div>
          <div>做中国最大的软件服务商</div>
        </div>
      </div>
      <div class="sm">
        <img src="../../static/images/index/xw2.png" alt class="image1" />
        <div class="title">
          <div>使命</div>
          <div>助中国企业实现互联网+</div>
        </div>
      </div>
      <div class="js">
        <img src="../../static/images/index/xw1.png" alt class="image1" />
        <div class="title">
          <div>精神</div>
          <div>创新、严谨、高效、求精</div>
        </div>
      </div>
    </div>

  <div class="qywh">
    企业文化
  </div>
  <div class="hengxian">

  </div>
    <div class="introduct1">
      企业文化归根是一种人的文化，是一种意识，企业文化真心是一一人。因特信 息科技有限 公司以“客户满意、尊重个人、持续创求卓越”为企业核心价值观，与 因特信息科技有限 公司的“以人文本”彰。如何弘扬因特信息科技有限公司文化， 如何尽善尽美的做到以人 文本是要实现自我价值、提高个人修养，提高个人修养其 根本就是弘业精神。
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
  methods: {}
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
.introduct {
  font-size: 16px;
  width: 60%;
  margin: 100px auto;
  line-height: 30px;
  text-indent: 2em;
}
.introduct1 {
  font-size: 16px;
  width: 60%;
  margin: 30px auto;
  line-height: 30px;
  text-indent: 2em;
    margin-bottom: 50px;
}
.gsname {
  width: 50px;
  height: 70px;
  padding: 10px;
  border: 1px solid hsla(214, 97%, 44%, 1);
  margin: 80px auto 0;
  letter-spacing: 5px;
  line-height: 35px;
  font-size: 16px;
  text-align: center;
  color: hsla(214, 97%, 44%, 1);
  border-radius: 30px;
}

.suxian {
  height: 80px;
  width: 2px;
  background: hsla(214, 97%, 44%, 1);
  margin: 10px auto;
}

.xiwang {
  width: 100%;
  margin: 20px auto;
  background-color: hsla(0, 0%, 98%, 1);
  padding: 30px 0;
}
.yj {
  display: flex;
  margin-left: 550px;
}
.sm {
  display: flex;
  margin-left: 920px;
  margin-top: 30px;
}
.js {
  display: flex;
  margin-left: 700px;
  margin-top: 30px;
}
.image1 {
  width: 250px;
  height: 200px;
}
.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
}
.title div:nth-child(1) {
  font-size: 18px;
}
.title div:nth-child(2) {
  font-size: 18px;
  margin-top: 10px;
}
.qywh{
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-top: 60px;

}

.hengxian{
 height: 2px;
  width: 100px;
  background: hsla(214, 97%, 44%, 1);
  margin: 10px auto;
  margin-top: 20px;
}
</style>  
