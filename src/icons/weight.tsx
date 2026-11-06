import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const handle = pose(
	{ y: [0, -2.4, -2.4, 0] },
	{ duration: 0.72, times: [0, 0.18, 0.3, 1], ease: [snap, "easeInOut", springy] },
);
const body = pose(
	{ y: [0, 0, -1.8, 0, 0] },
	{ duration: 0.72, times: [0, 0.1, 0.28, 0.42, 1], ease: ["easeInOut", snap, "easeIn", "easeInOut"] },
);

export default createAnimatedIcon({
	name: "weight",
	render: (part) => (
		<>
			<motion.circle {...part(handle)} cx="12" cy="5" r="3" />
			<motion.g {...part(body)}>
				<motion.path
					{...part(jelly(0.42, 0.72))}
					d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"
					style={edge(0.5, 1)}
				/>
			</motion.g>
		</>
	),
});
