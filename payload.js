function awaitpl() {
window.msgs.innerHTML="<h1 style=color:#87FF33>"+LoadedMSG+"</h1>";
}

function load_exploit(){
msgs.innerHTML="Jailbreak yuklanmoqda ... Iltimos, kuting!!!";
setTimeout(poc, 1500);
}

function load_exploit_done(){
msgs.innerHTML="Jailbreak yuklandi!!!";
}

function load_goldhen212(){
msgs.innerHTML="Loading Jailbreak + GoldHEN v2.1.2 ... Please Wait !!!";
LoadedMSG="GoldHEN v2.1.2 Loaded... Press OK Now !!!";
PLfile = "goldhen212.bin";
exec_type = "payload";
toogle_payload();
}

function load_goldhen222(){
msgs.innerHTML="Loading Jailbreak + GoldHEN v2.2.2 ... Please Wait !!!";
LoadedMSG="GoldHEN v2.2.2 Loaded... Press OK Now !!!";
PLfile = "goldhen222.bin";
exec_type = "payload";
toogle_payload();
}

function load_app2usb(){
msgs.innerHTML="Loading Jailbreak + AppUsb... Please Wait !!!";
LoadedMSG="AppUsb Loaded... Press OK Now !!!";
PLfile = "app2usb.bin";
exec_type = "payload";
toogle_payload();
}

function load_ps4debug(){
msgs.innerHTML="Loading Jailbreak + Ps4Debug... Please Wait !!!";
LoadedMSG="Ps4Debug Loaded... Press OK Now !!!";
PLfile = "ps4debug.bin";
exec_type = "payload";
toogle_payload();
}

function load_disableUpdates(){
msgs.innerHTML="Loading Jailbreak + Disable Updates... Please Wait !!!";
LoadedMSG="Disable Updates Loaded... Press OK Now !!!";
PLfile = "disableupdates.bin";
exec_type = "payload";
toogle_payload();
}

function load_dbackup(){
msgs.innerHTML="Loading Jailbreak + Ps4 db Backup... Please Wait !!!";
LoadedMSG="DB Backup Loaded... Press OK Now !!!";
PLfile = "backup.bin";
exec_type = "payload";
toogle_payload();
}

function load_fanthreshold(){
var script = document.createElement('script');script.src = "fanthreshold.js";localStorage.setItem('fanthreshold', tempC.value);document.getElementsByTagName('head')[0].appendChild(script);
msgs.innerHTML="Loading Jailbreak + Fan Threshold... Please Wait !!!";
LoadedMSG="Fan Threshold Loaded... Press OK Now !!!";
exec_type = "payload";
setTimeout(poc,1500);
}

function load_webactivator(){
var script = document.createElement('script');script.src = "webactivator.js";document.getElementsByTagName('head')[0].appendChild(script);
msgs.innerHTML="Loading Jailbreak + Web Activator... Please Wait !!!";
LoadedMSG="Web Activator Loaded... Press OK Now !!!";
exec_type = "payload";
setTimeout(poc,1500);
}

function load_orbistoolbox(){
msgs.innerHTML="Loading Jailbreak + Orbis Toolbox Alfa v1190... Please Wait !!!";
LoadedMSG="Orbis Toolbox Alfa v1190 Loaded... Press OK Now !!!";
PLfile = "OrbisToolbox900.bin";
exec_type = "payload";
toogle_payload();
}