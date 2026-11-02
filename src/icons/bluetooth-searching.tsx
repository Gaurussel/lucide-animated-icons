import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bluetooth-searching",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 0.7, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="m7 7 10 10-5 5V2l5 5L7 17"
				style={centered}
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, 3, 0, 0], opacity: [1, 0.1, 1, 0.1, 1] },
						{ duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] },
					),
				)}
				d="M20.83 14.83a4 4 0 0 0 0-5.66"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0.1, 1, 0.1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}
				d="M18 12h.01"
			/>
		</>
	),
});
