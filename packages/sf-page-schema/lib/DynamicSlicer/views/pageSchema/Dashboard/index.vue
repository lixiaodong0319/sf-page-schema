<template>
  <div v-if="template && template.form">
    <el-form ref="form" :model="form">
      <el-row>
        <el-col :span="6" v-for="(item, index) in template.form" :key="index">
          <el-form-item
            :label="item.label"
            :prop="item.key"
            :label-width="'100px'"
          >
            <component
              :is="item.component"
              v-model="form[item.key]"
              v-bind="item.props"
            >
              <template v-if="item.component === 'el-select'">
                <el-option
                  v-for="(option, index) in item.options"
                  :key="index"
                  :label="option.label"
                  :value="option.value"
                ></el-option>
              </template>
            </component>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="search">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%"
      height="500">
      <el-table-column v-for="(item, index) in template.table.columns" :key="index"
        v-bind="item">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getQueryObject } from "../../../utils/index";
import { queryData, createDataSource } from '../../../api/bi-saas'
export default {
  name: "dashboardIndex",
  components: {},
  props: {
    templateJson: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      screenId: "",
      form: {},
      tableData: []
    }
  },
  computed: {
    template() {
      return this.templateJson
    }
  },
  watch: {
    template: {
      handler(val) {
        // 保存form字段
        this.form = val.form.reduce((pre, cur) => {
          pre[cur.key] = null
          return pre
        }, {})
        // 模板改变要保存
        this.$emit('setTemplateJson', val)
        this.handleCreateSource()
      },
      deep: true
    },
    form: {
      handler(val) {
        this.$emit('setForm', val)
      },
      deep: true
    }
  },
  created() {
    // 获取地址栏参数
    const queryObj = getQueryObject();
    this.screenId = queryObj.screenId;
    console.log(this.templateJson, 'this.templateJson')
  },
  methods: {
    // 查询
    search() {
      this.handleCreateSource()
    },
    // 重置
    reset() {
      this.$refs.form.resetFields()
    },
    // 创建数据源
    handleCreateSource() {
      // 创建数据源前先配置数据库
      if (!this.template.dataSource.dataBase) {
        return
      }
      const { ip, dbName, password, port, name, dbType, username } = this.template.dataSource.dataBase
        // sql语句替换
      let newSql = this.template.dataSource.sql
      Object.keys(this.form).forEach(item => {
        newSql = newSql.replace('${' + item + '}', JSON.stringify(this.form[item]))
      })
      const params = {
        type: 0, // ?
        screenId: this.screenId,
        componentId: 1, // 暂时固定
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
          // 请求数据
          queryData({
            componentId: 1,
            screenId: this.screenId
          }).then(res => {
            if (res.code === 200) {
              this.tableData = res.data
            }
          })
        }
      })
    },
  },
};
</script>

<style>
</style>