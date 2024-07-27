import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core'
import React, { useState } from 'react'
import { ElementsType, FormElements } from './FormElements';
import { SideBarBtnElementsDragOverlay } from './SideBarBtnElements';
import useDesigner from './hooks/useDesigner';

function DragOverlayWrapper() {
  const { elements } = useDesigner();
  const [DraggedItem, setDraggedItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragEnd: (event) => {
      setDraggedItem(null);
    },
    onDragCancel: (event) => {
        setDraggedItem(null);
    },
  
  });

  if(!DraggedItem) return null;

  let node = <div>No Drag Component</div>;
  const isSideBarBtnElements = DraggedItem?.data?.current?.isDesignerBtnElement;

  if(isSideBarBtnElements){
    const type = DraggedItem?.data?.current?.type as ElementsType;
    node = <SideBarBtnElementsDragOverlay formElement={FormElements[type]}/> ;
  }

  const isDesignerElementDragHandler = DraggedItem?.data?.current?.isDesignerElementDragHandler;

  if(isDesignerElementDragHandler){
    const elementId = DraggedItem?.data?.current?.elementId;
    const element = elements.find((element) => element.id === elementId);
    if (!element) node = <div>Element not found!</div>;
    else {
      const DesignerElementComponent = FormElements[element.type].designerComponent;
      node = (
        <div className="flex bg-accent border rounded-md h-[120px] w-full py-2 px-4 opacity-80 pointer pointer-events-none">
          <DesignerElementComponent elementInstance={element} />
        </div>
      );    }
  }

  return (
    <DragOverlay>{node}</DragOverlay>
  );
}

export default DragOverlayWrapper