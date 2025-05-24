import { FiChevronDown, FiEdit2 } from 'react-icons/fi';

// Define types
interface TopicListProps {
  section: string;
  topics: string[];
  selectedTopic: string | null;
  expandedSections: string[];
  toggleSection: (section: string) => void;
  handleTopicSelect: (topic: string) => void;
  showEditIcon: string | null;
}

export default function TopicList({
  section,
  topics,
  selectedTopic,
  expandedSections,
  toggleSection,
  handleTopicSelect,
  showEditIcon,
}: TopicListProps) {
  return (
    <div className="border-b border-gray-200">
      <div
        className="flex justify-between items-center px-4 py-3 cursor-pointer transition-all duration-300 ease-in-out"
        onClick={() => toggleSection(section)}
      >
        <span className="text-sm font-medium text-gray-800">{section}</span>
        <div className="flex items-center">
          <span className="text-xs text-gray-500 mr-2">{section === 'Today' ? '12 Total' : '118'}</span>
          <div
            className={`transition-all duration-300 ease-in-out ${
              expandedSections.includes(section) ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <FiChevronDown size={16} className="text-gray-400" />
          </div>
        </div>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          expandedSections.includes(section)
            ? 'max-h-96 opacity-100 transform translate-y-0'
            : 'max-h-0 opacity-0 transform -translate-y-2'
        }`}
      >
        {topics.map((topic, index) => (
          <div
            key={topic}
            className={`px-4 py-3 cursor-pointer flex justify-between items-center transition-all duration-300 ease-in-out ${
              selectedTopic === topic
                ? 'bg-blue-50 border-r-[3px] border-r-teal-500'
                : 'hover:bg-gray-50 border-r-[3px] border-r-transparent'
            }`}
            style={{
              animationDelay: expandedSections.includes(section) ? `${index * 50}ms` : '0ms',
            }}
            onClick={() => handleTopicSelect(topic)}
          >
            <span className="text-sm text-gray-700">{topic}</span>
            {showEditIcon === topic && <FiEdit2 size={20} className="text-gray-500" />}
          </div>
        ))}
      </div>
    </div>
  );
}
