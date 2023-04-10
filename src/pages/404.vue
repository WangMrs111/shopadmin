<script setup></script>

<template>
  <el-col :sm="12" :lg="6">
    <el-result icon="warning" title="404页面" sub-title="你的页面走丢了">
      <template #extra>
        <el-button type="primary" @click="this.$router.push('/')"
          >返回主页</el-button
        >
      </template>
    </el-result>
  </el-col>
</template>

<style scoped></style>
