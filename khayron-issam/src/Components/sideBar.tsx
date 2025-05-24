
import Image from 'next/image';
import { FiChevronDown, FiSettings } from 'react-icons/fi';
import TopicList from './TopicList';
import image from "../../public/image/logo.png";

// Define types
interface SidebarProps {
  topics: { [key: string]: string[] };
  selectedTopic: string | null;
  expandedSections: string[];
  isSidebarOpen: boolean;
  isMobile: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  toggleSection: (section: string) => void;
  handleTopicSelect: (topic: string) => void;
  showEditIcon: string | null;
}

export default function Sidebar({
  topics,
  selectedTopic,
  expandedSections,
  isSidebarOpen,
  isMobile,
  setIsSidebarOpen,
  toggleSection,
  handleTopicSelect,
  showEditIcon,
}: SidebarProps) {
  // Desktop Sidebar
  const DesktopSidebar = () => (
    <div className="w-[280px] h-full border-r border-gray-200 flex flex-col overflow-hidden bg-gray-50">
      <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col items-center py-4 z-10">
        <div className="w-8 h-8 mb-auto transition-transform duration-200 hover:scale-110">
          <Image
            src={image}
            alt="Logo"
            width={32}
            height={32}
            className="filter brightness-0"
            onError={(e) => console.log('Image failed to load:', e)}
          />
        </div>
        <div className="w-6 h-6 mb-4 transition-transform duration-200 hover:scale-110 cursor-pointer">
          <FiSettings size={24} className="text-gray-600" />
        </div>
        <div className="w-8 h-8 rounded-full overflow-hidden transition-transform duration-200 hover:scale-110 cursor-pointer">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="ml-12 flex flex-col h-full w-[calc(100%-48px)]">
        <div className="py-4 px-4 flex items-center justify-between border-b border-gray-200">
          <h1 className="text-lg font-bold tracking-wide">KHAYRON</h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          {Object.entries(topics).map(([section, sectionTopics]) => (
            <TopicList
              key={section}
              section={section}
              topics={sectionTopics}
              selectedTopic={selectedTopic}
              expandedSections={expandedSections}
              toggleSection={toggleSection}
              handleTopicSelect={handleTopicSelect}
              showEditIcon={showEditIcon}
            />
          ))}
        </div>
      </div>
    </div>
  );

  // Mobile Sidebar
  const MobileSidebar = () => (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
        isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div
        className="absolute inset-0 bg-black/20 transition-opacity duration-300"
        onClick={() => setIsSidebarOpen(false)}
      />
      <div
        className={`absolute left-0 top-0 bottom-0 w-[260px] bg-gray-50 border-r border-gray-200 flex flex-col overflow-hidden transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="py-4 px-4 flex items-center justify-between border-b border-gray-200">
          <div className="w-6 h-6 ml-3">
            <Image
              src={image}
              alt="Logo"
              width={24}
              height={24}
              className="filter brightness-0"
              onError={(e) => console.log('Image failed to load:', e)}
            />
          </div>
          <h1 className="text-lg font-bold tracking-wide">KHAYRON</h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          {Object.entries(topics).map(([section, sectionTopics]) => (
            <TopicList
              key={section}
              section={section}
              topics={sectionTopics}
              selectedTopic={selectedTopic}
              expandedSections={expandedSections}
              toggleSection={toggleSection}
              handleTopicSelect={handleTopicSelect}
              showEditIcon={showEditIcon}
            />
          ))}
        </div>
        <div className="p-4 flex justify-end items-center border-t border-gray-200 space-x-3">
          <div className="w-8 h-8 rounded-full overflow-hidden transition-transform duration-200 hover:scale-110 cursor-pointer">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          <div className="w-6 h-6 transition-transform duration-200 hover:scale-110 cursor-pointer">
            <FiSettings size={24} className="text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );

  return <>{!isMobile ? <DesktopSidebar /> : <MobileSidebar />}</>;
}
