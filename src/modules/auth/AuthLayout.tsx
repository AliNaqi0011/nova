import Footer from '@/modules/landing/Footer';
import Header from '@/modules/landing/Header';
import { motion } from 'framer-motion';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md mx-auto"
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
