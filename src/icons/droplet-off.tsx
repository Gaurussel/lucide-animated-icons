import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, ring } from "../helpers.ts";

const shiver = (x: number) => pose({ x: [0, x, 0] }, { duration: 0.7, times: [0, 0.12, 1], ease: ["easeInOut", ring] });

export default createAnimatedIcon({
	name: "droplet-off",
	render: (part) => (
		<>
			<motion.path
				{...part(shiver(2))}
				d="M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586"
			/>
			<motion.path
				{...part(shiver(-2))}
				d="M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208"
			/>
			<motion.path {...part(redraw(0.05, 0.45))} d="m2 2 20 20" />
		</>
	),
});
