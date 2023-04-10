<template>
  <el-row class="bg-indigo-500 min-h-screen">
    <el-col :span="16" class="flex items-center justify-center">
      <div>
        <div class="text-light-50 font-bold text-xl">欢迎光临</div>
        <div class="text-light-900 leading-10 text-center">
          《vite+vue3》实战项目演练
        </div>
      </div>
    </el-col>
    <el-col
      :span="8"
      class="bg-light-50 flex items-center justify-center flex-col"
    >
      <div class="text-dark-900 font-bold text-3xl">欢迎回来</div>
      <div class="flex my-5 justify-center items-center space-y-2">
        <span class="h-[1px] w-16 bg-light-900"></span>
        <span class="text-light-900 leading-10 text-center">账号密码登录</span>
        <span class="h-[1px] w-16 bg-light-900"></span>
      </div>
      <el-form
        ref="ruleFormRef"
        :rules="rules"
        :model="ruleForm"
        class="w-[250px] flex flex-col"
      >
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button
            class="w-[250px]"
            color="#626aef"
            round
            @click="onSubmit(ruleFormRef)"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  username: '',
  password: ''
})

const rules = reactive<FormRules>({
  username: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

// do not use same name with ref
const form = reactive({
  username: '',
  password: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style></style>
