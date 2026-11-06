import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

const nod = pose(
	{ y: [0, -1.8, 0], rotate: [0, -9, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const shoulders = pose({ y: [0, 0.9, 0] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "circle-user",
	render: (part) => (
		<>
			<circle cx="12" cy="12" r="10" />
			<motion.circle {...part(nod)} cx="12" cy="10" r="3" style={edge(0.5, 1)} />
			<motion.path {...part(shoulders)} d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
		</>
	),
});
