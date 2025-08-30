export interface StandardResumeData {
  basics: {
    name: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    summary: string;
  };
  experience: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
  }>;
  skills: {
    technical: string[];
    languages: string[];
  };
}

export const defaultResumeData: StandardResumeData = {
  basics: {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 8900',
    location: 'New York, NY',
    website: 'linkedin.com/in/johndoe',
    summary: 'Professional summary goes here...',
  },
  experience: [
    {
      company: 'Company Name',
      position: 'Job Title',
      startDate: '2020',
      endDate: 'Present',
      description: 'Job description and achievements...',
    },
  ],
  education: [
    {
      institution: 'University Name',
      degree: "Bachelor's Degree",
      startDate: '2016',
      endDate: '2020',
    },
  ],
  skills: {
    technical: ['JavaScript', 'React', 'Node.js'],
    languages: ['English', 'Spanish'],
  },
};
