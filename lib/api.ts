export type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  audience: string;
  message?: string;
  source: string;
};

export async function submitLead(payload: LeadPayload) {
  // Future integration points:
  // - Google Workspace notifications for info@iatrics.ng and support@iatrics.ng
  // - Brevo or Mailchimp audience subscription
  // - Google Sheets or Airtable beta lead capture
  // - Iatrics backend API at api.iatrics.ng
  // - Future authentication flows for patient, doctor and admin portals
  await new Promise((resolve) => setTimeout(resolve, 450));
  return {
    ok: true,
    leadId: `lead_${Date.now()}`,
    payload,
  };
}
