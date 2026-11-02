import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, ring, snap, springy } from "../helpers.ts";

const shake = pose({ rotate: [0, -25, 0] }, { duration: 0.75, times: [0, 0.1, 1], ease: [snap, ring] });
const fly = (x: number, y: number) =>
	pose(
		{ x: [0, x, -x, 0], y: [0, y, -y, 0], opacity: [1, 0, 0, 1] },
		{ duration: 0.75, times: [0, 0.28, 0.29, 1], ease: ["easeIn", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "phone-outgoing",
	render: (part) => (
		<>
			<motion.g {...part(fly(5, -5))}>
				<path d="m16 8 6-6" />
				<path d="M22 8V2h-6" />
			</motion.g>
			<motion.path
				{...part(shake)}
				d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
				style={centered}
			/>
		</>
	),
});
