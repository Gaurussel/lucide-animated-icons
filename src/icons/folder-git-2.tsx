import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, -4, 0, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.44, 1], ease: [snap, "easeIn", "easeInOut"] },
);
const node = (delay: number) =>
	pose({ scale: [1, 1.6, 1] }, { duration: 0.5, delay, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "folder-git-2",
	render: (part) => (
		<motion.g {...part(leap)}>
			<motion.path
				{...part(jelly(0.44, 0.65))}
				d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"
				style={edge(0.5, 1)}
			/>
			<motion.path {...part(redraw(0.1, 0.5))} d="M18 19c-2.8 0-5-2.2-5-5v8" />
			<motion.circle {...part(node(0.1))} cx="13" cy="12" r="2" style={centered} />
			<motion.circle {...part(node(0.25))} cx="20" cy="19" r="2" style={centered} />
		</motion.g>
	),
});
