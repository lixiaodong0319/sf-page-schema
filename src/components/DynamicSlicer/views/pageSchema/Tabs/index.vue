<template>
  <div class="tabs">
    <el-tabs v-model="activeName">
      <el-tab-pane label="组件属性" name="first">
        <PageConfig :templateJson="templateJson" @setTemplateJson="setTemplateJson"/>
      </el-tab-pane>
      <el-tab-pane label="数据源" name="second">
        <DataSource :templateJson="templateJson" :form="form" @setTemplateJson="setTemplateJson"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import PageConfig from "./PageConfig";
import DataSource from "./DataSource";
export default {
  name: "tabsIndex",
  components: {
    PageConfig,
    DataSource,
  },
  props: {
    templateJson: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    setTemplateJson(val) {
      this.$emit('setTemplateJson', val)
    },
  }
};
</script>

<style lang="less" scoped>
  .tabs {
    height: 100%;
    .el-tabs {
      height: 100%;
      /deep/ .el-tabs__content {
        height: calc(100% - 40px);
        overflow: scroll;
      }
      /deep/ .el-tabs__header {
        margin: 0;
      }
    }
  }
</style>