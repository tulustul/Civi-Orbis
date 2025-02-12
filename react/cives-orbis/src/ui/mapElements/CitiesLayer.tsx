import { game } from "@/api";
import { City } from "@/api/city";
import { camera } from "@/renderer/camera";
import { useEffect, useRef, useState } from "react";
import { merge } from "rxjs";
import styles from "./CitiesLayer.module.css";
import { CityInfo } from "./CityInfo";

export function CitiesLayer() {
  const elRef = useRef<HTMLDivElement>(null);

  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    const subscription = merge(
      game.state!.citySpawned$,
      game.state!.cityDestroyed$,
      game.state!.tilesExplored$,
    ).subscribe(updateCities);

    updateCities();

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const subscription = camera.transform$.subscribe(transform);
    return () => subscription.unsubscribe();
  }, [camera]);

  function updateCities() {
    const player = game.state!.trackedPlayer;
    setCities(
      game.state!.cities.filter((city) => player.exploredTiles.has(city.tile)),
    );

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
