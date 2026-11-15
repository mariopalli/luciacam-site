// EIN SCHALTER FUER DIE GANZE SEITE.
// false: die Knoepfe GET THE BETA zeigen die Warteliste, /mac sagt "soon".
// true:  die Knoepfe fuehren zu TestFlight, /mac zeigt die Schritte.
// Umlegen, sobald Mac- UND iPhone-Build in TestFlight liegen.
window.LUCIA = {
  betaOnline: false,
  testflightApp: "https://apps.apple.com/app/testflight/id899247664",
  join: "https://testflight.apple.com/join/4XkgSsub",
  // Welches Geraet schaut zu? Safari am iPad gibt sich als Mac aus; den
  // Unterschied macht der Touchscreen.
  geraet: (function () {
    var ua = navigator.userAgent || "";
    if (/iPhone|iPod/.test(ua)) return "iphone";
    if (/iPad/.test(ua)) return "ipad";
    if (/Macintosh/.test(ua)) return (navigator.maxTouchPoints || 0) > 1 ? "ipad" : "mac";
    return "andere";
  })()
};
