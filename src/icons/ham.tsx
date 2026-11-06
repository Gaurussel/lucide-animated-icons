import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 0.6, -3, 0], rotate: [0, 0, -9.6, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.32, 1], ease: ["easeInOut", snap, springy] },
);
const dangle = pose(
	{ rotate: [0, 0, 18, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.38, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "ham",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(18, 6)}>
			<path d="M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025" />
			<motion.g {...part(dangle)} style={pivot(15, 9)}>
				<path d="M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" />
				<path d="M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288" />
				<path d="m8.5 16.5-1-1" />
			</motion.g>
		</motion.g>
	),
});
