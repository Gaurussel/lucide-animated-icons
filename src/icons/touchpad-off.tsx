import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const click = pose({ y: [0, 3, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const recoil = pose(
	{ rotate: [0, 0, 10, 0] },
	{ duration: 0.7, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "touchpad-off",
	render: (part) => (
		<>
			<motion.g {...part(recoil)} style={pivot(12, 20)}>
				<motion.g {...part(click)}>
					<path d="M12 20v-6" />
					<path d="M19.656 14H22" />
					<path d="M2 14h12" />
				</motion.g>
				<path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
				<path d="M9.656 4H20a2 2 0 0 1 2 2v10.344" />
			</motion.g>
			<motion.path {...part(redraw(0.08, 0.32))} d="m2 2 20 20" />
		</>
	),
});
