import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const glide = pose({ x: [0, 4, 0], y: [0, -1, 0] }, { duration: 0.75, times: [0, 0.3, 1], ease: [snap, springy] });
const sway = pose({ rotate: [0, -14, 0] }, { duration: 0.75, times: [0, 0.3, 1], ease: ["easeInOut", ring] });
const bird = (delay: number) =>
	pose({ y: [0, -2, 0], scale: [1, 2, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "cable-car",
	render: (part) => (
		<>
			<motion.path {...part(bird(0))} d="M10 3h.01" style={centered} />
			<motion.path {...part(bird(0.08))} d="M14 2h.01" style={centered} />
			<path d="m2 9 20-5" />
			<motion.g {...part(glide)}>
				<motion.g {...part(sway)} style={pivot(12, 6.5)}>
					<path d="M12 12V6.5" />
					<rect height="10" rx="3" width="16" x="4" y="12" />
					<path d="M9 12v5" />
					<path d="M15 12v5" />
					<path d="M4 17h16" />
				</motion.g>
			</motion.g>
		</>
	),
});
