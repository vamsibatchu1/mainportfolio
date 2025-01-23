export default function CaseStudyPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-[#e8f5ec] p-8 md:p-16">
      <h1 className="text-4xl font-bold mb-12">Case Study: {params.id}</h1>
      {/* Add your case study content here */}
    </div>
  );
} 