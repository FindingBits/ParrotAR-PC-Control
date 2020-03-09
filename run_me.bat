@echo off
echo =================================
echo Node.Falcon - Server Booting UP
echo =================================
start cmd /C "node drone.js"
timeout 3
start chrome "http://localhost:3000"
timeout 3