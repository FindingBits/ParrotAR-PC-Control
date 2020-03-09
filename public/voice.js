var socket = io.connect();
var hehe=0;
function main(val,trick){
	if(val=='takeoff'){ hehe=1; socket.emit('takeoff');}
	else if(val=='land'){ hehe=0; socket.emit('land');}
	else if(val=='hover') socket.emit('hover');
	else if(val=='trick') socket.emit('trick',trick);
	else if(val=='calibrate') socket.emit('calibrate');
	else if(val=='disableEmergency') socket.emit('disableEmergency');
	else if(val=='flat') socket.emit('flat');
	else if(val=='up') socket.emit('up',(document.getElementById("slider").value/10));
	else if(val=='down') socket.emit('down',(document.getElementById("slider").value/10));
	else if(val=='front') socket.emit('front',(document.getElementById("slider").value/10));
	else if(val=='back') socket.emit('back',(document.getElementById("slider").value/10));
	else if(val=='left') socket.emit('left',(document.getElementById("slider").value/10));
	else if(val=='right') socket.emit('right',(document.getElementById("slider").value/10));
	else if(val=='CW') socket.emit('CW',(document.getElementById("slider").value/10));
	else if(val=='cCW') socket.emit('cCW',(document.getElementById("slider").value/10));
	else if(val=='camera0') socket.emit('camera0');
	else if(val=='camera3') socket.emit('camera3');
}
function flight(val){
	if(val==0){
		document.getElementById("flat").disabled=false;
		document.getElementById("tra").disabled=true;
		document.getElementById("takeoff").disabled=false;
		document.getElementById("land").disabled=true;
		document.getElementById("hover").disabled=true;
		document.getElementById("recover").disabled=true;
		document.getElementById("calibrate").disabled=true;
		document.getElementById("slider").disabled=true;
		document.getElementById("up").disabled=true;
		document.getElementById("down").disabled=true;
		document.getElementById("front").disabled=true;
		document.getElementById("back").disabled=true;
		document.getElementById("left").disabled=true;
		document.getElementById("right").disabled=true;
		document.getElementById("CW").disabled=true;
		document.getElementById("cCW").disabled=true;
		document.getElementById("trick").disabled=true;
		document.getElementById("tricks").disabled=true;
	}else if(val==1){
		document.getElementById("flat").disabled=true;
		document.getElementById("tra").disabled=false;
		document.getElementById("takeoff").disabled=true;
		document.getElementById("land").disabled=false;
		document.getElementById("hover").disabled=false;
		document.getElementById("recover").disabled=true;
		document.getElementById("calibrate").disabled=false;
		document.getElementById("slider").disabled=false;
		document.getElementById("up").disabled=false;
		document.getElementById("down").disabled=false;
		document.getElementById("front").disabled=false;
		document.getElementById("back").disabled=false;
		document.getElementById("left").disabled=false;
		document.getElementById("right").disabled=false;
		document.getElementById("CW").disabled=false;
		document.getElementById("cCW").disabled=false;
		document.getElementById("trick").disabled=false;
		document.getElementById("tricks").disabled=false;
	}
}