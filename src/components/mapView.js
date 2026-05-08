"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import { geoNaturalEarth1, geoPath, geoGraticule } from "d3-geo";
import { feature } from "topojson-client";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import { flights, locations } from "@/data/flights";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const W = 1100;
const H = 520;

export default function MapView() {
  const [worldData, setWorldData] = useState(null);
  const mapRef = useRef(null);
  const inView = useInView(mapRef, { once: true, margin: "-80px" });

  useEffect(() => {
    fetch(GEO_URL)
      .then((r) => r.json())
      .then((topo) => setWorldData(feature(topo, topo.objects.countries)));
  }, []);

  const projection = useMemo(
    () => geoNaturalEarth1().rotate([-40, 0, 0]).scale(180).translate([W / 2, H / 2]),
    [],
  );

  const pathGen = useMemo(() => geoPath().projection(projection), [projection]);
  const graticule = useMemo(() => geoGraticule().step([20, 20])(), []);

  const arcs = useMemo(() => {
    return flights
      .map((fl, i) => {
        const from = locations[fl.from];
        const to = locations[fl.to];
        const start = projection([from.lng, from.lat]);
        const end = projection([to.lng, to.lat]);
        if (!start || !end) return null;

        const [sx, sy] = start;
        const [ex, ey] = end;
        const dx = ex - sx;
        const dy = ey - sy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist === 0) return null;

        const mx = (sx + ex) / 2;
        const my = (sy + ey) / 2;
        const nx = -dy / dist;
        const ny = dx / dist;
        const curve = Math.min(dist * 0.2, 50);

        return {
          id: fl.id,
          d: `M ${sx} ${sy} Q ${mx + nx * curve} ${my + ny * curve} ${ex} ${ey}`,
          index: i,
        };
      })
      .filter(Boolean);
  }, [projection]);

  const cities = useMemo(() => {
    const allCodes = new Set();
    const freq = {};
    flights.forEach((fl) => {
      allCodes.add(fl.from);
      allCodes.add(fl.to);
      freq[fl.from] = (freq[fl.from] || 0) + 1;
      freq[fl.to] = (freq[fl.to] || 0) + 1;
    });

    return Array.from(allCodes)
      .map((code) => {
        const loc = locations[code];
        const pt = projection([loc.lng, loc.lat]);
        if (!pt) return null;
        return { code, x: pt[0], y: pt[1], name: loc.name, freq: freq[code] || 1 };
      })
      .filter(Boolean);
  }, [projection]);

  if (!worldData) {
    return (
      <div className="w-full aspect-[1100/520] flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div ref={mapRef}>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto select-none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path d={pathGen(graticule)} fill="none" stroke="#eef2f7" strokeWidth={0.3} />

        {worldData.features.map((geo, i) => (
          <path key={i} d={pathGen(geo)} fill="#edf1f7" stroke="#dce3ed" strokeWidth={0.4} />
        ))}

        {arcs.map((arc) => (
          <motion.path
            key={arc.id}
            d={arc.d}
            fill="none"
            stroke="rgba(59,130,246,0.3)"
            strokeWidth={1.5}
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{
              pathLength: { duration: 0.5, ease: "easeInOut", delay: arc.index * 0.12 },
              opacity: { duration: 0.2, delay: arc.index * 0.12 },
            }}
          />
        ))}

        {cities.map((city) => {
          const isHub = city.freq >= 4;
          return (
            <g key={city.code}>
              <motion.circle
                cx={city.x}
                cy={city.y}
                r={isHub ? 4 : 2}
                fill={isHub ? "#3b82f6" : "#93a8c4"}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 2.2 }}
              />
              {isHub && (
                <motion.circle
                  cx={city.x}
                  cy={city.y}
                  r={8}
                  fill="none"
                  stroke="rgba(59,130,246,0.12)"
                  strokeWidth={1.5}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 2.8 }}
                />
              )}
              <motion.text
                x={city.x}
                y={city.y - (isHub ? 12 : 7)}
                textAnchor="middle"
                fontSize={isHub ? 10 : 7}
                fontWeight={isHub ? 600 : 400}
                fill={isHub ? "#1e40af" : "#94a3b8"}
                style={{ fontFamily: "inherit" }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 2.5 }}
              >
                {city.name}
              </motion.text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
