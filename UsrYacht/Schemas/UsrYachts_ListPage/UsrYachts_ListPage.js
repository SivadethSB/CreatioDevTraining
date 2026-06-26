define("UsrYachts_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachts"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"layoutConfig": {
						"width": 285.125
					},
					"rootSchemaName": "UsrYachts"
				}
			},
			{
				"operation": "move",
				"name": "ListContainer",
				"parentName": "ContentContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1,
							"width": 108
						},
						{
							"id": "bad47d89-14fd-32f8-296b-328acd50c15f",
							"code": "PDS_UsrPrice",
							"caption": "#ResourceString(PDS_UsrPrice)#",
							"dataValueType": 32,
							"width": 180
						},
						{
							"id": "c2bce33b-ec6f-45fa-4167-e14c38419da7",
							"code": "PDS_UsrDriveType",
							"caption": "#ResourceString(PDS_UsrDriveType)#",
							"dataValueType": 10,
							"width": 130
						},
						{
							"id": "2855c2b4-2c8b-acaa-569a-7f493a42577d",
							"code": "PDS_UsrStatus",
							"caption": "#ResourceString(PDS_UsrStatus)#",
							"dataValueType": 10,
							"width": 110
						},
						{
							"id": "9ed4e834-defc-2085-161f-fa58a1c98f0d",
							"code": "PDS_UsrPassengersCount",
							"caption": "#ResourceString(PDS_UsrPassengersCount)#",
							"dataValueType": 4,
							"width": 175
						},
						{
							"id": "c20c3917-da40-8bbe-b343-825c3ade0e87",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 129
						}
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"visible": true,
					"activeRow": "$DataTable_ActiveRow",
					"_filterOptions": {
						"from": [
							"Items",
							"DataTable_ActiveRow"
						],
						"expose": [
							{
								"attribute": "DataTable_08f13ac4_ExposeFilter",
								"converters": [
									{
										"converter": "crt.ToValuesFromCollection",
										"args": [
											"Items",
											"Id"
										]
									},
									{
										"converter": "crt.ToInFilter",
										"args": [
											"UsrParentYacht"
										]
									}
								]
							}
						]
					}
				}
			},
			{
				"operation": "move",
				"name": "DataTable",
				"parentName": "ContentContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "UsrYachts",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			},
			{
				"operation": "insert",
				"name": "Label_daz4mhx",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_daz4mhx_caption)#)#",
					"labelType": "headline-1",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Label_m44xgxe",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_m44xgxe_caption)#)#",
					"labelType": "headline-1",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DataGrid_o943zil",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_o943zil",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_o943zilDS_Id",
					"columns": [
						{
							"id": "96534423-b977-6662-26e4-b17bc334abc0",
							"code": "DataGrid_o943zilDS_UsrStartDate",
							"caption": "#ResourceString(DataGrid_o943zilDS_UsrStartDate)#",
							"dataValueType": 8,
							"width": 174
						},
						{
							"id": "eedc81f3-0ab7-c43f-57a3-b676c8f0cddc",
							"code": "DataGrid_o943zilDS_UsrEndDate",
							"caption": "#ResourceString(DataGrid_o943zilDS_UsrEndDate)#",
							"dataValueType": 8,
							"width": 165
						},
						{
							"id": "195445ad-e202-b600-0029-5858a4f8e34a",
							"code": "DataGrid_o943zilDS_UsrComment",
							"caption": "#ResourceString(DataGrid_o943zilDS_UsrComment)#",
							"dataValueType": 28,
							"width": 176
						},
						{
							"id": "9ec6a5e2-ee57-e8d8-b6cd-79e0fb28f9c8",
							"code": "DataGrid_o943zilDS_CreatedOn",
							"caption": "#ResourceString(DataGrid_o943zilDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 174
						}
					],
					"placeholder": false
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DataGrid_o943zil": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_o943zilDS",
							"filterAttributes": [
								{
									"name": "DataTable_08f13ac4_ExposeFilter",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_o943zilDS_UsrStartDate": {
									"modelConfig": {
										"path": "DataGrid_o943zilDS.UsrStartDate"
									}
								},
								"DataGrid_o943zilDS_UsrEndDate": {
									"modelConfig": {
										"path": "DataGrid_o943zilDS.UsrEndDate"
									}
								},
								"DataGrid_o943zilDS_UsrComment": {
									"modelConfig": {
										"path": "DataGrid_o943zilDS.UsrComment"
									}
								},
								"DataGrid_o943zilDS_CreatedOn": {
									"modelConfig": {
										"path": "DataGrid_o943zilDS.CreatedOn"
									}
								},
								"DataGrid_o943zilDS_Id": {
									"modelConfig": {
										"path": "DataGrid_o943zilDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						}
					},
					"PDS_UsrDriveType": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrStatus": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrPassengersCount": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "asc",
							"columnName": "UsrName"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"DataGrid_o943zilDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRental",
							"attributes": {
								"UsrStartDate": {
									"path": "UsrStartDate"
								},
								"UsrEndDate": {
									"path": "UsrEndDate"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrYachts",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"UsrPrice": {
							"path": "UsrPrice"
						},
						"UsrDriveType": {
							"path": "UsrDriveType"
						},
						"UsrStatus": {
							"path": "UsrStatus"
						},
						"UsrPassengersCount": {
							"path": "UsrPassengersCount"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"DataGrid_o943zilDS": [
						{
							"attributePath": "UsrParentYacht",
							"relationPath": "PDS.Id"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});