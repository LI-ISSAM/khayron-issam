// Define types
interface TopicContent {
  hypothesis: string;
  inference: string;
  check: string;
  recall: string;
  conclusion: string;
  verse: string;
  verseRef: string;
  question: string;
}

interface ChatContentProps {
  selectedTopic: string | null;
  topicContent: { [key: string]: TopicContent };
}

export default function ChatContent({ selectedTopic, topicContent }: ChatContentProps) {
  const content = selectedTopic ? topicContent[selectedTopic] : null;

  if (!content) {
    return null;
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 pb-20">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-4">
          <div>
            <p className="text-orange-500 font-medium text-sm">4. Fractal Recall</p>
            <p className="text-gray-800 text-sm leading-relaxed">{content.recall}</p>
          </div>
          <div>
            <p className="text-orange-500 font-medium text-sm">5. Refined Conclusion</p>
            <p className="text-gray-800 text-sm leading-relaxed">{content.conclusion}</p>
          </div>
          <div>
            <p className="text-orange-500 font-medium text-sm">6. Verse Contextualization (with full Arabic and diacritics)</p>
            <p className="text-gray-800 font-arabic text-right mb-1 text-base">{content.verse}</p>
            <p className="text-gray-600 text-xs">{content.verseRef}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-teal-100 text-teal-800 rounded-2xl px-4 py-2 max-w-xs transition-transform duration-200 hover:scale-105">
            <p className="text-sm font-medium">{content.question}</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 space-y-4 border border-gray-200 shadow-sm">
          <div>
            <p className="text-orange-500 font-medium text-sm mb-2">1. Hypothesis</p>
            <p className="text-gray-800 text-sm leading-relaxed">{content.hypothesis}</p>
          </div>
          <div>
            <p className="text-orange-500 font-medium text-sm mb-2">2. Inference</p>
            <p className="text-gray-800 text-sm leading-relaxed">{content.inference}</p>
          </div>
          <div>
            <p className="text-teal-600 font-medium text-sm mb-2">3. Oscillatory Check</p>
            <p className="text-gray-800 text-sm leading-relaxed">{content.check}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
