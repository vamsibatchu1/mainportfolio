import React from 'react';
import { motion } from 'framer-motion';
import { ActionSearchBar } from "../components/action-search-bar";
import {
    BarChart2,
    Globe,
    Video,
    PlaneTakeoff,
    AudioLines,
} from "lucide-react";

const contentSpring = { type: "spring", stiffness: 200, damping: 25 };

function actionSearchBarDemo() {
    const allActions = [
        {
            id: "1",
            label: "Book tickets",
            icon: <PlaneTakeoff className="h-4 w-4 text-blue-500" />,
            description: "Operator",
            short: "⌘K",
            end: "Agent",
        },
        {
            id: "2",
            label: "Summarize",
            icon: <BarChart2 className="h-4 w-4 text-orange-500" />,
            description: "gpt-4o",
            short: "⌘cmd+p",
            end: "Command",
        },
        {
            id: "3",
            label: "Screen Studio",
            icon: <Video className="h-4 w-4 text-purple-500" />,
            description: "gpt-4o",
            short: "",
            end: "Application",
        },
        {
            id: "4",
            label: "Talk to Jarvis",
            icon: <AudioLines className="h-4 w-4 text-green-500" />,
            description: "gpt-4o voice",
            short: "",
            end: "Active",
        },
        {
            id: "5",
            label: "Translate",
            icon: <Globe className="h-4 w-4 text-blue-500" />,
            description: "gpt-4o",
            short: "",
            end: "Command",
        },
    ];

    return <ActionSearchBar actions={allActions} />
}

const HomeContent = () => {
  return (
    <motion.div
      key="home-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={contentSpring}
      className="p-4 w-full"
    >
      {actionSearchBarDemo()}
    </motion.div>
  );
};

export default HomeContent;
export { actionSearchBarDemo }; 