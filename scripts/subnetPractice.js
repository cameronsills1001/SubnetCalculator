

$("#new-subnet").click(generateSubnet);
$(".inv-field").click(function() {
    $(this).toggleClass("masked");
})


function generateSubnet() {

    let ip;
    let cidr;
    let ipClass = Math.floor(Math.random() * 3);

    //generate ip by class
    if(ipClass == 0) {
        ip  = `10.${generateRange(0,255)}.${generateRange(0,255)}.${generateRange(0,255)}`;
        cidr = generateRange(8, 30);
    } else if (ipClass == 1) {
        ip = `172.${generateRange(16, 32)}.${generateRange(0,255)}.${generateRange(0,255)}`;
        cidr = generateRange(16, 30);
    } else {
        ip = `192.168.${generateRange(0,255)}.${generateRange(0,255)}`;
        cidr = generateRange(16, 30);
    }

    //determine if cidr or subnet mask is going to be hidden
    let subnetChoice = generateRange(0,2);
    if (subnetChoice == 0) {
        $("#subnet-mask").addClass("masked");
        $("#cidr").removeClass("masked");
    } else {
        $("#cidr").addClass("masked");
        $("#subnet-mask").removeClass("masked");
    }

    //mask all fields that should be hidden
    $(".inv").addClass("masked");
    
    //get subnet info from ipAddressInfo.js
    let subnetInfo = getSubnetInfo(ip, cidr);

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

function generateRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}