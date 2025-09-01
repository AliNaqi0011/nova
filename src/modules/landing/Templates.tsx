import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Eye, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { AVAILABLE_TEMPLATES } from '@/helpers/constants';
import { TemplateLivePreview } from '@/helpers/common/components/TemplateLivePreview';
import { useTemplates } from '@/stores/useTemplate';

const templateCategories = [
  {
    name: 'Modern',
    description:
      'Our modern resume templates are meticulously designed for the forward-thinking professional in today&apos;s competitive job market. Featuring clean lines, bold, readable typography, and a minimalist aesthetic, these ATS-friendly templates are perfect for roles in tech, marketing, design, and other innovative industries. A modern resume needs to be scannable, visually appealing, and effective at communicating your value proposition quickly. Make a memorable first impression with a sleek, contemporary design that strategically highlights your key skills, projects, and experience, ensuring your application stands out to recruiters and hiring managers alike.',
    templates: [
      {
        name: 'Modern Template 1',
        imageUrl: '/templates/modern.png',
        aiHint: 'modern resume',
      },
      {
        name: 'Modern Template 2',
        imageUrl: '/templates/professional.png',
        aiHint: 'sleek resume',
      },
      {
        name: 'Modern Template 3',
        imageUrl: 'https://placehold.co/400x560.png',
        aiHint: 'tech resume',
      },
      {
        name: 'Modern Template 4',
        imageUrl: 'https://placehold.co/400x560.png',
        aiHint: 'minimalist resume',
      },
      {
        name: 'Modern Template 5',
        imageUrl: 'https://placehold.co/400x560.png',
        aiHint: 'contemporary resume',
      },
      {
        name: 'Modern Template 6',
        imageUrl: 'https://placehold.co/400x560.png',
        aiHint: 'bold resume',
      },
    ],
  },
  {
    name: 'Professional',
    description:
      'For careers that demand a classic, authoritative, and trusted presentation, our professional resume templates are the ideal choice. These timeless, elegant designs are perfectly suited for corporate, legal, finance, and academic fields, where clarity, structure, and tradition are paramount. Each template is meticulously structured to present your career history, accomplishments, and qualifications in a clear, sophisticated, and easy-to-read format. This helps you command respect and project confidence, making it the perfect tool to secure your next executive or high-level role.',
    templates: [
      {
        name: 'Professional Template 1',
        imageUrl: '/templates/professional.png',
        aiHint: 'corporate resume',
      },
      {
        name: 'Professional Template 2',
        imageUrl: '/templates/modern.png',
        aiHint: 'executive resume',
      },
      {
        name: 'Professional Template 3',
        imageUrl: 'https://placehold.co/400x560.png',
        aiHint: 'legal resume',
      },
      {
        name: 'Professional Template 4',
        imageUrl: 'https://placehold.co/400x560.png',
        aiHint: 'academic resume',
      },
      {
        name: 'Professional Template 5',
        imageUrl: 'https://placehold.co/400x560.png',
        aiHint: 'classic resume',
      },
      {
        name: 'Professional Template 6',
        imageUrl: 'https://placehold.co/400x560.png',
        aiHint: 'formal resume',
      },
    ],
  },
  {
    name: 'Creative',
    description:
      "Unleash your personality and break away from the conventional with our vibrant creative resume templates. Expertly crafted for artists, designers, marketers, and other innovators, these templates utilize dynamic color palettes, innovative layouts, and unique typographic elements to powerfully showcase your individuality and brand. A creative resume is more than just a document; it's your opportunity to demonstrate your artistic flair and capture the attention of employers in the creative industries. Turn your application into a compelling portfolio piece that tells your unique story.",
    templates: [
      {
        name: 'Creative Template 1',
        imageUrl: 'https://placehold.co/400x560.png',
        aiHint: 'designer resume',
      },
      {
        name: 'Creative Template 2',
        imageUrl: 'https://placehold.co/400x560.png',
        aiHint: 'artistic resume',
      },
      {
        name: 'Creative Template 3',
        imageUrl: 'https://placehold.co/400x560.png',
        aiHint: 'marketing resume',
      },
      {
        name: 'Creative Template 4',
        imageUrl: 'https://placehold.co/400x560.png',
        aiHint: 'graphic design resume',
      },
      {
        name: 'Creative Template 5',
        imageUrl: 'https://placehold.co/400x560.png',
        aiHint: 'portfolio resume',
      },
      {
        name: 'Creative Template 6',
        imageUrl: 'https://placehold.co/400x560.png',
        aiHint: 'unique resume',
      },
    ],
  },
];

const TemplateCard = ({ templateId }: { templateId: string }) => {
  const template = AVAILABLE_TEMPLATES[templateId];
  const { setTemplate } = useTemplates();
  
  if (!template) {
    return (
      <div className="aspect-[4/5.6] rounded-2xl bg-gray-800 flex items-center justify-center">
        <span className="text-white text-sm">Template not found</span>
      </div>
    );
  }

  const handleTemplateSelect = () => {
    setTemplate(template);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 50, damping: 15 },
    },
  };

  return (
    <motion.div
      className="group relative"
      variants={cardVariants}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          rotateY: 10,
          boxShadow:
            '0 25px 50px -12px rgba(168, 85, 247, 0.25), 0 10px 10px -5px rgba(236, 72, 153, 0.2)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative w-full transition-all duration-500 aspect-[4/5.6] rounded-2xl overflow-hidden bg-gray-800"
      >
        <div className="absolute inset-0">
          <TemplateLivePreview TemplateComponent={template.component} scale={0.5} />
        </div>
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-purple-500/50 transition-all duration-300" />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col items-center justify-center p-4 text-center">
          <h3 className="text-lg font-semibold text-white">{template.name}</h3>
          <Link href="/builder">
            <button 
              onClick={handleTemplateSelect}
              className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-full hover:bg-white/20 transition-all"
            >
              <Eye className="w-4 h-4 mr-2" />
              Use Template
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Templates() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div id="templates" className="bg-black text-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Find Your Perfect Resume Style
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We&apos;ve crafted templates for every career path. Choose a category that fits your
            journey and start building a resume that truly represents you.
          </motion.p>
        </div>

        <div className="mt-16 space-y-20">
          {templateCategories.map((category) => (
            <motion.div
              key={category.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              <div className="mb-12 text-center">
                <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl">
                  {category.name}
                </h2>
                <p className="mt-4 text-base text-gray-400 max-w-3xl mx-auto">
                  {category.description}
                </p>
                <div className="mt-6">
                  <Button
                    variant="text"
                    size="large"
                    className="text-purple-400 hover:bg-purple-400/10"
                    endIcon={<ArrowRight />}
                  >
                    View all {category.name.toLowerCase()} templates
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
                {category.name === 'Modern' &&
                  ['modern2', 'modern3', 'modern4'].map((templateId) => (
                    <TemplateCard key={templateId} templateId={templateId} />
                  ))}
                {category.name === 'Professional' &&
                  ['professional2', 'professional3', 'professional4'].map((templateId) => (
                    <TemplateCard key={templateId} templateId={templateId} />
                  ))}
                {category.name === 'Creative' &&
                  ['creative1', 'simple2', 'impact2'].map((templateId) => (
                    <TemplateCard key={templateId} templateId={templateId} />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
