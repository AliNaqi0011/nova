import Head from 'next/head';
import AuthLayout from '@/modules/auth/AuthLayout';
import SignupForm from '@/modules/auth/SignupForm';

function SignupPage() {
  return (
    <>
      <Head>
        <title>Sign Up - Nova Resume</title>
      </Head>
      <AuthLayout>
        <SignupForm />
      </AuthLayout>
    </>
  );
}

export default SignupPage;
