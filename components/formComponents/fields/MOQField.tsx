"use client";

import { RiCheckboxMultipleLine } from "react-icons/ri";
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
import { Checkbox } from "../../ui/checkbox";
import { Button } from "@/components/ui/button";

const type: ElementsType = "MultipleOptionField";
const extraAttributes = {
  label: "Multiple Option Question",
  required: false,
  helperText: "helper text",
  options: ["Option 1", "Option 2"],
};

const propertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
  options: z.array(z.string()).min(2), // At least two options are required
});

export const MultipleOptionFieldFormElement: FormElement = {
  type,

  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),

  designerBtnElement: {
    icon: RiCheckboxMultipleLine,
    label: "Multiple-OptionField",
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
  const { label, required, helperText, options } = element.extraAttributes;
  const id = `multiple-option-${element.id}`;

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
      {options.map((option, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Checkbox id={`${id}-${index}`} />
          <Label htmlFor={`${id}-${index}`}>{option}</Label>
        </div>
      ))}
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
  const [values, setValues] = useState<string>(defaultValue || "");
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(isInvalid === true);
  }, [isInvalid]);

  const { label, required, helperText, options } = element.extraAttributes;
  const id = `multiple-option-${element.id}`;

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
      {options.map((option, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Checkbox
            id={`${id}-${index}`}
            checked={values.includes(option)}
            className={cn(error && "border-red-500")}
            onCheckedChange={(checked) => {
              const updatedValues = checked
                ? [values, option]
                : values !== option;

              setValues(
                Array.isArray(updatedValues) ? updatedValues.join(", ") : ""
              );
              if (!submitValue) return;
              const valid = MultipleOptionFieldFormElement.validate(
                element,
                updatedValues.toString()
              );
              setError(!valid);
              submitValue(element.id, updatedValues.toString());
            }}
          />
          <Label htmlFor={`${id}-${index}`}>{option}</Label>
        </div>
      ))}
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
      options: element.extraAttributes.options,
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
        options: values.options,
      },
    });
  }

  const [optionInput, setOptionInput] = useState("");

  function addOption() {
    const options = form.getValues("options");
    if (optionInput.trim() && !options.includes(optionInput.trim())) {
      const updatedOptions = [...options, optionInput.trim()];
      form.setValue("options", updatedOptions);
      applyChanges({ ...form.getValues(), options: updatedOptions });
      setOptionInput("");
    }
  }

  function removeOption(option: string) {
    const options = form.getValues("options");
    const updatedOptions = options.filter((opt) => opt !== option);
    form.setValue("options", updatedOptions);
    applyChanges({ ...form.getValues(), options: updatedOptions });
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
                    if (e.key === "Enter") e.currentTarget.blur;
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
          name="options"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Options</FormLabel>
              <FormControl>
                <div className="space-y-2">
                  {field.value.map((option, index) => (
                    <div key={index} className="flex space-x-2">
                      <Input
                        value={option}
                        onChange={(e) => {
                          const updatedOptions = [...field.value];
                          updatedOptions[index] = e.target.value;
                          field.onChange(updatedOptions);
                        }}
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => {
                          const updatedOptions = field.value.filter(
                            (_, i) => i !== index
                          );
                          field.onChange(updatedOptions);
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                  <div className="flex space-x-2">
                    <Input
                      value={optionInput}
                      onChange={(e) => setOptionInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          if (optionInput.trim()) {
                            field.onChange([
                              ...field.value,
                              optionInput.trim(),
                            ]);
                            setOptionInput("");
                          }
                        }
                      }}
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        if (optionInput.trim()) {
                          field.onChange([...field.value, optionInput.trim()]);
                          setOptionInput("");
                        }
                      }}
                    >
                      Add Option
                    </Button>
                  </div>
                </div>
              </FormControl>
              <FormDescription>
                Add options using the input field and buttons.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
