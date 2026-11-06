import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const buzz = pose({ rotate: [0, -7.2, 0] }, { duration: 0.75, times: [0, 0.08, 1], ease: [snap, ring] });
const wave = (x: number) => pose({ x: [0, x, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "vibrate-off",
	render: (part) => (
		<>
			<motion.path {...part(wave(-2))} d="m2 8 2 2-2 2 2 2-2 2" />
			<motion.path {...part(wave(2))} d="m22 8-2 2 2 2-2 2 2 2" />
			<motion.g {...part(buzz)} style={pivot(12, 12)}>
				<path d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" />
				<path d="M16 10.34V6c0-.55-.45-1-1-1h-4.34" />
			</motion.g>
			<motion.line {...part(redraw(0.15, 0.55))} x1="2" x2="22" y1="2" y2="22" />
		</>
	),
});
