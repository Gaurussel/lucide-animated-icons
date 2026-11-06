import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const stick = (degrees: number, delay: number) =>
	pose(
		{ rotate: [0, degrees, -degrees * 0.15, 0] },
		{ duration: 0.6, delay, times: [0, 0.3, 0.45, 1], ease: [snap, "easeIn", springy] },
	);
const skin = pose(
	{ y: [0, 0, 0.9, 0, 0.9, 0] },
	{
		duration: 0.75,
		times: [0, 0.36, 0.42, 0.5, 0.56, 1],
		ease: ["easeInOut", "easeOut", "easeIn", "easeOut", springy],
	},
);

export default createAnimatedIcon({
	name: "drum",
	render: (part) => (
		<>
			<motion.path {...part(stick(-35, 0))} d="m2 2 8 8" style={pivot(2, 2)} />
			<motion.path {...part(stick(35, 0.1))} d="m22 2-8 8" style={pivot(22, 2)} />
			<motion.ellipse {...part(skin)} cx="12" cy="9" rx="10" ry="5" />
			<motion.g {...part(jelly(0.45, 0.75))} style={edge(0.5, 1)}>
				<path d="M7 13.4v7.9" />
				<path d="M12 14v8" />
				<path d="M17 13.4v7.9" />
				<path d="M2 9v8a10 5 0 0 0 20 0V9" />
			</motion.g>
		</>
	),
});
