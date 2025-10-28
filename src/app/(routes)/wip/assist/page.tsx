import { AssistSidebar } from './components/assistsidebar';

// Force this page to be dynamic
export const dynamic = 'force-dynamic';

export default function WipAssistPage() {
  return (
    <div className="relative h-screen w-full overflow-hidden fixed inset-0">
      {/* Main Layout - Flex Row with Two Columns */}
      <div className="relative z-10 flex flex-row h-full w-full">
        {/* Main Window - 70% width */}
        <div className="w-[75%] h-full bg-gray-100">
          {/* Main content area - can be customized later */}
        </div>

        {/* Right Column with Background Image */}
        <div className="w-[25%] h-full relative flex items-center justify-center">
          {/* Background Image for right column only */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/wip/landing-bg.png"
              alt="Landing background"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Assist Sidebar - Centered */}
          <AssistSidebar className="z-20 relative" />
        </div>
      </div>
    </div>
  );
}
