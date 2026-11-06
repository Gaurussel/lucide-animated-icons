import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

const nod = pose(
	{ y: [0, -1.8, 0], rotate: [0, -9, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const shoulders = pose({ y: [0, 0.9, 0] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "circle-user-round",
	render: (part) => (
		<>
			<motion.path {...part(shoulders)} d="M18 20a6 6 0 0 0-12 0" />
			<motion.circle {...part(nod)} cx="12" cy="10" r="4" style={edge(0.5, 1)} />
			<circle cx="12" cy="12" r="10" />
		</>
	),
});
