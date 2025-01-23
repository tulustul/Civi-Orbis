import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "percentBonus",
    standalone: false
})
export class PercentBonusPipe implements PipeTransform {
  transform(value: number): string {
    return (value * 100).toFixed(0) + "%";
  }
}
