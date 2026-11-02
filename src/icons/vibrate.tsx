import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const buzz = pose({ rotate: [0, -16, 0] }, { duration: 0.75, times: [0, 0.08, 1], ease: [snap, ring] });
const wave = (x: number) => pose({ x: [0, x, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "vibrate",
	render: (part) => (
		<>
			<motion.path {...part(wave(-2.5))} d="m2 8 2 2-2 2 2 2-2 2" />
			<motion.path {...part(wave(2.5))} d="m22 8-2 2 2 2-2 2 2 2" />
			<motion.rect {...part(buzz)} height="14" rx="1" style={pivot(12, 12)} width="8" x="8" y="5" />
		</>
	),
});
