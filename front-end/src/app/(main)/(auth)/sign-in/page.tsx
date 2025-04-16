import { AuthCard } from "../_components/auth-card";
import { SignInForm } from "./_components/sign-in-form";

const SignInPage = () => {
  return (
    <AuthCard
      title="Sign up"
      description="Create an account"
      href="/login"
      text="Already have an account?"
    >
      <SignInForm />
    </AuthCard>
  );
};

export default SignInPage;
