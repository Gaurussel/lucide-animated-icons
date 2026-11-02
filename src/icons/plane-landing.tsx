import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, springy } from "../helpers.ts";

const flight = pose(
	{ x: [0, 8, -8, 0], y: [0, 6, -6, 0], opacity: [1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.28, 0.29, 1], ease: ["easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "plane-landing",
	render: (part) => (
		<>
			<motion.path {...part(jelly(0.45, 0.7))} d="M2 22h20" style={edge(0.5, 1)} />
			<motion.path
				{...part(flight)}
				d="M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"
			/>
		</>
	),
});
