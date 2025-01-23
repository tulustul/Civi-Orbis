import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "turns",
    standalone: false
})
export class TurnsPipe implements PipeTransform {
  transform(value: number | null): string {
    if (value === null) {
      return "";
    }
    if (value === Infinity) {
      return "∞";
    }
    return value.toString();
  }
}
