# DiidoCare Website

Website for DiidoCare, a home care, supported living and care staffing provider in Dublin.
Built with React and Vite.

## Project structure

```
DidoCare/
├── index.html              Page shell (title, meta tags, fonts)
├── public/                 Copied as-is into the build
│   ├── favicon.png
│   ├── .htaccess           Apache / cPanel config
│   └── _redirects          Netlify config
├── src/
│   ├── main.js            Entry point
│   ├── App.js             Routes, scroll handling, WhatsApp button
│   ├── components/         Navbar, Footer, Logo
│   ├── pages/              Home, About, Service, Contact
│   ├── styles/             index.css (colours, fonts), components.css, pages.css
│   └── assets/images/      Logo marks and photos/
├── website-upload/         Built site, ready to upload (created by npm run build)
├── vercel.json             Vercel config
├── package.json
└── vite.config.js
```

## Working on the site

```bash
npm install      # first time only
npm run dev      # local preview at http://localhost:5173
```

- **Text and content:** edit the files in `src/pages/`.
- **Colours:** change the variables at the top of `src/styles/index.css`.
- **Phone numbers and email:** used in `Footer.js`, `Contact.js`, `App.js` (WhatsApp button) and the WhatsApp links in `Home.js` / `Service.js`.

## Building for upload

```bash
npm run build
```

This creates the `website-upload/` folder. **Upload the contents of `website-upload/`**, not the whole project.

### Hosting notes

The site has separate page addresses (`/about`, `/service`, `/contact`). The host must
send those to `index.html`, or refreshing a page shows a 404. Config for this is included:

| Host | What to do |
|---|---|
| cPanel / Apache (e.g. Blacknight, Hostinger) | Upload everything inside `website-upload/` into `public_html/`. The `.htaccess` file is included; make sure hidden files are uploaded. |
| Netlify | Drag the `website-upload/` folder onto Netlify, or connect the repo with build command `npm run build` and publish directory `website-upload`. |
| Vercel | Import the project and set the output directory to `website-upload`. |

The site is built to run at the root of a domain (e.g. `https://diidocare.co.ie/`).
To host it in a sub-folder, change `base` in `vite.config.js`.

## Photo credits

Photos are from [Unsplash](https://unsplash.com) and used under the Unsplash License
(free for commercial use, no attribution required).
