import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const stretch = (direction: number) =>
	pose(
		{ x: [0, 3 * direction, 0], y: [0, -3 * direction, 0] },
		{ duration: 0.7, times: [0, 0.2, 1], ease: [snap, rubber] },
	);

export default createAnimatedIcon({
	name: "link",
	render: (part) => (
		<>
			<motion.path {...part(stretch(1))} d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
			<motion.path {...part(stretch(-1))} d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
		</>
	),
});
