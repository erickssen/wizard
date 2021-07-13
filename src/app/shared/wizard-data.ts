
export enum WizardAction {
  Prev = 1,
  Next = 2,
  End = 3 };


export interface WizardData {
  context: object;
  onAction: (action: string) => void; };
