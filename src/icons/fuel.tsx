import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const hose = pose({ rotate: [0, -15, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: [snap, ring] });
const level = pose({ y: [0, 5.4, 0] }, { duration: 0.75, times: [0, 0.35, 1], ease: ["easeInOut", springy] });

export default createAnimatedIcon({
	name: "fuel",
	render: (part) => (
		<>
			<line x1="3" x2="15" y1="22" y2="22" />
			<motion.line {...part(level)} x1="4" x2="14" y1="9" y2="9" />
			<path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
			<motion.path
				{...part(hose)}
				d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"
				style={pivot(14, 13)}
			/>
		</>
	),
});
