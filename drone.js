// server creation
var express = require('express'),app=express(),server=require('http').createServer(app);
var fs=require('fs');
var blackBoxText="";
app.use(express.static(__dirname + '/public'));

// ar-drone library declaration and navdata to cockpit
var arDrone = require('ar-drone');
var drone  = arDrone.createClient();
drone.config('general:navdata_demo', 'FALSE');
drone.config('video:video_enable', 'TRUE');

// comunications
var io = require('socket.io')(server, { pingTimeout: 60000});
io.on('connection', function(client) {
    console.log('Conection established!');
    console.log('Signal drone ready [GREEN LED BLINK]');
    drone.animateLeds('blinkGreen', 5, 4);

    // camera controls
    client.on('camera0', function(data) {
        console.log('FrontCamera...');
        blackBoxText+='|CHANGE-SETTING: Change camera to FRONT|\n';
        drone.config('video:video_channel', 0);
    });
    client.on('camera3', function(data) {
        console.log('BottomCamera...');
        blackBoxText+='|CHANGE-SETTING: Change camera to BOTTOM|\n';
        drone.config('video:video_channel', 3);
    });

    // Dados para o cockpit
    drone.on('navdata', (data)=>{
        io.emit('info', data);
    });

    //Main controls
    client.on('takeoff', function(data) {
        console.log('Takeoff...');
        blackBoxText+='|ACTION: TAKEOFF|\n';
        drone.takeoff();
    });
    client.on('land', function(data) {
        console.log('Land...');
        blackBoxText+='|ACTION: LAND|\n';
        fs.writeFile("tmp/previousFlightLOG.txt",blackBoxText,function(err) {if(err) {return console.log(err);}});
        blackBoxText="";
        drone.stop();
        drone.land();
    });
    client.on('hover', function(data) {
        console.log('Hover...');
        blackBoxText+='|ACTION: HOVER|\n';
        drone.stop();
    });
    client.on('disableEmergency', function(data) {
        console.log('DisableEmergency...');
        blackBoxText+='<--> WARNING <--> |Drone may have had accident! ACTION: Disable Emergency|\n';
        drone.disableEmergency();
    });
    
    //tricks
    client.on('trick', function(data) {
        console.log('Playing trick...: '+data);
        blackBoxText+='|ACTION: PLAYED TRICK ->'+data+'|\n';
        var val=0;
        if(data=='flipAhead' || data=='flipBehind' || data=='flipLeft' || data=='flipRight'){
            val=800;
            console.log('Flip detected!');
        }
        else val=3000;
        drone.animate(data, val);
    });

    //Calibration
    client.on('calibrate', function(data) {
        console.log('Calibration...');
        blackBoxText+='<--> WARNING <--> |ACTION: Calibration|\n';
        drone.stop();
        drone.calibrate(0);
    });
    client.on('flat', function(data) {
        console.log('FlatTrim...');
        blackBoxText+='<--> WARNING <--> |ACTION: Flat-Trim|\n';
        drone.ftrim();
    });

    //Axle movement
    client.on('up', function(data) {
        console.log('Moving UP...By: '+data);
        blackBoxText+='|ACTION: Moving UP...By: '+data+'|\n';
        drone.up(data);
    });
    client.on('down', function(data) {
        console.log('Moving DOWN...By: '+data);
        blackBoxText+='|ACTION: Moving DOWN...By: '+data+'|\n';
        drone.down(data);
    });
    client.on('left', function(data) {
        console.log('Moving LEFT...By: '+data);
        blackBoxText+='|ACTION: Moving LEFT...By: '+data+'|\n';
        drone.left(data);
    });
    client.on('right', function(data) {
        console.log('Moving RIGHT...By: '+data);
        blackBoxText+='|ACTION: Moving RIGHT...By: '+data+'|\n';
        drone.right(data);
    });
    client.on('front', function(data) {
        console.log('Moving FRONT...By: '+data);
        blackBoxText+='|ACTION: Moving FRONT...By: '+data+'|\n';
        drone.front(data);
    });
    client.on('back', function(data) {
        console.log('Moving BACK...By: '+data);
        blackBoxText+='|ACTION: Moving BACK...By: '+data+'|\n';
        drone.back(data);
    });

    //Rotation movement
    client.on('CW', function(data) {
        console.log('Moving ClockWise...By: '+data);
        blackBoxText+='|ACTION: Moving ClockWise...By: '+data+'|\n';
        drone.clockwise(data);
    });
    client.on('cCW', function(data) {
        console.log('Moving Counter-Clockwise...By: '+data);
        blackBoxText+='|ACTION: Moving Counter-ClockWise...By: '+data+'|\n';
        drone.counterClockwise(data);
    });
});

// server listener
require("dronestream").listen(3001);
server.listen(3000, function(){
  console.log('3000 port Opened!');
}); 