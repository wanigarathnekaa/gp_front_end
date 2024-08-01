"use client";

import { IoIosRadioButtonOn } from "react-icons/io";
import {
  ElementsType,
  FormElement,
  FormElementInstance,
  submitFunction,
} from "../FormElements";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { z } from "zod";
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
import { Switch } from "../../ui/switch";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";

const type: ElementsType = "RateField";
const extraAttributes = {
  label: "Rate this",
  required: false,
  helperText: "Select a rating",
  scale: 5,
};

const propertiesSchema = z.object({
  label: z.string().min(2).max(100),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
  scale: z.number().min(1).max(20),
});

export const RateFieldFormElement: FormElement = {
  type,

  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),

  designerBtnElement: {
    icon: IoIosRadioButtonOn,
    label: "RateField",
  },
  designerComponent: designerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,
  validate: (
    formElement: FormElementInstance,
    currentValue: string
  ): boolean => {
    const element = formElement as customInstance;
    if (element.extraAttributes.required) {
      return currentValue.length > 0;
    }
    return true;
  },
};

type customInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;

function designerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as customInstance;
  const { label, required, helperText, scale } = element.extraAttributes;
  const id = `rate-field-${element.id}`;

  return (
    <div className="grid gap-1.5 leading-none">
      <Label htmlFor={id}>
        {label}
        {required && <span className="text-red-600">*</span>}
      </Label>
      {helperText && (
        <p className="text-sm text-muted-foreground text-[0.8rem]">
          {helperText}
        </p>
      )}
      <RadioGroup
        className="flex space-x-2"
        aria-labelledby={id}
      >
        {Array.from({ length: scale }, (_, i) => (
          <div key={i + 1} className="flex items-center space-x-2">
            <RadioGroupItem id={`${id}-${i + 1}`} value={`${i + 1}`} />
            <Label htmlFor={`${id}-${i + 1}`}>{i + 1}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

function FormComponent({
  elementInstance,
  submitValue,
  isInvalid,
  defaultValue,
}: {
  elementInstance: FormElementInstance;
  submitValue?: submitFunction;
  isInvalid?: boolean;
  defaultValue?: string;
}) {
  const element = elementInstance as customInstance;
  const [value, setValue] = useState<string>(defaultValue || "");
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(isInvalid === true);
  }, [isInvalid]);

  const { label, required, helperText, scale } = element.extraAttributes;
  const id = `rate-field-${element.id}`;

  return (
    <div className="grid gap-1.5 leading-none">
      <Label htmlFor={id} className={cn(error && "border-red-500")}>
        {label}
        {required && <span className="text-red-600">*</span>}
      </Label>
      {helperText && (
        <p
          className={cn(
            "text-sm text-muted-foreground text-[0.8rem]",
            error && "border-red-500"
          )}
        >
          {helperText}
        </p>
      )}
      <RadioGroup
        value={value}
        onValueChange={(selectedValue) => {
          setValue(selectedValue);
          if (!submitValue) return;
          const valid = RateFieldFormElement.validate(
            element,
            selectedValue
          );
          setError(!valid);
          submitValue(element.id, selectedValue);
        }}
        className="flex space-x-2"
        aria-labelledby={id}
      >
        {Array.from({ length: scale }, (_, i) => (
          <div key={i + 1} className="flex items-center space-x-2">
            <RadioGroupItem
              id={`${id}-${i + 1}`}
              value={`${i + 1}`}
              className={cn(error && "border-red-500")}
            />
            <Label htmlFor={`${id}-${i + 1}`}>{i + 1}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

function PropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as customInstance;
  const { updateElement } = useDesigner();

  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: "onBlur",
    defaultValues: {
      label: element.extraAttributes.label,
      required: element.extraAttributes.required,
      helperText: element.extraAttributes.helperText,
      scale: element.extraAttributes.scale,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: propertiesFormSchemaType) {
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        label: values.label,
        required: values.required,
        helperText: values.helperText,
        scale: values.scale,
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormDescription>
                The label of the field.
                <br />
                It will be displayed above the field.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="helperText"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Helper Text</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormDescription>
                The helper text of the field.
                <br />
                It will be displayed below the field.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="required"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Required</FormLabel>
                <FormDescription>The field must be filled.</FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="scale"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Scale</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min="1"
                  max="20"
                  {...field}
                  onChange={(e) => {
                    const newValue = parseInt(e.target.value, 10);
                    field.onChange(newValue);
                    form.handleSubmit(applyChanges)();
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormDescription>
                Set the maximum rating scale (e.g., 5, 10).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
