<!--  -->
<template>
  <div class="shoucang">
    <mt-header :title="arr.length
    +'条收藏'" class="nev">
      <div slot="left" @touchstart='$router.go(-1)'>
        <mt-button class="iconfont icon-daohang"></mt-button>
        <mt-button @touchstart="handleClose"></mt-button>
      </div>
    </mt-header>
    <div class="news">
      <div class="newsbox clearfix" v-for="item in arr" :key="item.id">
        <h5 class="newsh5" @touchend="newsdetails(item.id)">{{item.title}}</h5>
        <img :src="item.images[0]" alt class="newsimg">
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ARR from "../../common/js/shoucang";
import API from "../../common/js/API";

export default {
  //import引入的组件需要注入到对象中才能使用

  components: {},
  data() {
    //这里存放数据
    return {
      arr: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleClose() {},
    newsdetails(id) {
      this.$router.push("/details/" + id);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    for (var i = 0; i < ARR.ARR.length; i++) {
      var id = ARR.ARR[i];
      console.log(id);
      this.$http({
        url: API.xinwen + id
      }).then(e => {
        this.arr.push(e.data);
        console.log(e);
      });
    }
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
.shoucang {
  width: 100vw;
  height: 100vh;
  background: #f3f3f3;
}
.nev {
  width: 100vw;
  height: 1.1rem;
  font-size: 0.4rem;
  line-height: 0.4rem;
}
.icon-daohang {
  height: 100%;
  line-height: 1.1rem;
}
/* 新闻页面 */
.news {
  width: 100vw;
  background: #f3f3f3;
  /* padding: 0 0.2rem; */
}
/* 单个新闻框 */
.newsbox {
  background: #ffffff;
  width: 94vw;
  border: 1px solid #ccc;
  margin: 0.1rem auto;
  border-radius: 0.1rem;
  height: 1.8rem;
}
/* 单个新闻图片 */
.newsimg {
  width: 1.6rem;
  height: 1.4rem;
  display: block;
  float: right;
  margin: 0.2rem;
}
/* 单个新闻标题 */
.newsh5 {
  font-size: 0.3rem;
  /* color: #777777;点过之后 */
  color: #000;
  float: left;
  width: 60vw;
  margin: 0.2rem;
  line-height: 0.5rem;
}
/* 新闻标题 */
.newsh3 {
  font-size: 0.2rem;
  width: 94vw;
  margin: 0.3rem auto;
  line-height: 0.6rem;
  color: #6f6f6f;
  background: #f3f3f3;
}
</style>