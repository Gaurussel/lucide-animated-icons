import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const crowned = pose(
	{ y: [0, 1, -6, 1, 0], rotate: [0, 0, -14, 2, 0] },
	{ duration: 0.75, times: [0, 0.1, 0.3, 0.45, 1], ease: ["easeInOut", "easeOut", "easeIn", springy] },
);
const cushion = pose(
	{ scaleX: [1, 1, 1.3, 1] },
	{ duration: 0.75, times: [0, 0.42, 0.5, 1], ease: ["easeInOut", "easeOut", springy] },
);

export default createAnimatedIcon({
	name: "crown",
	render: (part) => (
		<>
			<motion.path
				{...part(crowned)}
				d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"
				style={pivot(12, 17)}
			/>
			<motion.path {...part(cushion)} d="M5 21h14" style={pivot(12, 21)} />
		</>
	),
});
