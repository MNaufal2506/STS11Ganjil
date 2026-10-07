import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-medium text-gray-700 mb-1">Pusat Bantuan</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Pertanyaan Umum
        </h1>
        <p className="text-sm text-gray-500">
          Temukan jawaban dari pertanyaan yang sering ditanyakan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-56">
          <div>
            <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-700 text-xs font-semibold flex items-center justify-center mb-6">
              1
            </div>
            <h2 className="text-base font-bold text-gray-900 mb-1">
              Cara Mendaftar Akun
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Petunjuk langkah demi langkah mendaftar.
            </p>
          </div>
          <Link
            to="/home/cara-mendaftar-akun"
            className="text-xs font-medium text-gray-900 hover:underline"
          >
            Lihat detail &rarr;
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-56">
          <div>
            <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-700 text-xs font-semibold flex items-center justify-center mb-6">
              2
            </div>
            <h2 className="text-base font-bold text-gray-900 mb-1">
              Metode Pembayaran
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Daftar metode pembayaran yang didukung.
            </p>
          </div>
          <Link
            to="/home/metode-pembayaran"
            className="text-xs font-medium text-gray-900 hover:underline"
          >
            Lihat detail &rarr;
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-56">
          <div>
            <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-700 text-xs font-semibold flex items-center justify-center mb-6">
              3
            </div>
            <h2 className="text-base font-bold text-gray-900 mb-1">
              Kebijakan Pengembalian
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Syarat dan ketentuan refund.
            </p>
          </div>
          <Link
            to="/home/kebijakan-pengembalian"
            className="text-xs font-medium text-gray-900 hover:underline"
          >
            Lihat detail &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
