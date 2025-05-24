import { RefObject } from 'react';
import { FiArrowUp } from 'react-icons/fi';

interface InputComponentProps {
  inputValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputSubmit: (e: React.FormEvent) => void;
  inputRef: RefObject<HTMLInputElement>;
  isMobile: boolean;
}

export default function InputComponent({
  inputValue,
  handleInputChange,
  handleInputSubmit,
  inputRef,
  isMobile,
}: InputComponentProps) {
  return (
    <div className={`fixed bottom-8 ${isMobile ? 'left-0' : 'left-60'} right-0 p-4 z-20`}>
      <div className="max-w-2xl mx-auto">
        <form
          onSubmit={handleInputSubmit}
          className="flex items-center justify-between rounded-2xl p-4 border border-gray-200 bg-gray-50"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask a question"
            className="flex-1 h-[100%] text-gray-600 placeholder-gray-400 focus:outline-none text-base"
            key="chat-input"
          />
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white rounded-full p-3 transition-all duration-200 flex items-center justify-center"
          >
            <FiArrowUp size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
