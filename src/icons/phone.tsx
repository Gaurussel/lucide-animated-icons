import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, ring, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 1, -3, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", "easeOut", springy] },
);
const shake = pose(
	{ rotate: [0, 0, -24, 0] },
	{ duration: 0.75, times: [0, 0.18, 0.28, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "phone",
	render: (part) => (
		<motion.g {...part(lift)}>
			<motion.path
				{...part(shake)}
				d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
				style={centered}
			/>
		</motion.g>
	),
});
