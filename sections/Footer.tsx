import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Column {
  title: string;
  items: Items[];
}

export interface Items {
  label: string;
  href: string;
}

export interface Subscribe {
  title: string;
  description: string;
  /** @format rich-text */
  instructions: string;
}

export interface Social {
  network: "Facebook" | "Instagram" | "Linkedin" | "X - Twitter" | "Youtube";
  href: string;
}

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  links?: Column[];
  subscribe?: Subscribe;
  madeWith?: {
    label?: string;
    src?: ImageWidget;
    href?: string;
  };
  copyright?: string;
  bottomLinks?: Items[];
  social?: Social[];
}

export default function Footer({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  links = [
    {
      title: "Column One",
      items: [
        { label: "Link One", href: "/" },
        { label: "Link Two", href: "/" },
        { label: "Link Three", href: "/" },
        { label: "Link Four", href: "/" },
        { label: "Link Five", href: "/" },
      ],
    },
    {
      title: "Column Two",
      items: [
        { label: "Link Six", href: "/" },
        { label: "Link Seven", href: "/" },
        { label: "Link Eight", href: "/" },
        { label: "Link Nine", href: "/" },
        { label: "Link Ten", href: "/" },
      ],
    },
    {
      title: "Column Three",
      items: [
        { label: "Link Eleven", href: "/" },
        { label: "Link Twelve", href: "/" },
        { label: "Link FourThirteenteen", href: "/" },
        { label: "Link Fourteen", href: "/" },
        { label: "Link Fifteen", href: "/" },
      ],
    },
  ],
  subscribe = {
    title: "Subcribe",
    description:
      "Join our newsletter to stay up to date on features and releases.",
    instructions:
      "By subscribing you agree to with our <a href='/' target='_blank' class='link'>Privacy Policy</a> and provide consent to receive updates from our company.",
  },
  madeWith = {
    label: "Made with",
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/cc202be0-af57-4b32-b9c9-d1d7dc97bf85",
    href: "https://deco.cx",
  },
  copyright = "© 2024 deco.cx. All rights reserved.",
  bottomLinks = [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "Cookies Settings", href: "/" },
  ],
  social = [
    { network: "Facebook", href: "" },
    { network: "Instagram", href: "" },
    { network: "X - Twitter", href: "" },
    { network: "Linkedin", href: "" },
    { network: "Youtube", href: "" },
  ],
}: Props) {
  return (
    <div class="lg:container mx-auto px-4 lg:px-0 pt-16 text-sm">
      <div class="flex flex-col gap-20">
        <div class="flex flex-col items-center gap-6 lg:flex-row">
          <div>
            {/* <Image
              src={logo.src || ""}
              width="auto"
              height={137}
              alt={logo.alt}
            /> */}
            <svg width="auto" height="137px" viewBox="0 0 308 224" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_43_384" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="308" height="224">
                <rect width="308" height="224" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_43_384)">
                <path d="M-151 690.5L-188 782L-180.5 795L-151 810.5L-105.5 822.5L-64 844L-36 865L-7.5 911.5L7 932H44.5L53.5 903.5L120.5 880.5L208.5 858.5H283H341.5V822.5V795L326 770.5L309 729.5L283 690.5L264 659.5V593.5L270.5 573L283 533V482.5V435V379.5L264 330L236.5 283.5L208.5 259L200.5 242.5V223L208.5 211.5L221 197L247 185.5L270.5 162.5L283 125L270.5 94L247 69.5L200.5 56.5L163 50L120.5 37L103.5 10L89.5 19H71.5L60 37L71.5 56.5L60 85V101.5L44.5 162.5L29 223L18.5 234.5L7 252.5L18.5 273.5V295.5L7 330L-7.5 349.5V379.5H-23V409L-36 435L-50 453L-78.5 499.5L-98 533L-114.5 601.5L-136.5 652L-151 690.5Z" stroke="#070707" stroke-width="14" />
              </g>
            </svg>
          </div>
          <div>
            <h4 class="text-2xl mb-2">NOVA FRIBURGO</h4>
            <p class="text-xl">frilanding © 2024 Deco</p>
          </div>
        </div>
      </div>
    </div >
  );
}
