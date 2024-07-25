export function calculateFallDistance(t) {
    let g = 9.8;
    let d = (1 / 2) * g * Math.pow(t, 2);
    return d;
}