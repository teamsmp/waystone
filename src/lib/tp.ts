export function tHead(intensity: number = 1) {
  switch (intensity) {
    case 1:
      return "text-4xl font-bold";
    case 2:
      return "text-3xl font-light";
    case 3:
      return "text-2xl font-bold";
    default:
      return "text-2xl font-bold";
  }
}
