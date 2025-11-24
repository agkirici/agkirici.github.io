// Utility functions
// This file can be extended with helper functions as needed

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

