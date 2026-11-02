import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const away = (direction: number) =>
	pose(
		{ y: [0, 4 * direction, 0], opacity: [1, 0, 1] },
		{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "table-cells-merge",
	render: (part) => (
		<>
			<motion.path {...part(away(1))} d="M12 21v-6" />
			<motion.path {...part(away(-1))} d="M12 9V3" />
			<path d="M3 15h18" />
			<path d="M3 9h18" />
			<motion.rect {...part(jelly(0.3, 0.72))} height="18" rx="2" style={edge(0.5, 1)} width="18" x="3" y="3" />
		</>
	),
});
