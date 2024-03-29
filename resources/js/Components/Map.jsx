import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  useEffect(() => {
    const map = L.map("map", {
      center: [-3.010368, 114.395199],
      zoom: 10,
    });

    // Tambahkan layer peta dasar
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | MedFarm_Project',
    }).addTo(map);

    // Tambahkan marker pada lokasi
    L.marker([-3.010368, 114.395199])
      .addTo(map)
      .bindPopup("Lokasi Apotek Barito")
      .openPopup();
    
    // Bersihkan peta saat komponen di-unmount
    return () => {
      map.remove();
    };
  }, []); // Hanya dijalankan sekali saat komponen dimount pertama kali

  return <div id="map" className="w-[325px] h-[200px]"></div>; 
};

export default Map;
