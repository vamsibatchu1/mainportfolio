'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { jakartaFont, fiveFont } from '../../../fonts';

export default function AboutPage() {
  const skills = [
    { category: "Design", items: ["UI/UX Design", "Design Systems", "Prototyping", "User Research", "Visual Design"] },
    { category: "Development", items: ["React", "TypeScript", "Next.js", "Framer Motion", "Tailwind CSS"] },
    { category: "Tools", items: ["Figma", "Sketch", "Adobe Creative Suite", "Git", "VS Code"] },
    { category: "Other", items: ["Product Strategy", "Design Thinking", "Agile Methodologies", "User Testing", "Accessibility"] }
  ];

  const experience = [
    {
      role: "Senior Product Designer",
      company: "TechCorp",
      period: "2022 - Present",
      description: "Leading design initiatives for enterprise software products, focusing on user experience and design systems."
    },
    {
      role: "UX Designer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Designed user experiences for mobile applications and web platforms, working closely with development teams."
    },
    {
      role: "Design Intern",
      company: "Creative Agency",
      period: "2019 - 2020",
      description: "Assisted in creating visual designs and user interfaces for various client projects."
    }
  ];

  return (
    <motion.div 
      className="w-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div 
        className="mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className={`${fiveFont.className} text-black text-[48px] leading-[100%] tracking-[-0.02em] mb-4`}>
          About Me
        </h1>
        <p className={`${jakartaFont.className} text-gray-600 text-[20px] leading-[140%] max-w-[600px]`}>
          I'm passionate about creating meaningful digital experiences that solve real problems and delight users.
        </p>
      </motion.div>
      
      {/* Bio Section */}
      <motion.div 
        className="mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className={`${fiveFont.className} text-black text-[32px] leading-[120%] mb-6`}>
            My Story
          </h2>
          <div className={`${jakartaFont.className} text-gray-700 text-[18px] leading-[160%] space-y-4`}>
            <p>
              I started my journey in design with a curiosity about how things work and a desire to make them work better. 
              What began as a fascination with visual aesthetics evolved into a deep appreciation for the intersection of 
              design, technology, and human behavior.
            </p>
            <p>
              Today, I work as a product designer and creative technologist, helping companies build digital products 
              that not only look great but also solve real problems for real people. I believe that the best designs 
              are invisible—they feel so natural that users don't even notice them.
            </p>
            <p>
              When I'm not designing, you can find me experimenting with new technologies, writing about design, 
              or exploring the latest trends in creative coding and generative art.
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* Experience Section */}
      <motion.div 
        className="mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className={`${fiveFont.className} text-black text-[32px] leading-[120%] mb-6`}>
          Experience
        </h2>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <div key={index} className="border-l-4 border-black pl-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className={`${fiveFont.className} text-black text-[24px] leading-[120%]`}>
                  {job.role}
                </h3>
                <span className={`${jakartaFont.className} text-gray-500 text-[16px]`}>
                  {job.period}
                </span>
              </div>
              <p className={`${jakartaFont.className} text-blue-600 text-[18px] font-medium mb-2`}>
                {job.company}
              </p>
              <p className={`${jakartaFont.className} text-gray-600 text-[16px] leading-[140%]`}>
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Skills Section */}
      <motion.div 
        className="mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className={`${fiveFont.className} text-black text-[32px] leading-[120%] mb-6`}>
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="space-y-4">
              <h3 className={`${fiveFont.className} text-black text-[20px] leading-[120%]`}>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`${jakartaFont.className} bg-gray-100 text-gray-700 px-3 py-1 text-[14px] rounded-full`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Contact Section */}
      <motion.div 
        className="mt-12 pt-8 border-t border-gray-200"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="text-center">
          <h3 className={`${fiveFont.className} text-black text-[24px] leading-[120%] mb-4`}>
            Let's Work Together
          </h3>
          <p className={`${jakartaFont.className} text-gray-600 text-[16px] mb-6`}>
            I'm always interested in new opportunities and exciting projects.
          </p>
          <div className="flex gap-4 justify-center">
            <button className={`${jakartaFont.className} bg-black text-white px-8 py-4 text-[18px] font-semibold rounded-lg hover:bg-gray-800 transition-colors`}>
              Get in Touch
            </button>
            <button className={`${jakartaFont.className} border-2 border-black text-black px-8 py-4 text-[18px] font-semibold rounded-lg hover:bg-black hover:text-white transition-colors`}>
              Download Resume
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
