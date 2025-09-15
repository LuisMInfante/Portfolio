const works = [
	{
		title: 'Medtronic',
		role: 'R&D Software Engineering Intern',
		timeRange: 'June 2025 – August 2025',
		technologies: [
			{ name: 'ts', iconUrl: null, alt: 'TypeScript', url: 'https://www.typescriptlang.org/' },
			{ name: 'react', iconUrl: null, alt: 'React', url: 'https://react.dev/' },
			{ name: 'nextjs', iconUrl: null, alt: 'Next.js', url: 'https://nextjs.org/' },
			{
				name: 'playwright',
				iconUrl:
					'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/playwright-y50bnthygb3rvsppvkm9e.png/playwright-q55xzpenhgjsodksybst.png?_a=DATAg1AAZAA0',
				alt: 'Playwright',
				url: 'https://playwright.dev/'
			}
		],
		description: [
			'Developed a full-stack automated testing framework for an electrosurgical generator streamlining device validation.',
			'Implemented CI/CD pipelines for code formatting, linting, and type checking using Bitbucket and Bamboo.',
			'Created test generation schemas using JSON and YAML, enabling flexible test case definitions.',
			'Built automated UI testing capabilities using Playwright, improving test coverage and reducing manual testing time.',
			'Exported test results from SQLite to Snowflake securely via RSA keys, supporting local and cloud-based workflows.',
			'Documented software architecture in Confluence and led sprints using Jira, improving collaboration and task tracking.'
		],
		url: 'https://www.medtronic.com/'
	},
	{
		title: 'Institute for Simulation & Training - METIL',
		role: 'R&D Software Engineer Intern',
		timeRange: 'November 2024 – January 2025',
		technologies: [
			{ name: 'cpp', iconUrl: null, alt: 'C++', url: 'https://isocpp.org/' },
			{ name: 'unreal', iconUrl: null, alt: 'Unreal Engine', url: 'https://www.unrealengine.com/' }
		],
		description: [
			'Designed VR emergency response training simulations in Unreal Engine, reducing cost by an estimated 60%.',
			'Implemented VR locomotion, height adjustment, snap turning, and teleporting for natural, user-centric interactions.',
			'Developed AI-driven NPC interactions and a Replay System for After Action Review, enhancing post-training feedback.'
		],
		url: 'https://www.metil.org/'
	},
	{
		title: 'Silicon Assurance',
		role: 'Undergraduate Research Assistant',
		timeRange: 'January 2024 – November 2024',
		technologies: [
			{ name: 'cpp', iconUrl: null, alt: 'C++', url: 'https://isocpp.org/' },
			{ name: 'linux', iconUrl: null, alt: 'Linux', url: 'https://www.linux.org/' }
		],
		description: [
			'Developed C++ tools to identify security vulnerabilities in RISC-V chips, enhancing overall chip security.',
			'Analyzed RTL and flattened netlist data to detect security flaws.',
			'Created a simulation tool for stuck at fault analysis, providing key insights into chip vulnerabilities.'
		],
		url: 'https://siliconassurance.com/'
	},
	{
		title: 'Department of Energy RENEW Program',
		role: 'Undergraduate Research Assistant',
		timeRange: 'January 2024 – May 2025',
		technologies: [
			{
				name: 'cs',
				iconUrl: null,
				alt: 'C#',
				url: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
			},
			{ name: 'unity', iconUrl: null, alt: 'Unity', url: 'https://unity.com/' },
			{ name: 'ros', iconUrl: null, alt: 'ROS', url: 'https://www.ros.org/' }
		],
		description: [
			'Collaborated with Argonne National Laboratory to automate biological experiments using cyber-physical systems.',
			'Developed and simulated robotic behaviors using Unity and ROS2, optimizing laboratory workflows and accuracy.',
			'Integrated software solutions with laboratory operations, streamlining experimental procedures.'
		],
		url: 'https://science.osti.gov/Initiatives/RENEW'
	},
	{
		title: 'University of Central Florida',
		role: 'Undergraduate Teaching Assistant',
		timeRange: 'August 2023 – December 2023',
		technologies: [
			{ name: 'c', iconUrl: null, alt: 'C', url: 'https://www.gnu.org/software/gnu-c-manual/' }
		],
		description: [
			'Assisted the professor in delivering lectures and conducting class discussions on Data Structures and Algorithms.',
			'Conducted office hours and led lab sessions, resulting in grade improvements of 60% on average.',
			'Developed instructional materials, such as study guides and practice problems, to support student learning.'
		],
		url: 'https://www.ucf.edu/'
	}
];

export default works;
