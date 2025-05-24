import Image from 'next/image';
import { RefObject } from 'react';
import { FiArrowUp, FiMenu, FiEdit2 } from 'react-icons/fi';
import ChatContent from './ChatContent';
import InputComponent from './InputComponent';
import EmptyState from './EmptyState';

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

interface ChatAreaProps {
  selectedTopic: string | null;
  topicContent: { [key: string]: TopicContent };
  isMobile: boolean;
  showChat: boolean;
  inputValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputSubmit: (e: React.FormEvent) => void;
  inputRef: RefObject<HTMLInputElement>;
  setIsSidebarOpen: (open: boolean) => void;
  assets: { logo?: string };
}

export default function ChatArea({
  selectedTopic,
  topicContent,
  isMobile,
  showChat,
  inputValue,
  handleInputChange,
  handleInputSubmit,
  inputRef,
  setIsSidebarOpen,
  assets,
}: ChatAreaProps) {
  // Mobile Chat View
  const MobileChat = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center">
          <button className="transition-transform duration-200 hover:scale-110" onClick={() => setIsSidebarOpen(true)}>
            <FiMenu size={24} className="text-gray-700 mr-4" />
          </button>
          <div className="w-6 h-6 mr-2">
           
          </div>
          <span className="font-bold">KHAYRON</span>
        </div>
        <div className="flex items-center space-x-3">
          <FiEdit2
            size={20}
            className="text-gray-700 transition-transform duration-200 hover:scale-110 cursor-pointer"
          />
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
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        {selectedTopic && showChat ? (
          <ChatContent selectedTopic={selectedTopic} topicContent={topicContent} />
        ) : (
          <EmptyState />
        )}
        <InputComponent
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleInputSubmit={handleInputSubmit}
          inputRef={inputRef}
          isMobile={isMobile}
        />
      </div>
    </div>
  );

  // Desktop Chat View
  const DesktopChat = () => (
    <div className="flex-1 flex flex-col overflow-hidden">
      {selectedTopic && showChat ? (
        <ChatContent selectedTopic={selectedTopic} topicContent={topicContent} />
      ) : (
        <EmptyState />
      )}
      <InputComponent
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleInputSubmit={handleInputSubmit}
        inputRef={inputRef}
        isMobile={isMobile}
      />
    </div>
  );

  return <div className="flex-1 flex flex-col">{isMobile ? <MobileChat /> : <DesktopChat />}</div>;
}
