"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
} from "./ui/dialog";
import BulkFormEnrollCard from "./BulkFormEnrollmentCard";

function BulkFormCard({content}: {content: string;}) {

  const [isDialogOpen, setDialogOpen] = useState(true);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{"Bulk Form Creation"}</DialogTitle>
          <DialogDescription>
            {"Upload a .csv file with name and description columns to create multiple forms at once."}
            {"Select Cancel Button to create a single form."}
          </DialogDescription>
        </DialogHeader>
        <BulkFormEnrollCard content={content} />
      </DialogContent>
    </Dialog>
  );
}

export default BulkFormCard;
