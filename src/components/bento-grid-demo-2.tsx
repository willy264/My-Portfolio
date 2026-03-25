"use client";

import { useState, type ReactNode } from "react";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconMail,
  IconSignature,
  IconTableColumn,
  IconWorld,
} from "@tabler/icons-react";
import Lottie from "react-lottie";
import animationData from "../../data/confetti.json";
import { aboutGridItems, skillLabels } from "../../data";
import type { AboutGridItem, SkillKey } from "../../data/types";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import { GlobeDemo } from "@/components/ui/GridGlobe";
import ShimmeringButton from "@/components/ui/ShimmeringButton";
import { IoCopyOutline } from "react-icons/io5";

type BentoDemoItem = {
  title: string;
  description: ReactNode;
  header: ReactNode;
  className: string;
  icon: ReactNode;
};

export default function BentoGridSecondDemo() {
  const [collaborationItem, globeItem, techStackItem, passionItem, featureItem, contactItem] =
    aboutGridItems;

  const items: BentoDemoItem[] = [
    {
      title: collaborationItem.title,
      description: collaborationItem.description || "Clear communication is built into every project.",
      header: <ImageHeader item={collaborationItem} />,
      className: "md:col-span-1 md:row-span-2 md:row-start-2 md:col-start-1",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: globeItem.title,
      description: "Working across time zones is part of the process.",
      header: <GlobeHeader />,
      className: "md:col-span-1 md:row-start-1 md:col-start-1",
      icon: <IconWorld className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: techStackItem.title,
      description: techStackItem.description,
      header: <TechStackHeader item={techStackItem} />,
      className: "md:col-span-1 md:row-start-1 md:col-start-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: passionItem.title,
      description: "I like building interfaces that feel polished and purposeful.",
      header: <ImageHeader item={passionItem} />,
      className: "md:col-span-1 md:row-start-2 md:col-start-2",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: featureItem.title,
      description: <FeatureDescription item={featureItem} />,
      header: <ImageHeader item={featureItem} emphasizeSecondaryImage />,
      className: "md:col-span-1 md:row-span-2 md:row-start-3 md:col-start-2",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: contactItem.title,
      description: <ContactDescription item={contactItem} />,
      header: <ContactHeader item={contactItem} />,
      className: "md:col-span-1 md:row-start-4 md:col-start-1",
      icon: <IconMail className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <BentoGrid className="mx-auto max-w-6xl md:auto-rows-[20rem] md:grid-cols-2">
      {items.map((item) => (
        <BentoGridItem
          key={item.title}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const BaseHeader = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-full min-h-[9rem] w-full flex-1 overflow-hidden rounded-xl border border-transparent bg-dot-black/[0.08] bg-neutral-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black dark:bg-dot-white/[0.2]",
        className,
      )}
    >
      {children}
    </div>
  );
};

const ImageHeader = ({
  item,
  emphasizeSecondaryImage = false,
}: {
  item: AboutGridItem;
  emphasizeSecondaryImage?: boolean;
}) => {
  return (
    <BaseHeader className="items-end bg-neutral-950">
      {item.img ? (
        <img
          src={item.img}
          alt={item.title}
          className={cn("absolute inset-0 h-full w-full object-cover object-center opacity-55", item.imgClassName)}
          loading="lazy"
        />
      ) : null}
      {item.spareImg ? (
        <img
          src={item.spareImg}
          alt=""
          className={cn(
            "absolute bottom-0 right-0 max-h-[85%] object-contain opacity-80",
            emphasizeSecondaryImage ? "w-56 md:w-72" : "w-44 md:w-56",
            item.spareImgClassName,
          )}
          loading="lazy"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/20 to-black/70" />
      <div className="relative z-10 flex h-full w-full items-end p-4 text-xs font-medium uppercase tracking-[0.24em] text-white/70">
        Portfolio highlight
      </div>
    </BaseHeader>
  );
};

const GlobeHeader = () => {
  return (
    <BaseHeader className="bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.24),transparent_55%)]" />
      <GlobeDemo />
    </BaseHeader>
  );
};

const TechStackHeader = ({ item }: { item: AboutGridItem }) => {
  return (
    <BaseHeader className="bg-neutral-950">
      <BackgroundBeams />
      <div className="relative z-10 grid h-full w-full grid-cols-2 gap-2 p-4 text-left md:grid-cols-3">
        {item.skillColumns?.map((column, columnIndex) => (
          <div key={`${item.id}-${columnIndex}`} className="flex flex-col gap-2">
            {column.map((skillKey) => (
              <SkillPill key={skillKey} skillKey={skillKey} />
            ))}
          </div>
        ))}
      </div>
    </BaseHeader>
  );
};

const SkillPill = ({ skillKey }: { skillKey: SkillKey }) => {
  return (
    <span className="rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-xs text-white/85 backdrop-blur-sm">
      {skillLabels[skillKey]}
    </span>
  );
};

const FeatureDescription = ({ item }: { item: AboutGridItem }) => {
  return (
    <div className="space-y-3">
      <p>{item.description}</p>
      {item.linkUrl && item.linkLabel ? (
        <a
          href={item.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-sm font-medium text-blue-600 underline decoration-blue-400/60 underline-offset-4 transition-colors hover:text-blue-500"
        >
          {item.linkLabel}
        </a>
      ) : null}
    </div>
  );
};

const ContactHeader = ({ item }: { item: AboutGridItem }) => {
  return (
    <BaseHeader className="items-end bg-neutral-950">
      <BackgroundGradientAnimation
        className="opacity-80"
        containerClassName="rounded-xl opacity-90"
      >
        {null}
      </BackgroundGradientAnimation>
      <div className="relative z-10 flex h-full w-full items-end p-4 text-sm font-medium text-white/80">
        {item.copyValue}
      </div>
    </BaseHeader>
  );
};

const ContactDescription = ({ item }: { item: AboutGridItem }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!item.copyValue) {
      return;
    }

    try {
      await navigator.clipboard.writeText(item.copyValue);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Failed to copy contact email.", error);
    }
  };

  return (
    <div className="space-y-3">
      <p>Reach out directly and we can talk through the project together.</p>
      <div className="relative inline-flex">
        <div className={cn("pointer-events-none absolute -right-6 -top-10", copied ? "block" : "hidden")}>
          <Lottie
            options={{
              loop: copied,
              autoplay: copied,
              animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
        </div>
        <ShimmeringButton
          title={copied ? item.copiedLabel : item.copyLabel}
          icon={<IoCopyOutline />}
          otherClasses="px-4 py-4 text-sm"
          handleClick={handleCopy}
        />
      </div>
    </div>
  );
};
