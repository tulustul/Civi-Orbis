import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "turns",
})
export class TurnsPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null) {
      return "";
    }
    if (value === Infinity) {
      return "∞";
    }
    return value.toString();
  }
}
