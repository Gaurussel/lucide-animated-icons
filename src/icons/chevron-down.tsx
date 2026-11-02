import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, quick } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chevron-down",
	render: (part) => (
		<motion.path
			{...part({
				rest: { y: 0, rotate: 0, transition: quick },
				active: {
					y: [0, -1, 2.5, 0],
					rotate: [0, 0, 0, 0],
					transition: { duration: 0.5, times: [0, 0.25, 0.6, 1], ease: "easeInOut" },
				},
				open: { y: 0, rotate: 180, transition: { duration: 0.25, ease: "easeOut" } },
			})}
			d="m6 9 6 6 6-6"
			style={centered}
		/>
	),
});
