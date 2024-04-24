import Navbar from "@/Layouts/Navbar";
import { Head, Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";
export default function TampilBarang({ auth, temukanObats }) {
    console.log(temukanObats);

    const jenisObat = temukanObats.length > 0 ? temukanObats[0].jenis : '';

    // Map temukanObats to extract nama and image
    const list = temukanObats.map((pmm, index) => ({
        id: pmm.id,
        title: pmm.nama,
        img: pmm.image,
        jenis: pmm.jenis,
        key: index, // Adding a unique key for each item
    }));

    return (
        <>
            <Head title="Penyakit" />
            <Navbar auth={auth.auth}></Navbar>
            <section className="flex flex-wrap justify-center gap-6 p-4 mt-10">
                <h1 className="text-2xl font-bold text-black item-center mt-10 ">
                    Obat {jenisObat}
                </h1>
                <section>
                    <div className="container m-auto px-4 sm:px-6 lg:px-8 pt-8 sm:py-32 sm:gap-4 gap-8 relative mt-10">
                        <div className="relative sm:col-span-6 bottom-32">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 " >
                                {list.map((item) => (
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden" >
                                        <img
                                            src={item.img}
                                            alt="Obat 1"
                                            className="w-full h-30 object-cover"
                                        />
                                        <div className="p-4 bg-green-500 " style={{ backgroundColor: "#E2FCD6" }}>
                                            <h3 className="text-lg font-semibold text-black mb-2">
                                                {item.title}
                                            </h3>
                                            <Link
                                                href={`/Penyakit/item/${item.id}`}
                                                className="nav cursor-pointer text-black relative"
                                            >
                                                <span className="underline1"></span>
                                                Info selengkapnya
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
}
