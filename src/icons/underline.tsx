import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, ring, snap } from "../helpers.ts";

const jump = pose({ y: [0, -3, 0.9, 0] }, { duration: 0.72, times: [0, 0.2, 0.36, 1], ease: [snap, "easeIn", ring] });
const trampoline = pose(
	{ y: [0, 0, 1.8, 0] },
	{ duration: 0.72, times: [0, 0.3, 0.4, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "underline",
	render: (part) => (
		<>
			<motion.path {...part(jump)} d="M6 4v6a6 6 0 0 0 12 0V4" />
			<motion.line {...part(trampoline)} x1="4" x2="20" y1="20" y2="20" />
		</>
	),
});
