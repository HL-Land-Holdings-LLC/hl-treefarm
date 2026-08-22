# Hutton-Loyd Tree Farm website

A simple static replacement for `hl-treefarm.com`, designed for GitHub Pages. Its structure intentionally resembles `parkus/parkus.github.io`: one hand-editable `index.html`, a stylesheet, a small script, and an `images/` directory.

## License

Split licensing — see [`LICENSE`](LICENSE):

- **Code and text** (HTML, CSS, JS, docs): MIT
- **Images and media** (everything in `images/`, including SVGs, plus other media such as PDFs): © HL Land Holdings LLC, all rights reserved — no reuse without written permission

## Important items to update before publishing

1. **Contact information:** Search `index.html` for `Update before launch` and replace the placeholder phone number. Confirm the preferred email and street address.
2. **Christmas season info (edit every year):** Open `christmas_season_info.js`. Update open dates, hours, prices, tree availability, payment notes, and the short announcement at the top (edit only the text between the backticks). That one file feeds both the top announcement bar and the Christmas section on the home page.
3. **Images:** The included SVG artwork is an original lightweight placeholder. Replace it with farm photographs whenever desired; the relevant filenames are listed below.

## Files most likely to be edited

- `christmas_season_info.js` — yearly Christmas dates, hours, prices, and announcement
- `index.html` — lasting page text (about the farm, contact, directions)
- `style.css` — colors, spacing, layout, and typography
- `images/hero-valley.svg` — main banner
- `images/favicon.svg` — site icon

JPG, PNG, WebP, and SVG images all work. To substitute a photo, either give it the same filename or update the corresponding `url(...)` in `style.css`.

## Preview locally

From this directory:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new public repository, such as `hl-treefarm-site`.
2. Copy these files into the repository root and push them to `main`.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main`, and select `/(root)`.
5. Enter `hl-treefarm.com` as the custom domain in the Pages settings.
6. Test the site at its temporary GitHub Pages URL.
7. In the repository’s Pages settings, add `hl-treefarm.com` as the custom domain. GitHub will create a `CNAME` file; alternatively, rename `CNAME.example` to `CNAME`.
8. Only after the Pages configuration is in place, update the domain’s DNS records to GitHub Pages.
9. Enable **Enforce HTTPS** after GitHub finishes issuing the certificate.

The included `CNAME.example` contains `hl-treefarm.com`. Leave it inactive while testing; when you configure the custom domain, either rename it to `CNAME` or let GitHub create the `CNAME` file. The `.nojekyll` file tells GitHub to serve the static files directly.

## Domain cutover precautions

- Copy all existing DNS records before changing nameservers or DNS hosting.
- Preserve any MX and TXT records used for email.
- Add the custom domain in GitHub before pointing DNS at GitHub Pages.
- Keep the old hosting active until the new site and email have been tested.
- Verify the domain in GitHub’s account settings and retain its TXT verification record.

## Recovered content and limitations

The current hosting server returned HTTP 403 to automated page requests. This version was reconstructed from search-engine-indexed copies of the public pages and reliable public listings. `SOURCE_NOTES.md` records what was recovered and what requires manual verification. The wording was simplified rather than represented as an exact archival copy.
