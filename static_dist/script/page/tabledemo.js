$(function() {
  var table = $('#example').DataTable({
    scrollY: '300px',
    scrollX: true,
    scrollCollapse: true,
    paging: false,
    buttons: ['colvis'],
    fixedColumns: {
      leftColumns: 2,
      rightColumns: 1
    }
  });
});