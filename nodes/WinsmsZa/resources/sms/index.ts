import type { INodeProperties } from 'n8n-workflow';

export const smsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sms"
					]
				}
			},
			"options": [
				{
					"name": "Get Optout Messages",
					"value": "Get Optout Messages",
					"action": "Get a list of incoming opt-out SMS messages",
					"description": "Get a list of all opt-out SMS messages received by the account, as well as all manually added opt-out numbers.<br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sms/incoming/optout"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sms/incoming/optout",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sms"
					],
					"operation": [
						"Get Optout Messages"
					]
				}
			}
		},
];
