import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, springy } from "../helpers.ts";

const ping = pose(
	{ y: [0, 1.5, -12, 0], scale: [1, 0.76, 2.2, 1], opacity: [1, 1, 0, 1] },
	{ duration: 0.72, times: [0, 0.12, 0.38, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "wifi-zero",
	render: (part) => <motion.path {...part(ping)} d="M12 20h.01" style={centered} />,
});
