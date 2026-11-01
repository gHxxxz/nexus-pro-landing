# NEXUS PRO landing page

Static, responsive marketing page built in `index.html` and served directly by Vercel.

The contact form validates in the browser and opens a WhatsApp message using the number already configured in the project; it does not submit or store form data. The current workspace email and Cuiabá location are retained as contact details.

For local preview, serve the repository root with any static file server, for example:

```sh
python -m http.server 4173
```