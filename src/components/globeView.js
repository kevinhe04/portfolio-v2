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
        color: "#d6d3d1",
        emissive: "#a8a29e",
        emissiveIntensity: 0.15,
        shininess: 25,
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
        color: "rgba(180,83,9,0.2)",
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
      color: "rgba(180,83,9,0.85)",
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
        color: active ? "#b45309" : "#78716c",
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
      atmosphereColor="#b45309"
      atmosphereAltitude={0.12}
      polygonsData={countries}
      polygonCapColor={() => "#e7e5e4"}
      polygonSideColor={() => "rgba(0,0,0,0)"}
      polygonStrokeColor={() => "#a8a29e"}
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
      labelColor={(d) => (d.active ? "#44403c" : "#a8a29e")}
      labelAltitude={0.015}
      labelResolution={3}
      width={size}
      height={size}
    />
  );
}
