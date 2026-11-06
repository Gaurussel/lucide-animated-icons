import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const node = (delay: number) =>
	pose({ scale: [1, 1.21, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const dash = (delay: number) =>
	pose(
		{ y: [0, -1.8, 0], opacity: [1, 0.2, 1] },
		{ duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "git-pull-request-draft",
	render: (part) => (
		<>
			<motion.circle {...part(node(0))} cx="6" cy="6" r="3" style={centered} />
			<line x1="6" x2="6" y1="9" y2="21" />
			<motion.circle {...part(node(0.05))} cx="18" cy="18" r="3" style={centered} />
			<motion.path {...part(dash(0.1))} d="M18 11v-1" />
			<motion.path {...part(dash(0.2))} d="M18 6V5" />
		</>
	),
});
