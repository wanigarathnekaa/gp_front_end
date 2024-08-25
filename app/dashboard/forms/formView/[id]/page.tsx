import { getFormById, getFormWithSubmissions } from "@/actions/form";
import FormLinkShare from "@/components/formComponents/FormLinkShare";
import VisitBtn from "@/components/formComponents/VisitBtn";
import React, { ReactNode } from "react";
import { StatCard } from "../../page";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";
import {
  ElementsType,
  FormElementInstance,
} from "@/components/formComponents/FormElements";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { format, formatDistance } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

async function FormDetailPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const form = await getFormById(id);
  console.log(form);
  if (!form) {
    throw new Error("form not found");
  }

  const { visits, submissions } = form;

  let submissionRate = 0;

  if (visits > 0) {
    submissionRate = (submissions / visits) * 100;
  }

  const bounceRate = 100 - submissionRate;

  return (
    <div className="ml-64 px-8 h-fit bg-[#FFFFFF] py-10">
      <div className="py-8 border-b border-gray-400">
        <div className="flex justify-between container">
          <h1 className="text-4xl font-bold truncate">{form.name}</h1>
          <VisitBtn shareUrl={form.shareURL} />
        </div>
      </div>
      <div className="py-6 border-b border-muted container">
        <div className=" flex gap-2 items-center justify-between">
          <FormLinkShare shareUrl={form.shareURL} />
        </div>
      </div>
      <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container">
        <StatCard
          title="Total Visits"
          icon={<LuView className="text-blue-600" />}
          helperText="All time form Visits"
          value={visits.toLocaleString() || ""}
          loading={false}
          className="shadow-xl border-none"
        />

        <StatCard
          title="Total Submissions"
          icon={<FaWpforms className="text-yellow-600" />}
          helperText="All time form Submissions"
          value={submissions.toLocaleString() || ""}
          loading={false}
          className="shadow-xl border-none"
        />

        <StatCard
          title="Submission Rate"
          icon={<HiCursorClick className="text-green-600" />}
          helperText="Visits that results in form submission"
          value={submissionRate.toLocaleString() + "%" || ""}
          loading={false}
          className="shadow-xl border-none"
        />

        <StatCard
          title="Bounce Rate"
          icon={<TbArrowBounce className="text-red-600" />}
          helperText="Visits that leaves without submitting form"
          value={bounceRate.toLocaleString() + "%" || ""}
          loading={false}
          className="shadow-xl border-none"
        />
      </div>
      <div className="container pt-10">
        <SubmissionsTable id={form.id} />
      </div>
    </div>
  );
}

export default FormDetailPage;

type Row = { [key: string]: string } & { submittedAt: Date };

async function SubmissionsTable({ id }: { id: number }) {
  
  const formSubmission = await getFormWithSubmissions(id.toString());
  const form = await getFormById(id.toString());

  if (!form) {
    throw new Error("form not found");
  }

  if(form.content === undefined || form.content === null) {
    return <div>Form content is missing</div>;
  }

  const formElements = JSON.parse(form.content) as FormElementInstance[];
  const columns: {
    id: string;
    label: string;
    required: boolean;
    type: ElementsType;
  }[] = [];

  formElements.forEach((element) => {
    switch (element.type) {
      case "TextField":
      case "NumberField":
      case "TextAreaField":
      case "DateField":
      case "SelectField":
      case "CheckboxField":
      case "MultipleOptionField":
        columns.push({
          id: element.id,
          label: element.extraAttributes?.label,
          required: element.extraAttributes?.required,
          type: element.type,
        });
        break;
      default:
        break;
    }
  });

  const rows: Row[] = [];
  if (Array.isArray(formSubmission)) {
    formSubmission.forEach((submission: Row) => {
      const content = JSON.parse(submission.content);
      rows.push({
        ...content,
        submittedAt: submission.createdAt,
      });
    });
  } else {
    console.error(
      "form.FormSubmissions is not an array:",
      formSubmission
    );
  }

  return (
    <>
      <h1 className="text-2xl font-bold my-4">Submissions</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.id} className="uppercase">
                  {column.label}
                </TableHead>
              ))}
              <TableHead className="text-muted-foreground text-right uppercase">
                Submitted at
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <RowCell
                    key={column.id}
                    type={column.type}
                    value={row[column.id]}
                  />
                ))}
                <TableCell className="text-muted-foreground text-right">
                  {formatDistance(row.submittedAt, new Date(), {
                    addSuffix: true,
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

function RowCell({ type, value }: { type: ElementsType; value: string }) {
  let node: ReactNode = value;

  switch (type) {
    case "DateField":
      if (!value) break;
      const date = new Date(value);
      node = <Badge variant={"outline"}>{format(date, "dd/MM/yyyy")}</Badge>;
      break;
    case "CheckboxField":
      const checked = value === "true";
      node = <Checkbox checked={checked} disabled></Checkbox>;
      break;
  }
  return <TableCell>{node}</TableCell>;
}
