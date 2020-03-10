# ParrotAR-PC-Control / Node.Falcon
![Image of Drone](https://github.com/FrancesinhaMan/ParrotAR-PC-Control/blob/master/public/image2.png)

### THIS PROJECT WON [PAPTICe](http://www.anpri.pt/pap/) SOFTWARE CONTEST, uma iniciativa promovida pela Associação Nacional de Professores de Informática (ANPRI), que tem por objetivo reconhecer o trabalho desenvolvido no ensino profissional, valorizando a excelência, inovação, criatividade e emprendedorismo.
**It has finally arrived!**
Control your Parrot **AR Drone 2.0** (or 1.0) using your PC

* Original project name is **Node.Falcon** (Joined Node.js and the word Falcon)

#### Currently non compatible with git-cone: 
![Image of IO](https://travis-ci.org/FrancesinhaMan/ParrotAR-PC-Control.svg?branch=master)

## Features!
* **Modern Design** Web Interface
  * Using HTML5 and Bootstrap 4
* **Learning** for unexperienced pilots
  * With several sections of commands divided in chapters
* **Cockpit** with buttons and responding to keyboard commands
  * Video Feed From Both Cameras (selectable)
  * Expandable interface
  * Information regarding the drone, crucial to the flight
* **Voice Cockpit** (Voice control your drone!)
* **Information Page** to know every single information your drone makes available
  * Organized in a table

## Main Page 
![Image of Drone](https://github.com/FrancesinhaMan/ParrotAR-PC-Control/blob/master/public/image6.PNG)
## Help Page
![Image of Drone](https://github.com/FrancesinhaMan/ParrotAR-PC-Control/blob/master/public/image8.PNG)
#### Introduction Chapter
![Image of Drone](https://github.com/FrancesinhaMan/ParrotAR-PC-Control/blob/master/public/image9.PNG)
#### Advanced Chapter
![Image of Drone](https://github.com/FrancesinhaMan/ParrotAR-PC-Control/blob/master/public/image10.PNG)
#### Voice Chapter
![Image of Drone](https://github.com/FrancesinhaMan/ParrotAR-PC-Control/blob/master/public/image11.PNG)
#### About me Chapter :)
![Image of Drone](https://github.com/FrancesinhaMan/ParrotAR-PC-Control/blob/master/public/image12.PNG)

## Cockpit Page
![Image of Drone](https://github.com/FrancesinhaMan/ParrotAR-PC-Control/blob/master/public/image15.PNG)
#### Cockpit Page (expanded)
![Image of Drone](https://github.com/FrancesinhaMan/ParrotAR-PC-Control/blob/master/public/image16.PNG)

## Voice Cockpit Page
![Image of Drone](https://github.com/FrancesinhaMan/ParrotAR-PC-Control/blob/master/public/image17.PNG)

## Information Page
![Image of Drone](https://github.com/FrancesinhaMan/ParrotAR-PC-Control/blob/master/public/image20.PNG)


## What is needed to get started!
* **Parrot AR Drone 1.0/2.0** (yes works on both!)
* A **Laptop/Computer** with **Wireless** conectivity
* A **Headset**
* **Node.js** installed in your machine
* **A Smile!**

## Instructions to work!
1. Extract elements in node_modules/node_modules.zip in present directory (replace all)
2. Connect to your Drone Wifi
3. Run **run_me.bat** or open cmd in folder directory and type `node drone.js` and open a browser (Chrome Preferable) and go to `localhost:3000`
4. Enjoy controlling your drone in a more advanced way!

## Voice instructions
1. Allow Microphone in browser
2. Hit the Microphone image (will beep)
3. Say command (Ex: TAKEOFF)
4. (will beep) And recognize command
5. Action will perform

## Used modules
* Express
* JavaScript
* dronestream
* ar-drone
* socket.io
* Pocketsphinx
* Bootstrap
* JQuery

# Special Thanks to creators of:
* node-Dronestream [@bkw](https://github.com/bkw)
* node-ar-drone [@felixge](https://github.com/felixge)
* pocketsphinx.js [@syl22-00](https://github.com/syl22-00)
