## Personal Portfolio – React + Vite

This is a **single-page personal portfolio** built with **React** and **Vite**, using a **dark / futuristic** design.

Sections included:

- **About Me**
- **Skills / Tech Stack**
- **Projects**
- **Experience / Education**
- **Contact (email, social links, visual form)**

---

### 1. How to run the project locally

From the project folder:

```bash
npm install
npm run dev
```

Then open the URL that appears in the terminal (usually `http://localhost:5173`).

---

### 2. Where to edit your information

Most of the content lives in `src/App.jsx`:

- **Name / branding**: change `"Your Name"` in the header.
- **Hero text**: edit the big title and subtitle in the `hero` section.
- **About Me**: update the text in the `#about` section cards.
- **Skills**: change the list of `<span className="pill">...</span>` under `#skills`.
- **Projects**: edit titles, descriptions and links in the `#projects` cards.
- **Experience / Education**: edit the items in the `timeline` under `#experience`.
- **Contact**:
  - Replace `you@example.com` with your real email.
  - Replace GitHub and LinkedIn URLs with your profiles.

Styling is in:

- `src/App.css` – layout and component styles.
- `src/index.css` – global background, fonts, base resets.

---

### 3. Build for production

To create an optimized production build:

```bash
npm run build
```

The static site will be generated into the `dist` folder.

---

### 4. Deploying to GitHub Pages (simple approach)

1. **Create a new GitHub repository** and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. **Build the project**:
   ```bash
   npm run build
   ```
3. Install the GitHub Pages helper (one time):
   ```bash
   npm install --save-dev gh-pages
   ```
4. Add these scripts in `package.json` (inside `"scripts"`):
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
5. Deploy:
   ```bash
   npm run deploy
   ```
6. In GitHub, open your repo → **Settings** → **Pages** and make sure the source is set to use the `gh-pages` branch (GitHub may detect it automatically).  
   Your portfolio will be live at:
   - `https://<your-username>.github.io/<your-repo>/`

If you later change content or styles, just commit your changes and run:

```bash
npm run deploy
```

again to update the live site.

---

### 5. Next improvements you can make

- **Add real project links** (GitHub repos, live demos).
- **Connect the contact form** using a service like Formspree or EmailJS.
- **Make it multilingual** if you speak multiple languages.
- **Customize colors and fonts** in `App.css` / `index.css` to match your personal brand.
