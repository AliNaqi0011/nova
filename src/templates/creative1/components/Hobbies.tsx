import { Camera, Gamepad2, Music, BookOpen, Waves } from 'lucide-react';
import SectionTitle from './SectionTitle';

const iconMap: { [key: string]: React.ReactNode } = {
  camera: <Camera size={24} className="text-gray-600" />,
  gaming: <Gamepad2 size={24} className="text-gray-600" />,
  music: <Music size={24} className="text-gray-600" />,
  reading: <BookOpen size={24} className="text-gray-600" />,
  swimming: <Waves size={24} className="text-gray-600" />,
};

const getHobbyIcon = (hobby: string): React.ReactNode => {
  const lowerHobby = hobby.toLowerCase();
  if (lowerHobby.includes('photo')) return iconMap['camera'];
  if (lowerHobby.includes('game')) return iconMap['gaming'];
  if (lowerHobby.includes('music')) return iconMap['music'];
  if (lowerHobby.includes('read')) return iconMap['reading'];
  if (lowerHobby.includes('swim')) return iconMap['swimming'];
  return iconMap['camera']; // Default icon
};

export default function Hobbies({ hobbies }: { hobbies: string[] }) {
  return (
    <section className="mt-6">
      <SectionTitle>Hobbies</SectionTitle>
      <div className="flex gap-4 mt-2">
        {hobbies.slice(0, 5).map((hobby) => (
          <div key={hobby}>{getHobbyIcon(hobby)}</div>
        ))}
      </div>
    </section>
  );
}
