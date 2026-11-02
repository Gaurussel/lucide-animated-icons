import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const timing = { duration: 0.75, times: [0, 0.3, 0.65, 1] };
const tick = (x: number, y: number) => pose({ x: [0, x * 1.5, -x * 2, 0], y: [0, y * 1.5, -y * 2, 0] }, timing);

export default createAnimatedIcon({
	name: "locate-fixed",
	render: (part) => (
		<>
			<motion.line {...part(tick(-1, 0))} x1="2" x2="5" y1="12" y2="12" />
			<motion.line {...part(tick(1, 0))} x1="19" x2="22" y1="12" y2="12" />
			<motion.line {...part(tick(0, -1))} x1="12" x2="12" y1="2" y2="5" />
			<motion.line {...part(tick(0, 1))} x1="12" x2="12" y1="19" y2="22" />
			<motion.circle {...part(pose({ scale: [1, 1, 0.88, 1] }, timing))} cx="12" cy="12" r="7" style={centered} />
			<motion.circle {...part(pose({ scale: [1, 1, 1.4, 1] }, timing))} cx="12" cy="12" r="3" style={centered} />
		</>
	),
});
