export const UpdateFormSuccessMessage = ({ text }: { text: string }) => {
  return <span className="pt-4 text-xs text-green-700">{text}</span>;
};

export const UpdateFormErrorMessage = ({ text }: { text: string }) => {
  return <span className="pt-4 text-xs text-red-700">{text}</span>;
};
