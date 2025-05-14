export const AskOraclePageContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="flex h-full flex-col items-center justify-center pt-10">
      {children}
    </main>
  );
};
