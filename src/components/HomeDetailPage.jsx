import { useParams, Link } from "react-router";

export default function HomeDetailPage() {
  const params = useParams();
  const id = params.id;

  console.log("id yang dipilih:", id);

  const homeDetails = {
    "fitur-utama": {
      title: "Fitur Utama",
      content:
        "Platform ini dilengkapi dengan sistem manajemen alur kerja, integrasi instan, dan pelaporan otomatis.",
    },
    "panduan-mulai": {
      title: "Panduan Mulai",
      content:
        "Untuk memulai, buat akun baru, pilih template proyek, lalu undang anggota tim kamu.",
    },
    "layanan-tim": {
      title: "Layanan Tim",
      content:
        "Fitur kolaborasi tim memungkinkan pembagian peran, pelacakan tugas, dan komunikasi terpusat.",
    },
  };

  let data = homeDetails[id];

  if (data == null) {
    return (
      <div className="space-y-2">
        <p className="text-sm">Detail tidak ditemukan.</p>
        <Link to="/" className="text-blue-600 underline text-sm">
          Kembali ke Home
        </Link>
      </div>
    );
  } else {
    return (
      <div className="space-y-4">
        <div>
          <Link to="/" className="text-blue-600 underline text-sm">
            &larr; Kembali ke Home
          </Link>
        </div>
        <div>
          <h1 className="text-2xl font-bold">{data.title}</h1>
        </div>
        <div>
          <p className="text-sm">{data.content}</p>
        </div>
      </div>
    );
  }
}
