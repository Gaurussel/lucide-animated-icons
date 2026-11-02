import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const turn = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const hub = pose({ scale: [1, 0.5, 1] }, { duration: 0.75, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "cog",
	render: (part) => (
		<>
			<motion.path {...part(hub)} d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" style={centered} />
			<motion.g {...part(turn)} style={pivot(12, 12)}>
				<path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
				<path d="M12 2v2" />
				<path d="M12 22v-2" />
				<path d="m17 20.66-1-1.73" />
				<path d="M11 10.27 7 3.34" />
				<path d="m20.66 17-1.73-1" />
				<path d="m3.34 7 1.73 1" />
				<path d="M14 12h8" />
				<path d="M2 12h2" />
				<path d="m20.66 7-1.73 1" />
				<path d="m3.34 17 1.73-1" />
				<path d="m17 3.34-1 1.73" />
				<path d="m11 13.73-4 6.93" />
			</motion.g>
		</>
	),
});
