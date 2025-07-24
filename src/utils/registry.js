import path from 'path';
import promises from 'fs';

async function registerSubcommands(client, dir = '../commands') {
	const filepath = path.join(__dirname, dir);
	// const files = await promises.readdir(filepath, {
	// 	withFileTypes: true,
	// 	recursive: true,
	// });
	// for (const file of files) {
	// 	console.log(file);
	// 	if (file.isDirectory()) {
	// 		const subcommandDirectoryFiles = await promises.readdir(
	// 			file.filepath,
	// 			{ withFileTypes: true },
	// 		);
	// 	} else if (file.name.endsWith('.js')) {
	// 		const commandModule = await import(path.join(filepath, file.name));
	// 		const command = new commandModule.default();
	// 		if (command.slashSubcommand) {
	// 			client.slashSubcommands.set(
	// 				command.slashSubcommand.name,
	// 				command,
	// 			);
	// 		}
	// 	}
	// }
}

module.exports = {
	registerSubcommands,
};
