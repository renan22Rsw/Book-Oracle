export const AuthCardContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex min-h-[700px] items-center justify-center">
      {children}
    </div>
  );
};
