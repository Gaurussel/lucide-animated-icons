import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const beacon = pose({ scale: [1, 2.4, 1] }, { duration: 0.55, times: [0, 0.25, 1], ease: [snap, springy] });
const bar = (delay: number) =>
	pose(
		{ pathLength: [1, 0, 1, 1], y: [0, 0, -3, 0] },
		{ duration: 0.5, delay, times: [0, 0.01, 0.45, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "signal-low",
	render: (part) => (
		<>
			<motion.path {...part(beacon)} d="M2 20h.01" style={centered} />
			<motion.path {...part(bar(0.1))} d="M7 20v-4" />
		</>
	),
});
