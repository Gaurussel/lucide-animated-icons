import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const raise = pose({ y: [0, -1.2, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const beacon = pose(
	{ rotate: [0, 0, 0] },
	{ duration: 0.7, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);
const sway = pose({ rotate: [0, -4.8, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "tower-control",
	render: (part) => (
		<>
			<motion.g {...part(sway)} style={pivot(12, 13)}>
				<path d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" />
				<path d="m9 6 1 7" />
				<path d="m15 6-1 7" />
				<motion.g {...part(raise)}>
					<path d="M12 6V2" />
					<motion.path {...part(beacon)} d="M13 2h-2" style={centered} />
				</motion.g>
			</motion.g>
			<path d="M8 13v9" />
			<path d="M16 22v-9" />
		</>
	),
});
