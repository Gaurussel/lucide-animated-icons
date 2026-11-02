import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, ring, snap, springy } from "../helpers.ts";

const bead = pose(
	{ y: [0, 3, -4, 0] },
	{ duration: 0.75, times: [0, 0.18, 0.36, 1], ease: ["easeInOut", snap, springy] },
);
const hit = pose({ y: [0, 0, -2, 0] }, { duration: 0.75, times: [0, 0.3, 0.38, 1], ease: ["easeInOut", snap, ring] });

export default createAnimatedIcon({
	name: "git-commit-vertical",
	render: (part) => (
		<>
			<motion.path {...part(hit)} d="M12 3v6" />
			<motion.circle {...part(bead)} cx="12" cy="12" r="3" />
			<motion.path {...part(redraw(0.2, 0.4))} d="M12 15v6" />
		</>
	),
});
