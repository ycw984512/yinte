
<!-- 手指划过自己让自己做动画的话直接用:hover就行，如果是需要让别人发生变化的话还是用一个变量
控制:class添加样式的方法去做，如果要过渡的话可以加transition。页面一打开有动画的话是用了
css3的animation -->
<template>
  <div id="app">
    <header id="navbar" :class="{ wtBg: wtOnFo }">
      <div class="wrap">
        <img src="../static/images/index/yinte.png" alt style="height:60px" />
        <div class="title_top">因特信息科技有限公司</div>
        <ul id="nav-box">
          <li
            class="nav-list"
            v-for="(item,index1) in navList"
            :key="index1"
            @mouseover="addClass(index1)"
            @mouseout="deleteClass(index1)"
          >
            <router-link
              :to="item.link + item.spec"
              class="nav-title"
              :class="{ wtColor: wtOnFo ,navActie: $route.path.includes(''+item.link+'')}"
            >
              {{ item.title }}
              <span class="line"></span>
            </router-link>

            <div style="display: flex;">
              <ul
                class="nav-menu "
                :class="{  showList: curIndex==index1, noBg: !item.menu.length }"
                v-for="(list,index) in item.menu"
                :key="index"
              > 
                <li class="menu-list" v-for="(sigle,index) in list" :key="index">
                  <span
                    v-if="item.menu.length>1&&index==0"
                    style="color:#999;font-size:16px;"
                  >{{ sigle.title }}</span>
                  <router-link
                    v-else
                    :to="item.link + sigle.aid"
                    class="redColor"
                    ref="detial"
                  >{{ sigle.title }}</router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <div class="search-box">
          <div class="btn">联系我们</div>
        </div>
      </div>

      <div class="nav-bg " :class="{ open: navClass }"></div>
    </header>

    <router-view></router-view>

    <div style="height:250px;margin-top:20px">
      <footer id="footer">
        <!--一层一层的写结构 先水平再垂直-->
        <div class="foot_wrap">
          <div class="foot1">
            <div class="title">解决方案</div>
            <ul>
              <li></li>
            </ul>
          </div>
          <div class="foot2">
            <div class="title">服务</div>
            <ul>
              <li>客户培训</li>
              <li>项目实施</li>
              <li>技术支持</li>
            </ul>
          </div>
          <div class="foot3">
            <div class="title">公司</div>
            <ul>
              <li>发展历史</li>
              <li>团队介绍</li>
              <li>客户群体</li>
              <li>办事处与销售电话</li>
            </ul>
          </div>
          <div class="foot3">
            <div class="title">人力资源专题</div>
            <ul>
              <li>人才招聘</li>
            </ul>
          </div>
        </div>
        <div class="foot_bot">
          <div>使用条款·隐私政策</div>
          <div>赣州因特信息技术公司 备案号 赣ICP备07023847号</div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      curIndex: 999,
      keywords: "",
      navList: [
        {
          title: "首页",
          link: "/home",
          menu: [],
          spec: ""
        },
        {
          title: "解决方案",
          link: "/Solve",
          menu: [
            [
              { title: "智慧城市" },
              { title: "智慧宗教", aid: "/wisdomReligion" },
              { title: "智慧食堂", aid: "/wisdomFood" },
              { title: "智慧停车场", aid: "/wisdomReligion" },
              { title: "智慧医疗", aid: "/wisdomReligion" },
              { title: "智慧校园", aid: "/wisdomReligion" }
            ],
            [
              { title: "金融服务" },
              { title: "银行平台优惠券", aid: "?list=2&type=1" },
              { title: "多场景收单业务", aid: "?list=2&type=2" },
              { title: "金融商城平台", aid: "?list=2&type=3" }
            ],
            [
              { title: "定制化服务" },
              { title: "餐饮行业", aid: "?list=3&type=1" },
              { title: "同城配送", aid: "?list=3&type=2" },
              { title: "创客平台", aid: "?list=3&type=3" },
              { title: "小程序平台", aid: "?list=3&type=4" }
            ]
          ],
          spec: ""
        },
        {
          title: "客户服务",
          link: "/Customer_service",
          menu: [
            [
              { title: "项目实施", aid: "?list=1&type=1" },
              { title: "客户培训", aid: "?list=1&type=2" },
              { title: "技术支持", aid: "?list=1&type=3" }
            ]
          ],
          spec: "?list=1&type=1"
        },
        {
          title: "客户支持",
          link: "/Customer_support",
          menu: [
            [
              { title: "项目实施", aid: "?list=1&type=1" },
              { title: "客户培训", aid: "?list=1&type=2" },
              { title: "技术支持", aid: "?list=1&type=3" }
            ]
          ],
          spec: "?list=1&type=1"
        },
        {
          title: "关于公司",
          link: "/CompanyIndex",
          menu: [
            [
              { title: "我们的愿景", aid: "/Company" },
              { title: "我们的团队", aid: "?list=1&type=2" },
              { title: "我们的历史", aid: "/history" },
              { title: "办事处与联系电话", aid: "?list=1&type=4" }
            ]
          ],
          spec: ""
        },
        {
          title: "人才招聘",
          link: "/Person_recruit",
          menu: [
            [
              { title: "招聘人才", aid: "?list=1&type=1" },
              { title: "人才管理", aid: "?list=1&type=2" }
            ]
          ],
          spec: "?list=1&type=1"
        }
      ],
      navClass: false,
      showClass: false,
      noBd: false,
      onFoo: true,
      wtOnFo: false,
      showMu: null
    };
  },
  methods: {
    search(key) {
      this.$router.push({ name: "search", query: { keywords: key } });
    },
    addClass(index) {
      this.navClass = true;
      this.curIndex = index;
    },
    deleteClass(index) {
      this.navClass = false;
      this.curIndex = 999;
    },
    showOtherLk() {
      if (this.onFoo) {
        this.$refs.otherLink.style.opacity = 1;
        this.onFoo = false;
      } else {
        this.$refs.otherLink.style.opacity = 0;
        this.onFoo = true;
      } 
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      /*console.log(scrollTop);*/
      if (scrollTop > 0) {
        this.wtOnFo = true;
      } else {
        this.wtOnFo = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
.redColor:hover {
  color: #db1010 !important;
}
</style>
<style>
@import "../static/css/reset.css";
</style>
<style scoped="true">
@import "../static/css/index.css";

.btn {
  width: 120px;
  height: 50px;
  background: #0362DF;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  font-size: 14px;
}
.title_top { 
  font-size: 26px;

  margin-right: 235px;
  color: #0362DF
}
.navActie {
  background: #0362DF;
  color: #fff;
}

/* .navActie {
  background: #fff;
  color: #0362DF;
  border-top: 1px solid #0362DF;
} */
</style>
