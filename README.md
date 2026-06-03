# Portfolio — Mohamed Anes El Marzouki

Portfolio personnel (one-page, FR/EN, dark néon) — site statique, sans build.

## 🚀 Mettre en ligne sur GitHub Pages

### Option A — Interface web GitHub (la plus simple)
1. Crée un dépôt sur GitHub, par ex. **`mohamed-el-marzouki.github.io`**
   *(ce nom exact = site dispo direct sur `https://mohamed-el-marzouki.github.io`)*
   ou un nom quelconque, ex. `portfolio` (le site sera alors sur `…/portfolio/`).
2. Clique **Add file → Upload files** et dépose **tout le contenu** de ce dossier :
   - `index.html`
   - le dossier `portfolio/`
   - le fichier `.nojekyll`
3. **Commit**.
4. Va dans **Settings → Pages**.
5. Sous **Build and deployment → Source**, choisis **Deploy from a branch**.
6. Branch : **main** / dossier : **/ (root)** → **Save**.
7. Patiente 1–2 min : l'URL publique s'affiche en haut de la page Pages. 🎉

### Option B — En ligne de commande (Git)
```bash
git init
git add index.html portfolio .nojekyll
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/<ton-user>/<ton-repo>.git
git push -u origin main
```
Puis active **Settings → Pages → Deploy from a branch → main / root**.

## 📁 Fichiers nécessaires au site
```
index.html              ← page d'accueil (servie par GitHub Pages)
.nojekyll               ← sert tous les fichiers tels quels
portfolio/
  styles.css            app.js  effects.js  i18n.js  image-slot.js
  tweaks-panel.jsx      tweaks.jsx
  portrait.jpg          og-image.png
  logareth.png  vinbot.png  ronin.png  octave.png
  CV-Mohamed-El-Marzouki.pdf
  icons/*.svg
```
Les dossiers `uploads/`, `screenshots/`, `mockups/` et `CV.html` ne sont **pas** nécessaires au site (voir `.gitignore`).

## 🔗 Aperçu de partage (optionnel)
Pour que l'aperçu (LinkedIn, etc.) affiche l'image, remplace dans `index.html`
les 2 balises `og:image` / `twitter:image` par l'URL **absolue** une fois ton URL connue :
```html
<meta property="og:image" content="https://<ton-user>.github.io/portfolio/og-image.png" />
```
