import React from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
// Only import mapbox-gl in browser
const isBrowser = typeof window !== 'undefined';
let mapboxgl: typeof import('mapbox-gl');
if (isBrowser) {
  mapboxgl = require('mapbox-gl');
  mapboxgl.accessToken = "pk.eyJ1IjoicWFtNjAwIiwiYSI6ImNtOXlycDRwejBjZmMycXF5NmdsaWVkeHQifQ.9vusiz0ADOMDb5wueiZKQg";
}


interface ItineraryStop {
  day: string;
  title: string;
  description: string;
  coordinates: [number, number];
}

const itinerary: ItineraryStop[] = [
  {
    day: "Day 1",
    title: "Arrival in Tbilisi",
    description: "Explore Tbilisi's Old Town, Narikala Fortress, and sulfur baths.",
    coordinates: [44.8015, 41.7151],
  },
  {
    day: "Day 2",
    title: "Mtskheta & Uplistsikhe",
    description: "Visit the ancient capital Mtskheta and cave city Uplistsikhe.",
    coordinates: [44.7206, 41.8426],
  },
  {
    day: "Day 3",
    title: "Kazbegi & Gergeti Trinity Church",
    description: "See the Caucasus mountains and the iconic church in Kazbegi.",
    coordinates: [44.6441, 42.6628],
  },
  {
    day: "Day 4",
    title: "Kakheti Wine Region",
    description: "Wine tasting and cultural experiences in Kakheti.",
    coordinates: [45.4900, 41.7460],
  },
  {
    day: "Day 5",
    title: "Batumi, Black Sea Coast",
    description: "Relax in Batumi, enjoy the seaside and botanical garden.",
    coordinates: [41.6341, 41.6168],
  },
];

const MapItinerary: React.FC = () => {
  const mapContainerRef = React.useRef<HTMLDivElement>(null);
  const mapRef = React.useRef<mapboxgl.Map | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Markers ref to manage them between renders
  const markersRef = React.useRef<mapboxgl.Marker[]>([]);

  React.useEffect(() => {
    if (!isBrowser || !mapboxgl || !mapContainerRef.current) return;
    // Clean up previous map instance
    if (mapRef.current) {
      // Only remove if not already removed and loaded
      try {
        if ((mapRef.current as any)._loaded) {
          mapRef.current.remove();
        }
      } catch (e) {}
      mapRef.current = null;
    }
    // Create new map
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: itinerary[activeIndex].coordinates,
      zoom: 7,
    });
    mapRef.current = map;
    let loaded = false;
    map.on('load', () => {
      loaded = true;
      // Draw path as dashed line
      map.addSource('itinerary-path', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: itinerary.map(stop => stop.coordinates),
          },
        },
      });
      map.addLayer({
        id: 'itinerary-path-layer',
        type: 'line',
        source: 'itinerary-path',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#FF69B4', // pink
          'line-width': 4,
          'line-dasharray': [2, 4],
        },
      });
      // Add markers only after map is loaded
      markersRef.current = itinerary.map((stop, idx) => {
        const marker = new mapboxgl.Marker({ color: idx === activeIndex ? '#FF69B4' : '#222' })
          .setLngLat(stop.coordinates)
          .setPopup(new mapboxgl.Popup().setText(`${stop.day}: ${stop.title}`))
          .addTo(map);
        if (idx === activeIndex) {
          marker.togglePopup();
        }
        return marker;
      });
      // Resize map on container change
      setTimeout(() => map.resize(), 250);
    });
    return () => {
      markersRef.current.forEach(m => m.remove());
      // Remove the itinerary path layer and source if present
      if (map && map.getLayer && map.getLayer('itinerary-path-layer')) {
        try {
          map.removeLayer('itinerary-path-layer');
        } catch (e) {}
      }
      if (map && map.getSource && map.getSource('itinerary-path')) {
        try {
          map.removeSource('itinerary-path');
        } catch (e) {}
      }
      // Only remove the map if it was loaded
      if (loaded && map) {
        try {
          map.remove();
        } catch (e) {}
      }
    };
  }, [activeIndex]);

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      <div className="md:w-1/2 w-full">
        <div ref={mapContainerRef} className="w-full h-80 rounded-lg shadow" />
      </div>
      <div className="md:w-1/2 w-full">
        <ol className="space-y-4">
          {itinerary.map((stop, idx) => (
            <li
              key={stop.day}
              className={`p-4 rounded-lg cursor-pointer border ${idx === activeIndex ? 'border-primary bg-primary/10' : 'border-gray-200 bg-white'} transition`}
              onClick={() => setActiveIndex(idx)}
            >
              <div className="font-bold text-lg mb-1">{stop.day}: {stop.title}</div>
              <div className="text-muted-foreground mb-1">{stop.description}</div>
              {idx === activeIndex && (
                <div className="text-primary text-sm font-semibold">Currently viewing on map</div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default MapItinerary;
