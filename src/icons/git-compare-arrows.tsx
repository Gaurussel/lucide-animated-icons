import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const node = (delay: number) =>
	pose({ scale: [1, 1.4, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const jab = (direction: number, delay: number) =>
	pose(
		{ x: [0, 0, 3 * direction, 0] },
		{ duration: 0.6, delay, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "git-compare-arrows",
	render: (part) => (
		<>
			<motion.circle {...part(node(0.35))} cx="5" cy="6" r="3" style={centered} />
			<motion.path {...part(redraw(0, 0.4))} d="M12 6h5a2 2 0 0 1 2 2v7" />
			<motion.path {...part(jab(-1, 0))} d="m15 9-3-3 3-3" />
			<motion.circle {...part(node(0.45))} cx="19" cy="18" r="3" style={centered} />
			<motion.path {...part(redraw(0.1, 0.4))} d="M12 18H7a2 2 0 0 1-2-2V9" />
			<motion.path {...part(jab(1, 0.1))} d="m9 15 3 3-3 3" />
		</>
	),
});
