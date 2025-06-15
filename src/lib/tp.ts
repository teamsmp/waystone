export function tHead(intensity: number = 1) {
  switch (intensity) {
    case 1:
      return "text-4xl font-bold font-mono";
    case 2:
      return "text-3xl font-light font-mono";
    case 3:
      return "text-2xl font-bold font-mono";
    default:
      return "text-2xl font-bold font-mono";
  }
}
