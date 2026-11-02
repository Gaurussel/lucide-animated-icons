import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const split = (shift: number) =>
	pose({ x: [0, 0, shift, 0], y: [0, 0, -shift, 0] }, { duration: 0.75, times: [0, 0.35, 0.6, 1] });

export default createAnimatedIcon({
	name: "circle-off",
	render: (part) => (
		<>
			<motion.path {...part(split(1.5))} d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
			<motion.path {...part(split(-1.5))} d="M19.08 19.08A10 10 0 1 1 4.92 4.92" />
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1, 1] }, { duration: 0.75, times: [0, 0.25, 0.55, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
