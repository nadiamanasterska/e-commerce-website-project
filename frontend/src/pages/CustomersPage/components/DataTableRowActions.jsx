/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MoreHorizontal, Pen, Trash } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

import { deleteCustomer, fetchCustomers } from "@/services/customers";
import { useState, useEffect } from "react";

export function DataTableRowActions({ row }) {

  /* const [customers, setCustomers] = useState([])

  useEffect(() => {
    fetchCustomers().then(setCustomers);
  }, []);

  const onCustomerDeleteHandler = async (id) => {
    await deleteCustomer(id);
    fetchCustomers().then(setCustomers);

    toast({
      title: "Customer deleted.",
      description: "We've deleted a customer for you.",
      status: "success",
      duration: 3000,
      position: "top-right",
    });
  }; */

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>
          <Pen className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem >
          <Trash className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" onClick={() => onCustomerDeleteHandler(student.id)}/>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
