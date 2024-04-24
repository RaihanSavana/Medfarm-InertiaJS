import Navbar from "@/Layouts/Navbar";
import { Head, Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";

export default function DetailObat({ auth, temukan_obats }) {
    console.log(temukan_obats);

    return (
        <>
            <Head title="Penyakit" />
            <Navbar auth={auth.auth}></Navbar>
            <br />
            <br />
            <br />

            <div
                key={'  '}
                className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-lg p-10 text-black"
                style={{ backgroundColor: "#F1F9FF" }}
            >
                <div className="flex flex-col md:flex-row md:space-x-8">
                    <div className="w-full md:w-1/3">
                        <img
                            src={temukan_obats.image} // Menggunakan properti img dari objek temukan_obats untuk menampilkan gambar obat
                            alt={temukan_obats.nama} // Menggunakan properti nama dari objek temukan_obats untuk alt attribute
                            className="w-full rounded-lg "
                            style={{ maxWidth: "250px", borderRadius: "20px" }} // menambahkan style CSS
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <div className="mb-4">
                            <h2
                                className="font-semibold mb-3"
                                style={{ fontSize: "30px" }}
                            >
                                {temukan_obats.nama}
                            </h2>{" "}
                            {/* Menggunakan properti nama dari objek temukan_obats */}
                            <hr className="my-2" />
                            <h3 className="font-semibold text-lg mb-1">
                                Jenis Obat
                            </h3>
                            <p>{temukan_obats.jenis}</p>{" "}
                            {/* Menggunakan properti jenis dari objek temukan_obats */}
                            <hr className="my-2" />
                            <h3 className="font-semibold text-lg mb-1">
                                Deskripsi
                            </h3>
                            <p>{temukan_obats.deskripsi}</p>{" "}
                            {/* Menggunakan properti deskripsi dari objek temukan_obats */}
                            <hr className="my-2" />
                            <h3 className="font-semibold text-lg mb-1">
                                Indikasi Umum
                            </h3>
                            <p>{temukan_obats.indikasi_umum}</p>{" "}
                            {/* Menggunakan properti indikasi_umum dari objek temukan_obats */}
                            <hr className="my-2" />
                            <h3 className="font-semibold text-lg mb-1">
                                Komposisi
                            </h3>
                            <p>{temukan_obats.komposisi}</p>{" "}
                            {/* Menggunakan properti komposisi dari objek temukan_obats */}
                            <hr className="my-2" />
                            <h3 className="font-semibold text-lg mb-1">
                                Dosis
                            </h3>
                            <p>{temukan_obats.dosis}</p>{" "}
                            {/* Menggunakan properti dosis dari objek temukan_obats */}
                            <hr className="my-2" />
                            <h3 className="font-semibold text-lg mb-1">
                                Aturan Pakai
                            </h3>
                            <p>{temukan_obats.aturan_pakai}</p>{" "}
                            {/* Menggunakan properti aturan_pakai dari objek temukan_obats */}
                            <hr className="my-2" />
                            <h3 className="font-semibold text-lg mb-1">
                                Golongan Produk
                            </h3>
                            <p>{temukan_obats.golongan_produk}</p>{" "}
                            {/* Menggunakan properti golongan_produk dari objek temukan_obats */}
                            <hr className="my-2" />
                            <h3 className="font-semibold text-lg mb-1">
                                Kemasan
                            </h3>
                            <p>{temukan_obats.kemasan}</p>{" "}
                            {/* Menggunakan properti kemasan dari objek temukan_obats */}
                            <hr className="my-2" />
                            <h3 className="font-semibold text-lg mb-1">
                                No Registrasi
                            </h3>
                            <p>{temukan_obats.no_registrasi}</p>{" "}
                            {/* Menggunakan properti no_registrasi dari objek temukan_obats */}
                            <hr className="my-2" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
