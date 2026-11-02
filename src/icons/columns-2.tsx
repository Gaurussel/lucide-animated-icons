import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "columns-2",
	render: (part) => (
		<>
			<rect height="18" rx="2" width="18" x="3" y="3" />
			<motion.path
				{...part(pose({ x: [0, -1, 4, -4, 0] }, { duration: 0.8, times: [0, 0.15, 0.5, 0.85, 1] }))}
				d="M12 3v18"
			/>
		</>
	),
});
