import request from '../utils/request'

// session转token
export function getLoginToken(params) {
    return request({
        url: '/user/loginBySessionId',
        method: 'get',
        params
    })
}

// 解析token
export function parseToken(params) {
    return request({
        url: '/user/parseToken',
        method: 'get',
        params
    })
}

// 获取租户
export function getTenantByProductCode(params) {
    return request({
        url: '/user/getTenantByProductCode',
        method: 'get',
        params
    })
}

// 发送验证码
export function sendVFCode(params) {
    return request({
        url: '/user/sendVFCode',
        method: 'get',
        params
    })
}

// 获取验证码
export function getVFCode(params) {
    return request({
        url: '/user/getVFCode',
        method: 'get',
        params
    })
}

// 登录
export function login(params) {
    return request({
        url: '/user/login',
        method: 'get',
        params
    })
}

// 获取权限
export function getRoleResource(params) {
    return request({
        url: '/user/roleResource',
        method: 'get',
        params
    })
}

// ----------------------大屏-------------------------
// 复制
export function copyScreen(data) {
    return request({
        url: '/screen/copy',
        method: 'post',
        data
    })
}

// 创建大屏
export function screenCreate(data) {
    return request({
        url: '/screen/create',
        method: 'post',
        data
    })
}

// 删除大屏
export function screenDelete(data) {
    return request({
        url: '/screen/delete',
        method: 'post',
        data
    })
}

// 大屏列表
export function getScreenList(data) {
    return request({
        url: '/screen/list',
        method: 'post',
        data
    })
}

// 发布大屏
export function publish(data) {
    return request({
        url: '/screen/publish',
        method: 'post',
        data
    })
}

// 大屏数据查询
export function screenQuery(data) {
    return request({
        url: '/screen/query',
        method: 'post',
        data
    })
}

// 保存大屏数据
export function saveEditorData(data) {
    return request({
        url: '/screen/save',
        method: 'post',
        data
    })
}

// 请求版本
export function queryByVersion(data) {
    return request({
        url: '/screen/queryByVersion',
        method: 'post',
        data
    })
}

// 提交版本
export function submit(data) {
    return request({
        url: '/screen/submit',
        method: 'post',
        data
    })
}

// -----------------------基础图形-----------------------
// 获取文件地址
export function getFileUrl(data) {
    return request({
        url: '/basicgraph/getFileUrl',
        method: 'post',
        data
    })
}

// 图形组件列表
export function getGraphList(data) {
    return request({
        url: '/basicgraph/list',
        method: 'post',
        data
    })
}

// 查询图表数据
export function filterComponent(data) {
    return request({
        url: '/basicgraph/query',
        method: 'post',
        data
    })
}

// 更新组件
export function update(data) {
    return request({
        url: '/basicgraph/update',
        method: 'post',
        data
    })
}

// 新增组件
export function basicgraphAdd(data) {
    return request({
        url: '/basicgraph/add',
        method: 'post',
        data
    })
}

// -----------------数据源---------------------
// 创建数据源
export function createDataSource(data) {
    return request({
        url: '/data/createDataSource',
        method: 'post',
        data
    })
}

// 创建数据源
export function dataSourceQuery(data) {
    return request({
        url: '/data/queryDataSource',
        method: 'post',
        data
    })
}

// 请求数据源
export function queryData(data) {
    return request({
        url: '/data/query',
        method: 'post',
        data
    })
}

// ------------------------文件------------------------
// 删除图片
export function deleteFile(data) {
    return request({
        url: '/file/deleteFile',
        method: 'get',
        params: data
    })
}

// 获取cosfile
export function getCosFile(data) {
    return request({
        url: '/file/getCosFile',
        method: 'get',
        params: data
    })
}

// 获取cos秘钥
export function getCosTempKey(data) {
    return request({
        url: '/file/getCosTempKey',
        method: 'get',
        params: data
    })
}

// 获取图片文件流
export function getFile(data) {
    return request({
        url: '/file/getFile',
        method: 'get',
        params: data
    })
}

// 上传cos文件
export function uploadCosFile(data) {
    return request({
        url: '/file/uploadCosFile',
        method: 'post',
        params: data
    })
}

// 上传图片
export function uploadFile(data) {
    return request({
        url: '/file/uploadFile',
        method: 'post',
        data
    })
}

// 获取数据类型列表
export function getCnnList(params) {
    return request({
        url: '/systemCnn/cnnList',
        method: 'get',
        params
    })
}

// --------------------------- 数据源管理  -------------------------------

export function getList(params) {
    return request({
        url: '/systemCnn/list',
        method: 'get',
        params
    })
}

export function create(data) {
    return request({
        url: '/systemCnn/create',
        method: 'post',
        data
    })
}

export function deleteData(params) {
    return request({
        url: '/systemCnn/delete',
        method: 'get',
        params
    })
}

export function updateData(data) {
    return request({
        url: '/systemCnn/update',
        method: 'post',
        data
    })
}

// --------------------------- 图片上传接口-服务器  -------------------------------

export function uploadImg(data) {
    return request({
        url: '/file/uploadFile',
        method: 'post',
        data
    })
}
