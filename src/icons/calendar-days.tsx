import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const tilt = pose({ rotate: [0, -8, -8, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] });
const ring = (delay: number) => pose({ y: [0, -3, 0] }, { duration: 0.4, delay, times: [0, 0.45, 1] });
const flip = pose({ pathLength: [1, 0, 1] }, { duration: 0.5, delay: 0.15, times: [0, 0.35, 1] });

const days = ["M8 14h.01", "M12 14h.01", "M16 14h.01", "M8 18h.01", "M12 18h.01", "M16 18h.01"];
const day = (index: number) =>
	pose({ scale: [1, 0, 0, 1] }, { duration: 0.45, delay: 0.1 + index * 0.05, times: [0, 0.3, 0.45, 1] });

export default createAnimatedIcon({
	name: "calendar-days",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(12, 22)}>
			<motion.path {...part(ring(0))} d="M8 2v4" />
			<motion.path {...part(ring(0.08))} d="M16 2v4" />
			<rect height="18" rx="2" width="18" x="3" y="4" />
			<motion.path {...part(flip)} d="M3 10h18" />
			{days.map((d, index) => (
				<motion.path {...part(day(index))} d={d} key={d} style={centered} />
			))}
		</motion.g>
	),
});
