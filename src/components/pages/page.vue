<!--  -->
<template>
  <div class="page">
    <mt-header class="nev" :title='pingluntiaoshu.comments+"条点评"'>
      <div slot="left" @touchstart='$router.go(-1)'>
        <!-- 返回 -->
        <mt-button class="iconfont icon-fanhui iconleft"></mt-button>
        <mt-button @touchstart="handleClose"></mt-button>
      </div>
      <mt-button class="iconfont icon-fanhui iconleft"></mt-button>

      <!-- 分享 -->
      <mt-button class="iconfont icon-pinglun iconleft" slot="right"></mt-button>
    </mt-header>
    <!-- 长评论 -->
    <div class="changpin">
      <span>{{this.pingluntiaoshu.long_comments}}</span>条长评
    </div>
    <v-pinglun class="pinglun"></v-pinglun>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import API from "../../common/js/API";
//引入长评论组件
import vPinglun from "../views/pinglun";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    vPinglun,
  },
  data() {
    //这里存放数据
    return {
      pingluntiaoshu: ""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleClose() {}
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    var id = this.$route.params.id;
    // 评论条数
    this.$http({
      url: API.extra + id
    }).then(e => {
      this.pingluntiaoshu = e.data;
    });
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
.page {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.nev {
  height: 1.1rem;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 0.4rem;
}
.iconfont {
  font-size: 0.4rem;
  height: 1.1rem;
  line-height: 1.1rem;
}
.changpin {
  /* width: 100vw; */
  height: 1rem;
  position: absolute;
  top: 1.1rem;
  left: 0.3rem;
  line-height: 1rem;
}
.icon-pinglun {
  margin-left: 2.3rem;
}
.pinglun {
  position: absolute;
  top: 2.2rem;
  width: 100vw;
}
</style>