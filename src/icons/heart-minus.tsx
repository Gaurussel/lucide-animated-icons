import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const beat = pose({ scale: [1, 1.3, 1] }, { duration: 0.75, times: [0, 0.18, 1], ease: [snap, ring] });
const toss = pose(
	{ x: [0, -1.5, 6, -4, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", snap, springy] },
);

export default createAnimatedIcon({
	name: "heart-minus",
	render: (part) => (
		<>
			<motion.path
				{...part(beat)}
				d="M13.5 19.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5A5.5 5.5 0 0 1 7.5 3c1.76 0 3 .5 4.5 2 1.5-1.5 2.74-2 4.5-2a5.5 5.5 0 0 1 5.402 6.5"
				style={pivot(12, 12)}
			/>
			<motion.path {...part(toss)} d="M15 15h6" />
		</>
	),
});
