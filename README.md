# LocalReach Media — React + Tailwind Website

This is the upgraded Version 2 website for LocalReach Media.

## What is included

- React + Vite
- Tailwind CSS
- Responsive mobile design
- Animated hero/postcard mockup
- Standard / Premium / Featured pricing
- Galveston route coverage section
- Campaign-reporting section
- FAQ
- Reservation form UI with logo upload
- GitHub Pages deployment workflow

## Important: reservation form

The form is currently FRONT-END ONLY. It validates and displays a success state, but it does not email or store submissions.

Before accepting real advertiser reservations, connect the form to a form/backend service such as:
- Formspree
- Tally
- Jotform
- Supabase
- Firebase

You can also replace the form with a Google Form link for the first edition.

## How to deploy this over your current GitHub Pages site

1. Download and unzip this project.
2. In your existing `LOCALREACHMEDIA` GitHub repository, delete/replace the old website files with ALL files and folders from this project.
3. Commit the changes to the `main` branch.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, change **Source** to **GitHub Actions**.
6. Click the **Actions** tab and wait for `Deploy React site to GitHub Pages` to show a green check.
7. Your existing GitHub Pages URL will now show the React site.

The Vite config uses `base: './'`, so it works correctly from a GitHub project-page URL.

## Run locally (optional)

Install Node.js, then:

```bash
npm install
npm run dev
```

Open the local URL Vite displays.

## Brand colors

- Deep Navy: #0D2340
- Teal: #0A9EA6
- Coral Orange: #FF6B35
- Light Gray: #F4F7F9

## Before launch

Update:
- contact email
- phone number
- final USPS route language
- exact mailing date
- real postcard artwork
- form backend
- privacy policy / advertiser terms
