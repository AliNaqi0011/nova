import { useState } from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import { Plus, Trash2 } from 'lucide-react';
import { StandardResumeData, defaultResumeData } from '@/lib/resumeFields';

interface StandardEditorProps {
  data: StandardResumeData;
  onChange: (data: StandardResumeData) => void;
}

export default function StandardEditor({ data, onChange }: StandardEditorProps) {
  const updateBasics = (field: string, value: string) => {
    onChange({
      ...data,
      basics: { ...data.basics, [field]: value },
    });
  };

  const addExperience = () => {
    onChange({
      ...data,
      experience: [
        ...data.experience,
        {
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    });
  };

  const updateExperience = (index: number, field: string, value: string) => {
    const updated = [...data.experience];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ ...data, experience: updated });
  };

  const removeExperience = (index: number) => {
    onChange({
      ...data,
      experience: data.experience.filter((_, i) => i !== index),
    });
  };

  const addEducation = () => {
    onChange({
      ...data,
      education: [
        ...data.education,
        {
          institution: '',
          degree: '',
          startDate: '',
          endDate: '',
        },
      ],
    });
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const updated = [...data.education];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ ...data, education: updated });
  };

  const removeEducation = (index: number) => {
    onChange({
      ...data,
      education: data.education.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="p-4 space-y-6 bg-gray-900 text-white h-full overflow-y-auto">
      {/* Basic Info */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-purple-400">Basic Information</h3>
        <TextField
          label="Full Name"
          value={data.basics.name}
          onChange={(e) => updateBasics('name', e.target.value)}
          fullWidth
          variant="outlined"
          size="small"
          InputLabelProps={{ className: 'text-gray-400' }}
          InputProps={{ className: 'text-white bg-gray-800' }}
        />
        <TextField
          label="Email"
          value={data.basics.email}
          onChange={(e) => updateBasics('email', e.target.value)}
          fullWidth
          variant="outlined"
          size="small"
          InputLabelProps={{ className: 'text-gray-400' }}
          InputProps={{ className: 'text-white bg-gray-800' }}
        />
        <TextField
          label="Phone"
          value={data.basics.phone}
          onChange={(e) => updateBasics('phone', e.target.value)}
          fullWidth
          variant="outlined"
          size="small"
          InputLabelProps={{ className: 'text-gray-400' }}
          InputProps={{ className: 'text-white bg-gray-800' }}
        />
        <TextField
          label="Location"
          value={data.basics.location}
          onChange={(e) => updateBasics('location', e.target.value)}
          fullWidth
          variant="outlined"
          size="small"
          InputLabelProps={{ className: 'text-gray-400' }}
          InputProps={{ className: 'text-white bg-gray-800' }}
        />
        <TextField
          label="Website/LinkedIn"
          value={data.basics.website || ''}
          onChange={(e) => updateBasics('website', e.target.value)}
          fullWidth
          variant="outlined"
          size="small"
          InputLabelProps={{ className: 'text-gray-400' }}
          InputProps={{ className: 'text-white bg-gray-800' }}
        />
        <TextField
          label="Professional Summary"
          value={data.basics.summary}
          onChange={(e) => updateBasics('summary', e.target.value)}
          fullWidth
          multiline
          rows={3}
          variant="outlined"
          size="small"
          InputLabelProps={{ className: 'text-gray-400' }}
          InputProps={{ className: 'text-white bg-gray-800' }}
        />
      </div>

      {/* Experience */}
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
          <div
            key={index}
            className="space-y-2 p-3 bg-gray-800 rounded border-l-4 border-purple-500"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Experience {index + 1}</span>
              <IconButton
                onClick={() => removeExperience(index)}
                size="small"
                className="text-red-400"
              >
                <Trash2 size={16} />
              </IconButton>
            </div>
            <TextField
              label="Company"
              value={exp.company}
              onChange={(e) => updateExperience(index, 'company', e.target.value)}
              fullWidth
              size="small"
              InputLabelProps={{ className: 'text-gray-400' }}
              InputProps={{ className: 'text-white bg-gray-700' }}
            />
            <TextField
              label="Position"
              value={exp.position}
              onChange={(e) => updateExperience(index, 'position', e.target.value)}
              fullWidth
              size="small"
              InputLabelProps={{ className: 'text-gray-400' }}
              InputProps={{ className: 'text-white bg-gray-700' }}
            />
            <div className="grid grid-cols-2 gap-2">
              <TextField
                label="Start Date"
                value={exp.startDate}
                onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                size="small"
                InputLabelProps={{ className: 'text-gray-400' }}
                InputProps={{ className: 'text-white bg-gray-700' }}
              />
              <TextField
                label="End Date"
                value={exp.endDate}
                onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                size="small"
                InputLabelProps={{ className: 'text-gray-400' }}
                InputProps={{ className: 'text-white bg-gray-700' }}
              />
            </div>
            <TextField
              label="Description"
              value={exp.description}
              onChange={(e) => updateExperience(index, 'description', e.target.value)}
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

      {/* Education */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-purple-400">Education</h3>
          <Button
            onClick={addEducation}
            startIcon={<Plus size={16} />}
            variant="outlined"
            size="small"
            className="text-purple-400 border-purple-400"
          >
            Add
          </Button>
        </div>
        {data.education.map((edu, index) => (
          <div
            key={index}
            className="space-y-2 p-3 bg-gray-800 rounded border-l-4 border-purple-500"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Education {index + 1}</span>
              <IconButton
                onClick={() => removeEducation(index)}
                size="small"
                className="text-red-400"
              >
                <Trash2 size={16} />
              </IconButton>
            </div>
            <TextField
              label="Institution"
              value={edu.institution}
              onChange={(e) => updateEducation(index, 'institution', e.target.value)}
              fullWidth
              size="small"
              InputLabelProps={{ className: 'text-gray-400' }}
              InputProps={{ className: 'text-white bg-gray-700' }}
            />
            <TextField
              label="Degree"
              value={edu.degree}
              onChange={(e) => updateEducation(index, 'degree', e.target.value)}
              fullWidth
              size="small"
              InputLabelProps={{ className: 'text-gray-400' }}
              InputProps={{ className: 'text-white bg-gray-700' }}
            />
            <div className="grid grid-cols-2 gap-2">
              <TextField
                label="Start Date"
                value={edu.startDate}
                onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
                size="small"
                InputLabelProps={{ className: 'text-gray-400' }}
                InputProps={{ className: 'text-white bg-gray-700' }}
              />
              <TextField
                label="End Date"
                value={edu.endDate}
                onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                size="small"
                InputLabelProps={{ className: 'text-gray-400' }}
                InputProps={{ className: 'text-white bg-gray-700' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-purple-400">Skills</h3>
        <TextField
          label="Technical Skills (comma separated)"
          value={data.skills.technical.join(', ')}
          onChange={(e) =>
            onChange({
              ...data,
              skills: {
                ...data.skills,
                technical: e.target.value
                  .split(',')
                  .map((s) => s.trim())
                  .filter((s) => s),
              },
            })
          }
          fullWidth
          multiline
          rows={2}
          size="small"
          InputLabelProps={{ className: 'text-gray-400' }}
          InputProps={{ className: 'text-white bg-gray-800' }}
        />
        <TextField
          label="Languages (comma separated)"
          value={data.skills.languages.join(', ')}
          onChange={(e) =>
            onChange({
              ...data,
              skills: {
                ...data.skills,
                languages: e.target.value
                  .split(',')
                  .map((s) => s.trim())
                  .filter((s) => s),
              },
            })
          }
          fullWidth
          size="small"
          InputLabelProps={{ className: 'text-gray-400' }}
          InputProps={{ className: 'text-white bg-gray-800' }}
        />
      </div>
    </div>
  );
}
