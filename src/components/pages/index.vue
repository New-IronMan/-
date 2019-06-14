<!--  -->
<template>
  <div class="index">
    <!-- 头部导航栏 -->
    <mt-header :title="tit" class="nev">
      <div slot="left" @touchstart="$router.push('/popup')">
        <mt-button class="iconfont icon-daohang" @click="abc=!abc"></mt-button>
        <mt-button @touchstart="handleClose"></mt-button>
      </div>
      <mt-button class="iconfont icon-xiaoxitongzhitixinglingshenglingdang iconleft" slot="right"></mt-button>
      <mt-button class="iconfont icon-gengduo iconright" slot="right"></mt-button>
    </mt-header>
    <!-- 轮播图 -->
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" class="swiper">
      <!-- slides -->
      <swiper-slide v-for="item in arr1" :key="item.id">
        <img :src="item.image" alt class="swiperimg">
        <div class="bottom"></div>
        <p class="swiper-title">{{item.title}}</p>
        <div class="swiper-pagination fy"></div>
      </swiper-slide>
      <!-- <swiper-slide>I'm Slide 2</swiper-slide> -->
      <!-- Optional controls -->
    </swiper>
    <!-- <v-news v-on:newtit="newtit($event)"></v-news> -->
    <v-news></v-news>
    <v-popup v-show="abc"></v-popup>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import API from "../../common/js/API";
import vPopup from "../views/popup";
//引入轮播图
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import vNews from "../pages/news";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    swiper,
    swiperSlide,
    vNews,
    vPopup
  },
  data() {
    //这里存放数据
    return {
      abc: false,
      str: "1",
      arr1: [],
      arr2: [],
      tit: "首页",
      swiperOption: {
        effect: "fade",
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          loop: true
        }
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleClose() {},
    callback() {},
    change(e) {
      this.abc = !this.abc;
      // console.log(e)
    }
    // newtit(e) {
    //   this.tit = e[e.length - 2].date;
    // }
  },
  mounted() {
  },
  destroyed() {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.$http({
      url: API.index
    }).then(e => {
      //轮播图片
      this.arr1 = e.data.top_stories;
      // console.log(this.arr1);
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    var that = this;
    window.onscroll = function() {
      var wh =
        document.documentElement.clientHeight || document.body.clientHeight; //窗口的高度
      var st = document.documentElement.scrollTop || document.body.scrollTop; //上卷的距离

      var dh =
        document.documentElement.offsetHeight || document.body.offsetHeight; //文档的高度

      // 改变顶部
      if (st < 258) {
        that.tit = "首页";
      } else {
        var times = document.querySelectorAll(".newsh3");
        for (var i = 0; i < times.length; i++) {
          if (times[i].getBoundingClientRect().top + st < st + wh) {
            that.tit = times[i].innerHTML;
          }
        }
      }
    };
  },
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
.index {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: #f3f3f3;
}
/* 顶部导航样式 */
.nev {
  height: 1.1rem;
  font-size: 0.35rem;
  background: #00a2ed;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  float: left;
}
/* 图标样式 */
.iconfont {
  font-size: 0.45rem;
}
.iconleft {
  margin-right: 0.4rem;
  margin-left: 1rem;
}
.icon-daohang {
  margin-bottom: 0.2rem;
  margin-left: 0.2rem;
}
/* 轮播图片样式 */
.swiperimg {
  width: 100%;
  height: 100%;
}
.swiper {
  height: 4.5rem;
  width: 100vw;
  position: relative;
}
.fy {
  position: absolute;
  left: 3rem;
  bottom: 0.1rem;
}
.swiper-title {
  position: absolute;
  bottom: 0.4rem;
  font-size: 0.4rem;
  color: #fff;
  padding: 0 0.3rem;
  z-index: 101;
}
.bottom {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
}
</style>