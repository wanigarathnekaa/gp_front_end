"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { FormElementInstance } from "../FormElements";

type DesignerContextType = {
  elements: FormElementInstance[];
  setElements: Dispatch<SetStateAction<FormElementInstance[]>>;
  addElement: (index: number, element: FormElementInstance) => void;
  removeElement: (id: string) => void;

  selectedElement: FormElementInstance | null;
  setSelectedElement: Dispatch<SetStateAction<FormElementInstance | null>>;

  updateElement: (id: string, element: FormElementInstance) => void;
};

export const DesignerContext = createContext<DesignerContextType | null>(null);

export default function DesignerContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [elements, setElements] = useState<FormElementInstance[]>([]);
  const [selectedElement, setSelectedElement] =
    useState<FormElementInstance | null>(null);

  const addElement = (index: number, element: FormElementInstance) => {
    console.log("addElement", index, element);
    setElements((prevElements) => {
      console.log("Previous Elements:", prevElements);

      if (prevElements === null || prevElements === undefined) {
        console.error("prevElements is not an array", prevElements);
        prevElements = [];
      }

      const newElements = [...prevElements];
      newElements.splice(index, 0, element);
      console.log("New Elements after Add:", newElements);
      return newElements;
    });
  };

  const removeElement = (id: string) => {
    setElements((prevElements) => {
      const removeWithChildren = (
        elementId: string,
        elements: FormElementInstance[]
      ) => {
        const filteredElements = elements.filter(
          (element) => element.id !== elementId
        );

        return filteredElements.filter((element) => {
          if (element.parent === elementId) {
            return false;
          }
          return true;
        });
      };

      return removeWithChildren(id, prevElements);
    });
  };

  const updateElement = (id: string, element: FormElementInstance) => {
    setElements((prevElements) => {
      const newElements = [...prevElements];
      const index = newElements.findIndex((element) => element.id === id);
      newElements[index] = element;
      return newElements;
    });
  };

  return (
    <DesignerContext.Provider
      value={{
        elements,
        addElement,
        setElements,
        removeElement,
        selectedElement,
        setSelectedElement,
        updateElement,
      }}
    >
      {children}
    </DesignerContext.Provider>
  );
}
