import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="p-6 text-center space-y-2 h-175 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-sm">Halaman tidak ditemukan.</p>
      <Link to="/" className="text-blue-600 underline text-sm">
            &larr; Kembali ke Home
      </Link>
    </div>
  );
}
