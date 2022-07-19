import * as React from "react";
import { DataGrid, frFR, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const columns = [
	{
		field: "nomFb",
		headerName: "Nom Facebook",
		flex: 3,
		minWidth: 180,
	},
	{
		field: "sexe",
		headerName: "Sexe",
		flex: 1,
		minWidth: 100,
	},

	{
		field: "date",
		headerName: "Date de collecte",
		flex: 3,
		minWidth: 180,
		sortable: true,

		valueFormatter: (params) =>
			new Date(params?.value).toLocaleDateString("fr-fr", {
				year: "numeric",
				month: "long",
				day: "numeric",
			}),
	},
	{
		field: "prenomPAX",
		headerName: "Prénom PAX",
		minWidth: 180,
		flex: 2,
	},
	{
		field: "cible",
		headerName: "Cible",
		flex: 2,
		minWidth: 120,
	},
	{
		field: "inputRegion",
		headerName: "Région",
		flex: 2,
		minWidth: 180,
	},
	{
		field: "referent",
		headerName: "Référé à",
		flex: 2,
		minWidth: 180,
	},
	{
		field: "pSensibilisation",
		headerName: "Page de sensibilisation",
		flex: 3,
		minWidth: 200,
	},
	{
		field: "CIU",
		headerName: "CIU",
		flex: 2,
		minWidth: 180,
	},
];

export default function BasicExampleDataGrid({ rows }) {
	return (
		<Box style={{ height: "100%", width: "auto" }}>
			<DataGrid
				checkboxSelection
				disableSelectionOnClick
				localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
				components={{
					Toolbar: GridToolbar,
				}}
				columns={columns}
				rows={rows}
			/>
		</Box>
	);
}
