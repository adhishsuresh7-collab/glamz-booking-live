export const PHONE_DISPLAY = "+91 80867 06787";
export const PHONE_RAW = "918086706787";
export const INSTAGRAM_HANDLE = "@alnglamz_makeover";
export const INSTAGRAM_URL = "https://instagram.com/alnglamz_makeover";
export const ADDRESS =
  "Near NP Bakes, Near Neethi Clinic, Nooradi, Kodur, Malappuram, Kerala 676504";

export function waLink(message: string) {
  return `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(message)}`;
}