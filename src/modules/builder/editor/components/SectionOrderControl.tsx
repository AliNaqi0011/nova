import React from 'react';
import { motion } from 'framer-motion';
import { GripVertical, Eye, EyeOff } from 'lucide-react';
import { useSectionOrder, SectionConfig } from '@/stores/sectionOrder';
import { useDragAndDrop } from '@/helpers/hooks/useDragAndDrop';

export const SectionOrderControl: React.FC = () => {
  const { sections, updateSectionOrder, toggleSection } = useSectionOrder();

  const { draggedItem, handleDragStart, handleDragOver, handleDrop, handleDragEnd } =
    useDragAndDrop<SectionConfig>(sections, updateSectionOrder);

  return (
    <div className="p-4 bg-gray-900 rounded-lg">
      <h3 className="text-white font-semibold mb-4">Section Order</h3>
      <div className="space-y-2">
        {sections.map((section, index) => {
          const isDragging = draggedItem?.index === index;

          return (
            <motion.div
              key={section.id}
              className={`flex items-center gap-3 p-3 bg-gray-800 rounded-lg border ${
                isDragging ? 'opacity-50 border-purple-500' : 'border-gray-700'
              }`}
              draggable
              onDragStart={(e) => handleDragStart(e, section, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              onDragEnd={handleDragEnd}
              whileHover={{ scale: 1.02 }}
              layout
            >
              <GripVertical className="h-4 w-4 text-gray-400 cursor-move" />

              <span className="flex-1 text-white text-sm">{section.name}</span>

              <button
                onClick={() => toggleSection(section.id)}
                className={`p-1 rounded ${
                  section.enabled
                    ? 'text-green-400 hover:text-green-300'
                    : 'text-gray-500 hover:text-gray-400'
                }`}
              >
                {section.enabled ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </button>
            </motion.div>
          );
        })}
      </div>
      <p className="text-xs text-gray-400 mt-3">
        Drag sections to reorder • Click eye to show/hide
      </p>
    </div>
  );
};
