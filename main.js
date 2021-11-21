<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<script>
function validateForm() {
    var x = document.forms["contact"]["Name"].value;
    var y = document.forms["contact"]["Email"].value;
    var z = document.forms["contact"]["Email"].value;
    if (x == "") {
        alert("Name must be filled");
        return false;
    }
    if(y==""){
        alert ("Email must be filled");
        return false
    }
    if(z==""){
        alert ("Your Message must be filled");
        return false
    }
}
</script>


</body>
</html>