$(function() {
  var table = $('#example').DataTable({
    scrollY: '300px',
    scrollX: true,
    scrollCollapse: true,
    // paging: true,
    pagingType: 'full_numbers',
    iDisplayLength: 5,
    bServerSide: true,
    dom: '<"top"i>rt<"bottom"flp><"clear">',
    columns: [{
      'data': 'id'
    }, {
      'data': 'name'
    }, {
      'data': 'age'
    }],
    ajax: function(data, callback, settings) {
      console.log(data);
      var param = {};
      param.limit = data.length; //页面显示记录条数，在页面显示每页显示多少项的时候
      param.start = data.start; //开始的记录序号
      param.page = (data.start / data.length) + 1; //当前页码
      $.ajax({
        type: 'post',
        url: '/ajax/tabledemo/getdata',
        cache: false,
        data: param,
        dataType: 'json'
      }).done(function(result) {
        //封装返回数据
        var returnData = {};
        // returnData.draw = data.draw; //这里直接自行返回了draw计数器,应该由后台返回
        returnData.recordsTotal = result.total; //返回数据全部记录
        returnData.recordsFiltered = result.total; //后台不实现过滤功能，每次查询均视作全部结果
        returnData.data = result.data; //返回的数据列表
        //console.log(returnData);
        //调用DataTables提供的callback方法，代表数据已封装完成并传回DataTables进行渲染
        //此时的数据需确保正确无误，异常判断应在执行此回调前自行处理完毕
        callback(returnData);
      });
    },
    // buttons: ['colvis'],
    language: {
      'url': '/static/script/common/chinese.json'
    },
    fixedColumns: {
      leftColumns: 2,
      rightColumns: 1
    }
  });
});