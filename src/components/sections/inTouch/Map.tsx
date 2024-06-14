"use client"
import styles from './styles.module.scss'
import { useEffect, useRef, useState } from "react"
import { Loader } from "@googlemaps/js-api-loader"

export const Map = ({ address }: { address: string }) => {
  const mapRef = useRef<HTMLDivElement | null>(null)
  const [geocoder, setGeocoder] = useState<google.maps.Geocoder | null>(null);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) return
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });
    loader.load().then(() => {
      setGeocoder(new google.maps.Geocoder());
    });
  }, []);

  useEffect(() => {
    if (!geocoder || !address || !mapRef.current) return
    geocoder.geocode({ address: address }, (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
      if (status === "OK" && results[0]) {
        const mapElement = mapRef.current as HTMLElement;
        const map = new google.maps.Map(mapElement, {
          center: results[0].geometry.location,
          zoom: 8,
        });
        new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
        });
      } else {
        console.error(`Geocode was not successful for the following reason: ${status}`);
      }
    });
  }, [address, geocoder]);

  return (
    <div ref={mapRef} className={styles.map} />
  )
}