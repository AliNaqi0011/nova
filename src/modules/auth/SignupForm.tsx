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

export default function SignupForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!fullName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }

    const result = auth.signUp(fullName, email, password);
    if (result.user) {
      router.push('/builder');
    } else {
      setError(result.error || 'Could not create account');
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
        Create Your Account
      </motion.h2>
      <motion.p className="text-center text-gray-400 mb-8" variants={itemVariants}>
        Start building your future today.
      </motion.p>
      <form className="space-y-6" onSubmit={handleEmailSignup}>
        <motion.div variants={itemVariants}>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            required
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
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            helperText="Must be at least 6 characters"
            InputLabelProps={{
              className: 'text-gray-400',
            }}
            InputProps={{
              className: 'text-white bg-white/5 border-white/20',
            }}
            FormHelperTextProps={{
              className: 'text-gray-500',
            }}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
        <motion.div variants={itemVariants}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            disabled={loading}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_20px_theme(colors.purple.500/0.5)] disabled:opacity-50"
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Create Account'}
          </Button>
        </motion.div>
      </form>
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
        Already have an account?{' '}
        <Link href="/login" className="font-semibold text-purple-400 hover:text-purple-300">
          Log in
        </Link>
      </motion.p>
    </motion.div>
  );
}
