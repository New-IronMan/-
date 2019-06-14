<!--  -->
<template>
  <div @touchstart="handleScroll" class="nwes-top">
    <div class="news">
      <h3 class="newsh3">今日新闻</h3>
      <div class="newsbox clearfix" v-for="item in arr" :key="item.id">
        <h5 class="newsh5" @touchend="newsdetails(item.id)">{{item.title}}</h5>
        <img :src="item.images[0]" alt class="newsimg">
      </div>
    </div>
    <div class="news" v-for="(item,index) in arr1" :key="index">
      <h3 class="newsh3">{{item.date}}</h3>
      <div class="newsbox clearfix" v-for="a in item.tit" :key="a.id">
        <h5 class="newsh5" @touchend="newsdetails(a.id)">{{a.title}}</h5>
        <img :src="a.images[0]" alt class="newsimg">
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ARR from '../../common/js/shoucang'
import API from "../../common/js/API";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      arr: [],
      str: "",
      arr1: [
        {
          date: ""
        }
      ],
      news: new Date().valueOf(),
      abc: 24 * 60 * 60 * 1000
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    
    //////////////////////////////////////////////////////////
    newsdetails(id) {
      this.$router.push("/details/" + id);
        document.querySelector(".icon-shoucang1").style.color = "yellow";
    },
    //////////////////////////////////////////////////////
    handleScroll() {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动条到底部的条件
      if (scrollTop + windowHeight >= scrollHeight) {
        // console.log(this.str);
        this.news = this.news - this.abc;
        var date = new Date(this.news);
        var c = date.getFullYear();
        var a =
          date.getMonth() + 1 > 9
            ? date.getMonth() + 1
            : "0" + (date.getMonth() + 1);
        var b = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
        var db = c + a + b;
        var dbdate = c + "年" + a + "月" + b + "日";
        this.$http({
          url: API.pastnews + db
        }).then(e => {
          this.arr1.push({
            name: this.str,
            tit: e.data.stories,
            date: dbdate
          });
          this.$emit("newtit", this.arr1);
        });
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.$http({
      url: API.index
    }).then(e => {
      //轮播图片
      this.arr = e.data.stories;
      this.str = e.data.date;
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
.nwes-top {
  background: #f3f3f3;
}
</style>