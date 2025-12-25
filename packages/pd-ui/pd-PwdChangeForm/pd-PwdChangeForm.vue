<script lang="ts">
export default {
  name: "pd-PwdChangeForm",
};
</script>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { FormInstance } from "element-plus";
import { reactive, ref, watch } from "vue";
import axios from "axios";
import { useLocale } from "../../hooks/useLocale";

const { t } = useLocale();

/**
 * 接收传过来的值
 *
 * @param visible 是否显示
 * @param requestConfig 请求配置
 */
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  requestConfig: {
    type: Object as () => {
      url: string;
      method: string;
      headers: Record<string, string>;
      data: {
        identifier: string;
      };
      timeout: number;
    },
    required: true,
    // default: () => ({
    //   url: "", // 默认URL
    //   method: "POST",
    //   headers: {},
    //   // 可以添加其他axios配置项，如timeout
    //   timeout: 1000,
    // }),
  },
});

// 定义emit事件
const emit = defineEmits<{
  (e: "update:visible", value: boolean): void;
}>();

// 创建本地响应式变量用于双向绑定
const dialogVisible = ref(props.visible);

// 监听props变化，同步到本地变量
watch(
  () => props.visible,
  (newVal) => {
    dialogVisible.value = newVal;
  }
);

// 监听本地变量变化，触发emit
watch(dialogVisible, (newVal) => {
  emit("update:visible", newVal);
  if (!newVal) {
    // 重置表单
    form.old = "";
    form.new = "";
    form.confirm = "";
    // 重置表单验证状态
    formRef.value?.resetFields();
  }
});

const form = reactive({
  old: "",
  new: "",
  confirm: "",
});

const validateConfirmPassword = (rule: any, value: string, callback: any) => {
  if (value !== form.new) {
    callback(new Error(t("pwdChangeForm.confirmPwdError")));
  } else {
    callback();
  }
};

const rules = reactive({
  old: [
    {
      required: true,
      message: t("pwdChangeForm.oldPwdPlaceholder"),
      trigger: "blur",
    },
  ],
  new: [
    {
      required: true,
      message: t("pwdChangeForm.newPwdPlaceholder"),
      trigger: "blur",
    },
  ],
  confirm: [
    {
      required: true,
      message: t("pwdChangeForm.confirmPwdPlaceholder"),
      trigger: "blur",
    },
    { required: true, validator: validateConfirmPassword, trigger: "blur" },
  ],
});

const formRef = ref<FormInstance>();

const handleSubmit = async () => {
  formRef.value?.validate(async (valid) => {
    if (valid) {
      try {
        // 使用传入的配置发送请求
        const response = await axios({
          ...props.requestConfig,
          data: {
            identifier: props.requestConfig.data.identifier,
            oldPassword: form.old,
            newPassword: form.new,
          },
        });

        if (response.data.code === 200) {
          // 成功处理
          ElMessage.success(t("pwdChangeForm.pwdChangeSuccess"));
          dialogVisible.value = false;
        } else {
          // 错误处理
          ElMessage.error(
            response.data.msg || t("pwdChangeForm.pwdChangeError")
          );
        }
      } catch (error: any) {
        // 错误处理
        ElMessage.error(error.message || t("pwdChangeForm.pwdChangeError"));
      }
    }
  });
};
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    :title="t('pwdChangeForm.title')"
    width="500"
  >
    <el-form
      :model="form"
      :rules="rules"
      ref="formRef"
      :label-width="t('global.locales') === 'zh-cn' ? '100px' : '150px'"
      :label-position="'left'"
    >
      <el-form-item :label="t('pwdChangeForm.oldPwd')" prop="old">
        <el-input v-model="form.old" type="password" show-password />
      </el-form-item>
      <el-form-item :label="t('pwdChangeForm.newPwd')" prop="new">
        <el-input v-model="form.new" type="password" show-password />
      </el-form-item>
      <el-form-item :label="t('pwdChangeForm.confirmPwd')" prop="confirm">
        <el-input v-model="form.confirm" type="password" show-password />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="handleSubmit">
          {{ t("pwdChangeForm.submit") }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
