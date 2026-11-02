import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const beat = pose({ scale: [1, 1.12, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.4, 1] });
const badge = pose(
	{ scale: [1, 0, 0, 1], rotate: [0, -90, -90, 0] },
	{ duration: 0.8, delay: 0.1, times: [0, 0.25, 0.55, 1] },
);

export default createAnimatedIcon({
	name: "heart-plus",
	render: (part) => (
		<>
			<motion.path
				{...part(beat)}
				d="M13.5 19.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5A5.5 5.5 0 0 1 7.5 3c1.76 0 3 .5 4.5 2 1.5-1.5 2.74-2 4.5-2a5.5 5.5 0 0 1 5.402 6.5"
				style={pivot(12, 11)}
			/>
			<motion.g {...part(badge)} style={pivot(18, 15)}>
				<path d="M15 15h6" />
				<path d="M18 12v6" />
			</motion.g>
		</>
	),
});
