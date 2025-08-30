import Link from 'next/link';
import { Button, TextField, Divider } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { auth } from '@/lib/auth';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Alert, CircularProgress } from '@mui/material';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const handleDemoLogin = () => {
    setLoading(true);
    setError('');
    const result = auth.signIn('demo@nova.com', 'demo123');
    if (result.user) {
      router.push('/builder');
    } else {
      // Create demo user if doesn't exist
      const signupResult = auth.signUp('Demo User', 'demo@nova.com', 'demo123');
      if (signupResult.user) {
        router.push('/builder');
      }
    }
    setLoading(false);
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    const result = auth.signIn(email, password);
    if (result.user) {
      router.push('/builder');
    } else {
      setError(result.error || 'Login failed');
    }
    setLoading(false);
  };

  return (
    <motion.div
      className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl shadow-purple-500/10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="text-3xl font-bold text-center text-white mb-2" variants={itemVariants}>
        Welcome Back
      </motion.h2>
      <motion.p className="text-center text-gray-400 mb-8" variants={itemVariants}>
        Sign in to continue your journey.
      </motion.p>
      <form className="space-y-6" onSubmit={handleEmailLogin}>
        <motion.div variants={itemVariants}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{
              className: 'text-gray-400',
            }}
            InputProps={{
              className: 'text-white bg-white/5 border-white/20',
            }}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{
              className: 'text-gray-400',
            }}
            InputProps={{
              className: 'text-white bg-white/5 border-white/20',
            }}
          />
        </motion.div>
        {error && (
          <motion.div variants={itemVariants}>
            <Alert severity="error" className="bg-red-900/20 border border-red-500/50 text-red-300">
              {error}
            </Alert>
          </motion.div>
        )}
        {resetEmailSent && (
          <motion.div variants={itemVariants}>
            <Alert
              severity="success"
              className="bg-green-900/20 border border-green-500/50 text-green-300"
            >
              Password reset email sent! Check your inbox.
            </Alert>
          </motion.div>
        )}
        <motion.div variants={itemVariants}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            disabled={loading}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_20px_theme(colors.purple.500/0.5)] disabled:opacity-50"
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Log In'}
          </Button>
        </motion.div>
      </form>
      <motion.div className="mt-6 text-center" variants={itemVariants}>
        <button
          type="button"
          onClick={handleDemoLogin}
          disabled={loading}
          className="text-sm text-purple-400 hover:text-purple-300 disabled:opacity-50 transition-colors"
        >
          Try Demo Account
        </button>
      </motion.div>
      <motion.div className="my-6" variants={itemVariants}>
        <Divider className="before:border-white/20 after:border-white/20 text-gray-400">OR</Divider>
      </motion.div>
      <motion.div className="space-y-4" variants={itemVariants}>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<FcGoogle />}
          className="text-white border-white/20 hover:bg-white/5 opacity-50 cursor-not-allowed"
          disabled
        >
          Google (Demo Only)
        </Button>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<FaFacebook className="text-blue-500" />}
          className="text-white border-white/20 hover:bg-white/5 opacity-50 cursor-not-allowed"
          disabled
        >
          Facebook (Demo Only)
        </Button>
      </motion.div>
      <motion.p className="mt-8 text-center text-sm text-gray-400" variants={itemVariants}>
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="font-semibold text-purple-400 hover:text-purple-300">
          Sign up
        </Link>
      </motion.p>
    </motion.div>
  );
}
