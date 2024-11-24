"use client";

import { getFormContent } from "@/actions/form";
import React, { Suspense, useState, useCallback } from "react";
import { Button } from "../ui/button";
import { BsFileEarmarkPlus } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { ImSpinner2 } from "react-icons/im";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useRouter } from "next/router";

export interface Form {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  published: boolean;
  template: boolean;
  visits: number;
  submissions: number;
}

function BulkFormBtn() {
  
  const router = useRouter();
  const [isDialogOpen, setDialogOpen] = useState(true);

  const handleOpenModal = () => {
    
  };

  const handleCloseModal = () => {
    
  };

  const handleCardClick = useCallback((formId: number) => {
    
  }, []);

  const handleChooseClick = async () => {
    
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{"Bulk Form Creation"}</DialogTitle>
          <DialogDescription>
            {"Create multiple forms at once, using the same template."}
            {"Select Cancel Button to create a single form."}
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter>
          <Button>{"Create"}</Button>
          <Button>{"Cancel"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default BulkFormBtn;
