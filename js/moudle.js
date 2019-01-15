// (function($) {
//     "use strict"; // Start of use strict


var baselUrl = "http://127.0.0.1:7001/api"

//json字段格式化
function jsonFormatter(value, row, index) {
    return JSON.stringify(value);
}

//传值解析
//接收一个值
function oneValues(){
    var result;
    var url=window.location.search; //获取url中"?"符后的字串
    if(url.indexOf("?")!=-1){
        result = url.substr(url.indexOf("=")+1);
    }
    return result;
}
//接收多值
function manyValues(){
    var url=window.location.search;
    if(url.indexOf("?")!=-1){
        var str = url.substr(1);
        strs = str.split("&");
        var key=new Array(strs.length);
        var value=new Array(strs.length);
        for(i=0;i<strs.length;i++){
            key[i]=strs[i].split("=")[0]
            value[i]=unescape(strs[i].split("=")[1]);
            alert(key[i]+"="+value[i]);
        }
    }
}


// 触发模态框的按钮
window.operateEvents = {
    'click .RoleOfSelectSlice': function (e, value, row, index) {
        $("#selectSlice").modal('show');
    },
    'click .RoleOfDeleteTerminal': function (e, value, row, index) {
        $("#deleteTerminal").modal('show');
    },
    'click .RoleOfDeleteSlice': function (e, value, row, index) {
        $("#deleteSlice").modal('show');
    },
    'click .RoleOfAddNode': function (e, value, row, index) {
        $("#addNode").modal('show');
    },
    'click .RoleOfSeeSwitchDetail': function (e, value, row, index) {
        alert(JSON.stringify(row))
        // window.location.href="switchDetail.html?switchId="+row.dpid
    }
};


// operateFormatter
function operateFormatter_switchDetail(value, row, index) {
    var switchId = row.dpid;
    return [
        "<a href='switchDetail.html?switchId=" + switchId + "'>点击查看详情</a>"
        // '<button  type="button" class="RoleOfSeeSwitchDetail btn btn-primary btn-xs">点击查看详情</button>'
        ].join('');
}


//--------网络信息overview------
//交换机列表
$('#switchTable').bootstrapTable({

    // url: baselUrl + "/networkInformation/switches",                      //请求后台的URL（*）
    url: "mockUpData/switch_table.json",
    method: 'GET',                      //请求方式（*）
    // toolbar: '#toolbar',             //工具按钮用哪个容器
    striped: true,                      //是否显示行间隔色
    cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
    pagination: true,                   //是否显示分页（*）
    sortable: true,                     //是否启用排序
    sortOrder: "asc",                   //排序方式
    // sidePagination: "server",        //分页方式：client客户端分页，server服务端分页（*）
    pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
    pageSize: 5,                        //每页的记录行数（*）
    pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
    search: true,                       //是否显示表格搜索
    strictSearch: false,
    showColumns: true,                  //是否显示所有的列（选择显示的列）
    showRefresh: true,                  //是否显示刷新按钮
    minimumCountColumns: 2,             //最少允许的列数
    clickToSelect: true,                //是否启用点击选中行
    // height:500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
    uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
    showToggle: true,                   //是否显示详细视图和列表视图的切换按钮
    cardView: false,                    //是否显示详细视图
    detailView: false,                  //是否显示父子表

    // onLoadSuccess: function(data){
    //     $("#switchTable").bootstrapTable("load",JSON.stringify(data.data))
    // },
    columns: [
        {
            field: 'number',
            title: '序号',
            align: 'center',
            formatter: function (value, row, index) {
                return index+1;
            }
        },
        {
            field: 'dpid',
            title: '交换机DPID',
            align: 'center',
            sortable: true
        },{
            field: 'packet_count',
            title: 'packet_count',
            align: 'center',
            sortable: true
        },{
            field: 'byte_count',
            title: 'byte_count',
            align: 'center',
            sortable: true
        },{
            field: 'flow_count',
            title: 'flow_count',
            align: 'center',
            sortable: true
        },
        {
            field: 'details',
            title: '详情',
            align: 'center',
            events: operateEvents ,
            formatter: operateFormatter_switchDetail
        }]
})
//接收一个值
function getSwitchId(){
    var result;
    var url=window.location.search; //获取url中"?"符后的字串
    if(url.indexOf("?")!=-1){
        result = url.substr(url.indexOf("=")+1);
    }
    return result;
}



//主机列表
$('#hostTable').bootstrapTable({

    // url: baselUrl +"/networkInformation/host",                      //请求后台的URL（*）
    url: "mockUpData/host_info.json",
    method: 'GET',                      //请求方式（*）
    // toolbar: '#toolbar',              //工具按钮用哪个容器
    striped: true,                      //是否显示行间隔色
    cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
    pagination: true,                   //是否显示分页（*）
    sortable: true,                     //是否启用排序
    sortOrder: "asc",                   //排序方式
    // sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
    pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
    pageSize: 5,                     //每页的记录行数（*）
    pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
    search: true,                      //是否显示表格搜索
    strictSearch: false,
    showColumns: true,                  //是否显示所有的列（选择显示的列）
    showRefresh: true,                  //是否显示刷新按钮
    minimumCountColumns: 2,             //最少允许的列数
    clickToSelect: true,                //是否启用点击选中行
    // height:500,                     //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
    uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
    showToggle: true,                   //是否显示详细视图和列表视图的切换按钮
    cardView: false,                    //是否显示详细视图
    detailView: false,                  //是否显示父子表

    columns: [
        {
            field: 'number',
            title: '序号',
            align: 'center',
            formatter: function (value, row, index) {
                return index+1;
            }
        },
        {
            field: 'mac',
            title: 'mac地址',
            align: 'center',
            sortable: true
        }, {
            field: 'port.hw_addr',
            title: '端口硬件地址',
            align: 'center',
            sortable: true
        }, {
            field: 'port.name',
            title: '端口名称',
            align: 'center',
            sortable: true
        }, {
            field: 'port.port_no',
            title: '端口号',
            align: 'center'
        }, {
            field: 'port.dpid',
            title: '连接的交换机',
            align: 'center'
        }, {
            field: 'ipv4',
            title: 'ipv4地址',
            align: 'center'
        }, {
            field: 'ipv6',
            title: 'ipv6地址',
            align: 'center'
        }]
})



//-----交换机详情-------
$(function(){
    $("#showSwitchId").html(getSwitchId());
})

//交换机端口列表
$('#portTable').bootstrapTable({

    url: baselUrl + "/networkInformation/port_info?switch_id=1",                      //请求后台的URL（*）
    url: "mockUpData/switch_port_info.json",
    method: 'GET',                      //请求方式（*）
    // toolbar: '#toolbar',              //工具按钮用哪个容器
    striped: true,                      //是否显示行间隔色
    cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
    pagination: true,                   //是否显示分页（*）
    sortable: true,                     //是否启用排序
    sortOrder: "asc",                   //排序方式
    // sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
    pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
    pageSize: 5,                     //每页的记录行数（*）
    pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
    search: true,                      //是否显示表格搜索
    strictSearch: false,
    showColumns: true,                  //是否显示所有的列（选择显示的列）
    showRefresh: true,                  //是否显示刷新按钮
    minimumCountColumns: 2,             //最少允许的列数
    clickToSelect: true,                //是否启用点击选中行
    // height:500,                     //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
    uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
    showToggle: true,                   //是否显示详细视图和列表视图的切换按钮
    cardView: false,                    //是否显示详细视图
    detailView: false,                  //是否显示父子表

    columns: [
        {
            field: 'number',
            title: '序号',
            align: 'center',
            formatter: function (value, row, index) {
                return index+1;
            }
        },
        {
            field: 'dpid',
            title: '交换机dpid',
            align: 'center',
            sortable: true
        }, {
            field: 'port_no',
            title: '端口号port_no',
            align: 'center',
            sortable: true
        }, {
            field: 'name',
            title: '名称name',
            align: 'center',
            sortable: true
        }, {
            field: 'hw_addr',
            title: '硬件地址hw_addr',
            align: 'center'
        }]
})


//流表
$('#flowTable').bootstrapTable({

    // url: baselUrl + "/networkInformation/flow_table?switch_id=1",                          //请求后台的URL（*）
    url: "mockUpData/switch_flowTable_info.json",
    method: 'GET',                      //请求方式（*）
    // toolbar: '#toolbar',              //工具按钮用哪个容器
    striped: true,                      //是否显示行间隔色
    cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
    pagination: true,                   //是否显示分页（*）
    sortable: true,                     //是否启用排序
    sortOrder: "asc",                   //排序方式
    // sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
    pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
    pageSize: 5,                     //每页的记录行数（*）
    pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
    search: true,                      //是否显示表格搜索
    strictSearch: false,
    showColumns: true,                  //是否显示所有的列（选择显示的列）
    showRefresh: true,                  //是否显示刷新按钮
    minimumCountColumns: 2,             //最少允许的列数
    clickToSelect: true,                //是否启用点击选中行
    // height:500,                     //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
    uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
    showToggle: true,                   //是否显示详细视图和列表视图的切换按钮
    cardView: false,                    //是否显示详细视图
    detailView: false,                  //是否显示父子表

    // onLoadSuccess: function () {
    // },
    // onLoadError: function () {
    //     showTips("数据加载失败！");
    //     },

    // responseHandler: function(res) {
    //     return {
    //         "match": res.match
    //     };
    // },


    columns: [
        {
            field: 'number',
            title: '序号',
            align: 'center',
            formatter: function (value, row, index) {
                return index+1;
            }
        },
        {
            field: 'match',
            title: '匹配域',
            align: 'center',
            sortable: true,
            formatter: jsonFormatter
        }, {
            field: 'priority',
            title: '优先级',
            align: 'center',
            sortable: true,
            clickToSelect: true
        }, {
            field: 'actions',
            title: 'Action',
            align: 'center',
            sortable: true
        }, {
            field: 'duration_sec',
            title: '持续时间',
            align: 'center'
        }, {
            field: 'cookie',
            title: 'cookie',
            align: 'center'
        }, {
            field: 'packet_count',
            title: '包计数',
            align: 'center'
        }, {
            field: 'table_id',
            title: 'table-id',
            align: 'center'
        }]
})

//流量信息列表
$('#portTrafficTable').bootstrapTable({

    // url: baselUrl +"/networkInformation/port_traffic_info?switch_id=d",                      //请求后台的URL（*）
    url: "mockUpData/switch_port_traffic_info.json",
    method: 'GET',                      //请求方式（*）
    // toolbar: '#toolbar',              //工具按钮用哪个容器
    striped: true,                      //是否显示行间隔色
    cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
    pagination: true,                   //是否显示分页（*）
    sortable: true,                     //是否启用排序
    sortOrder: "asc",                   //排序方式
    // sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
    pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
    pageSize: 5,                     //每页的记录行数（*）
    pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
    search: true,                      //是否显示表格搜索
    strictSearch: false,
    showColumns: true,                  //是否显示所有的列（选择显示的列）
    showRefresh: true,                  //是否显示刷新按钮
    minimumCountColumns: 2,             //最少允许的列数
    clickToSelect: true,                //是否启用点击选中行
    // height:500,                     //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
    uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
    showToggle: true,                   //是否显示详细视图和列表视图的切换按钮
    cardView: false,                    //是否显示详细视图
    detailView: false,                  //是否显示父子表

    columns: [
        {
            field: 'number',
            title: '序号',
            align: 'center',
            formatter: function (value, row, index) {
                return index+1;
            }
        },
        {
            field: 'port_no',
            title: '端口号',
            align: 'center',
            sortable: true
        }, {
            field: 'rx_packets',
            title: '接收包数',
            align: 'center',
            sortable: true
        }, {
            field: 'rx_bytes',
            title: '接收字节',
            align: 'center',
            sortable: true
        }, {
            field: 'rx_dropped',
            title: '接收丢弃包数',
            align: 'center',
            sortable: true
        }, {
            field: 'tx_packets',
            title: '传输包数',
            align: 'center',
            sortable: true}, {

            field: 'tx_bytes',
            title: '传输字节',
            align: 'center',
            sortable: true
        }, {
            field: 'tx_dropped',
            title: '传输丢弃包数',
            align: 'center',
            sortable: true
        }, {
            field: 'duration_sec',
            title: '持续时间(s)',
            align: 'center'
        }]
})




// -------切片管理-------
function operateFormatter_modifySlice(value, row, index) {
    return [
        '<button  type="button" class="RoleOfAddNode btn btn-primary ">添加网元</button>', " ",
        '<button  type="button" class="RoleOfDeleteSlice btn btn-danger btn-xs">删除切片</button>']
        .join('');
}

$('#sliceTable').bootstrapTable({

    // url: baselUrl + "/slice-management/slice_list",                      //请求后台的URL（*）
    url: "mockUpData/slice_info.json",
    method: 'GET',                      //请求方式（*）
    // toolbar: '#toolbar',              //工具按钮用哪个容器
    striped: true,                      //是否显示行间隔色
    cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
    pagination: true,                   //是否显示分页（*）
    sortable: true,                     //是否启用排序
    sortOrder: "asc",                   //排序方式
    // sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
    pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
    pageSize: 5,                     //每页的记录行数（*）
    pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
    search: true,                      //是否显示表格搜索
    strictSearch: false,
    showColumns: true,                  //是否显示所有的列（选择显示的列）
    showRefresh: true,                  //是否显示刷新按钮
    minimumCountColumns: 2,             //最少允许的列数
    clickToSelect: true,                //是否启用点击选中行
    // height:500,                     //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
    uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
    showToggle: true,                   //是否显示详细视图和列表视图的切换按钮
    cardView: false,                    //是否显示详细视图
    detailView: false,                  //是否显示父子表

    columns: [
        {
            field: 'number',
            title: '序号',
            align: 'center',
            formatter: function (value, row, index) {
                return index+1;
            }
        },{
            field: 'slice_id',
            title: '切片Id',
            align: 'center',
            sortable: true
        }, {
            field: 'name',
            title: '切片名称',
            align: 'center',
            sortable: true
        }, {
            field: 'create_time',
            title: '创建时间',
            align: 'center',
            sortable: true
        }, {
            field: 'nodeList',
            title: '包含网元',
            align: 'center'
        }, {
            field: 'priority',
            title: '优先级',
            align: 'center'
        }, {
            field: 'status',
            title: '运行状态',
            align: 'center'
        }, {
            field: 'operate',
            title: '操作',
            align: 'center',
            events: operateEvents ,
            formatter: operateFormatter_modifySlice
        }]
})



// ------切片选择-------
function operateFormatter_terminal(value, row, index) {
    return [
        '<button  type="button" class="RoleOfSelectSlice btn btn-primary btn-xs">选择切片</button>',  " ",
        '<button  type="button" class="RoleOfDeleteTerminal btn btn-danger btn-xs">删除终端</button> ',
        // '<button  type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#selectSlice">选择切片2</button>'
        ]
        .join('');
}


$('#terminalTable').bootstrapTable({

        // url: baselUrl + "/terminal/terminal_list",                      //请求后台的URL（*）
        url: "mockUpData/terminal_info.json",
        // toolbar: '#toolbar',              //工具按钮用哪个容器
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: true,                     //是否启用排序
        sortOrder: "asc",                   //排序方式
        // sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
        pageSize: 5,                     //每页的记录行数（*）
        pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
        search: true,                      //是否显示表格搜索
        strictSearch: false,
        showColumns: true,                  //是否显示所有的列（选择显示的列）
        showRefresh: true,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        // height:500,                     //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
        showToggle: true,                   //是否显示详细视图和列表视图的切换按钮
        cardView: false,                    //是否显示详细视图
        detailView: false,                  //是否显示父子表

        columns: [
            {
            field: 'number',
            title: '序号',
            align: 'center',
            formatter: function (value, row, index) {
                return index+1;}
            },
            {
             field: 'terminal_id',
             title: '终端Id',
             align: 'center',
             sortable: true
            }, {
             field: 'name',
             title: '终端名称',
             align: 'center',
             sortable: true
            }, {
             field: 'type',
             title: '终端类型',
             align: 'center',
             sortable: true
            }, {
                field: 'selected_slice',
                title: '已选切片',
                align: 'center'
            }, {
             field: 'operate',
             title: '操作',
             align: 'center',
             events: operateEvents ,
             formatter: operateFormatter_terminal
            }]
})



//-------------------------------废弃的---------------------------------------
//废弃的  datatable插件测试 终端表
$(document).ready(function () {

    var terminalInfo = [
        {
            "terminal_id": "t01",
            "name": "MobilePhone",
            "type": "Delay sensitive",
            "selected_slice": "eMBB_slice"
        },
        {
            "terminal_id": "t02",
            "name": "AR/VR",
            "type": "Delay sensitive",
            "selected_slice": "URLLC_slice"
        },
        {
            "terminal_id": "t03",
            "name": "Car",
            "type": "Delay sensitive",
            "selected_slice": "URLLC_slice"
        },
        {
            "terminal_id": "t04",
            "name": "Video surveillance equipment",
            "type": "Delay sensitive",
            "selected_slice": "eMBB_slice"
        }
    ];

    var terminalSet = [
        ["t01", "MobilePhone", "Delay sensitive", "eMBB_slice"],
        ["t02", "AR/VR", "Delay sensitive", "URLLC_slice"],
        ["t03", "Car", "Delay sensitive", "URLLC_slice"],
        [ "t04", "Video surveillance equipment","Delay sensitive", "eMBB_slice"]
    ]

    $('#test1').DataTable({

        "processing": true,

        "data":terminalSet,
        // "serverSide": true,
        //
        // "ajax":{
        //
        //     "url":"initable",
        //
        // },
        "columns": [
            { "title": "终端Id" },
            { "title": "名称" },
            { "title": "类型", "class": "center" },
            { "title": "已选切片", "class": "center" }
        ],

        "aoColumnDefs":[//设置列的属性，此处设置第一列不排序
            {"bSortable": true, "aTargets": [0]},{ "class": "tn", "targets": [ 0 ] },
            {
                "targets": -1,
                "class": "but_xq",
                "data": null,

                "defaultContent": "No content"
            }
        ],

        "aaSorting": [[1, "desc"]], //给列表排序 ，第一个参数表示数组 (由0开始)。1 表示Browser列。第二个参数为 desc或是asc

    });

});

//废弃的

$(document).ready(function () {
    var ports = {
        "ports": [
            {
                "hw_addr": "ba:7c:a9:a9:74:d8",
                "name": "s1-eth1",
                "port_no": "00000001",
                "dpid": "0000000000000001"
            },
            {
                "hw_addr": "9a:f3:6a:d5:87:ee",
                "name": "s1-eth2",
                "port_no": "00000002",
                "dpid": "0000000000000001"
            },
            {
                "hw_addr": "02:52:68:22:1e:ea",
                "name": "s1-eth3",
                "port_no": "00000003",
                "dpid": "0000000000000001"
            },
            {
                "hw_addr": "0a:da:86:06:72:e2",
                "name": "s1-eth4",
                "port_no": "00000004",
                "dpid": "0000000000000001"
            }
        ],
        "dpid": "0000000000000001"
    };

    var json = { 'columns': [{ 'FieldID': 'Column1', 'Title': 'Info Header 1' }, { 'FieldID': 'Column2', 'Title': 'Info Header2' }, { 'FieldID': 'Column3', 'Title': 'Info Header3' }], 'rows': [{ 'Column1': '1A', 'Column2': '1B', 'Column3': '1C' }, { 'Column1': '2A', 'Column2': '2B', 'Column3': '2C' }] };

    var th;
    // $.each(json.columns, function (colIndex, col) {
    //     th+="<th>" + col.Title + "</th>";
    // });
    th+= "<th>" + "交换机dpid" + "</th>" + "<th>" + "端口号port_no" + "</th>" + "<th>" + "名称name" + "</th>" + "<th>" + "硬件地址hw_addr" + "</th>";

    $("#portTable1").append("<tr>" + th + "</tr>");

    //行遍历
    $.each(ports.ports, function (portIndex, port) {
        var tr;
        // $.each(port, function (Index,port) {
        tr+='<td>'+port.dpid+'</td>'+'<td>'+port.port_no+'</td>'+'<td>'+port.name+'</td>'+'<td>'+port.hw_addr+'</td>'
        // })

        $("#portTable1").append('<tr>'+tr+'</tr>');
    });

});