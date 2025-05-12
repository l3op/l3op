"use client";

import React, { forwardRef } from "react";
import { Flex } from "@/components/ui";

interface ColumnProps extends React.ComponentProps<typeof Flex> {
  children?: React.ReactNode;
}

const Column = forwardRef<HTMLDivElement, ColumnProps>(({ children, ...rest }, ref) => {
  return (
    <Flex direction="column" ref={ref} {...rest}>
      {children}
    </Flex>
  );
});

Column.displayName = "Column";
export { Column };