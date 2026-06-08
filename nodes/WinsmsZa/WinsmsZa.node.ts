import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { creditsDescription } from './resources/credits';
import { smsDescription } from './resources/sms';
import { subaccountsDescription } from './resources/subaccounts';

export class WinsmsZa implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'winsms-za',
		name: 'N8nDevWinsmsZa',
		icon: { light: 'file:./winsms-za.png', dark: 'file:./winsms-za.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'WinSMS RESTful API',
		defaults: { name: 'winsms-za' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevWinsmsZaApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Credits",
					"value": "Credits",
					"description": ""
				},
				{
					"name": "Sms",
					"value": "Sms",
					"description": ""
				},
				{
					"name": "Subaccounts",
					"value": "Subaccounts",
					"description": ""
				}
			],
			"default": ""
		},
		...creditsDescription,
		...smsDescription,
		...subaccountsDescription
		],
	};
}
