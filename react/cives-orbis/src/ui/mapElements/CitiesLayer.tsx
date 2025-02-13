import { bridge } from "@/bridge";
import { CityChanneled } from "@/core/serialization/channel";
import { camera } from "@/renderer/camera";
import { useEffect, useRef, useState } from "react";
import styles from "./CitiesLayer.module.css";
import { CityInfo } from "./CityInfo";

export function CitiesLayer() {
  const elRef = useRef<HTMLDivElement>(null);

  const [cities, setCities] = useState<CityChanneled[]>([]);

  useEffect(() => {
    const subscription = bridge.cities.revealed$.subscribe((city) => {
      setCities((c) => [...c, city]);
      setTimeout(transform);
    });

    build();

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const subscription = camera.transform$.subscribe(transform);
    return () => subscription.unsubscribe();
  }, [camera]);

  async function build() {
    const cities = await bridge.cities.getAllRevealed();
    setCities(cities);
    setTimeout(transform);
  }

  function transform() {
    if (!elRef.current) {
      return;
    }

    const t = camera.transform;

    let opacity = 1;
    if (t.scale < 30) {
      opacity = Math.max(0, 1 - (30 - t.scale) / 8);
    }
    elRef.current.style.opacity = opacity.toString();
  }

  return (
    <div ref={elRef} className={styles.citiesLayer}>
      {cities.map((city) => (
        <CityInfo key={city.id} city={city} />
      ))}
    </div>
  );
}
