import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const split = (x: number, y: number) =>
	pose({ x: [0, 0, x, 0], y: [0, 0, y, 0] }, { duration: 0.75, times: [0, 0.35, 0.6, 1] });

export default createAnimatedIcon({
	name: "cloud-off",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1, 1] }, { duration: 0.75, times: [0, 0.25, 0.55, 1] }))}
				d="m2 2 20 20"
			/>
			<motion.path {...part(split(-1.5, 1.5))} d="M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193" />
			<motion.path
				{...part(split(1.5, -1.5))}
				d="M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"
			/>
		</>
	),
});
