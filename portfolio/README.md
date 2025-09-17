

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## Setting Up Resend for Contact Form

To receive emails from the contact form, you need to configure Resend:

1.  **Sign up on [Resend](https://resend.com/)**: Create a free account.

2.  **Generate API Key**:
    - Go to the "API Keys" section in your Resend dashboard.
    - Click "Create API Key".
    - Give it a name (e.g., "Portfolio") and set permissions to "Full Access" for sending emails.
    - Copy the generated API key.

3.  **Set Local Environment Variables**:
    - For local development, create a file named `.env.local` in the root of your project.
    - Add the following variables to the file:

    ```
    RESEND_API_KEY=your_resend_api_key
    CONTACT_EMAIL=your_email@example.com
    ```

    - Replace `your_resend_api_key` with the key you copied from Resend.
    - Replace `your_email@example.com` with the email address where you want to receive contact form submissions.

4.  **Add Environment Variables to Vercel**:
    - When you deploy your project to Vercel, you need to add the `RESEND_API_KEY` and `CONTACT_EMAIL` to your Vercel project's environment variables.
    - In your Vercel project dashboard, go to "Settings" > "Environment Variables".
    - Add the `RESEND_API_KEY` and `CONTACT_EMAIL` with their respective values.

Now your contact form should be able to send you emails via Resend, both locally and in production.

