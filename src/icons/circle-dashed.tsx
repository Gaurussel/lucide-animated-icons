import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, springy } from "../helpers.ts";

const spin = pose(
	{ rotate: [0, -30, 360], scale: [1, 0.8, 1] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);
const seg = (index: number) => redraw(0.3 + index * 0.04, 0.25);

export default createAnimatedIcon({
	name: "circle-dashed",
	render: (part) => (
		<motion.g {...part(spin)} style={centered}>
			<motion.path {...part(seg(0))} d="M10.1 2.182a10 10 0 0 1 3.8 0" />
			<motion.path {...part(seg(4))} d="M13.9 21.818a10 10 0 0 1-3.8 0" />
			<motion.path {...part(seg(1))} d="M17.609 3.721a10 10 0 0 1 2.69 2.7" />
			<motion.path {...part(seg(6))} d="M2.182 13.9a10 10 0 0 1 0-3.8" />
			<motion.path {...part(seg(3))} d="M20.279 17.609a10 10 0 0 1-2.7 2.69" />
			<motion.path {...part(seg(2))} d="M21.818 10.1a10 10 0 0 1 0 3.8" />
			<motion.path {...part(seg(7))} d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
			<motion.path {...part(seg(5))} d="M6.391 20.279a10 10 0 0 1-2.69-2.7" />
		</motion.g>
	),
});
