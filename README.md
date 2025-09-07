# MinuTrenn — PWA näidis

See on lihtne PWA (Progressive Web App) front-end, mille saad kohe üles laadida GitHub Pages'is.
Inspiratsioon: sinuTrenn.ee stiil (struktuur + sektsioonid), kuid oma sisu jaoks.

## Kiirstart (GitHub Pages)
1. Loo uus repo, nt `my-trenn`.
2. Lae kõik selle kausta failid repo juurkausta.
3. Ava **Settings → Pages** ja vali `main` / root.
4. Ava `https://<kasutajanimi>.github.io/my-trenn/`.
5. Kontrolli PWA-d: brauseri aadressiriba menüüs kuvatakse „Install“ / „Add to Home Screen“.

## Kohanda
- **Sisu**: muuda `index.html` tekste ja lisa oma pildid kausta `img/`.
- **Vorm**: `index.html` → `form action` asenda oma Formspree/Netlify/Google Forms aadressiga.
- **Värvid ja stiil**: `css/style.css`.
- **Ikoonid**: asenda `img/icon-192.png` ja `img/icon-512.png` oma ikoonidega.
- **Manifesta**: `manifest.json` → `name`, `short_name`, värvid.

## Märkused
- Teenib hästi GitHub Pages'i alamkataloogis tänu suhtelistele radadele (./).
- `service-worker.js` kasutab lihtsat „cache-first“ strateegiat offline vaate jaoks.
- Kui teed struktuuris muudatusi, suurenda vahemälu nime (`minutrenn-v1` → `v2`).

Head ehitamist!
