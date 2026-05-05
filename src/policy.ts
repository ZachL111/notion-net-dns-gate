export interface Signal {
  demand: number;
  capacity: number;
  latency: number;
  risk: number;
  weight: number;
}

export const threshold = 152;
const riskPenalty = 7;
const latencyPenalty = 2;
const weightBonus = 2;

export function score(signal: Signal): number {
  return signal.demand * 2 + signal.capacity + signal.weight * weightBonus
    - signal.latency * latencyPenalty - signal.risk * riskPenalty;
}

export function classify(signal: Signal): "accept" | "review" {
  return score(signal) >= threshold ? "accept" : "review";
}
