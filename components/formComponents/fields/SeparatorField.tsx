"use client";

import {
  ElementsType,
  FormElement,
  FormElementInstance,
  submitFunction,
} from "../FormElements";
import { Label } from "../../ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import useDesigner from "../hooks/useDesigner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { RiSeparator } from "react-icons/ri";
import { Separator } from "../../ui/separator";

const type: ElementsType = "SeparatorField";


export const SeparatorFieldFormElement: FormElement = {
  type,

  construct: (id: string) => ({
    id,
    type,
  }),

  designerBtnElement: {
    icon: RiSeparator,
    label: "Separator Field",
  },
  designerComponent: designerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,
  validate: () => true,
};

function designerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label className="text-muted-foreground">
        Separator Field
      </Label>
      <Separator />
    </div>
  );
}

function FormComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return (
    <Separator />
);
}

function PropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return <p>No properties for this element</p>
}


