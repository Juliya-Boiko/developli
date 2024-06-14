declare namespace google.maps {
  interface Geocoder {
    geocode(
      request: GeocoderRequest,
      callback: (results: GeocoderResult[], status: GeocoderStatus) => void
    ): void;
  }
  interface GeocoderRequest {
    address?: string;
    location?: LatLng;
  }
  interface GeocoderResult {
    geometry: {
      location: LatLng;
    };
  }
  type GeocoderStatus = "OK" | "ZERO_RESULTS" | "OVER_QUERY_LIMIT" | "REQUEST_DENIED" | "INVALID_REQUEST" | "UNKNOWN_ERROR";
  interface LatLng {
    lat(): number;
    lng(): number;
  }
  interface Map {
    constructor(mapDiv: HTMLElement, opts?: MapOptions): Map;
  }
  interface MapOptions {
    center: LatLng;
    zoom: number;
  }
  interface Marker {
    constructor(opts: MarkerOptions): Marker;
  }
  interface MarkerOptions {
    map: Map;
    position: LatLng;
  }
}

interface Window {
  google: typeof google;
}