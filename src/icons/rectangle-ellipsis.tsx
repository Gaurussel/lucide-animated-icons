import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const dot = (delay: number) => pose({ y: [0, -3, 0], scale: [1, 2.6, 1] }, { duration: 0.35, delay });

export default createAnimatedIcon({
	name: "rectangle-ellipsis",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.7, 1] }, { duration: 0.35 }))}
				height="12"
				rx="2"
				style={centered}
				width="20"
				x="2"
				y="6"
			/>
			<motion.path {...part(dot(0.15))} d="M12 12h.01" style={centered} />
			<motion.path {...part(dot(0.3))} d="M17 12h.01" style={centered} />
			<motion.path {...part(dot(0))} d="M7 12h.01" style={centered} />
		</>
	),
});
