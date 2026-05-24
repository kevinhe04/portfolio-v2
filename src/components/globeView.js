"use client";

import { useEffect, useRef, useMemo, useCallback, useState } from "react";
import Globe from "react-globe.gl";
import { MeshPhongMaterial } from "three";
import { feature } from "topojson-client";
import { flights, locations } from "@/data/flights";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function GlobeView({ currentIndex, centerLat, centerLng, size = 550 }) {
  const globeRef = useRef();
  const ready = useRef(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(GEO_URL)
      .then((r) => r.json())
      .then((topo) => setCountries(feature(topo, topo.objects.countries).features));
  }, []);

  const globeMaterial = useMemo(
    () =>
      new MeshPhongMaterial({
        color: "#0f172a",
        emissive: "#1e293b",
        emissiveIntensity: 0.3,
        shininess: 15,
      }),
    [],
  );

  const currentFlight = flights[currentIndex];

  const arcs = useMemo(() => {
    const result = [];
    for (let i = 0; i < currentIndex; i++) {
      const fl = flights[i];
      const f = locations[fl.from];
      const t = locations[fl.to];
      result.push({
        startLat: f.lat,
        startLng: f.lng,
        endLat: t.lat,
        endLng: t.lng,
        color: "rgba(96,165,250,0.15)",
        order: 0,
      });
    }
    const fl = flights[currentIndex];
    const f = locations[fl.from];
    const t = locations[fl.to];
    result.push({
      startLat: f.lat,
      startLng: f.lng,
      endLat: t.lat,
      endLng: t.lng,
      color: "rgba(96,165,250,0.9)",
      order: 1,
    });
    return result;
  }, [currentIndex]);

  const points = useMemo(() => {
    const visited = new Set();
    for (let i = 0; i <= currentIndex; i++) {
      visited.add(flights[i].from);
      visited.add(flights[i].to);
    }
    return Array.from(visited).map((code) => {
      const loc = locations[code];
      const active = code === currentFlight.from || code === currentFlight.to;
      return {
        lat: loc.lat,
        lng: loc.lng,
        name: loc.name,
        active,
        size: active ? 0.4 : 0.15,
        color: active ? "#60a5fa" : "#475569",
      };
    });
  }, [currentIndex, currentFlight]);

  const labels = useMemo(
    () => points.map((p) => ({ lat: p.lat, lng: p.lng, text: p.name, active: p.active })),
    [points],
  );

  useEffect(() => {
    if (!globeRef.current || !ready.current) return;
    globeRef.current.pointOfView({ lat: centerLat, lng: centerLng, altitude: 1.8 }, 1000);
  }, [currentIndex, centerLat, centerLng]);

  const onGlobeReady = useCallback(() => {
    if (!globeRef.current) return;
    const controls = globeRef.current.controls();
    controls.enableZoom = false;
    controls.autoRotate = false;
    globeRef.current.pointOfView({ lat: centerLat, lng: centerLng, altitude: 1.8 }, 0);
    ready.current = true;
  }, [centerLat, centerLng]);

  return (
    <Globe
      ref={globeRef}
      onGlobeReady={onGlobeReady}
      globeMaterial={globeMaterial}
      backgroundColor="rgba(0,0,0,0)"
      atmosphereColor="#3b82f6"
      atmosphereAltitude={0.15}
      polygonsData={countries}
      polygonCapColor={() => "#1e293b"}
      polygonSideColor={() => "rgba(0,0,0,0)"}
      polygonStrokeColor={() => "#334155"}
      polygonAltitude={0.005}
      arcsData={arcs}
      arcColor="color"
      arcStroke={(d) => (d.order === 1 ? 2.5 : 0.5)}
      arcDashLength={(d) => (d.order === 1 ? 0.15 : 1)}
      arcDashGap={(d) => (d.order === 1 ? 0.05 : 0)}
      arcDashAnimateTime={(d) => (d.order === 1 ? 2000 : 0)}
      pointsData={points}
      pointLat="lat"
      pointLng="lng"
      pointColor="color"
      pointAltitude={0.01}
      pointRadius="size"
      labelsData={labels}
      labelLat="lat"
      labelLng="lng"
      labelText="text"
      labelSize={(d) => (d.active ? 1.2 : 0.7)}
      labelDotRadius={(d) => (d.active ? 0.4 : 0.2)}
      labelDotOrientation={() => "bottom"}
      labelColor={(d) => (d.active ? "#93c5fd" : "#64748b")}
      labelAltitude={0.015}
      labelResolution={3}
      width={size}
      height={size}
    />
  );
}
