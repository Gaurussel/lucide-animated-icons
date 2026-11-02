import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const nod = pose(
	{ y: [0, -3, 0], rotate: [0, -10, 0] },
	{ duration: 0.75, times: [0, 0.25, 1], ease: [snap, springy] },
);
const wag = pose({ rotate: [0, -35, 0] }, { duration: 0.75, times: [0, 0.18, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "github",
	render: (part) => (
		<>
			<motion.path
				{...part(nod)}
				d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
				style={pivot(12, 22)}
			/>
			<motion.path {...part(wag)} d="M9 18c-4.51 2-5-2-7-2" style={pivot(9, 18)} />
		</>
	),
});
