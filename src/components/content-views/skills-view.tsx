import { File } from "lucide-react";

export function SkillsView() {
  const smallCards = [
    { color: "bg-[#40BCDA]", title: "Developing\nVisions", hasBorder: true },
    { color: "bg-[#F0CB46]", title: "Redesign\nOverhauls" },
    { color: "bg-[#948DBC]", title: "Crafting\nConsumer Apps" },
    { color: "bg-[#40BCDA]", title: "Setting\nCraft Bar" },
    { color: "bg-[#40BCDA]", title: "Large Scale\n Pro Apps" },
    { color: "bg-[#40BCDA]", title: "Defining\nStrategy" }
  ];

  return (
    <div className="flex gap-4 max-w-[800px] mx-auto">
      {/* Left Section - Grid of Cards */}
      <div className="flex flex-col gap-4 w-[400px]">
        {/* First Row */}
        <div className="flex gap-[13px]">
          {smallCards.slice(0, 3).map((card, i) => (
            <div 
              key={i}
              className={`bg-[#F2F2F7] rounded-xl p-4 w-[200px] h-[140px] flex flex-col gap-4
                ${card.hasBorder ? 'border border-[#CDCDCD]' : ''}`}
            >
              <div className={`w-[35px] h-[35px] ${card.color} rounded-full flex items-center justify-center`}>
                <File className="text-white" size={20} />
              </div>
              <div className="font-[''] text-[19.24px] leading-tight tracking-[-0.4px] whitespace-pre-line">
                {card.title}
              </div>
            </div>
          ))}
        </div>
        {/* Second Row */}
        <div className="flex gap-[13px]">
          {smallCards.slice(3).map((card, i) => (
            <div 
              key={i}
              className="bg-[#F2F2F7] rounded-xl p-4 w-[200px] h-[140px] flex flex-col gap-4"
            >
              <div className={`w-[35px] h-[35px] ${card.color} rounded-full flex items-center justify-center`}>
                <File className="text-white" size={20} />
              </div>
              <div className="font-['Apple_Garamond_Light'] text-[19.24px] leading-tight tracking-[-0.4px] whitespace-pre-line">
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Large Card */}
      <div className="bg-[#F2F2F7] rounded-[24px] p-8 w-[400px] h-[297px]">
        <div className="flex justify-between items-center mb-4">
          <div className="font-['Apple_Garamond_Light'] text-[34.24px] tracking-[-0.4px]">
            Developing Compelling Vision
          </div>
          <div className="w-[35px] h-[35px] bg-[#F37A53] rounded-[3.29px]" />
        </div>
        <div className="flex gap-[3px]">
          <div className="flex-1 font-['SF_Pro_Display'] text-xs text-[#7B7A81] leading-relaxed">
            Life was good for my family in 1989. My father was the well-paid president of a marketing company...
          </div>
          <div className="flex-1 font-['SF_Pro_Display'] text-xs text-[#7B7A81] leading-relaxed">
            Life was good for my family in 1989. My father was the well-paid president of a marketing company...
          </div>
        </div>
      </div>
    </div>
  );
} 


