<template>
  <div class="Form" v-if="template && template.form">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="查询表单" name="1">
        <el-collapse-item
          :name="index + 1"
          v-for="(formItem, index) in template.form"
          :key="index"
        >
          <template slot="title">
            <div style="width: 340px">
              查询条件{{ index + 1 }}
              <el-button
                type="text"
                icon="el-icon-delete"
                style="float: right; margin-top: 5px"
                @click.stop="handleFormItemDelete(index)"
              />
            </div>
          </template>
          <el-form label-width="100px">
            <el-form-item label="组件类型">
              <el-select
                v-model="formItem.component"
                placeholder="请选择"
                style="width: 100%"
                @change="(val) => handleComponentChange(val, index)"
              >
                <el-option label="输入框" value="el-input" />
                <el-option label="选择框" value="el-select" />
              </el-select>
            </el-form-item>
            <el-form-item label="字段名">
              <el-input v-model="formItem.label" />
            </el-form-item>
            <el-form-item label="字段值">
              <el-input v-model="formItem.key" />
            </el-form-item>
            <el-form-item label="提示语">
              <el-input v-model="formItem.props.placeholder" />
            </el-form-item>
            <!-- 选择框额外配置 -->
            <div
              v-if="formItem.component === 'el-select'"
            >
              <el-tabs editable @edit="(targetName, action) => handleTabsEdit(targetName, action, index)">
                <el-tab-pane
                  v-for="(option, optionIndex) in formItem.options"
                  :key="optionIndex"
                  :label="'选项' + (optionIndex + 1)"
                  :name="optionIndex"
                >
                  <div style="margin-top:10px">
                    <el-form-item label="选项名" label-width="80px">
                      <el-input v-model="option.label"></el-input>
                    </el-form-item>
                    <el-form-item label="选项值" label-width="80px">
                      <el-input v-model="option.value"></el-input>
                    </el-form-item>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-form>
        </el-collapse-item>
        <el-button type="text" @click="handleAddFormItem"
          >+新增表单项</el-button
        >
      </el-collapse-item>
      <el-collapse-item title="表格" name="2">
        <el-collapse-item :name="index + 1" v-for="(column, index) in template.table.columns" :key="index">
          <template slot="title">
            <div style="width: 340px">
              表头{{ index + 1 }}
              <el-button
                type="text"
                icon="el-icon-delete"
                style="float: right; margin-top: 5px"
                @click.stop="handleTableColumnDelete(index)"
              />
            </div>
          </template>
          <el-form label-width="100px">
            <el-form-item label="表头名称">
              <el-input v-model="column.label" />
            </el-form-item>
            <el-form-item label="表头字段">
              <el-input v-model="column.prop" />
            </el-form-item>
          </el-form>
        </el-collapse-item>
        <el-button type="text" @click="handleTableColumnAdd"
          >+新增表头</el-button
        >
      </el-collapse-item>
      <!-- <el-collapse-item title="Tab切换" name="3"> Tab切换 </el-collapse-item> -->
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'pageConfig',
  props: {
    templateJson: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      activeNames: [],
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
  methods: {
    // 添加表单项
    handleAddFormItem() {
      this.template.form.push({
        component: "el-input", // input select date
        label: "账户名",
        key: "accountName",
        props: {
          placeholder: "请输入账户名",
          clearable: true,
        },
      });
    },
    // 表单项切换
    handleComponentChange(val, index) {
      if (val === "el-input") {
        this.template.form[index] = {
          component: "el-input",
          label: "账户名",
          key: "accountName",
          props: {
            placeholder: "请输入账户名",
            clearable: true,
          },
        };
      } else if (val === "el-select") {
        this.template.form[index] = {
          component: "el-select",
          label: "类型",
          key: "type",
          props: {
            placeholder: "请选择类型",
            clearable: true,
          },
          options: [
            {
              label: "类型一",
              value: "type1",
            },
            {
              label: "类型二",
              value: "type2",
            },
          ],
        };
      }
    },
    // 删除表单项
    handleFormItemDelete(index) {
      this.template.form.splice(index, 1);
    },
    // 新增选项
    handleAddFormItemSelectOption(index) {
      this.template.form[index].options.push({
        label: "选项x",
        value: "optionX",
      });
    },
    // 删除选项
    handleFormItemDeleteOptopn(index, optionIndex) {
      this.template.form[index].options.splice(optionIndex, 1);
    },
    // 选择框选项
    handleTabsEdit(targetName, action, index) {
        if (action === 'add') {
          this.template.form[index].options.push({
            label: "选项x",
            value: "optionX",
          });
        }
        if (action === 'remove') {
          this.template.form[index].options.splice(targetName, 1);
        }
      },
    // 表格表头删除
    handleTableColumnDelete(index) {
      this.template.table.columns.splice(index, 1);
    },
    // 表格表头新增
    handleTableColumnAdd() {
      this.template.table.columns.push({
        label: "表头",
        prop: "prop",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.Form {
  height: 100%;
  overflow: scroll;
}
</style>