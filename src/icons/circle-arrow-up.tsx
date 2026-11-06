import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const press = pose({ scale: [1, 0.93, 1] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const fly = (x: number, y: number) =>
	pose(
		{ x: [0, -x * 0.25, x, -x, 0], y: [0, -y * 0.25, y, -y, 0], opacity: [1, 1, 0, 0, 1] },
		{ duration: 0.7, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "circle-arrow-up",
	render: (part) => (
		<>
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
			<motion.g {...part(fly(0, -10))}>
				<path d="m16 12-4-4-4 4" />
				<path d="M12 16V8" />
			</motion.g>
		</>
	),
});
