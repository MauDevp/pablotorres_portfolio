"use client"

import dynamic from 'next/dynamic'
import { ComponentProps } from 'react'

// Loading fallback for Radix components
const RadixLoading = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-muted rounded-md h-10 w-full ${className}`} />
)

// Dynamically import Radix UI components
export const DynamicTabs = dynamic(() => import('@/components/ui/tabs').then(mod => ({ default: mod.Tabs })), {
  loading: () => <RadixLoading className="h-12" />,
  ssr: false
})

export const DynamicTabsContent = dynamic(() => import('@/components/ui/tabs').then(mod => ({ default: mod.TabsContent })), {
  loading: () => <RadixLoading className="h-48" />,
  ssr: false
})

export const DynamicTabsList = dynamic(() => import('@/components/ui/tabs').then(mod => ({ default: mod.TabsList })), {
  loading: () => <RadixLoading className="h-12" />,
  ssr: false
})

export const DynamicTabsTrigger = dynamic(() => import('@/components/ui/tabs').then(mod => ({ default: mod.TabsTrigger })), {
  loading: () => <RadixLoading className="h-10 w-24" />,
  ssr: false
})

export const DynamicDialog = dynamic(() => import('@/components/ui/dialog').then(mod => ({ default: mod.Dialog })), {
  loading: () => <RadixLoading className="h-96 w-96" />,
  ssr: false
})

export const DynamicDialogContent = dynamic(() => import('@/components/ui/dialog').then(mod => ({ default: mod.DialogContent })), {
  loading: () => <RadixLoading className="h-96 w-96" />,
  ssr: false
})

export const DynamicDialogHeader = dynamic(() => import('@/components/ui/dialog').then(mod => ({ default: mod.DialogHeader })), {
  loading: () => <RadixLoading className="h-12" />,
  ssr: false
})

export const DynamicDialogTitle = dynamic(() => import('@/components/ui/dialog').then(mod => ({ default: mod.DialogTitle })), {
  loading: () => <RadixLoading className="h-6" />,
  ssr: false
})

export const DynamicDialogDescription = dynamic(() => import('@/components/ui/dialog').then(mod => ({ default: mod.DialogDescription })), {
  loading: () => <RadixLoading className="h-4" />,
  ssr: false
})

export const DynamicAccordion = dynamic(() => import('@/components/ui/accordion').then(mod => ({ default: mod.Accordion })), {
  loading: () => <RadixLoading className="h-32" />,
  ssr: false
})

export const DynamicAccordionItem = dynamic(() => import('@/components/ui/accordion').then(mod => ({ default: mod.AccordionItem })), {
  loading: () => <RadixLoading className="h-12" />,
  ssr: false
})

export const DynamicAccordionTrigger = dynamic(() => import('@/components/ui/accordion').then(mod => ({ default: mod.AccordionTrigger })), {
  loading: () => <RadixLoading className="h-12" />,
  ssr: false
})

export const DynamicAccordionContent = dynamic(() => import('@/components/ui/accordion').then(mod => ({ default: mod.AccordionContent })), {
  loading: () => <RadixLoading className="h-24" />,
  ssr: false
})

export const DynamicSelect = dynamic(() => import('@/components/ui/select').then(mod => ({ default: mod.Select })), {
  loading: () => <RadixLoading className="h-10" />,
  ssr: false
})

export const DynamicSelectContent = dynamic(() => import('@/components/ui/select').then(mod => ({ default: mod.SelectContent })), {
  loading: () => <RadixLoading className="h-32" />,
  ssr: false
})

export const DynamicSelectItem = dynamic(() => import('@/components/ui/select').then(mod => ({ default: mod.SelectItem })), {
  loading: () => <RadixLoading className="h-8" />,
  ssr: false
})

export const DynamicSelectTrigger = dynamic(() => import('@/components/ui/select').then(mod => ({ default: mod.SelectTrigger })), {
  loading: () => <RadixLoading className="h-10" />,
  ssr: false
})

export const DynamicSelectValue = dynamic(() => import('@/components/ui/select').then(mod => ({ default: mod.SelectValue })), {
  loading: () => <RadixLoading className="h-6" />,
  ssr: false
})

export const DynamicDropdownMenu = dynamic(() => import('@/components/ui/dropdown-menu').then(mod => ({ default: mod.DropdownMenu })), {
  loading: () => <RadixLoading className="h-32 w-48" />,
  ssr: false
})

export const DynamicDropdownMenuContent = dynamic(() => import('@/components/ui/dropdown-menu').then(mod => ({ default: mod.DropdownMenuContent })), {
  loading: () => <RadixLoading className="h-32 w-48" />,
  ssr: false
})

export const DynamicDropdownMenuItem = dynamic(() => import('@/components/ui/dropdown-menu').then(mod => ({ default: mod.DropdownMenuItem })), {
  loading: () => <RadixLoading className="h-8 w-32" />,
  ssr: false
})

export const DynamicDropdownMenuTrigger = dynamic(() => import('@/components/ui/dropdown-menu').then(mod => ({ default: mod.DropdownMenuTrigger })), {
  loading: () => <RadixLoading className="h-10 w-24" />,
  ssr: false
})

export const DynamicPopover = dynamic(() => import('@/components/ui/popover').then(mod => ({ default: mod.Popover })), {
  loading: () => <RadixLoading className="h-32 w-48" />,
  ssr: false
})

export const DynamicPopoverContent = dynamic(() => import('@/components/ui/popover').then(mod => ({ default: mod.PopoverContent })), {
  loading: () => <RadixLoading className="h-32 w-48" />,
  ssr: false
})

export const DynamicPopoverTrigger = dynamic(() => import('@/components/ui/popover').then(mod => ({ default: mod.PopoverTrigger })), {
  loading: () => <RadixLoading className="h-10 w-24" />,
  ssr: false
})

export const DynamicTooltip = dynamic(() => import('@/components/ui/tooltip').then(mod => ({ default: mod.Tooltip })), {
  loading: () => <RadixLoading className="h-8 w-24" />,
  ssr: false
})

export const DynamicTooltipContent = dynamic(() => import('@/components/ui/tooltip').then(mod => ({ default: mod.TooltipContent })), {
  loading: () => <RadixLoading className="h-8 w-24" />,
  ssr: false
})

export const DynamicTooltipProvider = dynamic(() => import('@/components/ui/tooltip').then(mod => ({ default: mod.TooltipProvider })), {
  loading: () => <div className="contents" />,
  ssr: false
})

export const DynamicTooltipTrigger = dynamic(() => import('@/components/ui/tooltip').then(mod => ({ default: mod.TooltipTrigger })), {
  loading: () => <RadixLoading className="h-10 w-24" />,
  ssr: false
})

// Export types for the dynamic components
export type DynamicTabsProps = ComponentProps<typeof DynamicTabs>
export type DynamicTabsContentProps = ComponentProps<typeof DynamicTabsContent>
export type DynamicTabsListProps = ComponentProps<typeof DynamicTabsList>
export type DynamicTabsTriggerProps = ComponentProps<typeof DynamicTabsTrigger>
export type DynamicDialogProps = ComponentProps<typeof DynamicDialog>
export type DynamicDialogContentProps = ComponentProps<typeof DynamicDialogContent>
export type DynamicDialogHeaderProps = ComponentProps<typeof DynamicDialogHeader>
export type DynamicDialogTitleProps = ComponentProps<typeof DynamicDialogTitle>
export type DynamicDialogDescriptionProps = ComponentProps<typeof DynamicDialogDescription>
export type DynamicAccordionProps = ComponentProps<typeof DynamicAccordion>
export type DynamicAccordionItemProps = ComponentProps<typeof DynamicAccordionItem>
export type DynamicAccordionTriggerProps = ComponentProps<typeof DynamicAccordionTrigger>
export type DynamicAccordionContentProps = ComponentProps<typeof DynamicAccordionContent>
export type DynamicSelectProps = ComponentProps<typeof DynamicSelect>
export type DynamicSelectContentProps = ComponentProps<typeof DynamicSelectContent>
export type DynamicSelectItemProps = ComponentProps<typeof DynamicSelectItem>
export type DynamicSelectTriggerProps = ComponentProps<typeof DynamicSelectTrigger>
export type DynamicSelectValueProps = ComponentProps<typeof DynamicSelectValue>
export type DynamicDropdownMenuProps = ComponentProps<typeof DynamicDropdownMenu>
export type DynamicDropdownMenuContentProps = ComponentProps<typeof DynamicDropdownMenuContent>
export type DynamicDropdownMenuItemProps = ComponentProps<typeof DynamicDropdownMenuItem>
export type DynamicDropdownMenuTriggerProps = ComponentProps<typeof DynamicDropdownMenuTrigger>
export type DynamicPopoverProps = ComponentProps<typeof DynamicPopover>
export type DynamicPopoverContentProps = ComponentProps<typeof DynamicPopoverContent>
export type DynamicPopoverTriggerProps = ComponentProps<typeof DynamicPopoverTrigger>
export type DynamicTooltipProps = ComponentProps<typeof DynamicTooltip>
export type DynamicTooltipContentProps = ComponentProps<typeof DynamicTooltipContent>
export type DynamicTooltipProviderProps = ComponentProps<typeof DynamicTooltipProvider>
export type DynamicTooltipTriggerProps = ComponentProps<typeof DynamicTooltipTrigger>
