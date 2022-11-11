<template>
  <div class="board">
    <div class="left-board">
      <Dashboard :templateJson="templateJson" @setForm="setForm" />
    </div>
    <div class="right-board" v-if="type === 'edit'">
      <Tabs :templateJson="templateJson" :form="form" @setTemplateJson="setTemplateJson"/>
    </div>
  </div>
</template>

<script>
import Dashboard from "./Dashboard";
import Tabs from "./Tabs";
import { getQueryObject } from "../../utils/index";
import { screenQuery, saveEditorData, login, getVFCode } from "../../api/bi-saas";
export default {
  name: "tablePageModel",
  components: {
    Dashboard,
    Tabs,
  },
  created() {
    this.login()
    // 获取地址栏参数
    const queryObj = getQueryObject();
    this.type = queryObj.type;
    this.screenId = queryObj.screenId;
  },
  data() {
    return {
      type: "", // 编辑类型
      screenId: "", // 屏幕id
      templateJson: {}, // json模板
      form: {}, // 搜索条件
      loginForm: {
          loginType: 0,
          phone: 13546455488,
          vfCode: '',
          tenantId: 58977641, // 尧文峰租户
          // tenantId: 159682624, // 白云机场综保区南区
          token: ''
      },
    };
  },
  methods: {
    login() {
      // 验证码开发环境测试环境
      getVFCode({
          phone: this.loginForm.phone
      }).then(res => {
          if (res.code === 200) {
              console.log(res, 'res')
              this.loginForm.token = res.data.token
              this.loginForm.vfCode = res.data.vfCode
              login(this.loginForm).then(res => {
                if (res.code === 200) {
                    sessionStorage.setItem('slicerToken', res.data.token)
                    this.getTemplateJson();
                }
              })
          }
      })
    },
    getTemplateJson() {
      screenQuery({ screenId: this.screenId }).then((res) => {
        if (res.code === 200) {
          const content = JSON.parse(res.data.content);
          this.templateJson = content;
          console.log(this.templateJson, "getTemplate");
        }
      });
    },
    setTemplateJson(val) {
      saveEditorData({
        screenId: this.screenId,
        content: JSON.stringify(val),
      }).then((res) => {
        if (res.code === 200) {
          this.templateJson = val
          console.log(this.templateJson, 'setTemplate')
        }
      });
    },
    setForm(val) {
      this.form = val
    },
  },
};
</script>

<style lang="less" scoped>
.board {
  height: 100%;
  display: flex;
  .left-board {
    width: 100%;
  }
  .right-board {
    width: 500px;
    border-left: 1px solid #ccc;
    padding-left: 10px;
  }
}
</style>