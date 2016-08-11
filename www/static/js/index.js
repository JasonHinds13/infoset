$(document).ready(function (){
  $.get("/hosts/192.168.1.1/layer1", function(results){
    var ports = $.map(results, function(obj) { return obj });
    var table = "<table border=1><tr>";
    table += "<th> Admin Status </th><th> Alias </th><th> Description </th><th> High Speed </th><th> In Octects </th>";
    table += "<th> Index </th><th> Last Change </th><th> Name </th><th> OperStatus </th>";
    table += "<th> Out Octets </th><th> Physical Address </th><th> Speed </th><th> Type </th></tr>";
    $.each(ports, function(index, port){
      table += "<tr>";
      table += "<td>"+port.ifAdminStatus+"</td>";
      table += "<td>"+port.ifAlias+"</td>";
      table += "<td>"+port.ifDescr+"</td>";
      table += "<td>"+port.ifHighSpeed+"</td>";
      table += "<td>"+port.ifInOctets+"</td>";
      table += "<td>"+port.ifIndex+"</td>";
      table += "<td>"+port.ifLastChange+"</td>";
      table += "<td>"+port.ifName+"</td>";
      table += "<td>"+port.ifOperStatus+"</td>";
      table += "<td>"+port.ifOutOctets+"</td>";
      table += "<td>"+port.ifPhysAddress+"</td>";
      table += "<td>"+port.ifSpeed+"</td>";
      table += "<td>"+port.ifType+"</td></tr>";
    });

    table += "</table>";
    $("#tab").append(table);
  });
});
