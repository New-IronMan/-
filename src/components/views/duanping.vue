<!--  -->
<template>
  <div class="pinglun1">
    <div class="box" v-for="item in lol" :key="item.id" :v-if="length">
      <p class="p">
        <img :src="item.avatar" alt class="img">
        <strong class="user">{{item.author}}</strong>
        <span class="iconfont icon-dianzan">{{item.likes}}</span>
      </p>
      <p class="neirong">{{item.content}}</p>
      <p class="time">
        <!-- 评论时间 -->
        <span>{{item.time|format}}</span>
      </p>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import API from "../../common/js/API";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      lol: "",
      time: [],
      length: false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //短评论
    var id = this.$route.params.id;
    this.$http({
      url: API.min + id + "/short-comments"
    }).then(e => {
      for (var i in e.data.comments) {
        this.time.push(e.data.comments[i].time);
      }
      this.lol = e.data.comments;
    });
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
.box {
  padding: 0.3rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.img {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  display: block;
  overflow: hidden;
  float: left;
}
.p {
  width: 100%;
  height: 1rem;
}
.user {
  float: left;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  text-align: center;
  font-size: 0.25rem;
}
.icon-dianzan {
  float: right;
  font-size: 0.3rem;
  color: #ccc;
}
.neirong {
  padding-left: 0.5rem;
  font-size: 0.3rem;
  line-height: 0.4rem;
}
.time {
  padding-left: 0.5rem;
  padding-top: 0.3rem;
}
.time span {
  color: #ccc;
}
.shafa {
  width: 100%;
  height: 9.6rem;
  /* background: red; */
  /* position: absolute;
  top: 0;
  left: 0; */
  background-image: url("../../../static/img/1.jpg");
}
</style>