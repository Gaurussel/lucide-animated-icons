import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const rattle = pose({ rotate: [0, -13.2, 0] }, { duration: 0.7, times: [0, 0.12, 1], ease: [snap, ring] });
const bells = pose({ y: [0, -1.5, 0] }, { duration: 0.7, times: [0, 0.12, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "alarm-clock-off",
	render: (part) => (
		<>
			<motion.g {...part(rattle)} style={pivot(12, 13)}>
				<motion.g {...part(bells)}>
					<path d="m22 6-3-3" />
					<path d="M4 4 2 6" />
				</motion.g>
				<path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" />
				<path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" />
				<path d="M6.26 18.67 4 21" />
			</motion.g>
			<motion.path {...part(redraw(0.15, 0.5))} d="m2 2 20 20" />
		</>
	),
});
