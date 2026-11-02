import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "squircle",
	render: (part) => (
		<motion.path
			{...part(
				pose(
					{ scaleX: [1, 0.88, 1, 1, 1], scaleY: [1, 1, 1, 0.88, 1] },
					{ duration: 0.75, times: [0, 0.25, 0.5, 0.75, 1] },
				),
			)}
			d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"
			style={centered}
		/>
	),
});
