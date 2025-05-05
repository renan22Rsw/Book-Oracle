import { AuthCard } from "../_components/auth-card";
import { LoginForm } from "./_components/login-form";

const LoginPage = () => {
  return (
    <AuthCard
      title="Login"
      description="Login to your account"
      href="/sign-up"
      text="Don't have an account?"
    >
      <LoginForm />
    </AuthCard>
  );
};

export default LoginPage;
