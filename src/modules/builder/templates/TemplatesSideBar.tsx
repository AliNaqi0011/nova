import { AVAILABLE_TEMPLATES } from '@/helpers/constants';
import { useTemplates } from '@/stores/useTemplate';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { TemplateLivePreview } from '@/helpers/common/components/TemplateLivePreview';
import dynamic from 'next/dynamic';

const TemplateCard = ({
  id,
  name,
  component,
  isActive,
  onClick,
}: {
  id: string;
  name: string;
  component: React.ComponentType;
  isActive: boolean;
  onClick: (id: string) => void;
}) => {
  if (!component) {
    return (
      <div className="aspect-[1/1.41] rounded-lg bg-gray-800 flex items-center justify-center border-2 border-white/20">
        <span className="text-white text-xs">Not found</span>
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={() => onClick(id)}
      className={`group relative rounded-lg overflow-hidden cursor-pointer border-2 ${
        isActive ? 'border-purple-500 shadow-purple-500/40 shadow-lg' : 'border-white/20'
      } transition-all duration-300 aspect-[1/1.41]`}
    >
      <TemplateLivePreview TemplateComponent={component} scale={0.18} />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {isActive && (
        <div className="absolute top-2 right-2 bg-purple-600 text-white rounded-full p-1 shadow-md">
          <Check className="h-4 w-4" />
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-2 text-center bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white text-xs font-semibold truncate">{name}</p>
      </div>
    </motion.div>
  );
};

const TemplatesSideBar = ({
  closeEditor,
  isMobile = false,
}: {
  closeEditor?: () => void;
  isMobile?: boolean;
}) => {
  const activeTemplateId = useTemplates((state) => state.activeTemplate.id);
  const setTemplate = useTemplates((state) => state.setTemplate);

  const handleTemplateSelect = (templateId: string) => {
    setTemplate(AVAILABLE_TEMPLATES[templateId]);
    if (isMobile) {
      closeEditor?.();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-black/80 backdrop-blur-sm border-l border-white/10 h-full text-gray-300 p-6 overflow-auto relative no-scrollbar"
    >
      <h2 className="text-2xl font-bold text-white mb-6 px-1">Templates</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.values(AVAILABLE_TEMPLATES).map((template) => (
          <TemplateCard
            key={template.id}
            id={template.id}
            name={template.name}
            component={template.component}
            isActive={template.id === activeTemplateId}
            onClick={handleTemplateSelect}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TemplatesSideBar;
