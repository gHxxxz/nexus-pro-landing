# NEXUS PRO landing page

Static, responsive marketing page built in `index.html` and served directly by Vercel.

The contact form validates in the browser and opens a WhatsApp message using the number already configured in the project; it does not submit or store form data. Email/password sign-in, account creation, and password recovery use Supabase Auth via `auth.js`; the project URL and public publishable key are configured in `supabase-config.js`.

Supabase Auth is configured with `https://nexus.pro.synchub.net.br` as the Site URL and allowed redirect URL. Email signup and email confirmation are enabled in the Supabase project. Auth email delivery uses the project's custom SMTP settings; keep the Resend SMTP password only in the Supabase dashboard, never in this repository or browser code.

The Resend SMTP host is `smtp.resend.com`, port `465`, username `resend`. The sender address must belong to a domain verified in Resend. See the [Supabase SMTP guide](https://supabase.com/docs/guides/auth/auth-smtp).

Before deploying authentication:

1. Keep only the Supabase publishable key in `supabase-config.js`. Never put a `service_role` or secret key in browser code.
2. Configure Row Level Security for any future user data. Authentication alone does not authorize access to application data.

The current workspace email and Cuiabá location are retained as contact details.

For local preview, serve the repository root with any static file server, for example:

```sh
python -m http.server 4173
```