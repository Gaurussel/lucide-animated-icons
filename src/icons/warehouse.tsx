import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const slat = (delay: number) =>
	pose({ y: [0, -5, -5, 0], opacity: [1, 0.2, 0.2, 1] }, { duration: 0.8, delay, times: [0, 0.3, 0.6, 1] });

export default createAnimatedIcon({
	name: "warehouse",
	render: (part) => (
		<>
			<path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" />
			<motion.path
				{...part(pose({ scaleY: [1, 0.88, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.5, 1] }))}
				d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"
				style={edge(0.5, 1)}
			/>
			<motion.path {...part(slat(0))} d="M6 13h12" />
			<motion.path {...part(slat(0.08))} d="M6 17h12" />
		</>
	),
});
