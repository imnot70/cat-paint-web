<template>
    <div class="">
        <el-row>
            <el-col :span="12">
                <div class="left">left</div>
            </el-col>
            <el-col :span="12">
                <div class="right">right</div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, onBeforeUnmount, reactive, ref, nextTick } from 'vue'

</script>

<style scoped lang="less"></style>
