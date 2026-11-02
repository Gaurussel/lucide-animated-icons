import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chart-pie",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ x: [0, 2.5, 2.5, 0], y: [0, -2.5, -2.5, 0] }, { duration: 0.7, times: [0, 0.4, 0.65, 1] }),
				)}
				d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
			/>
			<motion.path
				{...part(pose({ scale: [1, 0.95, 0.95, 1] }, { duration: 0.7, times: [0, 0.4, 0.65, 1] }))}
				d="M21.21 15.89A10 10 0 1 1 8 2.83"
				style={centered}
			/>
		</>
	),
});
