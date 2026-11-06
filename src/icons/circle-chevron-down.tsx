import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const press = pose({ scale: [1, 0.93, 1] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const nudge = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "circle-chevron-down",
	render: (part) => (
		<>
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
			<motion.path {...part(nudge(0, 4))} d="m16 10-4 4-4-4" />
		</>
	),
});
