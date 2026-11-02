import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const press = pose(
	{ y: [0, -2, 2, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.22, 1], ease: ["easeInOut", snap, springy] },
);
const node = (delay: number) =>
	pose(
		{ y: [0, 0, -4, 0] },
		{ duration: 0.7, times: [0, delay, delay + 0.14, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "network",
	render: (part) => (
		<>
			<motion.rect {...part(press)} height="6" rx="1" width="6" x="9" y="2" />
			<motion.path {...part(redraw(0.12, 0.2))} d="M12 12V8" />
			<motion.path {...part(redraw(0.2, 0.3))} d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
			<motion.rect {...part(node(0.38))} height="6" rx="1" width="6" x="2" y="16" />
			<motion.rect {...part(node(0.44))} height="6" rx="1" width="6" x="16" y="16" />
		</>
	),
});
