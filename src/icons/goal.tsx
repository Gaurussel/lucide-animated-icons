import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const plant = pose(
	{ y: [0, -3.6, 0.6, 0], rotate: [0, -9, 0, 0] },
	{ duration: 0.7, times: [0, 0.3, 0.45, 1], ease: [snap, "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "goal",
	render: (part) => (
		<>
			<motion.path {...part(plant)} d="M12 13V2l8 4-8 4" style={pivot(12, 13)} />
			<motion.g {...part(jelly(0.42, 0.7))} style={centered}>
				<path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
				<path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
			</motion.g>
		</>
	),
});
