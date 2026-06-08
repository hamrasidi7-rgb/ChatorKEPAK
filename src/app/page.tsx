import HeroSection from "@/components/home/HeroSection";
import AIChatBanner from "@/components/home/AIChatBanner";
import NewsSection from "@/components/home/NewsSection";
import AIChatWidget from "@/components/ai/AIChatWidget";

export default function BerandaPage() {
  const isOnline = process.env.NEXT_PUBLIC_AI_ONLINE !== "false";

  return (
    <div>
      <HeroSection />
      <AIChatBanner isOnline={isOnline} />
      <NewsSection />

      {/* AI Chat Preview */}
      <section className="py-8 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-extrabold text-white">
              AI Chat Chator KEPAK
            </h2>
            <div className="flex items-center gap-1.5">
              <div
                className={`w-2 h-2 rounded-full ${
                  isOnline ? "bg-green-400 animate-pulse" : "bg-gray-500"
                }`}
              />
              <span className="text-gray-400 text-xs font-medium">
                {isOnline ? "Online" : "Offline"}
              </span>
            </div>
          </div>
          <AIChatWidget isPreview />
        </div>
      </section>
    </div>
  );
}
