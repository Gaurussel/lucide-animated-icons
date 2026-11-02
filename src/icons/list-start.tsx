import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const line = (delay: number) =>
	pose({ x: [0, -4.5, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const tip = pose(
	{ x: [0, 0, -5, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.4, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "list-start",
	render: (part) => (
		<>
			<motion.path {...part(line(0))} d="M10 6H3" />
			<motion.path {...part(line(0.07))} d="M16 12H3" />
			<motion.path {...part(line(0.14))} d="M16 18H3" />
			<motion.path {...part(redraw(0, 0.4))} d="M21 18V8a2 2 0 0 0-2-2h-5" />
			<motion.path {...part(tip)} d="m16 8-2-2 2-2" />
		</>
	),
});
