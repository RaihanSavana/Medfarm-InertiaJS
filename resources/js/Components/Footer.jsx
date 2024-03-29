import Map from "./Map";

export default function Footer() {
  return (
    <footer className="container mt-10 bg-green-700 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="md:w-1/2">
          <p className="text-white text-sm mb-4 md:mb-0">Alamat : Jl. Barito No. XX, Jakarta Selatan</p>
          <p className="text-white text-sm mb-4 md:mb-0">No Telepon : </p>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <Map />
        </div>
      </div>
    </footer>
  );
}
