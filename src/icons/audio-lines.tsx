import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const bars = [
	{ d: "M2 10v3", levels: [2, 0.7] },
	{ d: "M6 6v11", levels: [0.45, 1.3] },
	{ d: "M10 3v18", levels: [0.5, 0.85] },
	{ d: "M14 8v7", levels: [1.9, 0.6] },
	{ d: "M18 5v13", levels: [0.5, 1.25] },
	{ d: "M22 10v3", levels: [2, 0.6] },
];

export default createAnimatedIcon({
	name: "audio-lines",
	render: (part) => (
		<>
			{bars.map(({ d, levels: [first, second] }, index) => (
				<motion.path
					{...part(
						pose(
							{ scaleY: [1, first, second, 1] },
							{ duration: 0.7, delay: index * 0.03, times: [0, 0.3, 0.65, 1] },
						),
					)}
					d={d}
					key={d}
					style={centered}
				/>
			))}
		</>
	),
});
