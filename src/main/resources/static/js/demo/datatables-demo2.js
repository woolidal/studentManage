// Call the dataTables jQuery plugin
$(document).ready(function() {
    var oTable = $('#dataTable1').dataTable({dom: 'lrt',info: false,paging:false,});
    $('select#subject').change( function () { oTable.fnFilter( this.value, 6); } );
    $('select#grade').change( function () { oTable.fnFilter( this.value, 0); } );
    $('select#semester').change( function () { oTable.fnFilter( this.value, 1); } );
    $('select#exam').change( function () { oTable.fnFilter( this.value, 2); } );

    var oTable = $('#dataTable2').dataTable({dom: 'lrt',info: false,paging:false,});
    var oTable = $('#dataTable3').dataTable({dom: 'lrt',info: false,paging:false,});
    var oTable = $('#dataTable4').dataTable({dom: 'lrt',info: false,paging:false,});
    var oTable = $('#dataTable5').dataTable({dom: 'lrt',info: false,paging:false,});
    var oTable = $('#dataTable6').dataTable({dom: 'lrt',info: false,paging:false,});
});

//columnDefs: [{ targets: [0,1,2], visible:false }]