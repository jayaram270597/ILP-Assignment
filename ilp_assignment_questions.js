
	window.onload = function() {
  	document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="unix_easy.txt" ></object>';
	};
	
    function change(radio) { 
	var e = document.getElementById("course_id");
	var strUser = e.options[e.selectedIndex].value;
	if ( strUser=="unix" ){
        if ( radio.id == "easy") {

	    document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="unix_easy.txt" ></object>';
		
        }
	else if( radio.checked && radio.id == "int"){
	    document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="unix_intermediate.txt" ></object>';
	}
	else {
            document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="unix_difficult.txt" ></object>'
        }
	}
	else if( strUser=="mysql"){
	 if ( radio.id == "easy") {

	    document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="mysql_easy.txt" ></object>';
		
        }
	else if( radio.checked && radio.id == "int"){
	    document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="mysql_intermediate.txt" ></object>';
	}
	else {
            document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="mysql_difficult.txt" ></object>'
        }
	}
	else if(strUser=="python"){
	if ( radio.id == "easy") {

	    document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="python_easy.txt" ></object>';
		
        }
	else if( radio.checked && radio.id == "int"){
	    document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="python_intermediate.txt" ></object>';
	}
	else {
            document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="python_difficult.txt" ></object>'
        }
	}
    }
	
	function changeCourse() 
	{
	  strUser = document.getElementById("course_id").value;
	  if ( strUser=="unix" ){
        if ( document.getElementById('easy').checked) {

	    document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="unix_easy.txt" ></object>';
		
        }
	else if( document.getElementById('int').checked){
	    document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="unix_intermediate.txt" ></object>';
	}
	else if (document.getElementById('diff').checked){
            document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="unix_difficult.txt" ></object>'
        }
	}
	else if( strUser=="mysql"){
	 if ( document.getElementById('easy').checked) {

	    document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="mysql_easy.txt" ></object>';
		
        }
	else if( document.getElementById('int').checked){
	    document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="mysql_intermediate.txt" ></object>';
	}
	else if (document.getElementById('diff').checked){
            document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="mysql_difficult.txt" ></object>'
        }
	}
	else if(strUser=="python"){
	if ( document.getElementById('easy').checked) {

	    document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="python_easy.txt" ></object>';
		
        }
	else if( document.getElementById('int').checked){
	    document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="python_intermediate.txt" ></object>';
	}
	else if(document.getElementById('diff').checked){
            document.getElementById("content").innerHTML = '<object class="innercontent" type="text/html" data="python_difficult.txt" ></object>'
        }
	}
	}
