<template>
  <div class="main">
    <el-card>
      <div class="top">
        <el-button class="btn" type="primary" size="large">开始创作</el-button>
      </div>
    </el-card>
    <!-- <el-card> -->
    <div class="content" @click="toDesignUi($event)">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content ep-bg-purple right">
            <img class="cover" src="../assets/images/b.png" alt="">
            <span class="mask">人物</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content ep-bg-purple">
            <img class="cover" src="../assets/images/b.png" alt="">
            <span class="mask">换装</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content ep-bg-purple left">
            <img class="cover" src="../assets/images/b.png" alt="">
            <span class="mask">装饰</span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-top:40px;">
        <el-col :span="8">
          <div class="grid-content ep-bg-purple right">
            <img class="cover" src="../assets/images/b.png" alt="">
            <span class="mask">风景</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content ep-bg-purple">
            <img class="cover" src="../assets/images/b.png" alt="">
            <span class="mask">建筑</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content ep-bg-purple left">
            <img class="cover" src="../assets/images/b.png" alt="">
            <span class="mask">3D</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- </el-card> -->
    <el-card>
      <div class="other">
        <ul>
          <li class="other_list">
            <el-row :gutter="20" style="margin-top:40px;">
              <el-col :span="4">
                <div class="content_left">
                  <img src="../assets/images/b.png" alt="">
                </div>
              </el-col>
              <el-col :span="20" style="width:100%">
                <div class="content_right">
                  <div class="title">
                    <span>AI绘画</span>
                    <span>stable deffision webUI</span>
                    <span> | </span>
                    <span>视频风格转换</span>
                  </div>
                  <div class="other_content">Stable Diffusion WebUl + ControlNet
                    视频转动画技术，我更喜欢称之为视频风格化，也就是将指定视频转换成另外一种风格。关于此技术其实本站之前就有所进解过，只不过那只是最.</div>
                  <div class="details">
                    <span class="time">2周前</span>
                    <span class="common m_l">4</span>
                    <span class="agree m_l">3</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </li>
        </ul>
      </div>
    </el-card>
    <el-card>
      <div class="bottom"></div>
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, onBeforeUnmount, reactive, ref, nextTick } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const toDesignUi = (e: { target: { innerHTML: any; }; })=>{
  const key = 'null'
  router.push({path:`/viewdesign/${key}`})
}
</script>

<style scoped lang="less">
.top {
  height: 500px;
  width: 100%;
  background: url('../assets/images/b.png') no-repeat center;

  .btn {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}

.content {
  margin-top: -60px;
}

.grid-content:hover>.mask {
  display: block;
}

.grid-content {
  margin: 0 auto;
  width: 260px;
  height: 195px;
  text-align: center;

  .mask {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 260px;
    height: 195px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    text-align: center;
    font-size: 20px;
    line-height: 195px;
    border-radius: 10px;
  }

  .cover {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
}

.content_left {
  display: inline-block;
  width: 200px;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
  }
}
.other_list{
  :deep(.el-row){
    margin-top:0 !important;
  }
  width:100%;
  height:150px;
}
.content_left {
  img{
    border-radius: 8px;
  }
}
.other_content{
  margin-top:20px;
  line-height:30px;
}
.content_right{
  height:100%;
  .title{
    span{
      font-weight: 700;
    }
  }
  .details{
    position: absolute;
    right:0;
    bottom: 0;
    font-size:12px;
    .m_l{
      margin-left:30px;
    }
  }
}

.left {
  margin-left: 0px !important;
}

.right {
  margin-right: 0px !important;
}
</style>
