import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const rise = { duration: 0.85, times: [0, 0.25, 0.5, 0.75, 1] };

export default createAnimatedIcon({
	name: "crown",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -3, -3, -3, 0], rotate: [0, 0, -6, 6, 0] }, rise))}
				d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"
				style={centered}
			/>
			<motion.path {...part(pose({ scaleX: [1, 0.8, 0.8, 0.8, 1] }, rise))} d="M5 21h14" style={centered} />
		</>
	),
});
