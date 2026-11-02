import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const head = pose(
	{ y: [0, 1.5, -4, 0], x: [0, 0, 0.5, 0] },
	{ duration: 0.72, times: [0, 0.14, 0.32, 1], ease: ["easeInOut", snap, springy] },
);
const shoulders = pose(
	{ y: [0, 0, -2, 0] },
	{ duration: 0.72, times: [0, 0.24, 0.38, 1], ease: ["easeInOut", snap, springy] },
);

const shackle = pose(
	{ y: [0, 0, -3, 0.8, 0] },
	{ duration: 0.72, times: [0, 0.2, 0.32, 0.44, 1], ease: ["easeInOut", snap, "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "user-lock",
	render: (part) => (
		<>
			<motion.path {...part(shoulders)} d="M10.3 15H7a4 4 0 0 0-4 4v2" />
			<motion.circle {...part(head)} cx="10" cy="7" r="4" />
			<motion.path {...part(shackle)} d="M15 15.5V14a2 2 0 0 1 4 0v1.5" />
			<motion.rect
				{...part(jelly(0.44, 0.72))}
				height="5"
				rx=".899"
				style={edge(0.5, 1)}
				width="8"
				x="13"
				y="16"
			/>
		</>
	),
});
