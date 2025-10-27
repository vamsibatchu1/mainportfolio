import { AssistSidebar } from './components/assistsidebar';

export default function WipAssistPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden fixed inset-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/wip/landing-bg.png"
          alt="Landing background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* AssistSidebar - Fixed at bottom right */}
      <div className="fixed bottom-0 right-[48px] z-10">
        <AssistSidebar />
      </div>
    </div>
  );
}
