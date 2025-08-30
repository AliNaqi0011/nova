import { useState } from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import { Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

interface BasicData {
  name: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

const defaultData = {
  basics: {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 8900',
    location: 'New York, NY',
    summary: 'Professional summary...',
  },
  experience: [
    {
      id: '1',
      company: 'Tech Corp',
      position: 'Software Engineer',
      startDate: '2021-01',
      endDate: 'Present',
      description: 'Job description...',
    },
  ],
  education: [
    {
      id: '1',
      institution: 'University',
      degree: 'Bachelor Degree',
      startDate: '2017',
      endDate: '2021',
    },
  ],
  skills: ['JavaScript', 'React', 'Node.js'],
};

export default function SimpleEditor() {
  const [data, setData] = useState(defaultData);
  const [activeSection, setActiveSection] = useState('basics');

  const [sections, setSections] = useState([
    { id: 'basics', name: 'Personal Info', icon: '👤' },
    { id: 'experience', name: 'Experience', icon: '💼' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'skills', name: 'Skills', icon: '⚡' },
  ]);

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newSections = [...sections];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    if (targetIndex >= 0 && targetIndex < sections.length) {
      [newSections[index], newSections[targetIndex]] = [
        newSections[targetIndex],
        newSections[index],
      ];
      setSections(newSections);
    }
  };

  const updateBasics = (field: keyof BasicData, value: string) => {
    setData((prev) => ({
      ...prev,
      basics: { ...prev.basics, [field]: value },
    }));
  };

  const addExperience = () => {
    const newExp = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    setData((prev) => ({
      ...prev,
      experience: [...prev.experience, newExp],
    }));
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
    }));
  };

  const removeExperience = (id: string) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  return (
    <div className="h-full flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-bold text-purple-400">Resume Editor</h2>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-48 border-r border-gray-700 overflow-y-auto">
          <div className="p-2">
            {sections.map((section, index) => (
              <div key={section.id} className="flex items-center gap-1 mb-2">
                <div className="flex flex-col">
                  <button
                    onClick={() => moveSection(index, 'up')}
                    disabled={index === 0}
                    className="p-1 text-gray-500 hover:text-purple-400 disabled:opacity-30"
                  >
                    <ChevronUp size={12} />
                  </button>
                  <button
                    onClick={() => moveSection(index, 'down')}
                    disabled={index === sections.length - 1}
                    className="p-1 text-gray-500 hover:text-purple-400 disabled:opacity-30"
                  >
                    <ChevronDown size={12} />
                  </button>
                </div>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`flex-1 flex items-center gap-2 p-2 rounded text-sm ${
                    activeSection === section.id
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <span>{section.icon}</span>
                  <span>{section.name}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Personal Info */}
          {activeSection === 'basics' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-400">Personal Information</h3>
              <TextField
                label="Full Name"
                value={data.basics.name}
                onChange={(e) => updateBasics('name', e.target.value)}
                fullWidth
                size="small"
                InputLabelProps={{ className: 'text-gray-400' }}
                InputProps={{ className: 'text-white bg-gray-800' }}
              />
              <TextField
                label="Email"
                value={data.basics.email}
                onChange={(e) => updateBasics('email', e.target.value)}
                fullWidth
                size="small"
                InputLabelProps={{ className: 'text-gray-400' }}
                InputProps={{ className: 'text-white bg-gray-800' }}
              />
              <TextField
                label="Phone"
                value={data.basics.phone}
                onChange={(e) => updateBasics('phone', e.target.value)}
                fullWidth
                size="small"
                InputLabelProps={{ className: 'text-gray-400' }}
                InputProps={{ className: 'text-white bg-gray-800' }}
              />
              <TextField
                label="Location"
                value={data.basics.location}
                onChange={(e) => updateBasics('location', e.target.value)}
                fullWidth
                size="small"
                InputLabelProps={{ className: 'text-gray-400' }}
                InputProps={{ className: 'text-white bg-gray-800' }}
              />
              <TextField
                label="Summary"
                value={data.basics.summary}
                onChange={(e) => updateBasics('summary', e.target.value)}
                fullWidth
                multiline
                rows={3}
                size="small"
                InputLabelProps={{ className: 'text-gray-400' }}
                InputProps={{ className: 'text-white bg-gray-800' }}
              />
            </div>
          )}

          {/* Experience */}
          {activeSection === 'experience' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-purple-400">Experience</h3>
                <Button
                  onClick={addExperience}
                  startIcon={<Plus size={16} />}
                  variant="outlined"
                  size="small"
                  className="text-purple-400 border-purple-400"
                >
                  Add
                </Button>
              </div>
              {data.experience.map((exp, index) => (
                <div key={exp.id} className="bg-gray-800 rounded p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Experience {index + 1}</span>
                    <IconButton
                      onClick={() => removeExperience(exp.id)}
                      size="small"
                      className="text-red-400"
                    >
                      <Trash2 size={16} />
                    </IconButton>
                  </div>
                  <TextField
                    label="Company"
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                    fullWidth
                    size="small"
                    InputLabelProps={{ className: 'text-gray-400' }}
                    InputProps={{ className: 'text-white bg-gray-700' }}
                  />
                  <TextField
                    label="Position"
                    value={exp.position}
                    onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                    fullWidth
                    size="small"
                    InputLabelProps={{ className: 'text-gray-400' }}
                    InputProps={{ className: 'text-white bg-gray-700' }}
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <TextField
                      label="Start Date"
                      value={exp.startDate}
                      onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                      size="small"
                      InputLabelProps={{ className: 'text-gray-400' }}
                      InputProps={{ className: 'text-white bg-gray-700' }}
                    />
                    <TextField
                      label="End Date"
                      value={exp.endDate}
                      onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                      size="small"
                      InputLabelProps={{ className: 'text-gray-400' }}
                      InputProps={{ className: 'text-white bg-gray-700' }}
                    />
                  </div>
                  <TextField
                    label="Description"
                    value={exp.description}
                    onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                    fullWidth
                    multiline
                    rows={2}
                    size="small"
                    InputLabelProps={{ className: 'text-gray-400' }}
                    InputProps={{ className: 'text-white bg-gray-700' }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {activeSection === 'skills' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-400">Skills</h3>
              <TextField
                label="Skills (comma separated)"
                value={data.skills.join(', ')}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    skills: e.target.value
                      .split(',')
                      .map((s) => s.trim())
                      .filter((s) => s),
                  }))
                }
                fullWidth
                multiline
                rows={3}
                size="small"
                InputLabelProps={{ className: 'text-gray-400' }}
                InputProps={{ className: 'text-white bg-gray-800' }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
