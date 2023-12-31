import React from "react";
import { Box, Flex, Typography, Tbody, Tr, Td, IconButton, Link } from "@strapi/design-system";
import { SimpleMenu, MenuItem } from "@strapi/design-system/v2";
import { ArrowRight, Trash, Pencil } from "@strapi/icons";
import { NavLink } from "react-router-dom";
import { useModal } from "../../../utils/contexts/ModalContext";
import { ROUTES } from "../../../utils/constants/routes.constants";
import { formatReadableDate } from "../../../utils/helpers/formatReadableDate";
export function SectionRows({ data }) {
  const { modalHandler } = useModal();
  return (
    <Tbody>
      {data.map((row) => {
        const attributes = row.attributes;
        return (
          <Tr key={row.id}>
            <Td>
              <Typography textColor="neutral800">{row.id}</Typography>
            </Td>
            <Td>
              <Typography textColor="neutral800">{attributes.description}</Typography>
            </Td>
            <Td>
              <Typography textColor="neutral800">{attributes.order}</Typography>
            </Td>
            <Td>
              <Typography textColor="neutral800">{formatReadableDate(attributes.createdAt)}</Typography>
            </Td>
            <Td>
              <Typography textColor="neutral800">{formatReadableDate(attributes.updatedAt)}</Typography>
            </Td>
            <Td>
              <Typography textColor="neutral800">{formatReadableDate(attributes.publishedAt)}</Typography>
            </Td>
            <Td>
              <SimpleMenu label={attributes.lessons.data.length}>
                {attributes.lessons.data.map((lesson) => (
                  <MenuItem
                    as={NavLink}
                    key={lesson.id}
                    to={ROUTES.EXERCISE(lesson.id)}
                  >{`${lesson.attributes.description} - ${lesson.attributes.order}`}</MenuItem>
                ))}
              </SimpleMenu>
            </Td>
            <Td>
              <Typography textColor="neutral800">{attributes.world.data?.attributes?.name || ""}</Typography>
            </Td>
            <Td>
              <Flex style={{ justifyContent: "end" }}>
                <Link to={ROUTES.LESSON(row.id)}>
                  <IconButton label="Go to Lessons" noBorder icon={<ArrowRight />} />
                </Link>
                <Box paddingLeft={1}>
                  <IconButton
                    onClick={() => {
                      modalHandler.open("edit", row.id, { ...attributes, world: attributes.world.data.id });
                    }}
                    label="Editar"
                    noBorder
                    icon={<Pencil />}
                  />
                </Box>
                <Box paddingLeft={1}>
                  <IconButton onClick={() => modalHandler.open("delete", row.id)} label="Eliminar" noBorder icon={<Trash />} />
                </Box>
              </Flex>
            </Td>
          </Tr>
        );
      })}
    </Tbody>
  );
}
