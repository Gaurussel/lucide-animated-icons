import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const dash = pose(
	{ y: [0, -1.6, 8, -6.4, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const pop = pose({ scale: [1, 1.5, 1] }, { duration: 0.6, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "banknote-arrow-down",
	render: (part) => (
		<>
			<path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
			<path d="M18 12h.01" />
			<path d="M6 12h.01" />
			<motion.circle {...part(pop)} cx="12" cy="12" r="2" style={centered} />
			<motion.g {...part(dash)}>
				<path d="m16 19 3 3 3-3" />
				<path d="M19 16v6" />
			</motion.g>
		</>
	),
});
