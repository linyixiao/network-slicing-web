
//----------后台交互----------

var baselUrl = "http://127.0.0.1:7001/api"


// 创建切片
function create_slice()
{
    var slice_id = $('#sliceId').val();
    var slice_name = $('#sliceName').val();
    var slice_priority = $('#slicePriority').val();
    var slice_status = $('#sliceStatus').val();

    if(!(slice_id && slice_name &&slice_priority &&slice_status))
    {
        alert('输入错误！');
        return false;
    }
    // var form_data = new Array();

    $.ajax(
        {
            url: baselUrl + '/slice-management/create',
            data:JSON.stringify(
                {
                "slice_id": slice_id,
                "name": slice_name,
                "priority": slice_priority,
                "status": slice_status
                }
            ),
            datType: "JSON",
            contentType: "application/json",
            type: "post",
            beforeSend:function()
            {
                $("#tip").html("<span style='color:blue'>正在处理...</span>");
                return true;
            },
            success:function(data)
            {
                var dataObj = data;
                if(dataObj.respMsg == "ok")
                {
                    alert('操作成功');
                    $("#tip").show().html("<span style='color:blueviolet'>恭喜，删除成功！</span>");

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

// 添加网元
function add_node(slice_id)
{
    if(!slice_id)
    {
        alert('Error！');
        return false;
    }
    // var form_data = new Array();

    $.ajax(
        {
            url: baselUrl + '/slice-management/delete?slice_id='+slice_id,
            //data:{"id":terminal_id, "act":"post"},
            type: "post",
            beforeSend:function()
            {
                $("#tip").html("<span style='color:blue'>正在处理...</span>");
                return true;
            },
            success:function(data)
            {
                var dataObj = data;
                if(dataObj.respMsg == "ok")
                {
                    alert('操作成功');
                    $("#tip").show().html("<span style='color:blueviolet'>恭喜，删除成功！</span>");

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



// 删除切片
function delete_slice(slice_id)
{
    if(!slice_id)
    {
        alert('Error！');
        return false;
    }
    // var form_data = new Array();

    $.ajax(
        {
            url: baselUrl + '/slice-management/delete?slice_id='+slice_id,
            //data:{"id":terminal_id, "act":"post"},
            type: "post",
            beforeSend:function()
            {
                $("#tip").html("<span style='color:blue'>正在处理...</span>");
                return true;
            },
            success:function(data)
            {
                var dataObj = data;
                if(dataObj.respMsg == "ok")
                {
                    alert('操作成功');
                    $("#tip").show().html("<span style='color:blueviolet'>恭喜，删除成功！</span>");

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


// 增加终端
function add_terminal()
{
    var terminal_id = $('#terminalId').val();
    var terminal_name = $('#terminalName').val();
    var terminal_type = $('#terminalType').val();

    if(!(terminal_id && terminal_name &&terminal_type ))
    {
        alert('输入错误！');
        return false;
    }
    // var form_data = new Array();

    $.ajax(
        {
            url: baselUrl + '/terminal/create',
            data:JSON.stringify(
                {
                    "name": terminal_name,
                    "terminal_id":terminal_id,
                    "type": terminal_type
                }
            ),
            datType: "JSON",
            contentType: "application/json",
            type: "post",
            beforeSend:function()
            {
                $("#tip").html("<span style='color:blue'>正在处理...</span>");
                return true;
            },
            success:function(data)
            {
                var dataObj = data;
                if(dataObj.respMsg == "ok")
                {
                    alert('操作成功');
                    $("#tip").show().html("<span style='color:blueviolet'>恭喜，删除成功！</span>");

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


// 选择切片
function select_slice(slice_id)
{
    if(!slice_id)
    {
        alert('Error！');
        return false;
    }
    // var form_data = new Array();

    $.ajax(
        {
            url: baselUrl + '/terminal/selectSlice?terminal_id=t01&slice_id='+slice_id,
            //data:{"id":terminal_id, "act":"post"},
            type: "post",
            beforeSend:function()
            {
                $("#tip").html("<span style='color:blue'>正在处理...</span>");
                return true;
            },
            success:function(data)
            {
                var dataObj = data;
                if(dataObj.respMsg == "ok")
                {
                    alert('操作成功');
                    $("#tip").show().html("<span style='color:blueviolet'>恭喜，删除成功！</span>");

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

// 删除终端
function delete_terminal(terminal_id)
{
    if(!terminal_id)
    {
        alert('Error！');
        return false;
    }
    // var form_data = new Array();

    $.ajax(
        {
            url : baselUrl + "/terminal/delete?terminal_id="+terminal_id,
            // data:{"id":terminal_id, "act":"post"},
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
                    alert('操作失败'+data);
                }
            },
            error:function()
            {
                alert('请求出错a');
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
