// Call the dataTables jQuery plugin
$(document).ready(function() {
    var oTable = $('#dataTable1').dataTable({info: false,paging:false});
    $('select#subject').change( function () { oTable.fnFilter( this.value, 0); } );
    $('select#grade').change( function () { oTable.fnFilter( this.value, 1); } );
    $('select#semester').change( function () { oTable.fnFilter( this.value, 2); } );
    $('select#exam').change( function () { oTable.fnFilter( this.value, 3); } );
});