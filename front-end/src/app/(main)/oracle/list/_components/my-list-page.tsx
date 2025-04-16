export const MyListPage = () => {
  const books = [
    { id: 1, title: "The Great Gatsby" },
    { id: 2, title: "To Kill a Mockingbird" },
    { id: 3, title: "1984" },
    { id: 4, title: "Pride and Prejudice" },
    { id: 5, title: "The Catcher in the Rye" },
  ];

  return (
    <div className="h-full 2xl:flex">
      <div className="flex flex-col items-center space-y-2 bg-violet-700">
        <div className="mt-10 h-[220px] w-[241px] rounded-full bg-yellow-500">
          {/* Image*/}
        </div>{" "}
        <h3 className="text-3xl font-bold">User</h3>
        <span className="text-2xl font-light italic">email@gmail.com</span>
      </div>
      <div className="flex flex-col justify-center bg-blue-600 p-4">
        <h4 className="font-semibold">Book List</h4>
        {books.map(({ id, title }) => (
          <div
            className="mt-2 flex h-16 w-[350px] bg-slate-950 sm:w-[400px] md:w-[500px] xl:w-[890px]"
            key={id}
          >
            <div className="h-full w-14 bg-red-600">{/* Image*/}</div>
            <div className="flex w-full justify-between p-2">
              <h6>{title}</h6>
              <span>Rececly Bin</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
