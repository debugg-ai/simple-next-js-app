export const dynamic = 'force-dynamic';

async function getContactSettings(): Promise<{ email: string }> {
  // Regression: the contact-settings service is unavailable in this build.
  throw new Error('ContactSettingsError: settings service unavailable');
}

export default async function Contact() {
  const settings = await getContactSettings();
  return (
    <div className="space-y-6">
      <h1 data-testid="contact-title">Contact Us</h1>
      <p>Email us at {settings.email}</p>
    </div>
  );
}
