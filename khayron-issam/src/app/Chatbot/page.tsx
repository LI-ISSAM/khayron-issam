'use client';

import { useState, useEffect, useRef } from 'react';
import Sidebar from '../../Components/sideBar';
import ChatArea from '../../Components/ChatArea';

// Define types
interface Topics {
  [key: string]: string[];
}

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

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<string[]>(['Today', 'Previous 7 Days']);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [showEditIcon, setShowEditIcon] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const topics: Topics = {
    Today: [
      'How to be a better person?',
      'Power of Forgiveness',
      'Quranic verses patience',
      'Reason & Revelation',
      'Wealth and Charity',
    ],
    'Previous 7 Days': [
      'Divine Justice',
      'Predestination & Free Will',
      'The Origin of Life',
      'Caring of the earth',
      'Meaning of Taqwa',
    ],
  };

  const topicContent: { [key: string]: TopicContent } = {
    'Quranic verses patience': {
      hypothesis: 'Patience is a fundamental trait for spiritual maturity in Islam.',
      inference:
        "Verses like 'وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ' (An-Nahl: 127) show that patience isn't merely human endurance—it's anchored in divine reliance, suggesting a deep spiritual relationship.",
      check: '→ But does that mean impatience is a sign of weak faith? Or is it a natural response refined over time?',
      recall:
        'Previously, you asked about divine justice—there too, patience was framed as trust in timing beyond human understanding.',
      conclusion:
        'The Quran emphasizes patience not only as endurance but as spiritual alignment with divine rhythm—especially in emotionally intense or unjust circumstances.',
      verse: 'وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ وَلَا تَحْزَنْ عَلَيْهِمْ وَلَا تَكُ فِي ضَيْقٍ مِمَّا يَمْكُرُونَ',
      verseRef: '(An-Nahl 127)',
      question: 'Why does the Quran emphasize patience so much?',
    },
    'Power of Forgiveness': {
      hypothesis: 'Forgiveness is a cornerstone of spiritual growth in Islam.',
      inference:
        "Verses like 'فَمَنْ عَفَا وَأَصْلَحَ فَأَجْرُهُ عَلَى اللَّهِ' (Ash-Shura: 40) highlight that forgiveness is not weakness but a path to divine reward and reconciliation.",
      check: '→ Does forgiving always mean reconciliation, or can it be an internal act of letting go?',
      recall:
        'Previously, you explored patience, which often complements forgiveness in fostering inner peace.',
      conclusion:
        'The Quran promotes forgiveness as a means to achieve spiritual tranquility and societal harmony, rewarding those who forgive with divine favor.',
      verse: 'فَمَنْ عَفَا وَأَصْلَحَ فَأَجْرُهُ عَلَى اللَّهِ',
      verseRef: '(Ash-Shura 40)',
      question: 'Why is forgiveness emphasized in the Quran?',
    },
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    setShowEditIcon(topic);
    setShowChat(true);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setShowChat(true);
      setInputValue('');
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar
        topics={topics}
        selectedTopic={selectedTopic}
        expandedSections={expandedSections}
        isSidebarOpen={isSidebarOpen}
        isMobile={isMobile}
        setIsSidebarOpen={setIsSidebarOpen}
        toggleSection={toggleSection}
        handleTopicSelect={handleTopicSelect}
        showEditIcon={showEditIcon}
      />
      <ChatArea
        selectedTopic={selectedTopic}
        topicContent={topicContent}
        isMobile={isMobile}
        showChat={showChat}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleInputSubmit={handleInputSubmit}
        inputRef={inputRef}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
}
