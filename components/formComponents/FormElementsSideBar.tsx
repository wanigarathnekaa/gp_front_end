import React from 'react'
import SideBarBtnElements from './SideBarBtnElements'
import { FormElements } from './FormElements'
import { Separator } from '@radix-ui/react-separator'

function FormElementsSideBar() {
  return (
    <div>
        <p className='text-sm text-foreground/70'>Drag and Drop Elements</p>
        <Separator className='my-2' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center'>
          <p className='text-sm text-muted-foreground col-span-1 md:col-span-2 my-2 place-self-start'>Layout Elements</p>
          <SideBarBtnElements formElement={FormElements.TitleField}/>
          <SideBarBtnElements formElement={FormElements.SubtitleField}/>
          <SideBarBtnElements formElement={FormElements.ParagraphField}/>
          <SideBarBtnElements formElement={FormElements.SeparatorField}/>
          <SideBarBtnElements formElement={FormElements.SpacerField}/>


          <p className='text-sm text-muted-foreground col-span-1 md:col-span-2 my-2 place-self-start'>Form Elements</p>
          <SideBarBtnElements formElement={FormElements.TextField}/>
          <SideBarBtnElements formElement={FormElements.NumberField}/>
          <SideBarBtnElements formElement={FormElements.TextAreaField}/>
          <SideBarBtnElements formElement={FormElements.DateField}/>
          <SideBarBtnElements formElement={FormElements.SelectField}/>
          <SideBarBtnElements formElement={FormElements.CheckboxField}/>
        </div>
    </div>
  )
}

export default FormElementsSideBar