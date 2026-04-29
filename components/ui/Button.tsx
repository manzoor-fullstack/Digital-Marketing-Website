export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
      {children}
    </button>
  );
}