import { config } from 'dotenv';
import { Client, Events, GatewayIntentBits, Routes, REST } from 'discord.js';
import CreateTaskCommand from './commands/tasks/CreateTask.js';
import { registerSubcommands } from './utils/registry.js';

console.log(new CreateTaskCommand());

config();

const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
	rest: { version: '10' },
});

const rest = new REST({ version: '10' }).setToken(TOKEN);

client.once(Events.ClientReady, (readyClient) => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
	console.log(`Date: ${new Date().toLocaleString()}`);
});

async function main() {
	try {
		console.log('Started refreshing application (/) commands.');
		client.slashSubcommands = new Collection();
		await registerSubcommands(client);
		console.log(client.slashSubcommands);

		await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
			body: [],
		});
		await client.login(TOKEN);
	} catch (err) {
		console.log(err);
	}
}

main();
