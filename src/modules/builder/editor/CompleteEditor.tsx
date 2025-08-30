import { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  IconButton,
  Chip,
  Avatar,
  Switch,
  FormControlLabel,
} from '@mui/material';
import {
  Plus,
  Trash2,
  Upload,
  Download,
  Save,
  Eye,
  EyeOff,
  Star,
  StarBorder,
  Move,
  GripVertical,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface ResumeData {
  basics: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
    github: string;
    summary: string;
    photo: string;
  };
  experience: Array<{
    id: string;
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
    highlights: string[];
    visible: boolean;
  }>;
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    field: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa: string;
    honors: string;
    visible: boolean;
  }>;
  skills: {
    technical: Array<{ name: string; level: number; category: string }>;
    languages: Array<{ name: string; level: string }>;
    certifications: Array<{ name: string; issuer: string; date: string; url: string }>;
  };
  projects: Array<{
    id: string;
    name: string;
    description: string;
    technologies: string[];
    url: string;
    github: string;
    startDate: string;
    endDate: string;
    visible: boolean;
  }>;
  awards: Array<{
    id: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
    visible: boolean;
  }>;
  volunteer: Array<{
    id: string;
    organization: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    visible: boolean;
  }>;
  interests: string[];
  references: Array<{
    name: string;
    position: string;
    company: string;
    email: string;
    phone: string;
  }>;
  settings: {
    theme: string;
    fontSize: number;
    spacing: number;
    showPhoto: boolean;
    showReferences: boolean;
    sectionOrder: string[];
  };
}

const defaultData: ResumeData = {
  basics: {
    name: 'John Doe',
    title: 'Software Engineer',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'johndoe.com',
    linkedin: 'linkedin.com/in/johndoe',
    github: 'github.com/johndoe',
    summary:
      'Passionate software engineer with 5+ years of experience building scalable web applications.',
    photo: '',
  },
  experience: [
    {
      id: '1',
      company: 'Tech Corp',
      position: 'Senior Software Engineer',
      location: 'San Francisco, CA',
      startDate: '2021-01',
      endDate: '',
      current: true,
      description: 'Lead development of microservices architecture serving 1M+ users',
      highlights: [
        'Improved performance by 40%',
        'Led team of 5 developers',
        'Implemented CI/CD pipeline',
      ],
      visible: true,
    },
  ],
  education: [
    {
      id: '1',
      institution: 'Stanford University',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      location: 'Stanford, CA',
      startDate: '2016-09',
      endDate: '2020-06',
      gpa: '3.8',
      honors: 'Magna Cum Laude',
      visible: true,
    },
  ],
  skills: {
    technical: [
      { name: 'JavaScript', level: 90, category: 'Programming' },
      { name: 'React', level: 85, category: 'Frontend' },
      { name: 'Node.js', level: 80, category: 'Backend' },
    ],
    languages: [
      { name: 'English', level: 'Native' },
      { name: 'Spanish', level: 'Conversational' },
    ],
    certifications: [
      {
        name: 'AWS Solutions Architect',
        issuer: 'Amazon',
        date: '2023-01',
        url: 'aws.amazon.com',
      },
    ],
  },
  projects: [
    {
      id: '1',
      name: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      url: 'demo.example.com',
      github: 'github.com/johndoe/ecommerce',
      startDate: '2023-01',
      endDate: '2023-06',
      visible: true,
    },
  ],
  awards: [
    {
      id: '1',
      title: 'Employee of the Year',
      issuer: 'Tech Corp',
      date: '2023',
      description: 'Recognized for outstanding performance and leadership',
      visible: true,
    },
  ],
  volunteer: [
    {
      id: '1',
      organization: 'Code for Good',
      position: 'Volunteer Developer',
      startDate: '2022-01',
      endDate: '2023-12',
      description: 'Built websites for non-profit organizations',
      visible: true,
    },
  ],
  interests: ['Photography', 'Hiking', 'Open Source', 'Machine Learning'],
  references: [
    {
      name: 'Jane Smith',
      position: 'Engineering Manager',
      company: 'Tech Corp',
      email: 'jane@techcorp.com',
      phone: '+1 (555) 987-6543',
    },
  ],
  settings: {
    theme: 'modern',
    fontSize: 12,
    spacing: 1.2,
    showPhoto: true,
    showReferences: false,
    sectionOrder: [
      'basics',
      'experience',
      'education',
      'skills',
      'projects',
      'awards',
      'volunteer',
    ],
  },
};

interface SortableItemProps {
  id: string;
  children: React.ReactNode;
}

function SortableItem({ id, children }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="relative">
      <div className="absolute left-2 top-2 cursor-grab" {...attributes} {...listeners}>
        <GripVertical size={16} className="text-gray-500" />
      </div>
      {children}
    </div>
  );
}

export default function CompleteEditor() {
  const [data, setData] = useState<ResumeData>(defaultData);
  const [activeSection, setActiveSection] = useState('basics');
  const [searchTerm, setSearchTerm] = useState('');
  const [autoSave, setAutoSave] = useState(true);
  const [previewMode, setPreviewMode] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  // Auto-save functionality
  useEffect(() => {
    if (autoSave) {
      const timer = setTimeout(() => {
        localStorage.setItem('nova_resume_draft', JSON.stringify(data));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [data, autoSave]);

  const updateBasics = (field: keyof ResumeData['basics'], value: string) => {
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
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      highlights: [],
      visible: true,
    };
    setData((prev) => ({
      ...prev,
      experience: [...prev.experience, newExp],
    }));
  };

  const updateExperience = (id: string, field: string, value: any) => {
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

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setData((prev) => ({
        ...prev,
        experience: arrayMove(
          prev.experience,
          prev.experience.findIndex((item) => item.id === active.id),
          prev.experience.findIndex((item) => item.id === over.id)
        ),
      }));
    }
  };

  const exportData = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.basics.name.replace(/\s+/g, '_')}_Resume.json`;
    a.click();
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target?.result as string);
          setData(imported);
        } catch (error) {
          alert('Invalid file format');
        }
      };
      reader.readAsText(file);
    }
  };

  const sections = [
    { id: 'basics', name: 'Personal Info', icon: '👤' },
    { id: 'experience', name: 'Experience', icon: '💼' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'skills', name: 'Skills', icon: '⚡' },
    { id: 'projects', name: 'Projects', icon: '🚀' },
    { id: 'awards', name: 'Awards', icon: '🏆' },
    { id: 'volunteer', name: 'Volunteer', icon: '❤️' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="h-full flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Resume Editor
          </h2>
          <FormControlLabel
            control={<Switch checked={autoSave} onChange={(e) => setAutoSave(e.target.checked)} />}
            label="Auto-save"
            className="text-gray-300"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="file"
            accept=".json"
            onChange={importData}
            className="hidden"
            id="import-file"
          />
          <IconButton
            onClick={() => document.getElementById('import-file')?.click()}
            className="text-gray-400 hover:text-white"
            title="Import"
          >
            <Upload size={20} />
          </IconButton>
          <IconButton
            onClick={exportData}
            className="text-gray-400 hover:text-white"
            title="Export"
          >
            <Download size={20} />
          </IconButton>
          <IconButton
            onClick={() => setPreviewMode(!previewMode)}
            className="text-gray-400 hover:text-white"
            title="Preview"
          >
            {previewMode ? <EyeOff size={20} /> : <Eye size={20} />}
          </IconButton>
        </div>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-gray-700">
        <TextField
          placeholder="Search sections..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          size="small"
          InputProps={{
            className: 'text-white bg-gray-800 rounded-lg',
          }}
        />
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-700 overflow-y-auto">
          <div className="p-2">
            {sections
              .filter((section) => section.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 transition-all ${
                    activeSection === section.id
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-lg">{section.icon}</span>
                  <span className="font-medium">{section.name}</span>
                </motion.button>
              ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {/* Personal Info Section */}
              {activeSection === 'basics' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-purple-400">Personal Information</h3>

                  {/* Photo Upload */}
                  <div className="flex items-center gap-4">
                    <Avatar
                      src={data.basics.photo}
                      sx={{ width: 80, height: 80 }}
                      className="border-4 border-purple-500"
                    >
                      {data.basics.name.charAt(0)}
                    </Avatar>
                    <div>
                      <Button variant="outlined" component="label" size="small">
                        Upload Photo
                        <input type="file" hidden accept="image/*" />
                      </Button>
                      <p className="text-xs text-gray-400 mt-1">JPG, PNG up to 2MB</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextField
                      label="Full Name"
                      value={data.basics.name}
                      onChange={(e) => updateBasics('name', e.target.value)}
                      fullWidth
                      InputLabelProps={{ className: 'text-gray-400' }}
                      InputProps={{ className: 'text-white bg-gray-800' }}
                    />
                    <TextField
                      label="Professional Title"
                      value={data.basics.title}
                      onChange={(e) => updateBasics('title', e.target.value)}
                      fullWidth
                      InputLabelProps={{ className: 'text-gray-400' }}
                      InputProps={{ className: 'text-white bg-gray-800' }}
                    />
                    <TextField
                      label="Email"
                      type="email"
                      value={data.basics.email}
                      onChange={(e) => updateBasics('email', e.target.value)}
                      fullWidth
                      InputLabelProps={{ className: 'text-gray-400' }}
                      InputProps={{ className: 'text-white bg-gray-800' }}
                    />
                    <TextField
                      label="Phone"
                      value={data.basics.phone}
                      onChange={(e) => updateBasics('phone', e.target.value)}
                      fullWidth
                      InputLabelProps={{ className: 'text-gray-400' }}
                      InputProps={{ className: 'text-white bg-gray-800' }}
                    />
                    <TextField
                      label="Location"
                      value={data.basics.location}
                      onChange={(e) => updateBasics('location', e.target.value)}
                      fullWidth
                      InputLabelProps={{ className: 'text-gray-400' }}
                      InputProps={{ className: 'text-white bg-gray-800' }}
                    />
                    <TextField
                      label="Website"
                      value={data.basics.website}
                      onChange={(e) => updateBasics('website', e.target.value)}
                      fullWidth
                      InputLabelProps={{ className: 'text-gray-400' }}
                      InputProps={{ className: 'text-white bg-gray-800' }}
                    />
                    <TextField
                      label="LinkedIn"
                      value={data.basics.linkedin}
                      onChange={(e) => updateBasics('linkedin', e.target.value)}
                      fullWidth
                      InputLabelProps={{ className: 'text-gray-400' }}
                      InputProps={{ className: 'text-white bg-gray-800' }}
                    />
                    <TextField
                      label="GitHub"
                      value={data.basics.github}
                      onChange={(e) => updateBasics('github', e.target.value)}
                      fullWidth
                      InputLabelProps={{ className: 'text-gray-400' }}
                      InputProps={{ className: 'text-white bg-gray-800' }}
                    />
                  </div>

                  <TextField
                    label="Professional Summary"
                    value={data.basics.summary}
                    onChange={(e) => updateBasics('summary', e.target.value)}
                    fullWidth
                    multiline
                    rows={4}
                    InputLabelProps={{ className: 'text-gray-400' }}
                    InputProps={{ className: 'text-white bg-gray-800' }}
                    helperText="2-3 sentences highlighting your key strengths and career goals"
                  />
                </div>
              )}

              {/* Experience Section */}
              {activeSection === 'experience' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-purple-400">Work Experience</h3>
                    <Button
                      onClick={addExperience}
                      startIcon={<Plus size={20} />}
                      variant="contained"
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      Add Experience
                    </Button>
                  </div>

                  <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                  >
                    <SortableContext
                      items={data.experience.map((exp) => exp.id)}
                      strategy={verticalListSortingStrategy}
                    >
                      {data.experience.map((exp, index) => (
                        <SortableItem key={exp.id} id={exp.id}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-gray-800 rounded-lg p-6 border border-gray-700 ml-8"
                          >
                            <div className="flex justify-between items-start mb-4">
                              <div className="flex items-center gap-2">
                                <span className="text-lg font-semibold text-purple-400">
                                  Experience {index + 1}
                                </span>
                                <IconButton
                                  onClick={() => updateExperience(exp.id, 'visible', !exp.visible)}
                                  size="small"
                                  className={exp.visible ? 'text-yellow-400' : 'text-gray-500'}
                                >
                                  {exp.visible ? <Star size={16} /> : <StarBorder size={16} />}
                                </IconButton>
                              </div>
                              <IconButton
                                onClick={() => removeExperience(exp.id)}
                                size="small"
                                className="text-red-400 hover:text-red-300"
                              >
                                <Trash2 size={16} />
                              </IconButton>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <TextField
                                label="Company"
                                value={exp.company}
                                onChange={(e) =>
                                  updateExperience(exp.id, 'company', e.target.value)
                                }
                                fullWidth
                                size="small"
                                InputLabelProps={{ className: 'text-gray-400' }}
                                InputProps={{ className: 'text-white bg-gray-700' }}
                              />
                              <TextField
                                label="Position"
                                value={exp.position}
                                onChange={(e) =>
                                  updateExperience(exp.id, 'position', e.target.value)
                                }
                                fullWidth
                                size="small"
                                InputLabelProps={{ className: 'text-gray-400' }}
                                InputProps={{ className: 'text-white bg-gray-700' }}
                              />
                              <TextField
                                label="Location"
                                value={exp.location}
                                onChange={(e) =>
                                  updateExperience(exp.id, 'location', e.target.value)
                                }
                                fullWidth
                                size="small"
                                InputLabelProps={{ className: 'text-gray-400' }}
                                InputProps={{ className: 'text-white bg-gray-700' }}
                              />
                              <div className="flex gap-2">
                                <TextField
                                  label="Start Date"
                                  type="month"
                                  value={exp.startDate}
                                  onChange={(e) =>
                                    updateExperience(exp.id, 'startDate', e.target.value)
                                  }
                                  size="small"
                                  InputLabelProps={{ className: 'text-gray-400' }}
                                  InputProps={{ className: 'text-white bg-gray-700' }}
                                />
                                <TextField
                                  label="End Date"
                                  type="month"
                                  value={exp.endDate}
                                  onChange={(e) =>
                                    updateExperience(exp.id, 'endDate', e.target.value)
                                  }
                                  disabled={exp.current}
                                  size="small"
                                  InputLabelProps={{ className: 'text-gray-400' }}
                                  InputProps={{ className: 'text-white bg-gray-700' }}
                                />
                              </div>
                            </div>

                            <FormControlLabel
                              control={
                                <Switch
                                  checked={exp.current}
                                  onChange={(e) =>
                                    updateExperience(exp.id, 'current', e.target.checked)
                                  }
                                />
                              }
                              label="Currently working here"
                              className="text-gray-300 mb-4"
                            />

                            <TextField
                              label="Job Description"
                              value={exp.description}
                              onChange={(e) =>
                                updateExperience(exp.id, 'description', e.target.value)
                              }
                              fullWidth
                              multiline
                              rows={3}
                              size="small"
                              InputLabelProps={{ className: 'text-gray-400' }}
                              InputProps={{ className: 'text-white bg-gray-700' }}
                              helperText="Describe your key responsibilities and achievements"
                            />

                            <div className="mt-4">
                              <label className="text-sm text-gray-400 mb-2 block">
                                Key Highlights
                              </label>
                              <div className="flex flex-wrap gap-2 mb-2">
                                {exp.highlights.map((highlight, idx) => (
                                  <Chip
                                    key={idx}
                                    label={highlight}
                                    onDelete={() => {
                                      const newHighlights = exp.highlights.filter(
                                        (_, i) => i !== idx
                                      );
                                      updateExperience(exp.id, 'highlights', newHighlights);
                                    }}
                                    className="bg-purple-600 text-white"
                                    size="small"
                                  />
                                ))}
                              </div>
                              <TextField
                                placeholder="Add a highlight and press Enter"
                                size="small"
                                fullWidth
                                onKeyPress={(e) => {
                                  if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                                    const newHighlights = [
                                      ...exp.highlights,
                                      e.currentTarget.value.trim(),
                                    ];
                                    updateExperience(exp.id, 'highlights', newHighlights);
                                    e.currentTarget.value = '';
                                  }
                                }}
                                InputProps={{ className: 'text-white bg-gray-700' }}
                              />
                            </div>
                          </motion.div>
                        </SortableItem>
                      ))}
                    </SortableContext>
                  </DndContext>
                </div>
              )}

              {/* Skills Section */}
              {activeSection === 'skills' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-purple-400">Skills & Expertise</h3>

                  {/* Technical Skills */}
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Technical Skills</h4>
                    <div className="space-y-4">
                      {data.skills.technical.map((skill, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <TextField
                            label="Skill"
                            value={skill.name}
                            onChange={(e) => {
                              const newSkills = [...data.skills.technical];
                              newSkills[index].name = e.target.value;
                              setData((prev) => ({
                                ...prev,
                                skills: { ...prev.skills, technical: newSkills },
                              }));
                            }}
                            size="small"
                            className="flex-1"
                            InputLabelProps={{ className: 'text-gray-400' }}
                            InputProps={{ className: 'text-white bg-gray-700' }}
                          />
                          <TextField
                            label="Category"
                            value={skill.category}
                            onChange={(e) => {
                              const newSkills = [...data.skills.technical];
                              newSkills[index].category = e.target.value;
                              setData((prev) => ({
                                ...prev,
                                skills: { ...prev.skills, technical: newSkills },
                              }));
                            }}
                            size="small"
                            className="flex-1"
                            InputLabelProps={{ className: 'text-gray-400' }}
                            InputProps={{ className: 'text-white bg-gray-700' }}
                          />
                          <div className="flex items-center gap-2 min-w-[120px]">
                            <span className="text-sm text-gray-400">Level:</span>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={skill.level}
                              onChange={(e) => {
                                const newSkills = [...data.skills.technical];
                                newSkills[index].level = parseInt(e.target.value);
                                setData((prev) => ({
                                  ...prev,
                                  skills: { ...prev.skills, technical: newSkills },
                                }));
                              }}
                              className="flex-1"
                            />
                            <span className="text-sm text-purple-400 min-w-[30px]">
                              {skill.level}%
                            </span>
                          </div>
                          <IconButton
                            onClick={() => {
                              const newSkills = data.skills.technical.filter((_, i) => i !== index);
                              setData((prev) => ({
                                ...prev,
                                skills: { ...prev.skills, technical: newSkills },
                              }));
                            }}
                            size="small"
                            className="text-red-400"
                          >
                            <Trash2 size={16} />
                          </IconButton>
                        </div>
                      ))}
                      <Button
                        onClick={() => {
                          const newSkill = { name: '', level: 50, category: '' };
                          setData((prev) => ({
                            ...prev,
                            skills: {
                              ...prev.skills,
                              technical: [...prev.skills.technical, newSkill],
                            },
                          }));
                        }}
                        startIcon={<Plus size={16} />}
                        variant="outlined"
                        size="small"
                        className="text-purple-400 border-purple-400"
                      >
                        Add Technical Skill
                      </Button>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Languages</h4>
                    <div className="space-y-3">
                      {data.skills.languages.map((lang, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <TextField
                            label="Language"
                            value={lang.name}
                            onChange={(e) => {
                              const newLangs = [...data.skills.languages];
                              newLangs[index].name = e.target.value;
                              setData((prev) => ({
                                ...prev,
                                skills: { ...prev.skills, languages: newLangs },
                              }));
                            }}
                            size="small"
                            className="flex-1"
                            InputLabelProps={{ className: 'text-gray-400' }}
                            InputProps={{ className: 'text-white bg-gray-700' }}
                          />
                          <TextField
                            label="Proficiency"
                            select
                            value={lang.level}
                            onChange={(e) => {
                              const newLangs = [...data.skills.languages];
                              newLangs[index].level = e.target.value;
                              setData((prev) => ({
                                ...prev,
                                skills: { ...prev.skills, languages: newLangs },
                              }));
                            }}
                            size="small"
                            className="min-w-[150px]"
                            InputLabelProps={{ className: 'text-gray-400' }}
                            InputProps={{ className: 'text-white bg-gray-700' }}
                            SelectProps={{ native: true }}
                          >
                            <option value="Beginner">Beginner</option>
                            <option value="Conversational">Conversational</option>
                            <option value="Fluent">Fluent</option>
                            <option value="Native">Native</option>
                          </TextField>
                          <IconButton
                            onClick={() => {
                              const newLangs = data.skills.languages.filter((_, i) => i !== index);
                              setData((prev) => ({
                                ...prev,
                                skills: { ...prev.skills, languages: newLangs },
                              }));
                            }}
                            size="small"
                            className="text-red-400"
                          >
                            <Trash2 size={16} />
                          </IconButton>
                        </div>
                      ))}
                      <Button
                        onClick={() => {
                          const newLang = { name: '', level: 'Conversational' };
                          setData((prev) => ({
                            ...prev,
                            skills: {
                              ...prev.skills,
                              languages: [...prev.skills.languages, newLang],
                            },
                          }));
                        }}
                        startIcon={<Plus size={16} />}
                        variant="outlined"
                        size="small"
                        className="text-purple-400 border-purple-400"
                      >
                        Add Language
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Settings Section */}
              {activeSection === 'settings' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-purple-400">Resume Settings</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Appearance</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm text-gray-400 mb-2 block">
                            Font Size: {data.settings.fontSize}px
                          </label>
                          <input
                            type="range"
                            min="10"
                            max="16"
                            value={data.settings.fontSize}
                            onChange={(e) =>
                              setData((prev) => ({
                                ...prev,
                                settings: { ...prev.settings, fontSize: parseInt(e.target.value) },
                              }))
                            }
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-gray-400 mb-2 block">
                            Line Spacing: {data.settings.spacing}
                          </label>
                          <input
                            type="range"
                            min="1"
                            max="2"
                            step="0.1"
                            value={data.settings.spacing}
                            onChange={(e) =>
                              setData((prev) => ({
                                ...prev,
                                settings: { ...prev.settings, spacing: parseFloat(e.target.value) },
                              }))
                            }
                            className="w-full"
                          />
                        </div>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={data.settings.showPhoto}
                              onChange={(e) =>
                                setData((prev) => ({
                                  ...prev,
                                  settings: { ...prev.settings, showPhoto: e.target.checked },
                                }))
                              }
                            />
                          }
                          label="Show Profile Photo"
                          className="text-gray-300"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={data.settings.showReferences}
                              onChange={(e) =>
                                setData((prev) => ({
                                  ...prev,
                                  settings: { ...prev.settings, showReferences: e.target.checked },
                                }))
                              }
                            />
                          }
                          label="Show References"
                          className="text-gray-300"
                        />
                      </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Data Management</h4>
                      <div className="space-y-3">
                        <Button
                          onClick={() => {
                            localStorage.setItem('nova_resume_backup', JSON.stringify(data));
                            alert('Resume saved to local backup!');
                          }}
                          variant="outlined"
                          fullWidth
                          startIcon={<Save size={16} />}
                          className="text-green-400 border-green-400"
                        >
                          Save Backup
                        </Button>
                        <Button
                          onClick={() => {
                            const backup = localStorage.getItem('nova_resume_backup');
                            if (backup) {
                              setData(JSON.parse(backup));
                              alert('Resume restored from backup!');
                            } else {
                              alert('No backup found!');
                            }
                          }}
                          variant="outlined"
                          fullWidth
                          className="text-blue-400 border-blue-400"
                        >
                          Restore Backup
                        </Button>
                        <Button
                          onClick={() => {
                            if (confirm('Are you sure? This will reset all data.')) {
                              setData(defaultData);
                            }
                          }}
                          variant="outlined"
                          fullWidth
                          className="text-red-400 border-red-400"
                        >
                          Reset to Default
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700 bg-gray-800">
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>Last saved: {autoSave ? 'Auto-saving...' : 'Manual save required'}</span>
          <span>Nova Resume Editor v2.0</span>
        </div>
      </div>
    </div>
  );
}
