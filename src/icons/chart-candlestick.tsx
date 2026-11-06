import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, ring, snap, springy } from "../helpers.ts";

const candle = (y: number, delay: number) =>
	pose(
		{ y: [0, -y * 0.3, y, 0] },
		{ duration: 0.65, delay, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
	);
const wick = (y: number, delay: number) =>
	pose({ y: [0, 0, y, 0] }, { duration: 0.7, delay, times: [0, 0.2, 0.4, 1], ease: ["easeInOut", snap, ring] });
const axis = pose(
	{ x: [0, 0, -0.9, 0], y: [0, 0, 0.9, 0] },
	{ duration: 0.7, times: [0, 0.35, 0.5, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "chart-candlestick",
	render: (part) => (
		<>
			<motion.path {...part(wick(5, 0.06))} d="M9 5v4" />
			<motion.rect {...part(candle(4, 0))} height="6" rx="1" width="4" x="7" y="9" />
			<motion.path {...part(wick(3, 0.1))} d="M9 15v2" />
			<motion.path {...part(wick(-4, 0.18))} d="M17 3v2" />
			<motion.rect {...part(candle(-3, 0.12))} height="8" rx="1" width="4" x="15" y="5" />
			<motion.path {...part(wick(-2, 0.22))} d="M17 13v3" />
			<motion.path {...part(axis)} d="M3 3v16a2 2 0 0 0 2 2h16" />
		</>
	),
});
