declare class ComponentBase {
  constructor(componentName: string, html: string, inner?: boolean);
}

declare class ComponentEach {
  public template: string;
  public element: HTMLElement;

  constructor(target: string);

  public each(value: Array<any>): void;
}

declare function Each(target: string, value: any): void;

declare function WhenLoad(callback: () => void): void;

declare function Insert(target: any, value: object): void;

declare function ComponentFetch(target: string, callback: (element: HTMLElement, response: Response) => void): void;

declare global {
  interface Window {
    ComponentBase: typeof ComponentBase;
    ComponentEach: typeof ComponentEach;
    Each: typeof Each;
    WhenLoad: typeof WhenLoad;
    Insert: typeof Insert;
    ComponentFetch: typeof ComponentFetch;
  }
}

export {};
