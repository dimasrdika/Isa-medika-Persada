import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import L from "leaflet";

// Define the map component
const MapComponent = () => {
  // Define the position of the marker
  const position: LatLngTuple = [-6.239812, 106.79409];

  // Create a custom icon for the marker
  const icon = L.icon({
    iconUrl: "/marker.svg", // Ensure this path is correct
    iconSize: [30, 45],
    iconAnchor: [15, 45],
    popupAnchor: [0, -40],
  });

  return (
    <MapContainer
      center={position}
      zoom={15}
      className="h-80 w-full rounded-lg shadow-md"
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={icon}>
        <Popup>Head Office and Warehouse</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
