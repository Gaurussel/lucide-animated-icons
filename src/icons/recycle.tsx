import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "recycle",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -14, 360] }, { duration: 0.9, times: [0, 0.15, 1], reset: true }))}
				style={centered}
			>
				<path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
				<path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
				<path d="m14 16-3 3 3 3" />
				<motion.path
					{...part(pose({ scale: [1, 1, 1.25, 1, 1] }, { duration: 0.9, times: [0, 0.35, 0.55, 0.75, 1] }))}
					d="M8.293 13.596 7.196 9.5 3.1 10.598"
					style={centered}
				/>
				<path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
				<motion.path
					{...part(pose({ scale: [1, 1, 1.25, 1, 1] }, { duration: 0.9, times: [0, 0.5, 0.7, 0.9, 1] }))}
					d="m13.378 9.633 4.096 1.098 1.097-4.096"
					style={centered}
				/>
			</motion.g>
		</>
	),
});
