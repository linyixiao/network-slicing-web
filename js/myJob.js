// (function($) {
//     "use strict"; // Start of use strict



var backendBaseUrl = "127.0.0.1:7001/api"

//json字段格式化
function jsonFormatter(value, row, index) {
    return JSON.stringify(value);
}

//交换机端口列表
$('#portTable').bootstrapTable({

    // url: "url",                      //请求后台的URL（*）
    // method: 'GET',                      //请求方式（*）
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

    columns: [{
        field: 'number',
        title: '序号',
        align: 'center',
        sortable: true
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
        }],

    data: [{
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
            }]
})


//流表
$('#flowTable').bootstrapTable({

    // url: "url",                      //请求后台的URL（*）
    // method: 'GET',                      //请求方式（*）
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


    columns: [{
            field: 'number',
            title: '序号',
            align: 'center',
            sortable: true
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
        }],

    data: [
        {
            "actions": [
                "OUTPUT:CONTROLLER"
            ],
            "idle_timeout": 0,
            "cookie": 0,
            "packet_count": 119,
            "hard_timeout": 0,
            "byte_count": 7140,
            "duration_sec": 228,
            "duration_nsec": 347000000,
            "priority": 65535,
            "length": 96,
            "flags": 0,
            "table_id": 0,
            "match": {
                "dl_type": 35020,
                "dl_dst": "01:80:c2:00:00:0e"
            }
        },
        {
            "actions": [
                "OUTPUT:1"
            ],
            "idle_timeout": 0,
            "cookie": 0,
            "packet_count": 4,
            "hard_timeout": 0,
            "byte_count": 168,
            "duration_sec": 38,
            "duration_nsec": 880000000,
            "priority": 1,
            "length": 96,
            "flags": 0,
            "table_id": 0,
            "match": {
                "dl_dst": "00:00:00:00:00:02",
                "in_port": 1
            }
        },
        {
            "actions": [
                "OUTPUT:CONTROLLER"
            ],
            "idle_timeout": 0,
            "cookie": 0,
            "packet_count": 20856,
            "hard_timeout": 0,
            "byte_count": 3181948,
            "duration_sec": 228,
            "duration_nsec": 360000000,
            "priority": 0,
            "length": 80,
            "flags": 0,
            "table_id": 0,
            "match": {}
        }
    ]
})


//主机列表
$('#hostTable').bootstrapTable({

    // url: "url",                      //请求后台的URL（*）
    // method: 'GET',                      //请求方式（*）
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

    columns: [{
        field: 'number',
        title: '序号',
        align: 'center',
        sortable: true
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
    }],

    data: [
        {
            "port": {
                "hw_addr": "46:64:31:a2:d4:c1",
                "name": "s6-eth1",
                "port_no": "00000001",
                "dpid": "0000000000000006"
            },
            "mac": "00:00:00:00:00:02",
            "ipv4": [
                "10.0.0.2"
            ],
            "ipv6": [
                "fe80::200:ff:fe00:2"
            ]
        },
        {
            "port": {
                "hw_addr": "ba:7c:a9:a9:74:d8",
                "name": "s1-eth1",
                "port_no": "00000001",
                "dpid": "0000000000000001"
            },
            "mac": "00:00:00:00:00:01",
            "ipv4": [
                "10.0.0.1"
            ],
            "ipv6": [
                "::",
                "fe80::200:ff:fe00:1"
            ]
        }
    ]
})





// 按钮触发模态框
window.operateEvents = {
    'click .RoleOfSelectSlice': function (e, value, row, index) {
        $("#selectSlice").modal('show');
    },
    'click .RoleOfDeleteTerminal': function (e, value, row, index) {
        $("#deleteTerminal").modal('show');
    },
    'click .RoleOfEditSlice': function (e, value, row, index) {
        $("#addSlice").modal('show');
    },
    'click .RoleOfDeleteSlice': function (e, value, row, index) {
        $("#deleteSlice").modal('show');
    },
};


// 切片管理
function operateFormatter1(value, row, index) {
    return [
        '<button  type="button" class="RoleOfEditSlice btn btn-outline-primary ">编辑切片</button>',
        '<button  type="button" class="RoleOfDeleteSlice btn btn-outline-danger btn-xs">删除切片</button>']
        .join('');
}

$('#sliceTable').bootstrapTable({

    // url: "url",                      //请求后台的URL（*）
    // method: 'GET',                      //请求方式（*）
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

    columns: [{
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
        formatter: operateFormatter1
    }],

    data: [
        {
            "slice_id": "001",
            "name": "eMBB_slice",
            "create_time": "2019-01-07 09:00:00",
            "nodeList": ["s1","s2","s3"],
            "priority": 2,
            "status":"Running"
        },
        {
            "slice_id": "002",
            "name": "URLLC_slice",
            "create_time": "2019-01-07 09:00:00",
            "nodeList": ["s4","s5"],
            "priority": 1,
            "status":"Not running"
        },
        {
            "slice_id": "003",
            "name": "mMTC_slice",
            "create_time": "2019-01-07 09:00:00",
            "nodeList": ["s5","s7","s8"],
            "priority": 3,
            "status":"Running"
        }
    ]
})





// 终端切片选择
function operateFormatter2(value, row, index) {
    return [
        '<button  type="button" class="RoleOfSelectSlice btn btn-primary btn-xs">选择切片</button>',
        '<button  type="button" class="RoleOfDeleteTerminal btn btn-danger btn-xs">删除终端</button>',
        '<button  type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#selectSlice">选择切片2</button>']
        .join('');
}


$('#terminalTable').bootstrapTable({

        // url: "url",                      //请求后台的URL（*）
        // method: 'GET',                      //请求方式（*）
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

        columns: [{
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
         formatter: operateFormatter2
        }],

        data: [
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
        ]
})



// 删除终端
function delete_terminal(id)
{
    if(!id)
    {
        alert('Error！');
        return false;
    }
    // var form_data = new Array();

    $.ajax(
        {
            url: backendBaseUrl,
            data:{"id":id, "act":"del"},
            type: "post",
            beforeSend:function()
            {
                $("#tip").html("<span style='color:blue'>正在处理...</span>");
                return true;
            },
            success:function(data)
            {
                if(data > 0)
                {
                    alert('操作成功');
                    $("#tip").html("<span style='color:blueviolet'>恭喜，删除成功！</span>");

                    location.reload();
                }
                else
                {
                    $("#tip").html("<span style='color:red'>失败，请重试</span>");
                    alert('操作失败');
                }
            },
            error:function()
            {
                alert('请求出错');
            },
            complete:function()
            {
                // $('#tips').hide();
            }
        });

    return false;
}



// 编辑更新切片
function update_slice(slice_id)
{
    if(!slice_id)
    {
        alert('Error！');
        return false;
    }
    // var form_data = new Array();

    $.ajax(
        {
            url: backendBaseUrl,
            data:{"slice_id":slice_id, "act":"get"},
            type: "post",
            beforeSend:function()
            {
                // $("#tip").html("<span style='color:blue'>正在处理...</span>");
                return true;
            },
            success:function(data)
            {
                if(data)
                {

                    // 解析json数据
                    var data = data;

                    var data_obj = eval("("+data+")");
                    // 赋值
                    $("#slice_id").val(data_obj.slice_id);

                    $("#name").val(data_obj.name);
                    $("#address").val(data_obj.address);
                    $("#act").val("edit");

                    // 将input元素设置为readonly
                    $('#slice_id').attr("readonly","readonly")
                    // location.reload();
                }
                else
                {
                    $("#tip").html("<span style='color:red'>失败，请重试</span>");
                    //  alert('操作失败');
                }
            },
            error:function()
            {
                alert('请求出错');
            },
            complete:function()
            {
                // $('#tips').hide();
            }
        });

    return false;
}






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


    var th = "<th>" + "终端Id" + "</th>" +"<th>" + "终端名称" + "</th>" + "<th>" + "终端类型" + "</th>"+  "<th>" + "已选切片" + "</th>"+  "<th>" + "选择切片" + "</th>"+ "<th>" + "删除终端" + "</th>";

    $("#terminalTable1").append("<tr>" + th + "</tr>");

    $.each(terminalInfo, function (terminalIndex, terminal) {
        var tr;
        tr+='<td>'+terminal.terminal_id+'</td>'+ '<td>'+terminal.name +'</td>'+'<td>'+ terminal.type+'</td>'+'</td>'+ '<td>'+terminal.selected_slice+'</td>'+'<td>'+"选择" +'</td>' + '<td>'+"删除"+'</td>';
        // console.log(tr);
        $("#terminalTable1").append('<tr>'+tr+'</tr>');
    });
});

//废弃的
$(document).ready(function () {
    var sliceInfo = [
        {
            "id": "001",
            "name": "eMBB_slice",
            "create_time": "2019-01-07 09:00:00",
            "nodeList": ["s1","s2","s3"],
            "priority": 2,
            "status":"Running"
        },
        {
            "id": "002",
            "name": "URLLC_slice",
            "create_time": "2019-01-07 09:00:00",
            "nodeList": ["s4","s5"],
            "priority": 1,
            "status":"Not running"
        },
        {
            "id": "003",
            "name": "mMTC_slice",
            "create_time": "2019-01-07 09:00:00",
            "nodeList": ["s5","s7","s8"],
            "priority": 3,
            "status":"Running"
        }
    ];


    var th = "<th>" + "切片id" + "</th>" +"<th>" + "切片名称" + "</th>" + "<th>" + "创建时间" + "</th>"+  "<th>" + "内部网元列表" + "</th>"+  "<th>" + "优先级" + "</th>"+ "<th>" + "状态" + "</th>"+ "<th>" + "添加网元(交换机)" + "</th>" + "<th>" + "编辑" + "</th>" + "<th>" + "删除" + "</th>" ;

    $("#sliceTable1").append("<tr>" + th + "</tr>");

    $.each(sliceInfo, function (sliceIndex, slice) {
        var tr;
        tr+='<td>'+slice.id+'</td>'+ '<td>'+slice.name +'</td>'+'<td>'+ slice.create_time+'</td>'+'</td>'+ '<td>'+JSON.stringify(slice.nodeList)+'</td>'+'<td>'+slice.priority +'</td>' +'<td>'+slice.status +'</td>'+'<td>'+ "添加" +'</td>'+ '<td>'+"编辑"+'</td>' +'</td>'+ '<td>'+"删除"+'</td>';
        // console.log(tr);
        $("#sliceTable1").append('<tr>'+tr+'</tr>');
    });

});



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