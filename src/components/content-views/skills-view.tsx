import React, { useState } from "react";
import Image from "next/image";
import { Noto_Sans } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { motion } from "framer-motion";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans",
});

const redditMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
});

// Add type for the menu items
type MenuItem = {
  baseIcon: string;
  activeIcon: string;
  text: MenuItemKey;
};

// Define the possible menu item keys
type MenuItemKey = 
  | "DEVELOPING PRODUCT VISION"
  | "REDESIGN OVERHAULS"
  | "DESIGNING CONSUMER APPS"
  | "SETTING HIGH CRAFT BAR"
  | "ENTERPRISE APPS"
  | "DEFINING STRATEGY";

// Type for content data items
type ContentItem = {
  title: string;
  icon: string;
  content: string;
};

// Type for the content data object
type ContentData = {
  [K in MenuItemKey]: ContentItem;
};

const menuItems: MenuItem[] = [
  {
    baseIcon: "/images/skill1.svg",
    activeIcon: "/images/skill1-color.svg",
    text: "DEVELOPING PRODUCT VISION",
  },
  {
    baseIcon: "/images/skill2.svg",
    activeIcon: "/images/skill2-color.svg",
    text: "REDESIGN OVERHAULS",
  },
  {
    baseIcon: "/images/skill3.svg",
    activeIcon: "/images/skill3-color.svg",
    text: "DESIGNING CONSUMER APPS",
  },
  {
    baseIcon: "/images/skill4.svg",
    activeIcon: "/images/skill4-color.svg",
    text: "SETTING HIGH CRAFT BAR",
  },
  {
    baseIcon: "/images/skill5.svg",
    activeIcon: "/images/skill5-color.svg",
    text: "ENTERPRISE APPS",
  },
  {
    baseIcon: "/images/skill6.svg",
    activeIcon: "/images/skill6-color.svg",
    text: "DEFINING STRATEGY",
  },
];

const contentData: ContentData = {
  "DEVELOPING PRODUCT VISION": {
    title: "1.0 DEVELOPING PRODUCT VISION",
    icon: "/images/skill1-color.svg",
    content: "Creating a product vision for 0-1 products requires navigating ambiguity and thriving in messy, undefined spaces. I excel at transforming abstract ideas into actionable strategies by identifying user needs, leveraging market insights, and aligning with business goals. By collaborating with cross-functional teams, I define MVPs that balance speed and value, fostering innovation. My approach brings clarity and direction, enabling teams to build impactful products from the ground up."
  },
  "REDESIGN OVERHAULS": {
    title: "2.0 REDESIGN OVERHAULS",
    icon: "/images/skill2-color.svg",
    content: "Leading redesign overhauls requires balancing user expectations with innovative thinking. I specialize in identifying usability pain points, analyzing data, and orchestrating collaborative workshops to rethink core experiences. By fostering a design-led approach, I ensure that redesigned interfaces not only solve critical issues but also elevate brand perception. My work bridges legacy systems with modern solutions, creating seamless, scalable user experiences."
  },
  "DESIGNING CONSUMER APPS": {
    title: "3.0 DESIGNING CONSUMER APPS",
    icon: "/images/skill3-color.svg",
    content: "Delivering delightful consumer apps requires empathy and precision. I champion user-centered design, conducting user research and usability testing to inform decisions. I work across disciplines to create intuitive interfaces that balance aesthetics with functionality. By integrating feedback loops and agile methodologies, I ensure iterative improvements that resonate with users, ultimately driving engagement, satisfaction, and long-term loyalty."
  },
  "SETTING HIGH CRAFT BAR": {
    title: "4.0 SETTING HIGH CRAFT BAR",
    icon: "/images/skill4-color.svg",
    content: "Quality is in the details, and I drive excellence through design systems and pixel-perfect execution. I mentor teams to push creative boundaries while maintaining consistency in typography, color, and interaction patterns. Partnering with engineers, I ensure designs are faithfully implemented and accessible. My approach fosters a culture of craftsmanship, where every interaction reflects a commitment to usability and delight."
  },
  "ENTERPRISE APPS": {
    title: "5.0 CRAFTING SCALABLE PRO APPS",
    icon: "/images/skill5-color.svg",
    content: "Designing for enterprise means simplifying complexity. I excel in creating scalable solutions that meet the needs of diverse stakeholders, from novice users to power operators. By streamlining workflows and reducing cognitive load, I ensure efficiency without compromising usability. I collaborate closely with product and engineering to align technical feasibility with user goals, delivering impactful tools for business growth."
  },
  "DEFINING STRATEGY": {
    title: "6.0 DEFINING STRATEGY",
    icon: "/images/skill6-color.svg",
    content: "Strategic thinking underpins all my design work. I synthesize user insights, market trends, and business objectives to define actionable strategies. My frameworks prioritize impact, focusing on high-value initiatives that align with company goals. I engage stakeholders early, fostering alignment and clarity. This holistic approach ensures that every design decision contributes to both immediate outcomes and long-term vision."
  }
};

export function SkillsView(): JSX.Element {
  const [selectedItem, setSelectedItem] = useState<MenuItemKey>("DEVELOPING PRODUCT VISION");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row bg-[#000] rounded-3xl overflow-hidden border-0 w-full"
    >
      {/* Sidebar section */}
      <div className="flex-col w-full md:w-[100px] items-start justify-center gap-4 p-8 md:pl-8 md:pr-0 md:py-6 bg-[#000] flex min-h-[300px] shrink-0">
        {menuItems.map((item: MenuItem, index: number) => (
          <div
            key={index}
            className="w-full items-center gap-4 flex relative cursor-pointer"
            onClick={() => setSelectedItem(item.text)}
          >
            <div className="relative flex items-center justify-center w-8 h-8">
              <Image 
                src={selectedItem === item.text ? item.activeIcon : item.baseIcon}
                alt={item.text}
                width={32}
                height={32}
                className="transition-all duration-200"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Content section */}
      <div className="flex-1 flex flex-col p-8 min-w-0 bg-white">
        <div className="flex items-center justify-between w-full mb-4">
          <div className={`${redditMono.className} font-normal text-black text-[26px]`}>
            {contentData[selectedItem].title}
          </div>
        </div>

        <div className="w-full">
          <p className={`text-[#7b7a81] text-[14px] ${notoSans.className} break-words`}>
            {contentData[selectedItem].content}
          </p>
        </div>
      </div>
    </motion.div>
  );
} 