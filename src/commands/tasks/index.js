import BaseSlashSubcommand from '../../utils/BaseSlashSubcommand.js';
import { Collection, SlashCommandBuilder } from 'discord.js';

export default class PMCommand extends BaseSlashSubcommand {
	constructor() {
		super(
			'task',
			[
				{
					name: 'exec',
					subcommands: [
						'AssignDuplicateTasks',
						'DeleteTask',
						'ReassignGlobal',
					],
				},
				{
					name: 'lead',
					subcommands: [
						'AddWatcher',
						'ArchiveTask',
						'AssignNewTask',
						'DuplicateTask',
						'EditTask',
						'EditWatchers',
						'ReassignTask',
						'RequestReassignment',
						'RequestTaskAssignment',
					],
				},
				{
					name: 'self',
					subcommands: ['CreateTask', 'EditTask'],
				},
				{
					name: 'utils',
					subcommands: ['InviteWatcher', 'Watch'],
				},
			],
			[],
		);
	}
	getSlashCommandJSON() {
		return new SlashCommandBuilder()
			.setName(this.name)
			.setDescription(
				'General Project Management Commands. Use /pm exec or /pm lead or /pm member to access specific commands.',
			)
			.addSubcommandGroup((group) =>
				group
					.setName('exec')
					.setDescription('Executive PM Commands')
					.addSubcommand((subcommand) =>
						subcommand
							.setName('archive_completed_tasks')
							.setDescription(
								'Archives all tasks marked as completed for all subteams.',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('check_subteam_availability')
							.setDescription(
								'Check the availability of every sub-team member until a specified time period',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('generate_report')
							.setDescription(
								'Generates a report based on progress checks over the specified time period',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('list_all_overdue')
							.setDescription(
								'List all overdue tasks across all sub-teams',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('list_all_tasks')
							.setDescription(
								'Lists all tasks across all sub-teams',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('list_overdue_subteam_tasks')
							.setDescription(
								'Lists overdue tasks for a sub-team',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('list_subteam_tasks')
							.setDescription('Lists tasks for a sub-team'),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('list_tasks_by_assignee')
							.setDescription('Lists tasks by assignee'),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('list_tasks_by_due_date')
							.setDescription('Lists tasks by due date'),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('request_progress_check')
							.setDescription(
								'Requests a progress check on all tasks from a team member.',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('request_specific_progress_check')
							.setDescription(
								'Requests a progress check on a specific task from a team member.',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('request_subteam_progress_check')
							.setDescription(
								'Requests a progress check for all sub-team members on all of their active, non-blocked tasks.',
							),
					),
			)
			.addSubcommandGroup((group) =>
				group
					.setName('lead')
					.setDescription('Lead PM Commands')
					.addSubcommand((subcommand) =>
						subcommand
							.setName('archive_completed_tasks')
							.setDescription(
								'Archives all completed tasks for a sub-team.',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('check_subteam_availability')
							.setDescription(
								'Check the availability of every sub-team member until a specified time period',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('list_overdue_tasks')
							.setDescription(
								'Lists overdue tasks for a sub-team',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('list_tasks')
							.setDescription('Lists tasks for a sub-team.'),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('list_tasks_by_assignee')
							.setDescription('Lists tasks by assignee'),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('list_tasks_by_due_date')
							.setDescription('Lists sub-team tasks by due date'),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('request_progress_check')
							.setDescription(
								'Requests a progress check on all tasks from a sub-team member.',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('request_specific_progress_check')
							.setDescription(
								'Requests a progress check on a specific task from a sub-team member.',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('request_subteam_progress_check')
							.setDescription(
								'Requests a progress check for all sub-team members on all of their active, non-blocked tasks.',
							),
					),
			)
			.addSubcommandGroup((group) =>
				group
					.setName('member')
					.setDescription('Member PM Commands')
					.addSubcommand((subcommand) =>
						subcommand
							.setName('check_availability')
							.setDescription(
								'Check the availability of a member during a specified time period',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('list_tasks')
							.setDescription(
								'Lists the tasks of a specific member.',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('request_progress_check')
							.setDescription(
								'Requests a progress check on a watched task',
							),
					)
					.addSubcommand((subcommand) =>
						subcommand
							.setName('set_availability')
							.setDescription(
								'Set your availability for a specified time period. Default availability is AVAILABLE.',
							),
					),
			);
	}
}
