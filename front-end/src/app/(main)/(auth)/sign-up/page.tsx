import { AuthCard } from "../_components/auth-card";
import { SignInForm } from "./_components/sign-up-form";

const SignUpPage = () => {
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

export default SignUpPage;
