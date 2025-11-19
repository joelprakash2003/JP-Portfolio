const sanitize = (value?: string) => value?.trim() ?? "";

export const personalInfo = {
  email: sanitize(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  phoneDial: sanitize(process.env.NEXT_PUBLIC_CONTACT_PHONE_DIAL),
  phoneDisplay: sanitize(process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY),
  location: sanitize(process.env.NEXT_PUBLIC_CONTACT_LOCATION),
  linkedinUrl: sanitize(process.env.NEXT_PUBLIC_LINKEDIN_URL),
  githubUrl: sanitize(process.env.NEXT_PUBLIC_GITHUB_URL),
};

export type PersonalInfo = typeof personalInfo;

