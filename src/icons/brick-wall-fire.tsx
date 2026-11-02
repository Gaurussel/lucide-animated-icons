import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "brick-wall-fire",
	render: (part) => (
		<>
			<path d="M16 3v2.107" />
			<motion.path
				{...part(
					pose(
						{ scaleY: [1, 0.7, 1, 0.78, 1], rotate: [0, -8, 6, -4, 0] },
						{ duration: 0.8, times: [0, 0.2, 0.45, 0.7, 1] },
					),
				)}
				d="M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9"
				style={edge(0.5, 1)}
			/>
			<path d="M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938" />
			<path d="M3 15h5.253" />
			<path d="M3 9h8.228" />
			<motion.path
				{...part(pose({ x: [0, 2.5, 2.5, 0] }, { duration: 0.8, delay: 0.1, times: [0, 0.35, 0.65, 1] }))}
				d="M8 15v6"
			/>
			<motion.path
				{...part(pose({ x: [0, 2.5, 2.5, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}
				d="M8 3v6"
			/>
		</>
	),
});
