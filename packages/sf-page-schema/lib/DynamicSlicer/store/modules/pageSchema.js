import template from '@/configPage/template'
import {
    screenQuery,
    saveEditorData
} from '@/api/bi-saas'
const state = {
    screenId: null, // 屏幕id
    templateJson: null, // 模板数据
    tableData: [], // 列表
    form: {} // 表单
}

const mutations = {
    // 设置屏幕id
    SET_SCREENID: (state, data) => {
        state.screenId = data
    },
    // 设置模板数据
    SET_TEMPLATEJSON: (state, data) => {
        state.templateJson = data
    },
    // 设置数据
    SET_TABLEDATA: (state, data) => {
        state.tableData = data
    },
    // 设置form表单
    SET_FORM: (state, data) => {
        state.form = data
    }
}

const actions = {
    getTemplateJson({ commit }, screenId) {
        return new Promise((resolve, reject) => {
            screenQuery({ screenId }).then((res) => {
                if (res.code === 200) {
                    const content = JSON.parse(res.data.content)
                    commit('SET_TEMPLATEJSON', content)
                    resolve(content)
                }
            })
        })
    },
    setTemplateJson({ commit, state }, content) {
        return new Promise((resolve, reject) => {
            saveEditorData({
                screenId: state.screenId,
                content: JSON.stringify(content)
            }).then(() => {
                commit('SET_TEMPLATEJSON', content)
                resolve(content)
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

