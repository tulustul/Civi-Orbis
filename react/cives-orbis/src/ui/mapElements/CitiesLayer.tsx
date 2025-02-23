import { bridge } from "@/bridge";
import { CityChanneled } from "@/core/serialization/channel";
import { camera } from "@/renderer/camera";
import { useObservable } from "@/utils";
import { useEffect, useRef, useState } from "react";
import styles from "./CitiesLayer.module.css";
import { CityInfo } from "./CityInfo";

export function CitiesLayer() {
  const elRef = useRef<HTMLDivElement>(null);

  const [cities, setCities] = useState<CityChanneled[]>([]);

  const gameInfo = useObservable(bridge.game.start$);

  useEffect(() => {
    const revealSubscription = bridge.cities.revealed$.subscribe((revealed) => {
      setCities((c) => [...c, revealed.city]);
      setTimeout(transform);
    });

    const updateSubscription = bridge.cities.updated$.subscribe((updated) => {
      const updatedIds = new Set(updated.map((u) => u.id));
      setCities((cities) => {
        const notUpdated = cities.filter((city) => !updatedIds.has(city.id));
        return [...notUpdated, ...updated];
      });
      setTimeout(transform);
    });

    return () => {
      revealSubscription.unsubscribe();
      updateSubscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (gameInfo) {
      build();
    }
  }, [gameInfo]);

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
