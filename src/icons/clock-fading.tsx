import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "clock-fading",
	render: (part) => (
		<>
			<path d="M12 2a10 10 0 0 1 7.38 16.75" />
			<motion.path
				{...part(pose({ rotate: [0, -14, 360] }, { duration: 0.85, times: [0, 0.2, 1], reset: true }))}
				d="M12 6v6l4 2"
				style={pivot(12, 12)}
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0.15, 1] }, { duration: 0.5, times: [0, 0.5, 1] }))}
				d="M2.5 8.875a10 10 0 0 0-.5 3"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0.15, 1] }, { duration: 0.5, delay: 0.1, times: [0, 0.5, 1] }))}
				d="M2.83 16a10 10 0 0 0 2.43 3.4"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0.15, 1] }, { duration: 0.5, delay: 0.2, times: [0, 0.5, 1] }))}
				d="M4.636 5.235a10 10 0 0 1 .891-.857"
			/>
			<motion.path
				{...part(
					pose({ opacity: [1, 0.15, 1] }, { duration: 0.5, delay: 0.30000000000000004, times: [0, 0.5, 1] }),
				)}
				d="M8.644 21.42a10 10 0 0 0 7.631-.38"
			/>
		</>
	),
});
