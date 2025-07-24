import path from 'path';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = 'commands';

async function main() {
	const commandFilepath = path.join(__dirname, dir);
	console.log(`Reading directory: ${commandFilepath}`);
	const baseCommandFiles = await fs.readdir(commandFilepath, {
		withFileTypes: true,
		// recursive: true,
	});
	for (const baseCommand of baseCommandFiles) {
		// console.log(baseCommand);
		if (baseCommand.isDirectory()) {
			// Base command
			const commandGroupFilepath = path.join(
				commandFilepath,
				baseCommand.name,
			);
			console.log(
				`Reading subcommand group directory: ${commandGroupFilepath}`,
			);
			const commandGroupFiles = await fs.readdir(commandGroupFilepath, {
				withFileTypes: true,
			});
			// console.log('Subcommand files:', commandGroupFiles);
			for (const subcommandGroup of commandGroupFiles) {
				if (subcommandGroup.isDirectory()) {
					// Subcommand group
					console.log(
						'Reading subcommand group: ',
						subcommandGroup.name,
					);
					const subcommandGroupFilepath = path.join(
						commandGroupFilepath,
						subcommandGroup.name,
					);
					const subcommandGroupCommands = await fs.readdir(
						subcommandGroupFilepath,
						{ withFileTypes: true },
					);
					for (const subcommand of subcommandGroupCommands) {
						if (!subcommand.isFile()) continue;
						// Subcommand
						const stat = await fs.lstat(
							path.join(subcommandGroupFilepath, subcommand.name),
						);
						if (stat.isFile() && subcommand.name.endsWith('.js')) {
							console.log(
								`Loading subcommand: /${baseCommand.name} ${subcommandGroup.name} ${subcommand.name}`,
							);
							// Here you would typically import the command module
							// and register it with your client.
						}
					}
				}
			}
			// for (const subFile of subcommandFiles) {
			// 	if (subFile.isDirectory()) {
			// 		console.log('Reading subcommand group: ', subFile.name);
			// 		const subcommandGroupFilepath = path.join(
			// 			subcommandFilepath,
			// 			subFile.name,
			// 		);
			// 		const subcommandGroupFiles = await fs.readdir(
			// 			subcommandGroupFilepath,
			// 			{ withFileTypes: true },
			// 		);
			// 		for (const subgroupFile in subcommandGroupFiles) {
			// 			if (!subgroupFile.isFile()) continue;
			// 			const stat = await fs.lstat(
			// 				path.join(subcommandGroupFilepath, subgroupFile),
			// 			);
			// 			if (stat.isFile() && stat.name.endsWith('.js')) {
			// 				console.log(
			// 					`Loading subcommand: ${subgroupFile.name}`,
			// 				);
			// 			}
			// 		}
			// 	}
			// }
		}
	}
}

main();
