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

function BulkFormBtn({content}: {content: string;}) {

  const [isDialogOpen, setDialogOpen] = useState(true);

  const singleFormCreation = () => {
    setDialogOpen(false);
    <CreateFormBtnTemplate template={false} content={content} />
  };

  const bulkFormCreation = () => {
    setDialogOpen(false);
    // <CreateFormBtnTemplate template={false} content={content} />
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
          <Button className="w-full mt-4">{"Create"}</Button>
          <Button onClick={singleFormCreation} className="w-full mt-4">{"Cancel"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default BulkFormBtn;
