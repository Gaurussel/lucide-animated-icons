import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const body = pose({ scale: [1, 0.94, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] });
const lens = pose({ scale: [1, 1, 0.7, 1] }, { duration: 0.8, times: [0, 0.2, 0.6, 1] });
const flash = pose({ scale: [1, 1, 2.2, 1] }, { duration: 0.8, times: [0, 0.5, 0.7, 1] });

export default createAnimatedIcon({
	name: "instagram",
	render: (part) => (
		<>
			<motion.rect {...part(body)} height="20" rx="5" ry="5" style={centered} width="20" x="2" y="2" />
			<motion.path {...part(lens)} d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" style={centered} />
			<motion.line {...part(flash)} style={centered} x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
		</>
	),
});
