<!--  -->
<template>
  <div class="details">
    <mt-header class="nev">
      <router-link to="/" slot="left">
        <!-- 返回 -->
        <mt-button class="iconfont icon-fanhui iconleft"></mt-button>
        <mt-button @touchstart="handleClose"></mt-button>
      </router-link>
      <!-- 分享 -->
      <mt-button class="iconfont icon-fenxiang3 iconleft" slot="right"></mt-button>
      <!-- 收藏 -->
      <mt-button class="iconfont icon-shoucang1 iconright" slot="right" @click="shoucang"></mt-button>
      <!-- 评论 -->
      <mt-button class="iconfont icon-comment iconright" slot="right" @click="pagebtn">
        <span class="span">{{newdetails.comments}}</span>
      </mt-button>
      <!-- 点赞 -->
      <mt-button class="iconfont icon-dianzan iconright" slot="right">
        <span class="span">{{newdetails.popularity}}</span>
      </mt-button>
    </mt-header>
    <div v-html="htmlval"></div>
    <div class="top">
      <img :src="beijing" alt class="img">
      <p class="p">{{title}}</p>
      <i class="i"></i>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
//空数组
import ARR from "../../common/js/shoucang";
//路由
import API from "../../common/js/API";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      htmlval: "",
      newdetails: "",
      page: "",
      beijing: "",
      title:''
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleClose() {},
    pagebtn() {
      this.$router.push("/page/" + this.page);
    },
    shoucang() {
      if (ARR.ARR.indexOf(this.page) == -1) {
        document.querySelector(".icon-shoucang1").style.color = "yellow";
        ARR.ARR.push(this.page);
      } else {
        document.querySelector(".icon-shoucang1").style.color = "#fff";
        var a = ARR.ARR.indexOf(this.page);
        ARR.ARR.splice(a, 1);
      }

      console.log(ARR.ARR);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    var id = this.$route.params.id;
    //新闻详情内容
    this.$http({
      url: API.details + id
    })
      .then(e => {
        this.htmlval = e.data.body;
        var link = document.createElement("link");
        link.href = e.data.css[0];
        link.rel = "stylesheet";
        document.head.appendChild(link);
        this.page = e.data.id;
        this.beijing = e.data.image;
        this.title = e.data.title;
      })
      .then(e => {
        if (ARR.ARR.indexOf(this.page) !== -1) {
          document.querySelector(".icon-shoucang1").style.color = "yellow";
        }
      });
    //新闻额外信息
    this.$http({
      url: API.extra + id
    }).then(e => {
      // console.log(e.data)
      this.newdetails = e.data;
    });

    //  console.log(e.data.id)
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
html,
body,
details {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.nev {
  width: 100%;
  height: 1.1rem;
  font-size: 0.35rem;
  z-index: 1000000;
}
.iconfont {
  width: 1.2rem;
  font-size: 0.4rem;
}
.icon-fanhui {
  height: 1.3rem;
  line-height: 1.3rem;
}
.span {
  font-size: 0.3rem;
}
.top {
  width: 100vw;
  height: 3.5rem;
  position: absolute;
  top: 1.1rem;
  left: 0;
}
.img {
  width: 100%;
  height: 100%;
}
.p {
  position: absolute;
  top: 2rem;
  left: 0;
  font-size: 0.35rem;
  color: #fff;
  padding: 0 0.4rem;
}
.i{
  width: 100%;
  height: 0.2rem;
  background: red;
}
</style>