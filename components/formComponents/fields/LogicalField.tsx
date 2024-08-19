"use client";

import { LuList } from 'react-icons/lu';
import { ElementsType, FormElement, FormElementInstance, submitFunction } from "../FormElements";
import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { useState, useEffect } from "react";
import useDesigner from "../hooks/useDesigner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { Switch } from "../../ui/switch";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

const type: ElementsType = "LogicalQuestioningField";
const extraAttributes = {
  question: "Choose an option",
  options: [],
  required: false,
};

const propertiesSchema = z.object({
  question: z.string().min(2).max(100),
  options: z.array(z.string()).default([]),
  required: z.boolean().default(false),
});

export const LogicalQuestioningFieldFormElement: FormElement = {
  type,

  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),

  designerBtnElement: {
    icon: LuList,
    label: "Logical Field",
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,
  validate: (formElement: FormElementInstance, currentValue: string): boolean => {
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

function DesignerComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
  const element = elementInstance as customInstance;
  const { question, options, required } = element.extraAttributes;
  const id = `logical-questioning-field-${element.id}`;

  return (
    <div className="grid gap-1.5 leading-none">
      <Label htmlFor={id}>
        {question}
        {required && <span className="text-red-600">*</span>}
      </Label>
      <RadioGroup
        className="flex flex-col space-y-2"
        aria-labelledby={id}
      >
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem id={`${id}-${index}`} value={option} />
            <Label htmlFor={`${id}-${index}`}>{option}</Label>
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
  const [value, setValue] = useState(defaultValue || "");
  const [error, setError] = useState(false);
  // const [nextQuestionId, setNextQuestionId] = useState<string | null>(null);

  useEffect(() => {
    setError(isInvalid === true);
  }, [isInvalid]);

  const { question, required, options } = element.extraAttributes;
  const id = `logical-questioning-field-${element.id}`;

  const handleValueChange = (selectedValue: string) => {
    setValue(selectedValue);
    const selectedOption = options.find(option => option === selectedValue);

    if (!submitValue) return;
    const valid = LogicalQuestioningFieldFormElement.validate(element, selectedValue);
    setError(!valid);
    console.log(element.id, selectedValue);
    submitValue(element.id, selectedValue);
  };

  return (
    <div className="grid gap-1.5 leading-none">
      <Label htmlFor={id} className={cn(error && "border-red-500")}>
        {question}
        {required && <span className="text-red-600">*</span>}
      </Label>
      <RadioGroup
        value={value}
        onValueChange={handleValueChange}
        className="flex flex-col space-y-2"
        aria-labelledby={id}
      >
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem
              id={`${id}-${index}`}
              value={option}
              className={cn(error && "border-red-500")}
            />
            <Label htmlFor={`${id}-${index}`}>{option}</Label>
          </div>
        ))}
      </RadioGroup>

      {/* Render the next question if available
      {nextQuestionId && (
        <div id={`next-question-${nextQuestionId}`}>
          Replace with logic to render the next question based on `nextQuestionId`
        </div>
      )} */}
    </div>
  );
}


function PropertiesComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
  const element = elementInstance as customInstance;
  const { updateElement } = useDesigner();

  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: "onBlur",
    defaultValues: {
      question: element.extraAttributes.question,
      options: element.extraAttributes.options,
      required: element.extraAttributes.required,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: propertiesFormSchemaType) {
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        question: values.question,
        options: values.options,
        required: values.required,
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => e.preventDefault()}
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                  value={field.value}
                />
              </FormControl>
              <FormDescription>
                The question text.
                <br />
                It will be displayed to the user.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator />
        <FormField
          control={form.control}
          name="options"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel>Options</FormLabel>
                <Button 
                  variant={"outline"}
                  className="gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    form.setValue("options", field.value.concat("New Option"));
                  }}
                >
                  <AiOutlinePlus />
                  Add
                </Button>
              </div>

              <div className="flex flex-col gap-2">
                  {form.watch("options").map((option, index) => (
                    <div key={index} className="flex items-center justify-between gap-1">
                      <Input
                        placeholder=""
                        value={option}
                        onChange = {(e) => {
                          field.value[index] = e.target.value;  
                          field.onChange(field.value);
                        }}
                      />
                      <Button 
                        variant={"ghost"}
                        size={"icon"}
                        onClick={(e) => {
                          e.preventDefault();
                          const newOptions = [...field.value];
                          newOptions.splice(index, 1);
                          field.onChange(newOptions);
                        }}
                      >
                        <AiOutlineClose />
                      </Button>

                    </div>
                  ))}
              </div>
              <FormDescription>
                Add Options Here.
                <br />
                It will be displayed below the field.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator />
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
      </form>
    </Form>
  );
}

