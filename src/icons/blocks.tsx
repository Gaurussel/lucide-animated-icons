import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, snap, springy } from "../helpers.ts";

const stack = pose(
	{ y: [0, -5.5, 0.8, 0], rotate: [0, 25, 0, 0] },
	{ duration: 0.65, times: [0, 0.25, 0.4, 1], ease: [snap, "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "blocks",
	render: (part) => (
		<>
			<motion.path
				{...part(jelly(0.4, 0.65))}
				d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"
				style={edge(0.5, 1)}
			/>
			<motion.rect {...part(stack)} height="8" rx="1" style={centered} width="8" x="14" y="2" />
		</>
	),
});
