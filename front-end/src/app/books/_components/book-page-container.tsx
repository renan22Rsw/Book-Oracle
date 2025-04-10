export const BookPageContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="flex flex-col items-center justify-center pt-10">
      {children}
    </main>
  );
};
