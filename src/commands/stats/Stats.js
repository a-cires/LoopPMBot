import BaseSlashCommand from '../utils/BaseSlashCommand.js';

export default class StatsCommand extends BaseSlashCommand {
	constructor() {
		super('stats');
	}

	run(client, interaction) {
		return interaction.reply({
			content: 'stats command executed!',
			ephemeral: true,
		});
	}
}
