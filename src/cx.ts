export const cx = (...names: (string | undefined)[]) => names.filter(Boolean).join(" ") || undefined;
