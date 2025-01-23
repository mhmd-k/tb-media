export type social =
  | "facebook"
  | "tweeter"
  | "snapchat"
  | "instagram"
  | "linkedin"
  | "whatsapp"
  | "tiktok";

export type socialLink = {
  type: social;
  link: string;
};

export type teamMember = {
  name: string;
  img: string;
  title: string;
  social: socialLink[];
};
