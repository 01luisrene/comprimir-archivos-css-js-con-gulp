function user_agent(){

	var $agenteUsuario = navigator.userAgent;
	var $contenedorTextAgenteUsuario = document.getElementById('user-agent');

	$contenedorTextAgenteUsuario.innerHTML = $agenteUsuario;
}

window.onload = function(){
	user_agent();
}