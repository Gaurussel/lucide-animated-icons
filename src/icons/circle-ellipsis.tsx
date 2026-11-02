import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const press = pose({ scale: [1, 0.88, 1] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const dot = (delay: number) =>
	pose({ y: [0, -4, 0] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "circle-ellipsis",
	render: (part) => (
		<>
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
			<motion.path {...part(dot(0.2))} d="M17 12h.01" />
			<motion.path {...part(dot(0.1))} d="M12 12h.01" />
			<motion.path {...part(dot(0))} d="M7 12h.01" />
		</>
	),
});
