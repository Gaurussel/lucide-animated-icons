import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const shoot = (x: number, y: number) =>
	pose(
		{ x: [0, -x * 0.3, x, -x * 0.6, 0], y: [0, -y * 0.3, y, -y * 0.6, 0], opacity: [1, 1, 0, 0, 1] },
		{ duration: 0.7, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
	);
const recoil = pose(
	{ rotate: [0, 0, -12, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.3, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "circle-arrow-out-down-right",
	render: (part) => (
		<>
			<motion.path {...part(recoil)} d="M12 22a10 10 0 1 1 10-10" style={pivot(12, 12)} />
			<motion.g {...part(shoot(6, 6))}>
				<path d="M22 22 12 12" />
				<path d="M22 16v6h-6" />
			</motion.g>
		</>
	),
});
