<template>
  <div class="a">
    <div id="pdfContainerRef"></div>
  </div>
</template>

<script setup lang='ts' name="pdf">
import { onMounted, onBeforeUnmount, reactive, ref, nextTick } from 'vue'
import url from "@/static/test3.pdf";
import * as PDFJS from 'pdfjs-dist';
if (!PDFJS.GlobalWorkerOptions.workerSrc) {
  // 此处的 pdf work 文件放置到了 根目录/public/js/pdfjs 下
  PDFJS.GlobalWorkerOptions.workerSrc = 'js/pdfjs/pdf.worker.js';
}

// 此loading变量用来判断页面加载动画的显隐
// 如不需要可以不定义，下面的方法中也可以注释掉该loading变量的变更
const loading = ref(false);
const handleInitPdf = () => {
  nextTick(() => {
    // 初始化在线预览pdf
    PDFJS.getDocument(url).promise.then((pdfDoc_: { numPages: number; getPage: (arg0: number) => Promise<any>; }) => {
      for (let i = 1; i <= pdfDoc_.numPages; i++) {
        // Using promise to fetch the page
        pdfDoc_.getPage(i).then((page: { getViewport: (arg0: { scale: number; }) => any; render: (arg0: { canvasContext: CanvasRenderingContext2D | null; viewport: any; }) => any; }) => {
          // 用来计算页面宽度以变更缩放比例
          var desiredWidth = document.body.clientWidth || document.body.offsetWidth || document.body.scrollWidth;
          var viewport = page.getViewport({ scale: 1 });
          var scaledViewport = page.getViewport({ scale: desiredWidth / viewport.width });
          // 创建canvas元素并绘制内容
          const canvas = document.createElement('canvas');
          canvas.setAttribute('id', `canvasId${i}`);
          const context = canvas.getContext('2d');
          canvas.height = scaledViewport.height;
          // canvas.height = 300;
          canvas.width = scaledViewport.width;
          // canvas.width = 100;
          // 在canvas画布上绘制pdf
          const renderContext = {
            canvasContext: context,
            viewport: scaledViewport,
          };
          const renderTask = page.render(renderContext);

          document.getElementById('pdfContainerRef').appendChild(canvas);
          // 渲染完成执行
          renderTask.promise.then(() => {
            loading.value = false;
          });
        });
      }
    });
  });
};
onMounted(() => {
  handleInitPdf()
})
</script>

<style scoped lang="less"></style>

<style scoped lang="less"></style>
