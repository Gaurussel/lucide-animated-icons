import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "superscript",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				style={edge(0.5, 0.5)}
			>
				<path d="m4 19 8-8" />
				<path d="m12 19-8-8" />
			</motion.g>
			<motion.path
				{...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"
			/>
		</>
	),
});
