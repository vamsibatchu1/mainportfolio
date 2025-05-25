'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  MousePointer2,
  Frame as LucideFrame,
  Square,
  PenTool,
  Type,
  MessageSquare,
  Wand2,
  Code2,
  Ruler,
  Palette,
  SquarePen,
  Pipette,
  Paintbrush,
  UserCircle2,
} from 'lucide-react'

// Import new content components
import DesignContent from './views/design_content';
import DrawContent from './views/draw_content';
import DevContent from './views/dev_content';
import AboutContent from './views/about_content';

type Mode = 'dev' | 'draw' | 'design' | 'about'

type IconComponent = React.ComponentType<{ className?: string, style?: React.CSSProperties, size?: string | number }>

interface ToolbarButtonProps {
  icon: IconComponent
  selected: boolean
  onClick: () => void
  showChevron?: boolean
  mode?: Mode
}

interface ToolbarModeProps {
  mode: Mode
  selected: number
  setSelected: (value: number) => void
}

interface AboutToolbarProps {
  selected: number;
}

interface ToggleModeProps {
  mode: Mode
  setMode: (value: Mode) => void
  setSelected: (value: number) => void
}

const spring = {
  type: 'spring' as const,
  stiffness: 200,
  damping: 20,
  duration: 0.3,
}

const ToolbarButton = ({
  icon: Icon,
  selected,
  onClick,
  showChevron = false,
  mode = 'design',
}: ToolbarButtonProps) => (
  <button
    className={`flex items-center justify-center ${
      showChevron ? 'gap-1' : ''
    } h-full`}
    onClick={onClick}
  >
    <div
      className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-md p-1.5 transition-colors duration-300"
      style={{
        color: selected ? '#FFF' : '#1A1A1A',
      }}
    >
      <Icon className="relative z-[2]" />
      {selected && (
        <motion.div
          className={`absolute inset-0 ${
            mode === 'dev'
              ? 'bg-[#00B75F]'
              : mode === 'draw'
                ? 'bg-[#00a2c2]'
                : mode === 'about'
                  ? 'bg-[#A78BFA]'
                  : 'bg-[#0092FF]'
          } rounded-md`}
          layoutId={`indicator-${mode}`}
        />
      )}
    </div>
    {showChevron && <ChevronDown size={12} strokeWidth={1.5} />}
  </button>
)

const DesignToolbar = ({
  selected,
  setSelected,
}: Pick<ToolbarModeProps, 'selected' | 'setSelected'>) => (
  <motion.div
    className="flex h-full items-center justify-center gap-4 p-2"
    initial={{ filter: 'blur(10px)', y: -48 }}
    animate={{ filter: 'blur(0px)', y: 0 }}
    exit={{ filter: 'blur(10px)', y: -48 }}
    transition={{ delay: 0.15, ...spring }}
    key="design"
  >
    <ToolbarButton
      icon={MousePointer2}
      selected={selected === 1}
      onClick={() => setSelected(1)}
      showChevron
      mode="design"
    />
    <ToolbarButton
      icon={LucideFrame}
      selected={selected === 2}
      onClick={() => setSelected(2)}
      showChevron
      mode="design"
    />
    <ToolbarButton
      icon={Square}
      selected={selected === 3}
      onClick={() => setSelected(3)}
      showChevron
      mode="design"
    />
    <ToolbarButton
      icon={PenTool}
      selected={selected === 4}
      onClick={() => setSelected(4)}
      showChevron
      mode="design"
    />
    <ToolbarButton
      icon={Type}
      selected={selected === 5}
      onClick={() => setSelected(5)}
      mode="design"
    />
    <ToolbarButton
      icon={MessageSquare}
      selected={selected === 6}
      onClick={() => setSelected(6)}
      mode="design"
    />
    <ToolbarButton
      icon={Wand2}
      selected={selected === 7}
      onClick={() => setSelected(7)}
      mode="design"
    />
  </motion.div>
)

const DrawToolbar = ({
  selected,
  setSelected,
}: Pick<ToolbarModeProps, 'selected' | 'setSelected'>) => (
  <motion.div
    className="flex h-full items-center justify-center gap-4"
    initial={{ filter: 'blur(10px)', y: 48 }}
    animate={{ filter: 'blur(0px)', y: 0 }}
    exit={{ filter: 'blur(10px)', y: 48 }}
    transition={{ delay: 0.15, ...spring }}
    key="draw"
  >
    <ToolbarButton
      icon={MousePointer2}
      selected={selected === 1}
      onClick={() => setSelected(1)}
      showChevron
      mode="draw"
    />
    <div className="w-[1px] shrink-0 self-stretch bg-[#E6E6E6]" />
    <img
      className="pt-8 transition-all duration-300 hover:pt-5"
      src="/pen.svg"
      alt="Pen"
    />
    <img
      className="pt-8 transition-all duration-300 hover:pt-5"
      src="/brush.svg"
      alt="Brush"
    />
    <img
      className="pt-8 transition-all duration-300 hover:pt-5"
      src="/pencil.svg"
      alt="Pencil"
    />
    <div className="w-[1px] shrink-0 self-stretch bg-[#E6E6E6]" />
    <ToolbarButton
      icon={LucideFrame}
      selected={selected === 2}
      onClick={() => setSelected(2)}
      showChevron
      mode="draw"
    />
    <ToolbarButton
      icon={Square}
      selected={selected === 3}
      onClick={() => setSelected(3)}
      showChevron
      mode="draw"
    />
    <ToolbarButton
      icon={Type}
      selected={selected === 4}
      onClick={() => setSelected(4)}
      mode="draw"
    />
    <ToolbarButton
      icon={MessageSquare}
      selected={selected === 5}
      onClick={() => setSelected(5)}
      mode="draw"
    />
    <ToolbarButton
      icon={Wand2}
      selected={selected === 6}
      onClick={() => setSelected(6)}
      mode="draw"
    />
  </motion.div>
)

const DevToolbar = ({
  selected,
  setSelected,
}: Pick<ToolbarModeProps, 'selected' | 'setSelected'>) => (
  <motion.div
    className="flex h-full items-center justify-center gap-4"
    initial={{ filter: 'blur(10px)', y: -48 }}
    animate={{ filter: 'blur(0px)', y: 0 }}
    exit={{ filter: 'blur(10px)', y: -48 }}
    transition={{ delay: 0.15, ...spring }}
    key="dev"
  >
    <ToolbarButton
      icon={MousePointer2}
      selected={selected === 1}
      onClick={() => setSelected(1)}
      mode="dev"
    />
    <ToolbarButton
      icon={Pipette}
      selected={selected === 2}
      onClick={() => setSelected(2)}
      mode="dev"
    />
    <ToolbarButton
      icon={Ruler}
      selected={selected === 3}
      onClick={() => setSelected(3)}
      mode="dev"
    />
    <ToolbarButton
      icon={SquarePen}
      selected={selected === 4}
      onClick={() => setSelected(4)}
      mode="dev"
    />
    <ToolbarButton
      icon={MessageSquare}
      selected={selected === 5}
      onClick={() => setSelected(5)}
      mode="dev"
    />
  </motion.div>
)

const AboutToolbar = ({
  selected,
}: AboutToolbarProps) => (
  <motion.div
    className="flex h-full items-center justify-center gap-4 p-2 text-slate-700"
    initial={{ filter: 'blur(10px)', y: -48 }}
    animate={{ filter: 'blur(0px)', y: 0 }}
    exit={{ filter: 'blur(10px)', y: -48 }}
    transition={{ delay: 0.15, ...spring }}
    key="about"
  >
    <p>About Toolbar Content (Selected: {selected})</p>
  </motion.div>
)

const Toolbar = ({ mode, selected, setSelected }: ToolbarModeProps) => {
  let width
  switch (mode) {
    case 'dev':
      width = 240
      break
    case 'draw':
      width = 520
      break
    case 'design':
      width = 400
      break
    case 'about':
      width = 300
      break
  }
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="h-12"
        initial={{ width }}
        animate={{ width }}
        exit={{ width }}
        transition={{ delay: 0.1, ...spring }}
      >
        {mode === 'dev' && (
          <DevToolbar selected={selected} setSelected={setSelected} />
        )}
        {mode === 'design' && (
          <DesignToolbar selected={selected} setSelected={setSelected} />
        )}
        {mode === 'draw' && (
          <DrawToolbar selected={selected} setSelected={setSelected} />
        )}
        {mode === 'about' && (
          <AboutToolbar selected={selected} />
        )}
      </motion.div>
    </AnimatePresence>
  )
}

const ToggleMode = ({ mode, setMode, setSelected }: ToggleModeProps) => {
  return (
    <div className="flex h-12 py-2 pl-1 pr-2">
      <div className="flex items-center gap-3 rounded-lg bg-slate-100 p-0.5">
        <button
          className="relative flex h-full w-7 shrink-0 items-center justify-center gap-1 rounded-md p-0.5"
          onClick={() => {
            setMode('draw')
            setSelected(1)
          }}
        >
          <Paintbrush
            size={20}
            style={{
              color: mode === 'draw' ? '#00a2c2' : '',
            }}
            className="z-[2] transition-colors duration-300"
          />
          {mode === 'draw' && (
            <motion.div
              layoutId="toggle-indicator"
              className="absolute inset-0 rounded-md bg-white shadow"
            />
          )}
        </button>
        <button
          className="relative flex h-full w-7 shrink-0 items-center justify-center gap-1 rounded-md p-0.5"
          onClick={() => {
            setMode('design')
            setSelected(1)
          }}
        >
          <Palette
            size={20}
            style={{
              color: mode === 'design' ? '#0092FF' : '',
            }}
            className="z-[2] transition-colors duration-300"
          />
          {mode === 'design' && (
            <motion.div
              layoutId="toggle-indicator"
              className="absolute inset-0 rounded-md bg-white shadow"
            />
          )}
        </button>
        <button
          className="relative flex h-full w-7 shrink-0 items-center justify-center gap-1 rounded-md p-0.5"
          onClick={() => {
            setMode('dev')
            setSelected(1)
          }}
        >
          <Code2
            size={20}
            style={{
              color: mode === 'dev' ? '#00B75F' : '',
            }}
            className="z-[2] transition-colors duration-300"
          />
          {mode === 'dev' && (
            <motion.div
              layoutId="toggle-indicator"
              className="absolute inset-0 rounded-md bg-white shadow"
            />
          )}
        </button>
        <button
          className="relative flex h-full w-7 shrink-0 items-center justify-center gap-1 rounded-md p-0.5"
          onClick={() => {
            setMode('about')
            setSelected(1)
          }}
        >
          <UserCircle2
            size={20}
            style={{
              color: mode === 'about' ? '#6D28D9' : '',
            }}
            className="z-[2] transition-colors duration-300"
          />
          {mode === 'about' && (
            <motion.div
              layoutId="toggle-indicator"
              className="absolute inset-0 rounded-md bg-white shadow"
            />
          )}
        </button>
      </div>
    </div>
  )
}

interface ContentCardProps {
  mode: Mode;
  setMode: (value: Mode) => void;
  setSelected: (value: number) => void;
}

const ContentCard = ({ mode, setMode, setSelected }: ContentCardProps) => {
  const renderContent = () => {
    switch (mode) {
      case 'design':
        return <DesignContent />;
      case 'draw':
        return <DrawContent />;
      case 'dev':
        return <DevContent />;
      case 'about':
        return <AboutContent />;
      default:
        return null;
    }
  };

  return (
    <div className="shadow-box flex flex-col items-start gap-1.5 overflow-hidden w-[640px] h-auto p-4 rounded-xl bg-white">
      <ToggleMode mode={mode} setMode={setMode} setSelected={setSelected} />
      <motion.div
        className="shadow-box flex items-center gap-1.5 overflow-hidden rounded-xl bg-white"
        transition={spring}
      >
      <AnimatePresence mode="wait">
        {renderContent()}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const Page = () => {
  const [mode, setMode] = useState<Mode>('design')
  const [selected, setSelected] = useState(1)

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-end px-4 py-10 gap-4">
      <motion.div
        className="shadow-box flex items-center gap-1.5 overflow-hidden rounded-xl bg-white"
        transition={spring}
      >
        <Toolbar mode={mode} selected={selected} setSelected={setSelected} />
        <div className="w-[1px] self-stretch bg-[#E6E6E6]" />
        <ToggleMode mode={mode} setMode={setMode} setSelected={setSelected} />
      </motion.div>
      <ContentCard mode={mode} setMode={setMode} setSelected={setSelected} />
    </main>
  )
}

export default Page 