import React, { useState } from 'react';
import { GripVertical, Eye, EyeOff, ChevronUp, ChevronDown, Plus, Trash2, Edit2, Check, X } from 'lucide-react';
import { useResumeSections, ResumeSection } from '@/stores/resumeSections';

export const SectionManager = () => {
  const { sections, updateOrder, toggleVisibility, removeSection, restoreSection, updateSectionName, addSection } = useResumeSections();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  
  const availableSections = [
    { id: 'summary', name: 'Summary' },
    { id: 'work', name: 'Work Experience' },
    { id: 'education', name: 'Education' },
    { id: 'skills', name: 'Skills' },
    { id: 'awards', name: 'Awards' },
    { id: 'volunteer', name: 'Volunteer' },
    { id: 'projects', name: 'Projects' },
    { id: 'certifications', name: 'Certifications' },
  ];
  
  const hiddenSections = availableSections.filter(s => {
    const section = sections.find(sec => sec.id === s.id);
    return !section || !section.visible;
  });
  const visibleSections = sections.filter(s => s.visible);
  
  const startEditing = (section: ResumeSection) => {
    setEditingId(section.id);
    setEditName(section.name);
  };
  
  const saveEdit = () => {
    if (editingId && editName.trim()) {
      updateSectionName(editingId, editName.trim());
    }
    setEditingId(null);
    setEditName('');
  };
  
  const cancelEdit = () => {
    setEditingId(null);
    setEditName('');
  };
  


  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= sections.length) return;

    const newSections = [...sections];
    [newSections[index], newSections[newIndex]] = [newSections[newIndex], newSections[index]];
    
    const reorderedSections = newSections.map((section, idx) => ({
      ...section,
      order: idx,
    }));

    updateOrder(reorderedSections);
  };

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
        {visibleSections.map((section, index) => (
          <div
            key={section.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700 cursor-move hover:bg-gray-750"
          >
            {editingId === section.id ? (
              <div className="flex-1 flex items-center gap-2">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="flex-1 bg-gray-700 text-white text-sm px-2 py-1 rounded border border-gray-600 focus:border-purple-500 outline-none"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') saveEdit();
                    if (e.key === 'Escape') cancelEdit();
                  }}
                  autoFocus
                />
                <button onClick={saveEdit} className="p-1 text-green-400 hover:text-green-300">
                  <Check className="h-3 w-3" />
                </button>
                <button onClick={cancelEdit} className="p-1 text-red-400 hover:text-red-300">
                  <X className="h-3 w-3" />
                </button>
              </div>
            ) : (
              <div className="flex-1 flex items-center gap-2">
                <span className="text-white text-sm">{section.name}</span>
                <button
                  onClick={() => startEditing(section)}
                  className="p-1 text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Edit2 className="h-3 w-3" />
                </button>
              </div>
            )}
            <div className="flex items-center gap-1">
              <button
                onClick={() => moveSection(sections.indexOf(section), 'up')}
                disabled={sections.indexOf(section) === 0}
                className="p-1 rounded text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronUp className="h-4 w-4" />
              </button>
              <button
                onClick={() => moveSection(sections.indexOf(section), 'down')}
                disabled={sections.indexOf(section) === sections.length - 1}
                className="p-1 rounded text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronDown className="h-4 w-4" />
              </button>
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
              <button
                onClick={() => removeSection(section.id)}
                className="p-1 rounded text-red-400 hover:text-red-300"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {hiddenSections.length > 0 && (
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-medium text-gray-400">Add Sections</h4>
          {hiddenSections.map(section => (
            <button
              key={section.id}
              onClick={() => restoreSection(section.id)}
              className="w-full p-2 border border-dashed border-gray-600 hover:border-purple-500 text-gray-400 hover:text-purple-400 rounded text-sm transition-colors flex items-center gap-2"
            >
              <Plus className="h-3 w-3" />
              {section.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
