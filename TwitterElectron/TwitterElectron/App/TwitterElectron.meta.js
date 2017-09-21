Bridge.assembly("TwitterElectron", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = [System,TwitterElectron.RendererProcess,TwitterElectron.MainProcess];
    $m($n[1].OptionsForm, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"InitGlobals","is":true,"t":8,"sn":"InitGlobals","rt":$n[0].Void},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void},{"a":2,"n":"Electron","is":true,"t":4,"rt":Bridge.virtualc("Electron.AllElectron"),"sn":"Electron"}]}; });
    $m($n[1].TwitterListener, function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].String,$n[0].String,$n[0].String],"pi":[{"n":"consumerKey","pt":$n[0].String,"ps":0},{"n":"consumerSecret","pt":$n[0].String,"ps":1},{"n":"accessTokenKey","pt":$n[0].String,"ps":2},{"n":"accessTokenSecret","pt":$n[0].String,"ps":3}],"sn":"ctor"},{"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"a":2,"n":"Filter","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_Filter","t":8,"rt":$n[0].String,"fg":"Filter"},"s":{"a":2,"n":"set_Filter","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"Filter"},"fn":"Filter"},{"a":1,"n":"_client","t":4,"rt":Twitter,"sn":"_client","ro":true},{"a":1,"n":"_stream","t":4,"rt":$n[1].TwitterStream,"sn":"_stream"},{"a":2,"n":"OnError","t":2,"ad":{"a":2,"n":"add_OnError","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnError","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnError","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnError","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnReceived","t":2,"ad":{"a":2,"n":"add_OnReceived","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnReceived","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnReceived","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnReceived","rt":$n[0].Void,"p":[Function]}}]}; });
    $m($n[1].MainForm, function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":1,"n":"AddRecord","is":true,"t":8,"pi":[{"n":"tweet","pt":$n[1].Tweet,"ps":0}],"sn":"AddRecord","rt":$n[0].Void,"p":[$n[1].Tweet]},{"a":1,"n":"CreateNotification","is":true,"t":8,"pi":[{"n":"tweet","pt":$n[1].Tweet,"ps":0}],"sn":"CreateNotification","rt":$n[0].Void,"p":[$n[1].Tweet]},{"a":2,"n":"InitGlobals","is":true,"t":8,"sn":"InitGlobals","rt":$n[0].Void},{"a":1,"n":"InitListener","is":true,"t":8,"sn":"InitListener","rt":$n[1].TwitterListener},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void},{"a":2,"n":"Electron","is":true,"t":4,"rt":Bridge.virtualc("Electron.AllElectron"),"sn":"Electron"},{"a":1,"n":"_credentials","is":true,"t":4,"rt":System.Object,"sn":"_credentials"},{"a":1,"n":"_lastNotificationDate","is":true,"t":4,"rt":$n[0].Nullable$1(System.DateTime),"sn":"_lastNotificationDate","box":function ($v) { return Bridge.box($v, System.DateTime, System.Nullable.toStringFn(System.DateTime.format), System.Nullable.getHashCode);}},{"a":1,"n":"_listener","is":true,"t":4,"rt":$n[1].TwitterListener,"sn":"_listener"}]}; });
    $m($n[2].App, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CreateMainWindow","is":true,"t":8,"sn":"CreateMainWindow","rt":$n[0].Void},{"a":1,"n":"CreateOptionsWindow","is":true,"t":8,"sn":"CreateOptionsWindow","rt":Electron.BrowserWindow},{"a":1,"n":"CreateSplashScreen","is":true,"t":8,"sn":"CreateSplashScreen","rt":Electron.BrowserWindow},{"a":2,"n":"InitGlobals","is":true,"t":8,"sn":"InitGlobals","rt":$n[0].Void},{"a":1,"n":"InitIPC","is":true,"t":8,"sn":"InitIPC","rt":$n[0].Void},{"a":1,"n":"LoadWindow","is":true,"t":8,"pi":[{"n":"win","pt":Electron.BrowserWindow,"ps":0},{"n":"page","pt":$n[0].String,"ps":1}],"sn":"LoadWindow","rt":$n[0].Void,"p":[Electron.BrowserWindow,$n[0].String]},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void},{"a":1,"n":"SetMainMenu","is":true,"t":8,"sn":"SetMainMenu","rt":$n[0].Void},{"a":1,"n":"ShowTrayIcon","is":true,"t":8,"sn":"ShowTrayIcon","rt":$n[0].Void},{"a":1,"n":"StartApp","is":true,"t":8,"pi":[{"n":"launchInfo","pt":$n[0].Object,"ps":0}],"sn":"StartApp","rt":$n[0].Void,"p":[$n[0].Object]},{"a":1,"n":"ToggleStartStopMenuItems","is":true,"t":8,"sn":"ToggleStartStopMenuItems","rt":$n[0].Void},{"a":2,"n":"AppIcon","is":true,"t":4,"rt":Electron.Tray,"sn":"AppIcon"},{"a":2,"n":"ContextMenu","is":true,"t":4,"rt":Electron.Menu,"sn":"ContextMenu"},{"a":2,"n":"Electron","is":true,"t":4,"rt":Bridge.virtualc("Electron.AllElectron"),"sn":"Electron"},{"a":2,"n":"Win","is":true,"t":4,"rt":Electron.BrowserWindow,"sn":"Win"},{"a":1,"n":"_credentials","is":true,"t":4,"rt":System.Object,"sn":"_credentials"}]}; });
});
