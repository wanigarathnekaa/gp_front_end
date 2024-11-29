"use client";

import React, { useState, useEffect, use } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
  DialogFooter,
} from "../ui/dialog";
import { ImSpinner2 } from "react-icons/im";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "../ui/use-toast";
import { templateFormSchema, templateFormSchemaType } from "@/schemas/form";
import { createFormTemplate } from "@/actions/form";
import { useRouter } from "next/navigation";

function CreateFormBtnTemplate({
  template,
  content,
}: {
  template: boolean;
  content: string;
}) {
  const router = useRouter();
  const [isDialogOpen, setDialogOpen] = useState(true);

  const form = useForm<templateFormSchemaType>({
    resolver: zodResolver(templateFormSchema),
    defaultValues: {
      name: "",
      description: "",
      template,
      content,
    },
  });

  useEffect(() => {
    // Update form values when props change
    form.setValue("template", template);
    form.setValue("content", JSON.stringify(content));
  }, []);

  console.log(form.getValues());

  async function onSubmit() {
    let data=form.getValues();
    console.log("Inside onSubmit function");
    console.log("Submitting form data:", data);
    try {
      const formId = await createFormTemplate(data);
      console.log("Form created with ID:", formId); // Log the form ID
      toast({
        title: "Success",
        description: "Form created successfully",
      });
      setDialogOpen(false);
      router.push(`/dashboard/forms/builder/${formId}`);
    } catch (error) {
      console.error("Error creating form:", error); // Log any errors
      toast({
        title: "Error",
        description: "Something went wrong!",
        variant: "destructive",
      });
    }
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{!template ? "Create Form" : "Create Template"}</DialogTitle>
          <DialogDescription>
            {!template
              ? "Create a new form to start collecting responses."
              : "Create a new template for your forms."}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form  className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button
            onClick={onSubmit}
            disabled={form.formState.isSubmitting}
            className="w-full mt-4"
          >
            {!form.formState.isSubmitting ? "Save" : <ImSpinner2 className="animate-spin" />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFormBtnTemplate;
