// "use client";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   useMapEvents,
// } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { useState } from "react";

// // Fix for default Leaflet icon markers in Next.js
// const customIcon = new L.Icon({
//   iconUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

// interface MapSectionProps {
//   onStationSelect: (station: any) => void;
//   stations: any[];
// }

// export default function MapSection({
//   onStationSelect,
//   stations,
// }: MapSectionProps) {
//   return (
//     <div className="h-[500px] w-full rounded-xl overflow-hidden border-2 border-slate-200 shadow-lg">
//       <MapContainer
//         center={[28.3949, 84.124]}
//         zoom={7}
//         className="h-full w-full">
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//         {stations.map((station) => (
//           <Marker
//             key={station.id}
//             position={[station.lat, station.lng]}
//             icon={customIcon}
//             eventHandlers={{
//               click: () => onStationSelect(station),
//               mouseover: (e) => e.target.openPopup(),
//             }}>
//             <Popup>
//               <div className="p-1">
//                 <h3 className="font-bold text-blue-600">
//                   {station.name} ({station.id})
//                 </h3>
//                 <p className="text-xs text-gray-500">{station.district}</p>
//               </div>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// }

"use client";
import { useRouter } from "next/navigation";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapSection({ stations }: { stations: any[] }) {
  const router = useRouter();

  return (
    <div className="h-[600px] w-full rounded-xl overflow-hidden border shadow-lg">
      <MapContainer
        center={[28.3949, 84.124]}
        zoom={7}
        className="h-full w-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {stations.map((station) => (
          <Marker
            key={station.id}
            position={[station.lat, station.lng]}
            icon={customIcon}
            eventHandlers={{
              // Navigate to dynamic route on click
              click: () => router.push(`/stations/${station.id}`),
              mouseover: (e) => e.target.openPopup(),
            }}>
            <Popup>
              <div className="font-bold">{station.name}</div>
              <div className="text-xs text-blue-500 underline">
                Click for details
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
