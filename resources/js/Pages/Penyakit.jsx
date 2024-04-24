import Navbar from "@/Layouts/Navbar";
import { Head, Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";

export default function Penyakit1( {auth, penyakits} ) {
    console.log(penyakits)
    const namaPenyakit = [
        "Batuk & Flu",
        "Diare",
        "Demam"
    ];

    const namaFileGambar = [
        "V1.png",
        "V2.png",
        "V3.png",
    ];

    const namaLink = [
        "Batuk dan flu",
        "Diare",
        "Demam"
    ]


    return (
        <>
            <Head title="Penyakit" />
            <Navbar auth={auth.auth}></Navbar>
            <section className="flex flex-wrap justify-center gap-6 p-4 mt-10">
                <h1 className="text-2xl font-bold text-black item-center mt-10">
                    Temukan Obat Untuk Penyakitmu
                </h1>
                <div className="w-full mt-10">
                    {/* Menampilkan 3 baris dengan 4 card di setiap baris */}
                    {[...Array(1)].map((_, barisIndex) => (
                        <div
                            key={barisIndex}
                            className="flex justify-center gap-6"
                        >
                            {/* Menampilkan 4 card di setiap baris */}
                            {[...Array(3)].map((_, cardIndex) => (
                                <div
                                    key={cardIndex}
                                    className="text-center mb-6"
                                    style={{ width: "20%" }}
                                >
                                    <div className="flex flex-col items-center">
                                        <Link href={`/Penyakit/${namaLink[
                                                            cardIndex +
                                                                barisIndex * 4
                                                        ]}`}>
                                            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-2">
                                                <img
                                                    src={`images/Penyakit/${
                                                        namaFileGambar[
                                                            cardIndex +
                                                                barisIndex * 4
                                                        ]
                                                    }`}
                                                    alt={
                                                        namaPenyakit[
                                                            cardIndex +
                                                                barisIndex * 4
                                                        ]
                                                    }
                                                    className="w-16 h-16"
                                                />
                                            </div>
                                        </Link>
                                        {/* Menampilkan nama penyakit sesuai indeks */}
                                        <p className="text-xl text-black font-medium">
                                            {
                                                namaPenyakit[
                                                    cardIndex + barisIndex * 3
                                                ]
                                            }
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}
