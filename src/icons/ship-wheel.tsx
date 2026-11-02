import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "ship-wheel",
	render: (part) => (
		<>
			<circle cx="12" cy="12" r="8" />
			<motion.g
				{...part(pose({ rotate: [0, -20, 40, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] }))}
				style={centered}
			>
				<path d="M12 2v7.5" />
				<path d="m19 5-5.23 5.23" />
				<path d="M22 12h-7.5" />
				<path d="m19 19-5.23-5.23" />
				<path d="M12 14.5V22" />
				<path d="M10.23 13.77 5 19" />
				<path d="M9.5 12H2" />
				<path d="M10.23 10.23 5 5" />
			</motion.g>
			<motion.g
				{...part(pose({ scale: [1, 0.6, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] }))}
				style={centered}
			>
				<circle cx="12" cy="12" r="2.5" />
			</motion.g>
		</>
	),
});
