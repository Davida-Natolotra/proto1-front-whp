import * as React from "react";
import { DataGrid, frFR, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];
const columns = [
	{
		field: "nomFb",
		headerName: "Nom Facebook",
		flex: 3,
	},
	{
		field: "sexe",
		headerName: "Sexe",
		flex: 1,
	},

	{
		field: "date",
		headerName: "Date de collecte",
		flex: 3,
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
		headerName: "prenomPAX",
		flex: 2,
	},
	{
		field: "cible",
		headerName: "cible",
		flex: 2,
	},
	{
		field: "inputRegion",
		headerName: "Région",
		flex: 2,
	},
	{
		field: "referent",
		headerName: "Référé à",
		flex: 2,
	},
	{
		field: "pSensibilisation",
		headerName: "Page de sensibilisation",
		flex: 3,
	},
	{
		field: "CIU",
		headerName: "CIU",
		flex: 2,
	},
];

export default function BasicExampleDataGrid({ rows }) {
	return (
		<div style={{ height: "100%", width: "100%", margin: 3 }}>
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
		</div>
	);
}
