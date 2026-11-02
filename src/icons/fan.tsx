import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const blow = pose(
	{ rotate: [0, -30, 720] },
	{ duration: 0.75, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);
const hub = pose({ scale: [1, 3, 1] }, { duration: 0.6, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "fan",
	render: (part) => (
		<>
			<motion.path
				{...part(blow)}
				d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"
				style={pivot(12, 12)}
			/>
			<motion.path {...part(hub)} d="M12 12v.01" style={centered} />
		</>
	),
});
