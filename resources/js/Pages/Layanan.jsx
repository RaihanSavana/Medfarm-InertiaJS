import { useState } from "react";
import Navbar from "@/Layouts/Navbar";
import { Head, Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";

export default function Layanan({ auth }) {
    // State untuk mengontrol apakah modal ditampilkan atau tidak
    const [isModalOpen, setIsModalOpen] = useState(false);
    // State untuk menyimpan informasi konten modal
    const [modalContent, setModalContent] = useState({
        treatment: "",
    });

    // Fungsi untuk menampilkan modal
    const openModal = (treatment) => {
        setModalContent({
            treatment,
        });
        setIsModalOpen(true);
    };

    // Fungsi untuk menutup modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Head title="Produk" />
            <Navbar auth={auth.auth}></Navbar>
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-14">
                <h1 className="text-black text-3xl font-bold text-center mb-8">
                    Layanan Apotek Barito
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
                        <img
                            src="images/Layanan/Cek_asam_urat.png"
                            alt="Obat 1"
                            className="w-1/3 h-[300px] object-cover"
                        />
                        <div className="p-4 flex-grow bg-green-500">
                            <h3 className="text-lg font-semibold text-white mb-2">
                                Cek Asam Urat
                            </h3>
                            <p className="text-white">Rp 15.000</p>
                            <hr className="my-2 border-gray-200" />
                            <p className="text-white">
                                Asam urat atau gout adalah nyeri sendi berat
                                yang disertai kemerahan, bengkak, dan rasa
                                hangat akibat penumpukan kristal asam urat di
                                sendi. Kondisi ini paling sering terjadi di
                                jempol kaki, tetapi bisa juga menyerang sendi
                                pada jari kaki yang lain, lutut, atau
                                pergelangan kaki.
                            </p>
                            {/* Button untuk menampilkan modal */}
                            <button
                                onClick={() =>
                                    openModal(
                                        "Cara penanganan atau pencegahan cek asam urat"
                                    )
                                }
                                className="bg-blue-500 text-white px-4 py-2 mt-20 rounded-md"
                            >
                                Cek sekarang
                            </button>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
                        <img
                            src="images/Layanan/Cek_gula_darah.png"
                            alt="Obat 2"
                            className="w-1/3 h-[300px] object-cover"
                        />
                        <div className="p-4 flex-grow bg-green-500">
                            <h3 className="text-lg font-semibold text-white mb-2">
                                Cek Gula Darah
                            </h3>
                            <p className="text-white">Rp 15.000</p>
                            <hr className="my-2 border-gray-200" />
                            <p className="text-white">
                                Gula darah adalah gula atau glukosa yang ada
                                dalam darah kita. Dalam istilah medis disebut
                                sebagai glukosa darah (Blood Glucose). Gula
                                darah berasal dari makanan yang kita makan, dan
                                merupakan sumber energi utama bagi tubuh. Agar
                                sampai ke seluruh sel-sel di tubuh kita gula ini
                                dialirkan melalui pembuluh darah.
                            </p>
                            {/* Button untuk menampilkan modal */}
                            <button
                                onClick={() =>
                                    openModal(
                                        "Cara penanganan atau pencegahan cek gula darah"
                                    )
                                }
                                className="bg-blue-500 text-white px-4 py-2 mt-20 rounded-md"
                            >
                                Cek Sekarang
                            </button>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
                        <img
                            src="images/Layanan/Cek_kolesterol.png"
                            alt="Obat 2"
                            className="w-1/3 h-[300px] object-cover"
                        />
                        <div className="p-4 flex-grow bg-green-500">
                            <h3 className="text-lg font-semibold text-white mb-2">
                                Cek Kolesterol
                            </h3>
                            <p className="text-white">Rp 20.000</p>
                            <hr className="my-2 border-gray-200" />
                            <p className="text-white">
                                Kolesterol adalah sejenis lipid yang merupakan
                                molekul lemak atau yang menyerupainya.
                                Kolesterol ditemukan pada membran sel dan
                                disirkulasikan dalam plasma darah. Kolesterol
                                membantu tubuh memproduksi vitamin D, hormon,
                                dan asam empedu untuk mencerna lemak. Kolesterol
                                dalam kadar yang sesuai dibutuhkan oleh tubuh
                                untuk membangun sel-sel baru.
                            </p>
                            {/* Button untuk menampilkan modal */}
                            <button
                                onClick={() =>
                                    openModal(
                                        "Cara penanganan atau pencegahan kolesterol"
                                    )
                                }
                                className="bg-blue-500 text-white px-4 py-2 mt-14 rounded-md"
                            >
                                Cek Sekarang
                            </button>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
                        <img
                            src="images/Layanan/Cek tekanan darah.png"
                            alt="Obat 2"
                            className="w-1/3 h-[300px] object-cover"
                        />
                        <div className="p-4 flex-grow bg-green-500">
                            <h3 className="text-lg font-semibold text-white mb-2">
                                Cek Tekanan Darah
                            </h3>
                            <p className="text-white">Rp 5.000</p>
                            <hr className="my-2 border-gray-200" />
                            <p className="text-white">
                                Tekanan darah adalah tekanan yang dihasilkan
                                oleh darah di pembuluh darah. Tekanan darah
                                dipengaruhi beberapa hal, seperti kecepatan
                                denyut jantung, volume darah, kekentalan darah,
                                elastisitas pembuluh darah, total darah yang
                                keluar dari jantung, dan faktor stres. Pembuluh
                                darah, baik arteri maupun vena, memiliki sifat
                                yang elastis.
                            </p>
                            {/* Button untuk menampilkan modal */}
                            <button
                                onClick={() =>
                                    openModal(
                                        "Cara penanganan atau pencegahan cek gula darah"
                                    )
                                }
                                className="bg-blue-500 text-white px-4 py-2 mt-14 rounded-md"
                            >
                                Cek Sekarang
                            </button>
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
                        <img
                            src="images/Layanan/Cek_hemoglobin.png"
                            alt="Obat 2"
                            className="w-[64%] h-[300px] object-cover"
                        />
                        <div className="p-4 flex-grow bg-green-500">
                            <h3 className="text-lg font-semibold text-white mb-2">
                                Cek Hemoglobin
                            </h3>
                            <p className="text-white">Rp 15.000</p>
                            <hr className="my-2 border-gray-200" />
                            <p className="text-white">
                                Hemoglobin adalah metaloprotein (protein yang
                                mengandung zat besi) di dalam sel darah merah
                                yang berfungsi sebagai pengangkut oksigen dari
                                paru-paru ke seluruh tubuh, pada mamalia dan
                                hewan lainnya.
                            </p>
                            {/* Button untuk menampilkan modal */}
                            <button
                                onClick={() =>
                                    openModal(
                                        "Cara penanganan atau pencegahan cek gula darah"
                                    )
                                }
                                className="bg-blue-500 text-white px-4 py-2 mt-24 mx-auto rounded-md"
                            >
                                Cek Sekarang
                            </button>
                        </div>
                    </div>
                </div>
                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white rounded-lg p-8 max-w-md">
                            <h3 className="text-lg text-black font-semibold">
                                Cara Penanganan/Pencegahan
                            </h3>
                            <p>{modalContent.treatment}</p>
                            <button
                                onClick={closeModal}
                                className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                )}
            </section>
            <Footer></Footer>
        </>
    );
}
