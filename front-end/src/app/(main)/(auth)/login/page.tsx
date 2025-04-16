import { AuthCard } from "../_components/auth-card";
import { LoginForm } from "./_components/login-form";

const LoginPage = () => {
  return (
    <AuthCard
      title="Logar"
      description="Entre na sua conta"
      href="/sign-in"
      text="Não tem uma conta?"
    >
      <LoginForm />
    </AuthCard>
  );
};

export default LoginPage;
