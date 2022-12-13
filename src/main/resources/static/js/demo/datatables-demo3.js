// Call the dataTables jQuery plugin
$(document).ready(function() {
    var oTable = $('#dataTable1').dataTable({dom: 'lrt',info: false, ordering: false, displayLength: 8});
    $('select#subject').change( function () { oTable.fnFilter( this.value, 2); } );
    $('select#grade').change( function () { oTable.fnFilter( this.value, 0); } );
    $('select#semester').change( function () { oTable.fnFilter( this.value, 1); } );
});
// columnDefs: [{ targets: [0,1], visible:false }]