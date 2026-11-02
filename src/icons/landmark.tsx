import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const roof = pose(
	{ y: [0, -5, 0.5, 0], rotate: [0, -8, 0, 0] },
	{ duration: 0.7, times: [0, 0.28, 0.42, 1], ease: [snap, "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "landmark",
	render: (part) => (
		<>
			<motion.path
				{...part(roof)}
				d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"
				style={edge(0.5, 1)}
			/>
			<motion.g {...part(jelly(0.42, 0.7))} style={edge(0.5, 1)}>
				<path d="M6 18v-7" />
				<path d="M10 18v-7" />
				<path d="M14 18v-7" />
				<path d="M18 18v-7" />
			</motion.g>
			<path d="M3 22h18" />
		</>
	),
});
