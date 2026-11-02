import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, ring, snap } from "../helpers.ts";

const shatter = (x: number, y: number) =>
	pose(
		{ x: [0, 0, x, 0], y: [0, 0, y, 0] },
		{ duration: 0.72, times: [0, 0.22, 0.36, 1], ease: ["easeInOut", snap, ring] },
	);

export default createAnimatedIcon({
	name: "webhook-off",
	render: (part) => (
		<>
			<motion.path {...part(shatter(-1.5, 2))} d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" />
			<motion.path {...part(shatter(-1, -2.5))} d="M9 3.4a4 4 0 0 1 6.52.66" />
			<motion.path {...part(shatter(-2, 0))} d="m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" />
			<motion.path {...part(shatter(2, 2))} d="M20.3 20.3a4 4 0 0 1-2.3.7" />
			<motion.path {...part(shatter(2.5, 0))} d="M18.6 13a4 4 0 0 1 3.357 3.414" />
			<motion.path {...part(shatter(1, -2))} d="m12 6 .6 1" />
			<motion.path {...part(redraw(0, 0.3))} d="m2 2 20 20" />
		</>
	),
});
