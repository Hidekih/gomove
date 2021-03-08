export default function calculateTotalXp(level: number, currentXp: number) {
  let totalXp = currentXp; 
  for (let i = level - 1; i >= 1; i--) {
    totalXp += Math.pow((i + 1) * 4, 2);
  }

  return totalXp;
}