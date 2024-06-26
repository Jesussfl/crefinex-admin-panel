import React from "react";
import { Flex, Link, IconButton, Box, Td, Button, Typography } from "@strapi/design-system";
import { ROUTES } from "../../utils/constants/routes.constants";
import { createColumnHelper } from "@tanstack/react-table";
import { ArrowRight, Trash, Pencil } from "@strapi/icons";
const columnHelper = createColumnHelper();
const defaultColumns = (modalHandler) => {
  return [
    columnHelper.accessor("id", {
      header: "ID",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("content", {
      header: "Contenido JSON",
      cell: (info) => (
        <Td style={{ whiteSpace: "pre-wrap" }}>
          <Typography>{JSON.stringify(info.getValue())}</Typography>
        </Td>
      ),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("order", {
      header: ({ column }) => {
        return (
          <Button variant="tertiary" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Orden
            {column.getIsSorted() === "desc" ? " ↓" : " ↑"}
          </Button>
        );
      },
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("type", {
      header: "Tipo",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("createdAt", {
      header: "Creado",
      cell: (info) => (info.getValue() ? new Date(info.getValue()).toLocaleString() : info.getValue()),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("updatedAt", {
      header: "Actualizado",
      cell: (info) => {
        return info.getValue() ? new Date(info.getValue()).toLocaleString() : info.getValue();
      },
      footer: (info) => info.column.id,
    }),
    columnHelper.display({
      header: "Acciones",
      cell: (info) => (
        <>
          <Flex style={{ justifyContent: "end" }}>
            <Box paddingLeft={1}>
              <IconButton
                onClick={() => modalHandler.open("edit", info.row.original.id, info.row.original)}
                label="Editar"
                noBorder
                icon={<Pencil />}
              />
            </Box>
            <Box paddingLeft={1}>
              <IconButton onClick={() => modalHandler.open("delete", info.row.original.id)} label="Eliminar" noBorder icon={<Trash />} />
            </Box>
          </Flex>
        </>
      ),
    }),
  ];
};

export default defaultColumns;
