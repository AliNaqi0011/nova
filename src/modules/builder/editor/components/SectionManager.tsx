import React from 'react';
import { GripVertical, Eye, EyeOff } from 'lucide-react';
import { useResumeSections, ResumeSection } from '@/stores/resumeSections';

export const SectionManager = () => {
  const { sections, updateOrder, toggleVisibility } = useResumeSections();

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));

    if (dragIndex === dropIndex) return;

    const newSections = [...sections];
    const [draggedItem] = newSections.splice(dragIndex, 1);
    newSections.splice(dropIndex, 0, draggedItem);

    const reorderedSections = newSections.map((section, index) => ({
      ...section,
      order: index,
    }));

    updateOrder(reorderedSections);
  };

  return (
    <div className="p-4 bg-gray-900 rounded-lg">
      <h3 className="text-white font-semibold mb-4">Section Order</h3>
      <div className="space-y-2">
        {sections.map((section, index) => (
          <div
            key={section.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700 cursor-move hover:bg-gray-750"
          >
            <GripVertical className="h-4 w-4 text-gray-400" />
            <span className="flex-1 text-white text-sm">{section.name}</span>
            <button
              onClick={() => toggleVisibility(section.id)}
              className={`p-1 rounded ${
                section.visible
                  ? 'text-green-400 hover:text-green-300'
                  : 'text-gray-500 hover:text-gray-400'
              }`}
            >
              {section.visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
