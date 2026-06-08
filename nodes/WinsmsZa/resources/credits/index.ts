import type { INodeProperties } from 'n8n-workflow';

export const creditsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Credits"
					]
				}
			},
			"options": [
				{
					"name": "Get Credit Balance",
					"value": "Get Credit Balance",
					"action": "Get your current WinSMS credit balance",
					"description": "Get the current remaining credit balance for the account.\n\n***Note*** - The credit balance is expressed as a value with a single decimal place.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/credits/balance"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /credits/balance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Credits"
					],
					"operation": [
						"Get Credit Balance"
					]
				}
			}
		},
];
