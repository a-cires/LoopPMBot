import BaseSlashSubcommand from '../../utils/BaseSlashSubcommand.js';
import { Collection, SlashCommandBuilder } from 'discord.js';

export default class PMCommand extends BaseSlashSubcommand {
	constructor() {
		super(
			'stats',
			[
				{
					name: 'channel',
					subcommands: [
						'ActiveMembersDay',
						'AvgMsgDay',
						'AvgMsgUser',
					],
				},
				{
					name: 'sub_team',
					subcommands: [
						'ActiveMembersDay',
						'AvgMsgDay',
						'AvgMsgUser',
						'Interactions',
					],
				},
				{
					name: 'team',
					subcommands: [
						'ActiveMembersDay',
						'AvgMsgDay',
						'AvgMsgUser',
					],
				},
				{
					name: 'user',
					subcommands: [
						'AvgMsgDay',
						'BotInteractions',
						'ChannelUsage',
						'Logs',
						'Streak',
						'Tasks',
						'TotalMsgs.js',
						'TotalReactions',
					],
				},
			],
			[],
		);
	}
	getSlashCommandJSON() {
		return new SlashCommandBuilder()
			.setName(this.name)
			.setDescription(
				'Various statistics commands for channels, sub-teams, team, and users. Use /stats channel, /stats sub_team, /stats team, or /stats user to access specific commands.',
			)
			.addSubcommandGroup((group) =>
				group
					.setName('channel')
					.setDescription('Statistics for channels')
					.addSubcommand((subcommand) =>
						subcommand
							.setName('active_channel_members')
							.setDescription(
								'How many users have interacted in the channel today, and average daily number of users interacting in the channel over the past 30 days',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('average_messages_per_day')
							.setDescription(
								'Average messages sent per day in a channel.',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('user_messages_stats')
							.setDescription(
								'Average, highest, and lowest number of messages sent by a user in a channel.',
							),
					),
			)
			.addSubcommandGroup((group) =>
				group
					.setName('sub_team')
					.setDescription('Statistics for sub-teams')
					.addSubcommand((subcommand) =>
						subcommand
							.setName('active_members_stats')
							.setDescription(
								'How many sub-team users have interacted on the server today, and average daily number of sub-team members interacting on the server over the past 30 days.',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('average_messages_per_day')
							.setDescription(
								'Average messages per day in a sub-team',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('user_message_stats')
							.setDescription(
								'Average, highest, and lowest number of messages sent by a user in a sub team',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('interaction_stats')
							.setDescription(
								'Average number of sub-team members interacting on the server over the past 30 days, and total number of pings sent to/from sub-team members over the past 30 days.',
							),
					),
			)
			.addSubcommandGroup((group) =>
				group
					.setName('team')
					.setDescription('Statistics for the team')
					.addSubcommand((subcommand) =>
						subcommand
							.setName('active_members_stats')
							.setDescription(
								'How many UMD Loop users members have interacted on the server today, and average daily number of UMD Loop members interacting on the server over the past 30 days',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('average_messages_per_day')
							.setDescription(
								'Average messages per day by UMD Loop.',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('user_message_stats')
							.setDescription(
								'Average, highest, and lowest number of messages sent by a user in a sub team.',
							),
					),
			)
			.addSubcommandGroup((group) =>
				group
					.setName('user')
					.setDescription('Statistics for the user')
					.addSubcommand((subcommand) =>
						subcommand
							.setName('message_stats')
							.setDescription(
								'Average and highest number of messages sent by user per day.',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('bot_interactions')
							.setDescription(
								'How many times the user has interacted with the bot, and average number of bot interactions per month.',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('channel_usage')
							.setDescription(
								'Top [num] channels by number of messages sent: Number of messages sent by user in each channel, average number of messages sent by user per day in each channel, highest number of messages sent by user in a channel.',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('logs')
							.setDescription(
								'How many times a user has logged their progress, average number of logs per month, highest number of logs in a month, average logs per task, highest number of logs for a task + which task.',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('streaks')
							.setDescription(
								'User streaks: longest streak, current streak, and average streak length. Interaction streaks: longest interaction streak, current interaction streak, and average interaction streak length. Reactions streaks: longest reactions streak, current reactions streak, and average reactions streak length.',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('tasks')
							.setDescription(
								'Various statistics related to tasks.',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('total_msgs')
							.setDescription(
								'How many messages the user has sent in the server.',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('total_reactions')
							.setDescription(
								'Total reactions sent by the user on the server.',
							),
					),
			);
	}
}
