import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const spin = pose(
	{ x: [0, -0.6, 4.2, -4.2, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.12, 0.36, 0.37, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const shackle = pose({ y: [0, -2.1, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "earth-lock",
	render: (part) => (
		<>
			<path d="M12 2a10 10 0 1 0 9.54 13" />
			<motion.g {...part(spin)}>
				<path d="M7 3.34V5a3 3 0 0 0 3 3" />
				<path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
				<path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
			</motion.g>
			<motion.path {...part(shackle)} d="M20 6V4a2 2 0 1 0-4 0v2" />
			<motion.rect {...part(jelly(0.36, 0.65))} height="5" rx="1" style={edge(0.5, 1)} width="8" x="14" y="6" />
		</>
	),
});
