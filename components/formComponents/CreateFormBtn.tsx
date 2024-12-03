"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
} from "../ui/dialog";
import { BsFileEarmarkPlus } from "react-icons/bs";
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
import { formSchema, formSchematype } from "@/schemas/form";
import { createForm } from "@/actions/form";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { AllCourses } from "@/actions/course";

interface CreateFormBtnProps {
  template: boolean;
}

function CreateFormBtn({ template }: CreateFormBtnProps) {
  const [courses, setCourses] = useState<string[]>([]);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await AllCourses();
        // Transform response to array of strings
        const formattedCourses = response.map(
          (course: { courseCode: string; courseName: string }) =>
            `${course.courseCode} - ${course.courseName}`
        );
        setCourses(formattedCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  console.log(template);
  const router = useRouter();
  const form = useForm<formSchematype>({
    resolver: zodResolver(formSchema),
  });

  console.log("Inside the CreateFormBtn component");
  form.setValue("template", template);
  async function onSubmit(data: formSchematype) {
    try {
      const formId = await createForm(data);
      toast({
        title: "Success",
        description: "Form created successfully",
      });
      router.push(`/Qac/forms/builder/${formId}`);
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong!",
        variant: "destructive",
      });
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="group border border-primary/20 h-[190px] items-center justify-center flex flex-col hover:border-primary hover:cursor-pointer border-dashed gap-4"
        >
          <BsFileEarmarkPlus className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
          <p className="font-bold text-xl text-muted-foreground group-hover:text-primary">
            {!template ? "Create new form" : "Create new template"}
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {!template ? (
            <DialogTitle>Create Form</DialogTitle>
          ) : (
            <DialogTitle>Create template</DialogTitle>
          )}
          {!template ? (
            <DialogDescription>
              Create a new form to start collecting responses.
            </DialogDescription>
          ) : (
            <DialogDescription>
              Create a new template to start creating forms.
            </DialogDescription>
          )}
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            {/* Name Field */}
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

            {/* Description Field */}
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

            {/* Is Related to a Course Field */}
            {!template && (
              <FormField
                control={form.control}
                name="isRelatedToCourse"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Is Related to a Course?</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) =>
                          field.onChange(value === "yes")
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Conditional Course Dropdown */}
            {form.watch("isRelatedToCourse") && (
              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Course</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          const courseCode = value.split(" - ")[0]; 
                          form.setValue("course", courseCode); 
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a course" />
                        </SelectTrigger>
                        <SelectContent>
                          {courses.map((course, index) => (
                            <SelectItem key={index} value={course}>
                              {course}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </form>
        </Form>
        <DialogFooter>
          <Button
            onClick={form.handleSubmit(onSubmit)}
            disabled={form.formState.isSubmitting}
            className="w-full mt-4"
          >
            {!form.formState.isSubmitting && <span>Save</span>}
            {form.formState.isSubmitting && (
              <ImSpinner2 className="animate-spin" />
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFormBtn;
