# French Compass book website

Static Eleventy storefront for the French Compass TCF IRN and TEF Canada books.

## Languages

The initial localization plan is French, English, Arabic, Punjabi, Simplified Chinese, and Spanish. French and English serve the France/Canada core audience; the additional languages are relevant to Canadian newcomer communities. The language configuration lives in `src/_data/site.js`.

## Add product details

Update the matching entry in `src/_data/site.js` when a cover, price, Amazon link, or sample is available. The book-card layout already reserves these product details.

## Run locally

```bash
npm install
npm run dev
```

Build the static site with `npm run build`.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the `_site/` directory whenever `main` is updated.

After pushing this project to GitHub:

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions**.
3. Push to `main` and wait for the **Deploy to GitHub Pages** workflow to finish.
4. Add `frenchcompass.org` in **Settings → Pages → Custom domain**. The required `CNAME` file is already committed at the project root.

### Cloudflare DNS

Use **DNS only** (grey cloud) while GitHub Pages verifies and issues the certificate:

- For `frenchcompass.org`, create these `A` records for `@`:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Create an optional `CNAME` record for `www` pointing to `<github-user>.github.io`, then set `www.frenchcompass.org` as a redirect to `https://frenchcompass.org` using a Cloudflare Redirect Rule.

After GitHub shows the domain as verified and HTTPS is enabled, Cloudflare proxying may be enabled. Set Cloudflare SSL/TLS to **Full (strict)**.
