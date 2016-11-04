// Extended type definitions for Sugar v2.0.2
// Project: https://sugarjs.com/
// Definitions by: Andrew Plummer <plummer.andrew@gmail.com>

interface String {
  humanize(): string;
  pluralize(num?: number): string;
  singularize(): string;
}