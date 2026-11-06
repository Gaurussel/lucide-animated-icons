import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const swap = (direction: number) =>
	pose({ x: [0, 4 * direction, 0] }, { duration: 0.68, times: [0, 0.3, 1], ease: [snap, springy] });
const lens = pose(
	{ rotate: [0, 0, 360], scale: [1, 0.76, 1] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "switch-camera",
	render: (part) => (
		<>
			<path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
			<path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" />
			<motion.circle {...part(lens)} cx="12" cy="12" r="3" style={centered} />
			<motion.path {...part(swap(-1))} d="m18 22-3-3 3-3" />
			<motion.path {...part(swap(1))} d="m6 2 3 3-3 3" />
		</>
	),
});
