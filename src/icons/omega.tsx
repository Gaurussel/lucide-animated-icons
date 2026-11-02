import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "omega",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ scaleY: [1, 0.9, 1.1, 1], scaleX: [1, 1.03, 0.97, 1] },
						{ duration: 0.65, times: [0, 0.25, 0.6, 1] },
					),
				)}
				d="M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
