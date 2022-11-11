<template>
  <div class="dataSource" v-if="template && template.dataSource">
    <h5>数据源</h5>
    <el-form label-width="100px">
      <el-form-item label="数据类型">
        <el-select
          v-model="template.dataSource.type"
          placeholder="请选择"
          style="width: 100%"
        >
          <el-option label="数据库" value="1" />
          <el-option label="API" value="2" />
          <el-option label="表格文件" value="3" />
        </el-select>
      </el-form-item>
      <el-form-item label="数据库" v-if="template.dataSource.type === '1'">
        <el-select
          v-model="template.dataSource.dataBaseId"
          placeholder="请选择"
          style="width: 100%"
          @change="handleDataBaseChange"
        >
          <el-option
            v-for="(item, index) in dataBaseList"
            :key="index"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="SQL" v-if="template.dataSource.type === '1'">
        <el-input type="textarea" :rows="10" v-model="template.dataSource.sql"></el-input>
      </el-form-item>
      <el-form-item label="" v-if="template.dataSource.type === '1'">
        <el-button type="primary" @click="handleViewData">查看数据</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      title="返回数据"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose">
      <el-input type="textarea" :rows="15" v-model="tableData"></el-input>
    </el-dialog>
  </div>
</template>

<script>
import { getQueryObject } from "../../../../utils/index";
import { getCnnList, createDataSource, queryData } from "../../../../api/bi-saas";
export default {
  name: "dataSource",
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
      screenId: '',
      activeNames: [],
      dataBaseList: [],
      tableData: [], // 返回table结果
      dialogVisible: false,
    };
  },
  computed: {
    template() {
      return this.templateJson
    }
  },
  watch: {
    template: {
      handler(val) {
        this.$emit('setTemplateJson', val)
      },
      deep: true,
    },
  },
  created() {
    // 获取地址栏参数
    const queryObj = getQueryObject();
    this.screenId = queryObj.screenId;
    this.getDataBaseList();
  },
  methods: {
    // 获取数据库列表
    getDataBaseList() {
      getCnnList({
        projectId: 1,
        dbType: "all",
      }).then((res) => {
        if (res.code === 200) {
          this.dataBaseList = res.data;
        }
      });
    },
    // 关闭弹窗
    handleClose() {
      this.dialogVisible = false
    },
    // 查看数据
    handleViewData() {
      this.dialogVisible = true
      const { ip, dbName, password, port, name, dbType, username } = this.template.dataSource.dataBase
        // sql语句替换
      let newSql = this.template.dataSource.sql
      Object.keys(this.form).forEach(item => {
        newSql = newSql.replace('${' + item + '}', JSON.stringify(this.form[item]))
      })
      const params = {
        type: 0, // ?
        screenId: this.screenId,
        componentId: 1,
        databaseSql: newSql, // 替换后的sql
        dbIp: ip,
        dbName: dbName,
        dbPassword: password,
        dbPort: port,
        dbTitle: name,
        dbType: dbType,
        dbUsername: username,
      }
      createDataSource(params).then(res => {
        if (res.code === 200) {
          // 请求table数据
          queryData({
            componentId: 1,
            screenId: this.screenId
          }).then(res => {
            if (res.code === 200) {
              this.tableData = JSON.stringify(res.data)
            }
          })
        }
      })
    },
    // 数据库切换
    handleDataBaseChange(id) {
      this.template.dataSource.dataBase = this.dataBaseList.find(item => item.id === id)
    }
  },
};
</script>

<style lang="less" scoped>
.Form {
  height: 100%;
  overflow: scroll;
}
</style>