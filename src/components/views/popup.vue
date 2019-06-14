<!--  -->
<template>
  <div class="popup">
    <div class="popupleft clearfix">
      <div class="header clearfix">
        <div>
          <img
            class="img"
            src="http://b-ssl.duitang.com/uploads/item/201707/04/20170704214253_NiavZ.jpeg"
            alt
          >
          <p class="p">请登录</p>
          <div class="headerleft" @touchstart='shoucangbtn'>
            <span class="iconfont icon-shoucang1" ></span>我的收藏
          </div>
          <div class="headerright">
            <span class="iconfont icon-xiazai1"></span>离线下载
          </div>
        </div>
      </div>
      <div class="conter">
        <div class="conterbox" @click="abc">
          <span class="iconfont icon-shouye"></span>首页
        </div>
      </div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    abc() {
      this.$parent.change()
    },
    shoucangbtn(){
      this.$router.push('/shoucang')
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
.popup {
  width: 100vw;
  height: 100%;
  position: relative;
}
.popup {
  background: rgba(0, 0, 0, 0.3);
  width: 100vw;
  z-index: 100000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
}
.popupleft {
  width: 80vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000001;
  background: #fff;
}
.header {
  width: 100%;
  height: 2.5rem;
  background: #00a2ed;
  position: relative;
}
.conter {
  width: 100%;
  height: 1rem;
  background: #f0f0f0;
  position: relative;
}
.bottom {
  flex: 1;
}
.img {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: block;
  position: absolute;
  left: 0.4rem;
  top: 0.3rem;
}
.p {
  font-size: 0.35rem;
  color: #fff;
  position: absolute;
  top: 0.5rem;
  left: 1.5rem;
  display: block;
}
.headerleft {
  width: 50%;
  height: 1rem;
  position: absolute;
  left: 0;
  bottom: 0;
  text-align: center;
  line-height: 1rem;
  font-size: 0.35rem;
  color: #fff;
}
.headerright {
  width: 50%;
  height: 1rem;
  position: absolute;
  right: 0;
  bottom: 0;
  text-align: center;
  line-height: 1rem;
  font-size: 0.35rem;
  color: #fff;
}
.icon-shoucang1,
.icon-xiazai1,
.icon-shouye {
  margin-right: 0.2rem;
  font-size: 0.35rem;
}
.conterbox {
  position: absolute;
  left: 0.3rem;
  top: 0.3rem;
  font-size: 0.35rem;
  color: #00a2ed;
}
.icon-shouye {
  font-size: 0.45rem;
}
</style>