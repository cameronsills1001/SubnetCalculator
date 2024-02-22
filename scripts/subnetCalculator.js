
//run calculator when button is pressed
$("#calculate").click(calculate);

//run calculator when 'enter' is pressed
$(document).keydown(function(e) {
    if(e.which == 13) {
        calculate();
    }
});


function validateInfo(ip, subnet) {
    let  infoValid = true;

    if(!validIP(ip)){
        alert("The IP address given is invalid.");
        infoValid = false;
    }

    if (!validSubnet(subnet)) {
        alert("The subnet mask or CIDR given is invalid");
        infoValid = false;
    }
    return infoValid;

}

function calculate() {
    //get values from inputs
    let ip = $("#ip").val();
    let subnet = $("#subnet").val();

    if(validateInfo(ip, subnet)) {
        //get subnet info from ipAddressInfo.js
    let subnetInfo = getSubnetInfo(ip, subnet);

    //assign values
    $("#ip-address").text(subnetInfo.ip);
    $("#subnet-mask").text(subnetInfo.mask);
    $("#network-address").text(subnetInfo.networkAddress);
    $("#wildcard-mask").text(subnetInfo.wildcard);
    $("#cidr").text(subnetInfo.cidr);
    $("#first-host").text(subnetInfo.firstHost);
    $("#last-host").text(subnetInfo.lastHost);
    $("#broadcast").text(subnetInfo.broadcast);
    $("#num-hosts").text(subnetInfo.hosts);
    }
    
}


