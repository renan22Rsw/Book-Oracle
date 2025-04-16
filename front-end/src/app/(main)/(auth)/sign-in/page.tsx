import { AuthCard } from "../_components/auth-card";
import { SignInForm } from "./_components/sign-in-form";

const SignInPage = () => {
  return (
    <AuthCard
      title="Cadastre-se"
      description="Cria sua conta para usar o BookOracle"
      href="/login"
      text="Já tem uma conta?"
    >
      <SignInForm />
    </AuthCard>
  );
};

export default SignInPage;
