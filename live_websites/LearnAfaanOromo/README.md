# Learn Afaan Oromo

Website for Abdullah Siraj's Afaan Oromo lessons: free, easy-to-follow YouTube lessons
with cultural insights from a native speaker. Built with React (Create React App).

## Project structure

```
LearnAfaanOromo/
├── public/                  Copied as-is into the build
│   ├── index.html           Page shell (title, meta tags, fonts)
│   ├── favicon.svg / .ico   Browser tab icons
│   ├── logo192.png, logo512.png, apple-touch-icon.png   App icons
│   └── manifest.json
├── src/
│   ├── index.js             Entry point
│   ├── App.js               Routes, scroll handling, back-to-top button
│   ├── siteConfig.js        YouTube link, address, phone, email, social links
│   ├── Components/          Navbar, Footer, Logo, PageHeader, CtaBanner, BackToTop
│   ├── Pages/               Home, About, Service, Contact, NotFound
│   └── assets/
│       ├── css/             App.css (colours, fonts, shared styles) + one file per page
│       └── images/          Illustrations
└── package.json
```

## Working on the site

```bash
npm install      # first time only
npm start        # local preview at http://localhost:3000
```

- **Text and content:** edit the files in `src/Pages/`.
- **Colours and fonts:** change the variables at the top of `src/assets/css/App.css`.
- **Phone number, email, address and social links:** edit `src/siteConfig.js`. They are used
  everywhere from there.
- **Logo:** `src/Components/Logo.js` (the browser icon is `public/favicon.svg`).

## Building for upload

```bash
npm run build
```

This creates the `build/` folder. **Upload the contents of `build/`**, not the whole project.

### Hosting notes

The site has separate page addresses (`/about`, `/service`, `/contact`). The host must
send those to `index.html`, or refreshing a page shows a 404.

| Host | What to do |
|---|---|
| cPanel / Apache | Upload everything inside `build/` into `public_html/`, and add an `.htaccess` that rewrites unknown paths to `index.html`. |
| Netlify | Connect the repo with build command `npm run build` and publish directory `build`, plus a `_redirects` file containing `/* /index.html 200`. |
| Vercel | Import the project; Create React App is detected automatically. |

The site is built to run at the root of a domain. To host it in a sub-folder, set
`"homepage"` in `package.json`.
