function calculate() 
{
    // alert("dfss");
     var amount = 0;
    var items = document.getElementsByName("pizza");
    for ( let i=0; i<items.length; i++){
        if(items[i].checked){
            amount +=  parseInt(items[i].value);
        }
    }
    $("#cusName").html("Dear Customer: "+document.getElementById("customerName").value);
    document.getElementById("ttlCost").innerHTML = amount+"$";

    //  var fstValue = $("#oil1").val();
    
    //  if(fstValue!="" && fstValue>0)
    //  {
    //  amount1 = parseFloat(fstValue) * 2;
    //  }
    //  alert('Total Cost: $' +amount1 +'\nThanks for placing your order');
}
