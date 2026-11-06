import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose, snap, springy } from "../helpers.ts";

const press = pose({ scale: [1, 0.93, 1] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const park = pose(
	{ y: [0, -2.4, 0], rotate: [0, -7.2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "circle-parking",
	render: (part) => (
		<>
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
			<motion.path {...part(park)} d="M9 17V7h4a3 3 0 0 1 0 6H9" style={edge(0, 1)} />
		</>
	),
});
