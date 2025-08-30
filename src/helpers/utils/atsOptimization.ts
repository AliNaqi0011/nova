// ATS Optimization utilities
export const ATS_KEYWORDS = {
  technical: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'Java',
    'SQL',
    'HTML',
    'CSS',
    'Git',
    'AWS',
    'Docker',
    'Kubernetes',
    'MongoDB',
    'PostgreSQL',
  ],
  soft: [
    'Leadership',
    'Communication',
    'Problem Solving',
    'Team Work',
    'Project Management',
    'Critical Thinking',
    'Adaptability',
    'Time Management',
    'Collaboration',
  ],
  industries: [
    'Software Development',
    'Web Development',
    'Data Analysis',
    'Digital Marketing',
    'Product Management',
    'UI/UX Design',
    'DevOps',
    'Quality Assurance',
  ],
};

export const ATS_GUIDELINES = {
  fonts: ['Arial', 'Calibri', 'Times New Roman', 'Helvetica'],
  sections: [
    'Contact Information',
    'Professional Summary',
    'Work Experience',
    'Education',
    'Skills',
    'Certifications',
    'Awards',
  ],
  formatting: {
    useStandardHeadings: true,
    avoidTables: true,
    useSimpleFormatting: true,
    includePlainText: true,
  },
};

export const optimizeForATS = (content: string): string => {
  // Remove special characters that ATS might not parse
  return content
    .replace(/[^\w\s\-.,()]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

export const validateATSCompliance = (template: any): boolean => {
  const checks = [
    template.usesStandardFonts,
    template.hasSimpleLayout,
    template.avoidsComplexGraphics,
    template.usesStandardSections,
  ];

  return checks.every((check) => check === true);
};
