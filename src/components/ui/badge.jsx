import * as React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const badgeVariants = cva('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold', {
   variants: {
      variant: {
         default: 'border-transparent bg-primary text-primary-foreground hover:bg-red2 ',
         secondary: 'border-transparent bg-secondary text-secondary-foreground ',
         destructive: 'border-transparent bg-destructive text-destructive-foreground ',
      },
   },
   defaultVariants: {
      variant: 'default',
   },
});

function Badge({ className, variant, ...props }) {
   return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
