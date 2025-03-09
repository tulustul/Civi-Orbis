import { Bonuses as BonusesType } from "@/core/bonus";
import { Yields } from "@/core/yields";

type Props = {
  bonuses: BonusesType;
};

function formatPct(value: number) {
  return `${(value * 100).toFixed(0)}%`;
}

function formatPctWithSign(value: number) {
  return `${value < 0 ? "-" : "+"}${(value * 100).toFixed(0)}%`;
}

function formatValue(value: number) {
  return value < 0 ? `-${-value}` : `+${value}`;
}

const renderers: Record<keyof BonusesType, (value: any) => React.ReactNode> = {
  yieldValue: (yields: Partial<Yields>) => (
    <div className="flex flex-col gap-1">
      {Object.keys(yields).map((key) => {
        const value = yields[key as keyof Yields]!;
        return (
          <div key={key} className={value < 0 ? "text-red-500" : `text-${key}`}>
            {formatValue(value)} {key}
          </div>
        );
      })}
    </div>
  ),
  yieldFactor: (yields: Partial<Yields>) => (
    <div className="flex flex-col gap-1">
      {Object.keys(yields).map((key) => {
        const value = yields[key as keyof Yields]!;
        return (
          <div key={key} className={value < 0 ? "text-red-500" : `text-${key}`}>
            {formatPctWithSign(value)} {key}
          </div>
        );
      })}
    </div>
  ),
  transferProductionToFood: (value) => (
    <div className={value < 0 ? "text-red-500" : "text-food"}>
      Transfers {formatPct(value)} of production into food
    </div>
  ),
  transferProductionToCulture: (value) => (
    <div className={value < 0 ? "text-red-500" : "text-culture"}>
      Transfers {formatPct(value)} of production into culture
    </div>
  ),
  transferProductionToPublicWorks: (value) => (
    <div className={value < 0 ? "text-red-500" : "text-publicWorks"}>
      Transfers {formatPct(value)} of production into public works
    </div>
  ),
};

export function Bonuses({ bonuses }: Props) {
  return (
    <div className="flex flex-col gap-1">
      {Object.keys(bonuses).map((key) => {
        const value = bonuses[key as keyof BonusesType];
        const renderer = renderers[key as keyof BonusesType];
        return <div key={key}>{renderer(value)}</div>;
      })}
    </div>
  );
}
