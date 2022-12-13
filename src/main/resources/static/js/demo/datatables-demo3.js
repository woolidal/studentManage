// Call the dataTables jQuery plugin
$(document).ready(function() {
    var oTable = $('#dataTable1').dataTable({dom: 'lrt',info: false,paging:false, columnDefs: [{ targets: [0,1], visible:false }]});
    $('select#subject').change( function () { oTable.fnFilter( this.value, 2); } );
    $('select#grade').change( function () { oTable.fnFilter( this.value, 0); } );
    $('select#semester').change( function () { oTable.fnFilter( this.value, 1); } );
});``