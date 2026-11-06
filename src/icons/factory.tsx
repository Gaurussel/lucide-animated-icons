import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const light = (delay: number) =>
	pose({ scale: [1, 1.84, 1] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const chug = pose(
	{ y: [0, 0, -1.8, 0] },
	{ duration: 0.75, times: [0, 0.32, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "factory",
	render: (part) => (
		<motion.g {...part(chug)}>
			<path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
			<motion.path {...part(light(0))} d="M8 16h.01" style={centered} />
			<motion.path {...part(light(0.08))} d="M12 16h.01" style={centered} />
			<motion.path {...part(light(0.16))} d="M16 16h.01" style={centered} />
		</motion.g>
	),
});
