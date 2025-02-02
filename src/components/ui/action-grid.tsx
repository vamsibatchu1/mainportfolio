"use client";
import { Contact, AppWindow, Users, Newspaper, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

const ActionButton = ({ icon, label, fullWidth, onClick }: ActionButtonProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-2.5 px-5 py-3.5",
      "bg-[rgb(242,242,247)] hover:bg-[rgb(232,232,237)]",
      "rounded-[14px] border-none cursor-pointer transition-all duration-200",
      fullWidth ? "w-full" : "flex-1 min-w-[140px]"
    )}
  >
    <div className="w-6 h-6 text-black">
      {icon}
    </div>
    <span className="text-base font-semibold text-black whitespace-nowrap">
      {label}
    </span>
  </button>
);

export function ActionGrid() {
  const actions = [
    { icon: <Contact />, label: "My story" },
    { icon: <Contact />, label: "Contact me" },
    { icon: <AppWindow />, label: "Look at my work" },
    { 
      icon: <Users />, 
      label: "What colleagues are saying about me",
      fullWidth: true 
    },
    { icon: <Newspaper />, label: "My writings" },
    { icon: <Layers />, label: "My skills" }
  ];

  return (
    <div className="w-full max-w-[367px] p-0 flex flex-col gap-3.5 font-['SF_Pro_Text',-apple-system,BlinkMacSystemFont,sans-serif]">
      <h2 className="text-xs text-[rgba(60,60,67,0.6)] tracking-[-0.4px]">
        What do you want to know about?
      </h2>
      <div className="flex flex-wrap gap-3 w-full">
        {actions.map((action, index) => (
          <ActionButton
            key={index}
            icon={action.icon}
            label={action.label}
            fullWidth={action.fullWidth}
          />
        ))}
      </div>
    </div>
  );
} 