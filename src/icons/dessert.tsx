import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, springy } from "../helpers.ts";

const cherry = pose(
	{ y: [0, 0.6, -3.6, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", "easeOut", springy] },
);
const bowl = pose(
	{ y: [0, 0, 0.9, 0] },
	{ duration: 0.7, times: [0, 0.45, 0.55, 1], ease: ["easeInOut", "easeOut", springy] },
);

export default createAnimatedIcon({
	name: "dessert",
	render: (part) => (
		<>
			<motion.path
				{...part(jelly(0.4, 0.7))}
				d="M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826"
				style={edge(0.5, 1)}
			/>
			<motion.path {...part(bowl)} d="M20.804 14.869a9 9 0 0 1-17.608 0" />
			<motion.circle {...part(cherry)} cx="12" cy="4" r="2" />
		</>
	),
});
