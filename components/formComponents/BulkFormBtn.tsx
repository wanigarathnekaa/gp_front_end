"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
} from "../ui/dialog";
import CreateFormBtnTemplate from "./CreateFormBtnTemplate";
import BulkFormCard from "../BulkFormCard";

function BulkFormBtn({ content }: { content: string }) {
  const [isDialogOpen, setDialogOpen] = useState(true);
  const [view, setView] = useState<"dialog" | "singleForm" | "bulkForm">("dialog");

  const singleFormCreation = () => {
    setDialogOpen(false); // Close the dialog
    setView("singleForm"); // Switch to single form view
  };

  const bulkFormCreation = () => {
    setDialogOpen(false); // Close the dialog
    setView("bulkForm"); // Switch to bulk form view
  };

  if (view === "singleForm") {
    return <CreateFormBtnTemplate template={false} content={content} />;
  }

  if (view === "bulkForm") {
    return <BulkFormCard content={content} />;
  }

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
          <Button onClick={bulkFormCreation} className="w-full mt-4">
            {"Create"}
          </Button>
          <Button onClick={singleFormCreation} className="w-full mt-4">
            {"Cancel"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default BulkFormBtn;
