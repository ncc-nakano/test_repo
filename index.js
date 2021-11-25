
function test() {
    alert('hoge');
}

function calculate() {
    var lat1 = document.getElementById("latitude1").value;
    var lng1 = document.getElementById("longitude1").value;
    var lat2 = document.getElementById("latitude2").value;
    var lng2 = document.getElementById("longitude2").value;

    var radLat1 = lat1 * (Math.PI/180);
    var radLng1 = lng1 * (Math.PI/180);
    var radLat2 = lat2 * (Math.PI/180);
    var radLng2 = lng2 * (Math.PI/180);

    

}