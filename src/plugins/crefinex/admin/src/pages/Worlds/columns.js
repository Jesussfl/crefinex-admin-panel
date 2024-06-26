import React from "react";
import { Flex, Link, IconButton, Box, Button } from "@strapi/design-system";
import { ROUTES } from "../../utils/constants/routes.constants";
import { createColumnHelper } from "@tanstack/react-table";
import { ArrowRight, Trash, Pencil, CheckCircle, Archive } from "@strapi/icons";

const columnHelper = createColumnHelper();
const defaultColumns = (modalHandler) => {
  return [
    columnHelper.accessor("id", {
      header: "ID",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("name", {
      header: "Nombre",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("image.data.attributes.url", {
      header: "Nombre",
      cell: (info) => {
        return <img src={info.getValue()} style={{ width: "72px", height: "72px", objectFit: "cover", borderRadius: "50%" }} />;
      },
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

    columnHelper.accessor("status", {
      header: "Estado",
      cell: (info) => {
        console.log(info.getValue());
        return info.getValue() === "published" ? (
          <Flex gap={1}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "green" }} color="success" /> Publicado
          </Flex>
        ) : (
          <Flex gap={1}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "gray" }} color="gray" /> En borrador
          </Flex>
        );
      },
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
            <Link to={ROUTES.SECTIONS(info.row.original.id)}>
              <IconButton label="Go to Sections" noBorder icon={<ArrowRight />} />
            </Link>
            <Box paddingLeft={1}>
              <IconButton
                onClick={() =>
                  modalHandler.open("edit", info.row.original.id, { ...info.row.original, image: info.row.original?.image?.data?.id })
                }
                label="Editar"
                noBorder
                icon={<Pencil />}
              />
            </Box>
            <Box paddingLeft={1}>
              <IconButton
                onClick={() => modalHandler.open("status", info.row.original.id, info.row.original.status)}
                label="Publicar"
                noBorder
                icon={<CheckCircle />}
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
