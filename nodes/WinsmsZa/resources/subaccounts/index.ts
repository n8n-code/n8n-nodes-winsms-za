import type { INodeProperties } from 'n8n-workflow';

export const subaccountsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccounts"
					]
				}
			},
			"options": [
				{
					"name": "Get Sub Accounts",
					"value": "Get Sub Accounts",
					"action": "Get a list of all Sub Accounts.",
					"description": "Get a list of all the Sub Accounts owned by the Main Account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subaccounts"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /subaccounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccounts"
					],
					"operation": [
						"Get Sub Accounts"
					]
				}
			}
		},
];
