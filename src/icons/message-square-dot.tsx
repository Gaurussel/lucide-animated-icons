import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const talk = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0], scale: [1, 1.06, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const ping = pose(
	{ y: [0, -2.4, 0], scale: [1, 1.3, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "message-square-dot",
	render: (part) => (
		<>
			<motion.path
				{...part(talk)}
				d="M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"
				style={pivot(3, 21)}
			/>
			<motion.circle {...part(ping)} cx="18" cy="6" r="3" style={centered} />
		</>
	),
});
