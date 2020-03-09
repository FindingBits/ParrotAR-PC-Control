var socket = io.connect();
socket.on('info', function(data){
	try{
			// info de voo
			document.getElementById("batteryPercentage").innerHTML="Bateria: "+data.demo["batteryPercentage"]+' %';
			document.getElementById("frontBackDegrees").innerHTML="Ângulo(F/T): "+Math.round(data.demo["frontBackDegrees"]);
			document.getElementById("leftRightDegrees").innerHTML="Ângulo(E/D): "+Math.round(data.demo["leftRightDegrees"]);
			document.getElementById("clockwiseDegrees").innerHTML="Ângulo(Rot): "+Math.round(data.demo["clockwiseDegrees"]);
			document.getElementById("altitudeMeters").innerHTML="Altitude(metros): "+Math.round(data.demo["altitudeMeters"]);
			// luzes principal
			if(data.droneState["lowBattery"]=="1"){
				document.getElementById("lowBattery").style.backgroundColor = 'red';
				blink(1,"lowBattery");
			}else{
				document.getElementById("lowBattery").style.backgroundColor = 'green';
				blink(0,"lowBattery");
			}
			if(data.droneState["motorProblem"]=="1"){
				document.getElementById("motorProblem").style.backgroundColor = 'red';
				blink(1,"motorProblem");
			}else{
				document.getElementById("motorProblem").style.backgroundColor = 'green';
				blink(0,"motorProblem");
			}
			if(data.droneState["MagnometerNeedsCalibration"]=="1"){
				document.getElementById("MagnometerNeedsCalibration").style.backgroundColor = 'red';
				blink(1,"MagnometerNeedsCalibration");
			}else{
				document.getElementById("MagnometerNeedsCalibration").style.backgroundColor = 'green';
				blink(0,"MagnometerNeedsCalibration");
				}
			// luzes secundarias
			if(data.droneState["tooMuchWind"]=="1"){
				document.getElementById("tooMuchWind").style.backgroundColor = 'red';
				blink(1,"tooMuchWind");
			}else{
				document.getElementById("tooMuchWind").style.backgroundColor = 'green';
				blink(0,"tooMuchWind");
			}
			if(data.droneState["cutoutDetected"]=="1"){
				document.getElementById("cutoutDetected").style.backgroundColor = 'red';
				document.getElementById("recover").disabled=false;
				blink(1,"cutoutDetected");
			}else{
				document.getElementById("cutoutDetected").style.backgroundColor = 'green';
				document.getElementById("recover").disabled=true;
				blink(0,"cutoutDetected");
			}
			if(data.droneState["softwareFault"]=="1"){
				document.getElementById("softwareFault").style.backgroundColor = 'red';
				blink(1,"softwareFault");
			}else{
				document.getElementById("softwareFault").style.backgroundColor = 'green';
				blink(0,"softwareFault");
			}
			if(data.droneState["ultrasonicSensorDeaf"]=="1"){
				document.getElementById("ultrasonicSensorDeaf").style.backgroundColor = 'red';
				blink(1,"ultrasonicSensorDeaf");
			}else{
				document.getElementById("ultrasonicSensorDeaf").style.backgroundColor = 'green';
				blink(0,"ultrasonicSensorDeaf");
			}
			// luzes cameras
			if(data.droneState["visionEnabled"]=="1"){
				document.getElementById("visionEnabled").style.backgroundColor = 'red';
				blink(1,"visionEnabled");
			}else{
				document.getElementById("visionEnabled").style.backgroundColor = 'green';
				blink(0,"visionEnabled");
			}
		function blink(val,obj){
			if(val==1){
				document.getElementById(obj).classList.add('blink');
			}else{
				document.getElementById(obj).classList.remove('blink');
			}
		}

	}
	catch{

	}
});
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

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 18 && hehe==1) {
    	main('hover');
	}
	else if(event.keyCode == 37 && hehe==1){
		main('left');
	}
	else if(event.keyCode == 39 && hehe==1){
		main('right');
	}
	else if(event.keyCode == 38 && hehe==1){
		main('front');
	}
	else if(event.keyCode == 40 && hehe==1){
		main('back');
	}
	else if(event.keyCode == 16 && hehe==1){
		main('up');
	}
	else if(event.keyCode == 17 && hehe==1){
		main('down');
	}
	else if(event.keyCode == 226 && hehe==1){
		main('cCW');
	}
	else if(event.keyCode == 90 && hehe==1){
		main('CW');
	}
});