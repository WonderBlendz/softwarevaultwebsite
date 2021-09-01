$('#modal1').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});

$('#modal2').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal2 iframe').attr("src", $("#modal2 iframe").attr("src"));
});

$('#modal3').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal3 iframe').attr("src", $("#modal3 iframe").attr("src"));
});