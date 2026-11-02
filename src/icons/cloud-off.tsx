import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, ring } from "../helpers.ts";

const shiver = (x: number) => pose({ x: [0, x, 0] }, { duration: 0.7, times: [0, 0.12, 1], ease: ["easeInOut", ring] });

export default createAnimatedIcon({
	name: "cloud-off",
	render: (part) => (
		<>
			<motion.path {...part(shiver(-2))} d="M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193" />
			<motion.path {...part(shiver(2))} d="M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07" />
			<motion.path {...part(redraw(0.05, 0.45))} d="m2 2 20 20" />
		</>
	),
});
