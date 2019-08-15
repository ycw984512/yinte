<template>
  <div>
    <!-- 顶部大图 -->
    <div class="wrap">
      <div class="image">
        <img src="../../static/images/index/bg.png" alt />
      </div>
    </div>

    <div class="dsj">大事记</div>

    <div class="suxian">
      <div class="yuan1"></div>
      <div class="yuan2"></div>
      <div class="yuan3"></div>
      <div class="yuan4"></div>
      <div class="yuan5"></div>

      <div class="time1">2019</div>
      <div class="time2">2018</div>
      <div class="time3">2017</div>

      <div class="title1">
        <div class="title_time">2019.02.12</div>
        <div class="title_con">
          正月初八，新年的第一个工作日，新的朝气，新的开始，
          书写新的篇章。
        </div>
      </div>
      <div class="title2">
        <div class="title_time">2019.02.01</div>
        <div class="title_con">
          新年的倒数第四天，举办了公司年会，庆祝2019新年的
          到来，新年快乐！
        </div>
      </div>
      <div class="title3">
        <div class="title_time">2018.11.16</div>
        <div class="title_con">
          正月初八，新年的第一个工作日，新的朝气，新的开始，
          书写新的篇章。
        </div>
      </div>
      <div class="title4">
        <div class="title_time">2018.06.12</div>
        <div class="title_con">
          新年的倒数第四天，举办了公司年会，庆祝2019新年的
          到来，新年快乐！
        </div>
      </div>
      <div class="title5">
        <div class="title_time">2017.12.13</div>
        <div class="title_con">公司成立，在赣州开发区华坚双创园内。</div>
      </div>
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

.suxian {
  height: 800px;
  width: 3px;
  background: hsla(0, 0%, 89%, 1);
  margin: 20px auto;
  position: relative;
}

.yuan1,
.yuan2,
.yuan3,
.yuan4,
.yuan5 {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: hsla(358, 92%, 68%, 0.6);
  position: absolute;
  left: -6px;
}

.time1,
.time2,
.time3 {
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: hsla(214, 97%, 44%, 1);
  border: 1px solid #eee;
  border-radius: 50%;
  font-size: 20px;
  left: -30px;
  position: absolute;
  background: #fff;
}

.yuan1 {
  top: 120px;
}
.yuan2 {
  top: 200px;
}
.yuan3 {
  top: 370px;
}
.yuan4 {
  top: 460px;
}
.yuan5 {
  top: 680px;
}
.time1 {
  top: 20px;
}
.time2 {
  top: 270px;
}
.time3 {
  top: 550px;
}

.title1,
.title2,
.title3,
.title4,
.title5 {
  width: 300px;
  height: 50px;
  position: absolute;
}
.title2 .title_time,
.title4.title_time {
  text-align: right;
}
.title_time {
  font-size: 16px;
}

.title_con {
  font-size: 12px;
  margin-top: 5px;
  line-height: 20px;
}

.title1 {
  left: 30px;
  top: 120px;
}
.title2 {
  top: 200px;
  left: -320px;
}
.title3 {
  top: 370px;
  left: 30px;
}
.title4 {
  top: 460px;
  left: -320px;
}
.title5 {
  top: 680px;
  left: 30px;
}

.dsj {
  width: 10px;
  height: 100px;
  border: 1px solid hsla(214, 80%, 56%, 1);
  padding-left: 20px;
  padding-right: 20px;
  margin: 20px auto;
  line-height: 30px;
  font-size: 16px;
font-weight: 700;
  color: hsla(214, 97%, 44%, 1);
}
</style>  
