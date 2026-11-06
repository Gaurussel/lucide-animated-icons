import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const rewind = pose({ rotate: [0, -360] }, { duration: 0.75, ease: springy, reset: true });
const wind = pose({ rotate: [0, -18, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "history",
	render: (part) => (
		<>
			<motion.g {...part(wind)} style={pivot(12, 12)}>
				<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
				<path d="M3 3v5h5" />
			</motion.g>
			<motion.path {...part(rewind)} d="M12 7v5l4 2" style={pivot(12, 12)} />
		</>
	),
});
