<template>
  <div class="score_container">
    <!-- 分数 -->
    <div class="your_scores_container">
      <header class="your_scores">
        <span class="score_num">{{ score }}</span>
        <span class="fenshu">分!</span>
      </header>
      <div class="result_tip">{{ scoreTips }}</div>
    </div>

    <div class="share_button" @click="showCover">再来一次</div>

    <div class="share_code">
      <header class="share_header">关注葡萄之家,获取答案.</header>
      <img src="/images/4-4.png" height="212" class="code_img" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      rightAnswer: [2, 6, 10, 14, 18], //正确答案
      scoreTipsArr: [
        "你说，是不是把知识都还给小学老师了？",
        "还不错，但还需要继续加油哦！",
        "不要嘚瑟还有进步的空间！",
        "智商离爆表只差一步了！",
        "你也太聪明啦，葡萄之家欢迎你！"
      ],
      score: 0,
      scoreTips: ""
    };
  },
  computed: { ...mapState(["anwserId"]) },
  created() {
    this.calc();
    this.getScoreTips();
  },
  methods: {
    calc() {
      this.anwserId.forEach((item, index) => {
        if (item == this.rightAnswer[index]) {
          this.score += 20;
        }
      });
    },
    getScoreTips() {
      if (this.score <= 20) {
        this.scoreTips = this.scoreTipsArr[0];
        return;
      }
      if (this.score <= 40) {
        this.scoreTips = this.scoreTipsArr[1];
        return;
      }
      if (this.score <= 60) {
        this.scoreTips = this.scoreTipsArr[2];
        return;
      }
      if (this.score <= 80) {
        this.scoreTips = this.scoreTipsArr[3];
        return;
      }
      if (this.score <= 100) {
        this.scoreTips = this.scoreTipsArr[4];
        return;
      }
    },
    showCover() {
      this.$router.push("/");
      this.$store.commit("again");
    }
  }
};
</script>

<style lang="scss" scoped>
.score_container {
  height: 100%;
  background-image: url("/images/4-1.jpg");
}
.your_scores_container {
  width: 9.7rem;
  height: 9.1rem;
  background: url("/images/4-2.png") no-repeat;
  background-size: 100% 100%;
  margin: 0 auto 0;
  position: relative;
  .your_scores {
    position: absolute;
    width: 100%;
    text-indent: 3.3rem;
    top: 4.7rem;
    font-size: 1.4rem;
    font-weight: 900;
    -webkit-text-stroke: 0.05rem #412318;
    font-family: "Microsoft YaHei";
    .score_num {
      font-family: Tahoma, Helvetica, Arial;
      color: #a51d31;
    }
    .fenshu {
      color: #a51d31;
    }
  }
  .result_tip {
    position: absolute;
    top: 7rem;
    width: 9rem;
    left: 0.6rem;
    color: #3e2415;
    font-size: 0.65rem;
    text-align: center;
  }
}
.share_button {
  width: 6.025rem;
  height: 2.4rem;
  line-height: 2.4rem;
  margin: 0.8rem auto 0;
  text-align: center;
  font-size: 1rem;
  color: yellow;
  background-color: rgba(0, 0, 0, 0.5);
}
.share_code {
  width: 5.3rem;
  margin: 1.5rem auto 0;
  .share_header {
    color: #664718;
    font-size: 0.475rem;
    font-family: "Microsoft YaHei";
    width: 7rem;
    font-weight: 500;
  }
  .code_img {
    height: 5.3rem;
    width: 5.3rem;
    margin-top: 0.5rem;
  }
}
.share_cover {
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  background: url("/images/5-1.png") no-repeat;
  background-size: 100% 100%;
  opacity: 0.92;
}
.share_img {
  height: 10.975rem;
  width: 11.95rem;
  position: fixed;
  top: 0.5rem;
  left: 50%;
  margin-left: -5.975rem;
}
</style>
