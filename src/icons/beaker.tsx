import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, rubber, snap } from "../helpers.ts";

const tilt = pose(
	{ rotate: [0, -8.4, 4.8, 0] },
	{ duration: 0.72, times: [0, 0.25, 0.5, 1], ease: ["easeInOut", "easeInOut", rubber] },
);
const slosh = pose(
	{ rotate: [0, 0, 10.8, -6, 0] },
	{ duration: 0.72, times: [0, 0.2, 0.4, 0.6, 1], ease: ["easeInOut", "easeInOut", "easeInOut", rubber] },
);
const rim = pose(
	{ y: [0, 0, -0.9, 0] },
	{ duration: 0.72, times: [0, 0.25, 0.33, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "beaker",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(12, 21)}>
			<motion.g {...part(rim)}>
				<path d="M4.5 3h15" />
			</motion.g>
			<path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
			<motion.path {...part(slosh)} d="M6 14h12" style={pivot(12, 14)} />
		</motion.g>
	),
});
