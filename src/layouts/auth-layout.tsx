export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-white rounded p-2 w-3/4 border border-solid border-black shadow-md">
      <div className="flex-1 flex justify-center items-center h-96 bg-blue-700 rounded">
        <h1 className="text-6xl text-white">کوئراگرام</h1>
      </div>

      <div className="flex-1 flex flex-col items-center pt-2">
        { children }
      </div>
    </div>
  );
}