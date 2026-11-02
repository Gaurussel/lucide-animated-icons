import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "droplet",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ scaleY: [1, 1.1, 0.9, 1], scaleX: [1, 0.92, 1.06, 1] },
						{ duration: 0.7, times: [0, 0.3, 0.65, 1] },
					),
				)}
				style={edge(0.5, 1)}
			>
				<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
			</motion.g>
		</>
	),
});
