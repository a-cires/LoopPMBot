import BaseSlashCommand from '../utils/BaseSlashCommand.js';

export default class CreateTaskCommand extends BaseSlashCommand {
	constructor() {
		super('create_task');
	}

	run(client, interaction) {
		return interaction.reply({
			content: 'create_task command executed!',
			ephemeral: true,
		});
	}
}
