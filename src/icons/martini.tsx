import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, ring, snap } from "../helpers.ts";

const lift = pose(
	{ y: [0, 0.6, -1.8, 0], rotate: [0, 3.6, -12, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, ring] },
);
const slosh = pose(
	{ rotate: [0, 0, 9.6, 0] },
	{ duration: 0.75, times: [0, 0.22, 0.42, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "martini",
	render: (part) => (
		<>
			<motion.g {...part(lift)} style={pivot(12, 22)}>
				<path d="M12 11v11" />
				<motion.path {...part(slosh)} d="m19 3-7 8-7-8Z" style={pivot(12, 11)} />
			</motion.g>
			<motion.path {...part(jelly(0.32, 0.75))} d="M8 22h8" style={edge(0.5, 1)} />
		</>
	),
});
