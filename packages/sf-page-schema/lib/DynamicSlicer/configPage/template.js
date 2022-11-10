const obj = {
    form: [
        {
            component: 'el-input', // input select date
            label: '账户名',
            key: 'accountName',
            props: {
                placeholder: '请输入账户名',
                clearable: true
            }
        },
        {
            component: 'el-input', // input select date
            label: '用户名',
            key: 'userName',
            props: {
                placeholder: '请输入用户名',
                clearable: true
            }
        },
        {
            component: 'el-select', // input select date
            label: '类型',
            key: 'type',
            props: {
                placeholder: '请选择类型',
                clearable: true
            },
            options: [{
                label: '类型一',
                value: 'type1'
            }, {
                label: '类型二',
                value: 'type2'
            }]
        }
        // {
        //     'type': 'select', // input select date
        //     'label': 'zzz',
        //     'key': 'aaa',
        //     'placeholder': '',
        //     'width': '100px',
        //     'dict': 'dict1'
        // },
        // {
        //     'type': 'date', // input select date
        //     'label': 'zzz',
        //     'key': 'aaa',
        //     'placeholder': '',
        //     'width': '100px',
        //     format: 'YYYY-MM-DD',
        //     dateType: 'day' // day week month
        // }
    ],
    table: {
        props: {

        },
        columns: [
            {
                prop: 'code',
                label: '编码',
            },
            {
                prop: 'code',
                label: '编码',
            },
            {
                prop: 'code',
                label: '编码',
                width: '200px'
            },
            {
                prop: 'code',
                label: '编码',
                width: '200px'
            },
            {
                prop: 'code',
                label: '编码',
                width: '200px'
            }
            // {
            //     type: 'operate',
            //     key: 'code',
            //     name: '操作',
            //     width: '',
            //     fixed: '',
            //     operateList: [{ // 详情
            //         key: 'code',
            //         name: '详情',
            //         ref: 'detail'
            //     }]
            // }
        ]
    },
    dataSource: {
        type: '1', // 数据源类型 1，数据库
        dataBaseId: null, // 数据库id
        dataBase: null, // 数据库信息
        sql: '' // sql语句
    }
    // 'sql': 'select uaer_name as name from user where name = ${name}',
    // componentsList: ['detail', 'click']
}

module.exports = obj

// const tabs = [{
//     name: '11',
//     key: '212121'
// }]

