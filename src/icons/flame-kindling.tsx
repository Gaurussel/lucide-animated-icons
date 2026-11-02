import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, ring, snap } from "../helpers.ts";

const flare = pose(
	{ y: [0, -4, 0], scale: [1, 1.35, 1], rotate: [0, -18, 0] },
	{ duration: 0.75, times: [0, 0.22, 1], ease: [snap, ring] },
);

export default createAnimatedIcon({
	name: "flame-kindling",
	render: (part) => (
		<>
			<motion.path
				{...part(flare)}
				d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"
				style={pivot(12, 15)}
			/>
			<motion.g {...part(jelly(0.3, 0.75))} style={edge(0.5, 1)}>
				<path d="m5 22 14-4" />
				<path d="m5 18 14 4" />
			</motion.g>
		</>
	),
});
