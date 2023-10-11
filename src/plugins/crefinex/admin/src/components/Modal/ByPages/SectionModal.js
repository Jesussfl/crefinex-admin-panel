import React, { forwardRef, useState } from "react";
import CustomModal from "../CustomModal";
import { TextInput, SingleSelect, SingleSelectOption } from "@strapi/design-system";
import { Controller } from "react-hook-form";
import { useCustomMutation, useModal } from "../../../utils";

import { useQuery } from "@tanstack/react-query";
import { queryWorlds } from "../../../graphql/queries/world.queries";
import { query } from "../../../graphql/client/GraphQLCLient";
import { QUERY_KEYS } from "../../../constants/queryKeys.constants";
import Wysiwyg from "../../Wysiwyg/Wysiwyg";

const ORDER_INPUTS_TO_SHOW = 20;
const MAX_DESCRIPTION_LENGTH = 100;
const MAX_WYSIWYG_LENGTH = 1000;
export default function ModuleModal({ mainAction }) {
  const { idToEdit: editId, setIdToEdit, dataToEdit: defaultValues, setDataToEdit, setShowModal } = useModal();
  const { control, mutate, handleSubmit } = useCustomMutation(QUERY_KEYS.modules, mainAction, defaultValues);
  const { data, isLoading, error } = useQuery([QUERY_KEYS.worlds], () => query(queryWorlds));

  const onSubmit = handleSubmit((values) => {
    const data = {
      description: values.description,
      order: parseFloat(values.order),
      world: values.world,
      content: values.content,
      contentTitle: values.contentTitle,
      publishedAt: new Date(),
    };

    editId ? mutate({ id: editId, data: { ...data } }) : mutate({ data: { ...data } });
    setDataToEdit(null);
    setIdToEdit(null);
    setShowModal(false);
  });

  return (
    <CustomModal handleSubmit={onSubmit} setIdToEdit={setIdToEdit}>
      <TextInputControlled
        name="description"
        control={control}
        rules={{
          required: "Este campo es obligatorio",
          maxLength: { value: MAX_DESCRIPTION_LENGTH, message: `Máximo ${MAX_DESCRIPTION_LENGTH} caracteres` },
          minLength: { value: 2, message: "Mínimo 2 caracteres" },
          pattern: { value: /^[a-zA-Z0-9\s]+$/, message: "Solo letras y números" },
        }}
        label="Descripción"
        placeholder="Añade una descripción"
      />
      {isLoading && !error ? null : (
        <SingleSelectControlled
          name="world"
          control={control}
          rules={{ required: "Este campo es obligatorio" }}
          data={data?.crefinexWorlds?.data}
        />
      )}

      <OrderSelectionControlled name="order" control={control} rules={{ required: "Este campo es obligatorio" }} />
      <TextInputControlled
        name="contentTitle"
        control={control}
        rules={{
          required: "Este campo es obligatorio",
          maxLength: { value: MAX_DESCRIPTION_LENGTH, message: `Máximo ${MAX_DESCRIPTION_LENGTH} caracteres` },
          minLength: { value: 2, message: "Mínimo 2 caracteres" },
          pattern: { value: /^[a-zA-Z0-9\s]+$/, message: "Solo letras y números" },
        }}
        label="Título del contenido de la sección"
        placeholder="Añade un titulo interesante"
      />
      <WysiwygControlled
        name="content"
        displayName="Contenido de la teoría"
        control={control}
        rules={{
          required: "Este campo es obligatorio",
          maxLength: { value: MAX_WYSIWYG_LENGTH, message: `Máximo ${MAX_WYSIWYG_LENGTH} caracteres` },
          minLength: { value: 100, message: "El contenido es muy corto" },
        }}
      />
    </CustomModal>
  );
}

const TextInputControlled = forwardRef(({ name, control, rules, placeholder, label }, ref) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState }) => (
        <TextInput
          onChange={(e) => {
            const newValue = e.target.value;
            // Verificar la longitud del valor y truncarlo si es necesario
            if (newValue.length <= MAX_DESCRIPTION_LENGTH) {
              setInputValue(newValue);
              onChange(newValue);
            }
          }}
          onBlur={onBlur}
          value={inputValue || value}
          ref={ref}
          placeholder={placeholder}
          label={label}
          hint={`${MAX_DESCRIPTION_LENGTH} carácteres como máximo`}
          error={fieldState.error?.message}
        />
      )}
    />
  );
});
const SingleSelectControlled = forwardRef(({ name, control, rules, data }, ref) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { onChange, onBlur, value }, fieldState }) => (
      <SingleSelect
        onChange={onChange}
        onBlur={onBlur}
        value={value || ""}
        ref={ref}
        placeholder="Selecciona el mundo de la sección"
        label="Mundo"
        error={fieldState.error?.message}
      >
        {data.map((world) => (
          <SingleSelectOption key={world.id} value={world.id}>{`${world.id} - ${world.attributes.name}`}</SingleSelectOption>
        ))}
      </SingleSelect>
    )}
  />
));
const OrderSelectionControlled = forwardRef(({ name, control, rules }, ref) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { onChange, onBlur, value }, fieldState }) => (
      <SingleSelect
        onChange={onChange}
        onBlur={onBlur}
        value={value || ""}
        ref={ref}
        placeholder="Selecciona el orden"
        label="Orden"
        error={fieldState.error?.message}
      >
        {Array(ORDER_INPUTS_TO_SHOW)
          .fill(0)
          .map((_, index) => (
            <SingleSelectOption key={index} value={index + 1}>
              {index + 1}
            </SingleSelectOption>
          ))}
      </SingleSelect>
    )}
  />
));
const WysiwygControlled = forwardRef(({ name, control, rules, displayName }, ref) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { onChange, onBlur, value }, fieldState }) => (
      <>
        <Wysiwyg
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
          displayName={displayName}
          error={fieldState.error?.message}
        />
      </>
    )}
  />
));
