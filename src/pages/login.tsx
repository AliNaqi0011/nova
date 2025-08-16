import Head from 'next/head';
import AuthLayout from '@/modules/auth/AuthLayout';
import LoginForm from '@/modules/auth/LoginForm';

function LoginPage() {
  return (
    <>
      <Head>
        <title>Login - Nova Resume</title>
      </Head>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </>
  );
}

export default LoginPage;
