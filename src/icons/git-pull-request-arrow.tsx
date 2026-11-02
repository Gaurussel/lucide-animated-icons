import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const jab = pose(
	{ x: [0, 2, -3, 0] },
	{ duration: 0.7, times: [0, 0.18, 0.38, 1], ease: ["easeInOut", snap, springy] },
);
const node = (delay: number) =>
	pose({ scale: [1, 1.35, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "git-pull-request-arrow",
	render: (part) => (
		<>
			<circle cx="5" cy="6" r="3" />
			<path d="M5 9v12" />
			<motion.circle {...part(node(0))} cx="19" cy="18" r="3" style={centered} />
			<motion.path {...part(jab)} d="m15 9-3-3 3-3" />
			<motion.path {...part(redraw(0.05, 0.5))} d="M12 6h5a2 2 0 0 1 2 2v7" />
		</>
	),
});
