# luciacam.app

Statische Seite, kein Build. `index.html` + `img/` + `mac/` (Weiterleitung fuer den Knopf GET LUCIA FOR MAC in der App).
Hosting: GitHub Pages, Domain per `CNAME`. Bilder aus `LUCIA/Instagram/Lucia Link 261028` (Mockup 261028), als WebP.
TestFlight: ein Public Link fuer alle Plattformen (Gruppe „Lucia EDC beta“, join/BrkD2jyF); der Mac-Build muss in App Store Connect derselben Gruppe zugeteilt sein.

## Beta-Schalter

`beta.js`: `betaOnline: false` zeigt die Warteliste (Startseite) und „soon“ (/mac). Auf `true` stellen, sobald Mac- UND iPhone-Build in TestFlight liegen: dann fuehren die Knoepfe zu TestFlight und /mac zeigt die Schritte. Die Seiten erkennen das Geraet (iPhone, iPad, Mac, anderes). Zum Ansehen ohne Geraet: `/mac/?als=mac&beta=1`, `?als=ipad`, `?als=iphone`, `?als=andere`.
