import { GrConnect } from "react-icons/gr";
import { footerContent, socialLinks } from "../../data";
import ShimmeringButton from "./ui/ShimmeringButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-fit overflow-hidden mb-[100px] pb-10 md:mb-5" id="contact">
      <div className="absolute left-0 -bottom-72 w-full min-h-96">
        <img src="/footer-grid.svg" alt="grid" className="h-full w-full opacity-30" />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">{footerContent.heading}</h1>
        <p className="my-5 text-center text-white-200 md:mt-10">{footerContent.subheading}</p>
      </div>
      <div className="relative mt-16 flex flex-col items-center justify-between gap-5 md:flex-row">
        <a href={`mailto:${footerContent.contactEmail}`}>
          <ShimmeringButton title={footerContent.contactCtaLabel} icon={<GrConnect />} />
        </a>
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright © {currentYear} {footerContent.ownerName}
        </p>
        <div className="flex items-center gap-6 md:absolute md:bottom-16 md:grid md:gap-3">
          {socialLinks.map((profile) => (
            <a
              href={profile.url}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black bg-opacity-75 backdrop-blur-lg backdrop-filter saturate-150"
              key={profile.id}
              target="_blank"
              rel="noreferrer"
              aria-label={profile.label}
            >
              <img src={profile.icon} alt={profile.label} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
