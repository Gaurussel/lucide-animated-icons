import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tool-case",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.4, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 1] }))}
				d="M10 15h4"
				style={centered}
			/>
			<motion.path
				{...part(pose({ y: [0, 0.8, -2.2, 0] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] }))}
				d="m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27"
			/>
			<motion.path
				{...part(pose({ y: [0, 0.8, -2.2, 0] }, { duration: 0.8, delay: 0.08, times: [0, 0.25, 0.6, 1] }))}
				d="m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.94, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.5, 1] }))}
				d="M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
